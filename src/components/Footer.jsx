import { clinic } from '../config/clinic';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          Demo asystenta recepcji · Przygotowane dla <strong>{clinic.name}</strong> · Nie zastępuje
          porady lekarskiej
        </p>
      </div>
    </footer>
  );
}
