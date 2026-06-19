import { clinic } from '../config/clinic';

const teasers = [
  'W pełnej wersji: zgłoszenia mogą trafiać automatycznie do arkusza Google recepcji',
  'Możliwa integracja z kalendarzem Google',
  'W dalszej perspektywie: umawianie wizyt z poziomu rozmowy',
  'WhatsApp / SMS',
];

export default function ForClinic() {
  return (
    <section className="section section--alt">
      <div className="wrap for-clinic">
        <div className="for-clinic__grid">
          <div className="for-clinic__main">
            <p className="eyebrow">Dla zarządu gabinetu</p>
            <h2>To demo — ale produkt jest gotowy do wdrożenia</h2>
            <p className="for-clinic__lead">
              Pacjenci i tak trafiają na {clinic.websiteDisplay} — asystent jest tam, gdzie już
              szukają informacji. Bez instalowania aplikacji, bez czekania na odpowiedź recepcji.
            </p>
            <p className="for-clinic__body">
              Asystent korzysta z treści z {clinic.websiteDisplay} — w rozmowie widać, jak
              będzie odpowiadał pacjentom po wdrożeniu.
            </p>
          </div>

          <div className="for-clinic__expansion">
            <p className="for-clinic__expansion-title">Możliwości rozbudowy</p>
            <ul className="for-clinic__teasers">
              {teasers.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="for-clinic__notice" role="note">
          <span className="for-clinic__notice-label">Informacja medyczna</span>
          <p>
            Asystent nie diagnozuje ani nie udziela porad lekarskich. Przy bólu, obrzęku lub
            urazie — kontakt z recepcją; w nagłych przypadkach 112 lub SOR.
          </p>
        </div>
      </div>
    </section>
  );
}
