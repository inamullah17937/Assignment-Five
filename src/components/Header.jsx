import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">◆</span>
          <span>ProfileHub</span>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#employees">Employees</a>
          <a href="#about">About</a>
        </nav>

        <button className="header-btn">
          Add Profile
          <span>+</span>
        </button>
      </div>
    </header>
  );
}

export default Header;