# Albadent — demo asystenta recepcji

Landing React (Vite) + embed Flowise. Demo dla właściciela / decydenta gabinetu stomatologicznego.

## Lokalnie

```bash
cp .env.example .env
# uzupełnij VITE_FLOWISE_CHATFLOW_ID i VITE_FLOWISE_API_HOST
npm install
npm run dev
```

## Vercel (GitHub)

1. Push repo na GitHub
2. [vercel.com/new](https://vercel.com/new) → Import repo
3. Framework: **Vite** (auto-detect)
4. Environment Variables:

| Variable | Value |
|----------|--------|
| `VITE_FLOWISE_CHATFLOW_ID` | UUID z Flowise Agentflow |
| `VITE_FLOWISE_API_HOST` | `https://xxx.up.railway.app` |

5. Deploy

## CORS (Railway)

```env
CORS_ORIGINS=https://twoj-projekt.vercel.app,https://xxx.up.railway.app
```

## White-label — inny gabinet

1. Edytuj [`src/config/clinic.js`](src/config/clinic.js) — nazwa, kontakt, kolory, strona www
2. Zaktualizuj polskie copy w komponentach (`Hero`, `ForClinic`, itd.)
3. Ustaw nowe `VITE_FLOWISE_*` w `.env` / Vercel
4. W Flowise: nowy agentflow z bazą wiedzy nowej kliniki + CORS dla nowej domeny

## Flowise — baza wiedzy (Albadent)

Trzy loadery Cheerio Web Scraper:

| Loader | URL-e | Zawartość |
|--------|-------|-----------|
| services | ~20 stron usług | Oferta gabinetu |
| prices | 1 URL (cennik) | Ceny orientacyjne |
| contact | 1 URL (kontakt) | Godziny, adres, telefony |

Asystent **Ala** przed odpowiedzią o ceny, usługi, godziny lub kontakt **musi** wywołać narzędzie wyszukiwania (RAG). Nie wymyśla danych spoza strony.

## Flowise — narzędzie save_lead

Gdy pacjent poda komplet: **imię + telefon + usługa + termin** → wywołaj `save_lead`. To kluczowy moment demo — landing kieruje właściciela do scenariusza „Zgłoszenie” w sekcji demo.

W pełnej wersji: zgłoszenia trafiają do arkusza Google recepcji (wspomniane w potwierdzeniu Alą).

## Zalecany prompt systemowy

Pełny, zaktualizowany prompt do skopiowania w Flowise: [`FLOWISE_PROMPT.md`](FLOWISE_PROMPT.md)

Skrót najważniejszych zasad:

1. **Strona, nie WhatsApp:** Ala pracuje na stronie gabinetu — tam pacjent szuka cennika i oferty.
2. **Terminologia:** Nigdy „chatbot”, „AI”, „Flowise”, „RAG” — *system recepcji*, *panel obsługi pacjentów*.
3. **KB przed odpowiedzią:** Ceny, godziny, usługi — zawsze najpierw narzędzie wyszukiwania; bez pustego „sprawdzam cennik”.
4. **Zgłoszenia:** Komplet danych → `save_lead` → potwierdzenie z podsumowaniem (+ arkusz Google w pełnej wersji).
5. **Ton:** Proponuj wizytę, gdy naturalnie pasuje — nie po każdym zdaniu.
6. **Bezpieczeństwo:** Brak diagnozy; ból/uraz → recepcja / 112 / SOR.
7. **CORS:** Domena demo (Vercel) na liście `CORS_ORIGINS` w Railway.

## Struktura strony demo

| Sekcja | Cel |
|--------|-----|
| Hero | Wartość + otwarcie rozmowy z Alą |
| Try Demo | 3 scenariusze testowe (cennik, godziny, zgłoszenie) |
| Benefits | 3 korzyści dla gabinetu |
| For Clinic | Wdrożenie, teasery (Sheets, Calendar, WhatsApp) |
| Final CTA | Zamknięcie + kontakt |
