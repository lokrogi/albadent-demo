import { useEffect } from 'react';
import { flowiseConfig, isFlowiseConfigured } from '../config';

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

const chatTheme = {
  button: {
    backgroundColor: '#0c2d48',
    right: 24,
    bottom: 24,
    size: 58,
    dragAndDrop: true,
    iconColor: 'white',
  },
  chatWindow: {
    showTitle: true,
    title: 'Ala · Albadent',
    titleBackgroundColor: '#0c2d48',
    titleTextColor: '#ffffff',
    welcomeMessage:
      'Dzień dobry! Jestem Ala — asystentka przygotowana dla gabinetu Albadent. Chętnie pokażę, jak mogę odpowiadać pacjentom na pytania o cennik, godziny i umawiać wizyty. W czym mogę pomóc?',
    backgroundColor: '#ffffff',
    height: 580,
    width: 420,
    fontSize: 15,
    botMessage: { backgroundColor: '#f4f7f9', textColor: '#1a2332' },
    userMessage: { backgroundColor: '#0c2d48', textColor: '#ffffff' },
    textInput: {
      placeholder: 'Napisz jak pacjent…',
      backgroundColor: '#ffffff',
      textColor: '#1a2332',
      sendButtonColor: '#0c2d48',
    },
    footer: {
      text: 'Demo · Odpowiedzi ze strony albadent.pl',
      textColor: '#94a3b8',
      company: 'Albadent',
      companyLink: 'https://albadentrzeszow.pl',
    },
  },
};

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
          theme: chatTheme,
        });
        if (cancelled) return;

        document.addEventListener('pointerdown', onPointerDown, true);

        if (pendingOpen) {
          pendingOpen = false;
          openChatPanel();
        }
      } catch (err) {
        console.error('Nie udało się załadować czatu Flowise:', err);
      }
    })();

    return () => {
      cancelled = true;
      document.removeEventListener('pointerdown', onPointerDown, true);
    };
  }, []);
}
