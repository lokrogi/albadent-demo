const prompts = [
  {
    tag: 'Cennik',
    quote: 'Ile kosztuje higienizacja?',
    hint: 'Sprawdź, czy podaje kwotę ze strony',
  },
  {
    tag: 'Godziny',
    quote: 'Czy w piątek jesteście otwarci do 20?',
    hint: 'Powinna znać grafik z kontaktu',
  },
  {
    tag: 'Zgłoszenie',
    quote: 'Anna, 501 234 567, higienizacja, przyszły tydzień',
    hint: 'Zobacz, jak zbiera dane do wizyty',
  },
];

export default function TryDemo() {
  return (
    <section className="section" id="demo">
      <div className="wrap">
        <div className="section-head">
          <h2>Przetestuj jak pacjent — 2 minuty wystarczą</h2>
          <p>
            Otwórz rozmowę z Alą i wypróbuj te scenariusze. To dokładnie ten asystent recepcji,
            który może pracować na Waszej stronie.
          </p>
        </div>
        <div className="prompt-grid">
          {prompts.map((p) => (
            <article key={p.tag} className="prompt-card">
              <span className="prompt-card__tag">{p.tag}</span>
              <blockquote>„{p.quote}”</blockquote>
              <span className="prompt-card__hint">{p.hint}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
