# Albadent — demo asystenta AI

Landing React (Vite) + embed Flowise. Dla właściciela / decydenta gabinetu.

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
