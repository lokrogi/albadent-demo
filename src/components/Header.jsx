export default function Header({ onOpenChat }) {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <div className="header__brand">
          <span className="header__logo">Albadent</span>
          <span className="header__pill">Demo dla Państwa gabinetu</span>
        </div>
        <nav className="header__nav">
          <a href="https://albadentrzeszow.pl" target="_blank" rel="noopener noreferrer">
            Wasza strona
          </a>
          <button type="button" className="btn btn--primary btn--sm" data-chat-trigger onClick={onOpenChat}>
            Uruchom demo czatu
          </button>
        </nav>
      </div>
    </header>
  );
}
