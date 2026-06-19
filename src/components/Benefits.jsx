const items = [
  {
    icon: '24/7',
    title: '24/7 na stronie',
    detail:
      'Pacjent pyta wieczorem — dostaje odpowiedź z Waszej oferty, nie czeka do rana. Treści z indeksu strony gabinetu, bez wymyślania.',
  },
  {
    icon: '✓',
    title: 'Gotowe zgłoszenia',
    detail:
      'Imię, telefon, usługa i preferowany termin — trafiają do panelu recepcji. W pełnej wersji: automatycznie do arkusza Google.',
  },
  {
    icon: '↓',
    title: 'Mniej powtarzalnych telefonów',
    detail:
      'Godziny, dojazd, orientacyjne ceny — Ala przejmuje, recepcja skupia się na wizytach i pacjentach w gabinecie.',
  },
];

export default function Benefits() {
  return (
    <section className="section section--alt" id="korzysci">
      <div className="wrap">
        <div className="section-head">
          <h2>Co to daje gabinetowi na co dzień</h2>
          <p>Trzy rzeczy, które właściciel zauważa jako pierwsze</p>
        </div>
        <div className="benefits-grid">
          {items.map((item) => (
            <article key={item.title} className="benefit-card">
              <span className="benefit-card__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
