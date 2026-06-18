const items = [
  {
    value: '24/7',
    label: 'Dostępność na stronie',
    detail: 'Pacjent pyta wieczorem — dostaje odpowiedź z Waszej oferty, nie czeka do rana.',
  },
  {
    value: '100%',
    label: 'Wasze treści',
    detail: 'Cennik, kontakt i usługi — z indeksu strony Albadent, bez wymyślania przez AI.',
  },
  {
    value: '↓',
    label: 'Mniej powtarzalnych telefonów',
    detail: 'Godziny, dojazd, orientacyjne ceny — Ala przejmuje, recepcja skupia się na wizytach.',
  },
];

export default function ValueProps() {
  return (
    <section className="section section--cream">
      <div className="wrap">
        <div className="section-head">
          <h2>Co to daje gabinetowi na co dzień</h2>
          <p>Trzy rzeczy, które właściciel zauważa jako pierwsze</p>
        </div>
        <div className="value-grid">
          {items.map((item) => (
            <article key={item.label} className="value-card">
              <span className="value-card__num">{item.value}</span>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
