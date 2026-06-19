import { clinic } from '../config/clinic';

const points = [
  'Wasza marka, Wasze kolory — nie generyczny „asystent AI”',
  'Bezpieczeństwo: nie diagnozuje, kieruje do recepcji / SOR',
  'Wsparcie po wdrożeniu — aktualizacja bazy wiedzy przy zmianie cennika',
];

const teasers = [
  'W pełnej wersji: zgłoszenia mogą trafiać automatycznie do arkusza Google recepcji',
  'Możliwa integracja z kalendarzem Google',
  'Rezerwacja terminów online — naturalny kolejny krok',
  'Opcjonalnie: WhatsApp / SMS',
];

export default function ForClinic() {
  return (
    <section className="section section--alt">
      <div className="wrap for-clinic">
        <div>
          <p className="eyebrow">Dla zarządu gabinetu</p>
          <h2>To demo — ale produkt jest gotowy do wdrożenia</h2>
          <p className="for-clinic__lead">
            Pacjenci i tak trafiają na {clinic.websiteDisplay} — asystent jest tam, gdzie już
            szukają informacji. Bez instalowania aplikacji, bez czekania na odpowiedź recepcji.
          </p>
          <p className="lead lead--narrow">
            Przygotowaliśmy je na podstawie publicznej strony {clinic.name}, żebyście mogli ocenić
            jakość rozmowy <em>zanim</em> cokolwiek podpiszecie. Widzicie realny produkt, nie
            slajdy z prezentacji.
          </p>
          <ul className="for-clinic__teasers">
            {teasers.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
          <p className="for-clinic__safety">
            Asystent nie diagnozuje ani nie udziela porad lekarskich. Przy bólu, obrzęku lub
            urazie — kontakt z recepcją; w nagłych przypadkach 112 lub SOR.
          </p>
        </div>
        <ul className="for-clinic__points">
          {points.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
