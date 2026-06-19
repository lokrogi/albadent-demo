export default function FinalCTA({ onOpenChat }) {  return (
    <section className="section section--cta" id="zamknij">
      <div className="wrap cta-box">
        <h2>5 minut — i wiedzą Państwo, czy to ma sens</h2>
        <p>
          Otwórz rozmowę, zadaj trzy pytania z cennika, poproś o umówienie wizyty. Jeśli brzmi
          jak recepcja, której chcielibyście — porozmawiajmy o wdrożeniu na Państwa stronie.
        </p>
        <button
          type="button"
          className="btn btn--light btn--lg"
          data-chat-trigger
          onClick={onOpenChat}
        >
          Przetestuj asystenta
        </button>
      </div>
    </section>
  );
}
