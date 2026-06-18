const points = [
  'Wasza marka, Wasze kolory — nie generyczny „chatbot AI”',
  'Bezpieczeństwo: bot nie diagnozuje, kieruje do recepcji / SOR',
  'Możliwość rozbudowy: WhatsApp, SMS, integracja z kalendarzem',
  'Wsparcie po wdrożeniu — aktualizacja bazy wiedzy przy zmianie cennika',
];

export default function ForClinic() {
  return (
    <section className="section">
      <div className="wrap for-clinic">
        <div>
          <p className="eyebrow">Dla zarządu gabinetu</p>
          <h2>To demo — ale produkt jest gotowy do wdrożenia</h2>
          <p className="lead lead--narrow">
            Przygotowaliśmy je na podstawie publicznej strony Albadent, żebyście mogli
            ocenić jakość rozmowy <em>zanim</em> cokolwiek podpiszecie. Widzicie realny
            produkt, nie slajdy z prezentacji.
          </p>
        </div>
        <ul className="for-clinic__list">
          {points.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
