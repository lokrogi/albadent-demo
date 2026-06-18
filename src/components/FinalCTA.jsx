export default function FinalCTA({ onOpenChat }) {
  return (
    <section className="section section--cta">
      <div className="wrap cta-box">
        <h2>5 minut — i wiedzą Państwo, czy to ma sens</h2>
        <p>
          Otwórz czat, zadaj trzy pytania z cennika, poproś o umówienie wizyty. Jeśli brzmi
          jak recepcja, której chcielibyście — porozmawiajmy o wdrożeniu na albadent.pl.
        </p>
        <button type="button" className="btn btn--light btn--lg" data-chat-trigger onClick={onOpenChat}>
          Uruchom demo czatu
        </button>
        <p className="cta-box__contact">
          Albadent · ul. Dąbrowskiego 20B ·{' '}
          <a href="tel:178505050">17 850 50 50</a>
        </p>
      </div>
    </section>
  );
}
