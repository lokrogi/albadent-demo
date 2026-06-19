import { useEffect } from 'react';
import { flowiseConfig, isFlowiseConfigured } from '../config';
import { clinic } from '../config/clinic';

let pendingOpen = false;

function getChatbotHost() {
  return document.querySelector('flowise-chatbot');
}

function getChatbotRoot() {
  const host = getChatbotHost();
  if (!host) return null;
  return host.shadowRoot ?? host;
}

function getBubbleButton() {
  return getChatbotRoot()?.querySelector('button[part="button"]');
}

function isChatOpen() {
  const panel = getChatbotRoot()?.querySelector('[part="bot"]');
  if (!panel) return false;
  const style = getComputedStyle(panel);
  return style.pointerEvents !== 'none' && Number.parseFloat(style.opacity) > 0;
}

function openChatPanel() {
  if (!getChatbotHost()) return false;
  if (!isChatOpen()) getBubbleButton()?.click();
  return true;
}

function closeChatPanel() {
  if (!isChatOpen()) return;
  const root = getChatbotRoot();
  const closeBtn = root?.querySelector('button[title="Close Chat"]');
  if (closeBtn) {
    closeBtn.click();
    return;
  }
  getBubbleButton()?.click();
}

export function openChat() {
  if (openChatPanel()) return;
  pendingOpen = true;
}

function isInsideChatbot(event) {
  const host = getChatbotHost();
  if (!host) return false;
  const path = typeof event.composedPath === 'function' ? event.composedPath() : [event.target];
  return path.includes(host);
}

function isChatTrigger(event) {
  const target = event.target;
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('[data-chat-trigger]'));
}

function buildChatTheme() {
  const { primaryDark, heading } = clinic.theme;
  const { name, website, websiteDisplay } = clinic;
  const assistantName = clinic.assistant.name;

  return {
    button: {
      backgroundColor: primaryDark,
      right: 24,
      bottom: 24,
      size: 58,
      dragAndDrop: true,
      iconColor: 'white',
    },
    chatWindow: {
      showTitle: true,
      title: `${assistantName} · ${name}`,
      titleBackgroundColor: primaryDark,
      titleTextColor: '#ffffff',
      welcomeMessage: `Dzień dobry! Jestem ${assistantName} — asystentka recepcji gabinetu ${name}. Chętnie odpowiem na pytania o cennik, godziny i usługi. W czym mogę pomóc?`,
      backgroundColor: '#ffffff',
      height: 580,
      width: 420,
      fontSize: 15,
      botMessage: { backgroundColor: '#f0fafa', textColor: heading },
      userMessage: { backgroundColor: primaryDark, textColor: '#ffffff' },
      textInput: {
        placeholder: 'Napisz jak pacjent…',
        backgroundColor: '#ffffff',
        textColor: heading,
        sendButtonColor: primaryDark,
      },
      footer: {
        text: `Odpowiedzi na podstawie ${websiteDisplay}`,
        textColor: '#94a3b8',
        company: name,
        companyLink: website,
      },
    },
  };
}

export function useFlowiseChat() {
  useEffect(() => {
    if (!isFlowiseConfigured()) {
      console.warn('Ustaw VITE_FLOWISE_CHATFLOW_ID i VITE_FLOWISE_API_HOST (.env lub Vercel)');
      return;
    }

    let cancelled = false;

    const onPointerDown = (event) => {
      if (!isChatOpen()) return;
      if (isInsideChatbot(event) || isChatTrigger(event)) return;
      closeChatPanel();
    };

    (async () => {
      try {
        const { default: Chatbot } = await import(
          /* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js'
        );
        if (cancelled) return;

        Chatbot.init({
          chatflowid: flowiseConfig.chatflowId,
          apiHost: flowiseConfig.apiHost,
          chatflowConfig: { returnSourceDocuments: false },
          theme: buildChatTheme(),
        });
        if (cancelled) return;

        document.addEventListener('pointerdown', onPointerDown, true);

        if (pendingOpen) {
          pendingOpen = false;
          openChatPanel();
        }
      } catch (err) {
        console.error('Nie udało się załadować asystenta Flowise:', err);
      }
    })();

    return () => {
      cancelled = true;
      document.removeEventListener('pointerdown', onPointerDown, true);
    };
  }, []);
}
