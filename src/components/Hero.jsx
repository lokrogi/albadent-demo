import { clinic } from '../config/clinic';

export default function Hero({ onOpenChat }) {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__intro">
          <p className="eyebrow">
            Przygotowane dla {clinic.name} · {clinic.city}
          </p>
          <h1>
            Pacjenci pytają wieczorem. <em>Ala odpowiada od razu</em> — na Waszej stronie.
          </h1>
        </div>

        <div className="hero__visual">
          <div className="phone-mock">
            <div className="phone-mock__bar">
              <span>
                {clinic.assistant.name} · {clinic.name}
              </span>
              <span className="live-dot">online</span>
            </div>
            <div className="phone-mock__body">
              <div className="bubble bubble--user">Ile kosztuje higienizacja?</div>
              <div className="bubble bubble--bot">
                Kompleksowa higienizacja — według cennika od 380 zł. Ceny są orientacyjne;
                dokładną wycenę ustala lekarz przy wizycie.
              </div>
              <div className="bubble bubble--user">
                Anna, 501 234 567 — chciałabym w przyszłym tygodniu.
              </div>
              <div className="bubble bubble--bot">
                Dziękuję, Pani Anno. Zapisuję zgłoszenie — recepcja oddzwoni w godzinach pracy
                gabinetu.
              </div>
            </div>
            <button
              type="button"
              className="phone-mock__cta"
              data-chat-trigger
              onClick={onOpenChat}
            >
              Otwórz prawdziwą rozmowę →
            </button>
          </div>
        </div>

        <div className="hero__rest">
          <div className="hero__rest-inner">
            <p className="lead lead--desktop">
              Wiele pytań pada poza godzinami recepcji — o cennik, terminy i dostępność.{' '}
              <strong>{clinic.assistant.name}</strong> to asystentka recepcji, która zna Państwa
              ofertę ze strony <strong>{clinic.websiteDisplay}</strong>. Odpowiada od razu, w
              profesjonalnym tonie, i zbiera dane do wizyty, gdy pacjent chce umówić termin.
            </p>
            <p className="lead lead--mobile">
              <strong>{clinic.assistant.name}</strong> zna ofertę z{' '}
              <strong>{clinic.websiteDisplay}</strong> — odpowiada po godzinach recepcji i zbiera
              zgłoszenia do wizyty.
            </p>
            <div className="hero__actions">
              <button
                type="button"
                className="btn btn--primary btn--lg"
                data-chat-trigger
                onClick={onOpenChat}
              >
                Zobacz, jak odpowiada {clinic.assistant.name}
              </button>
            </div>
            <p className="hero__note">
              ↘ Kliknij przycisk lub ikonę w rogu — rozmawiaj jak pacjent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
