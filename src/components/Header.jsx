import { clinic } from '../config/clinic';

export default function Header({ onOpenChat }) {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <div className="header__brand">
          <span className="header__logo">{clinic.name}</span>
          <span className="header__pill">Demo · przygotowane dla {clinic.name}</span>
        </div>
        <nav className="header__nav">
          <a href="#demo">Demo</a>
          <a href="#korzysci">Korzyści</a>
          <a href="#zamknij">Podsumowanie</a>
          <button
            type="button"
            className="btn btn--primary btn--sm header__nav-cta"
            data-chat-trigger
            onClick={onOpenChat}
          >
            Przetestuj asystenta
          </button>
        </nav>
      </div>
    </header>
  );
}
