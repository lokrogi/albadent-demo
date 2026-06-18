const prompts = [
  {
    tag: 'Cennik',
    quote: 'Ile kosztuje wypełnienie zęba?',
    hint: 'Sprawdź, czy podaje kwotę ze strony',
  },
  {
    tag: 'Godziny',
    quote: 'Czy w piątek jesteście otwarci do 20?',
    hint: 'Powinna znać grafik z kontaktu',
  },
  {
    tag: 'Lead',
    quote: 'Chcę umówić higienizację — Anna, 501 234 567',
    hint: 'Zobacz, jak zbiera dane do wizyty',
  },
];

export default function TryDemo({ onOpenChat }) {
  return (
    <section className="section section--cream" id="demo">
      <div className="wrap">
        <div className="section-head">
          <h2>Przetestuj jak właściciel — albo jak pacjent</h2>
          <p>Kliknij scenariusz. To dokładnie ten bot, który może pracować na Waszej stronie.</p>
        </div>
        <div className="prompt-grid">
          {prompts.map((p) => (
            <button key={p.tag} type="button" className="prompt-card" data-chat-trigger onClick={onOpenChat}>
              <span className="prompt-card__tag">{p.tag}</span>
              <blockquote>„{p.quote}”</blockquote>
              <span className="prompt-card__hint">{p.hint} →</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
