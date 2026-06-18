const steps = [
  {
    step: '01',
    title: 'Uczymy Alę Waszą stroną',
    text: 'Cennik, kontakt, usługi — z albadentrzeszow.pl. Aktualizacja, gdy zmieniacie ofertę.',
  },
  {
    step: '02',
    title: 'Osadzamy na stronie',
    text: 'Dyskretny przyciem czatu — pacjent rozmawia bez instalowania aplikacji.',
  },
  {
    step: '03',
    title: 'Leady trafiają do recepcji',
    text: 'Imię, telefon, usługa — w pełnej wersji: arkusz, e-mail lub panel (to demo pokazuje rozmowę).',
  },
];

export default function HowItWorks() {
  return (
    <section className="section section--dark">
      <div className="wrap">
        <div className="section-head section-head--light">
          <h2>Jak to wdrażamy u Państwa</h2>
          <p>Prosty proces — bez angażowania lekarzy w „technologię”</p>
        </div>
        <ol className="steps">
          {steps.map((s) => (
            <li key={s.step} className="step-card">
              <span className="step-card__num">{s.step}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
