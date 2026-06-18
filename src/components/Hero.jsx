export default function Hero({ onOpenChat }) {
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">Przygotowane wyłącznie dla Albadent · Rzeszów</p>
          <h1>
            Recepcja, która <em>nie gubi</em> pacjenta po godzinach
          </h1>
          <p className="lead">
            To nie gotowy widget z internetu — zbudowaliśmy asystentkę <strong>Alę</strong>,
            która zna Państwa cennik, godziny i ofertę ze strony{' '}
            <strong>albadentrzeszow.pl</strong>. Odpowiada jak dobra recepcjonistka i zbiera
            dane do wizyty, gdy ktoś jest gotowy umówić termin.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary btn--lg" data-chat-trigger onClick={onOpenChat}>
              Zobacz, jak odpowiada Ala
            </button>
            <a
              className="btn btn--ghost btn--lg"
              href="https://albadentrzeszow.pl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Porównaj ze stroną
            </a>
          </div>
          <p className="hero__note">
            ↘ Kliknij przycisk lub ikonę czatu w rogu — rozmawiaj jak pacjent
          </p>
        </div>

        <div className="hero__visual">
          <div className="phone-mock">
            <div className="phone-mock__bar">
              <span>Ala · Albadent</span>
              <span className="live-dot">online</span>
            </div>
            <div className="phone-mock__body">
              <div className="bubble bubble--bot">
                Dzień dobry! Chętnie odpowiem na pytania o cennik i umówię wizytę.
              </div>
              <div className="bubble bubble--user">Ile kosztuje higienizacja?</div>
              <div className="bubble bubble--bot">
                Sprawdzam cennik… Mogę też od razu zapisać Pana/Panią — wystarczy imię i telefon.
              </div>
            </div>
            <button type="button" className="phone-mock__cta" data-chat-trigger onClick={onOpenChat}>
              Otwórz prawdziwy czat →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
