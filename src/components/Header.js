function Header() {
  return (
    <div className="Header">
      <nav>
        <ul class="main-ul">
          <ul class="ul1">
            <li>
              <img src="Images/ezlogo.png" alt="Company-logo" width="200px" />
            </li>
          </ul>
          <ul class="ul-2">
            <li>
              <a href="index.html" style={{color: 'white'}}>
                Home
              </a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li>
              <a href="appointments.html">Appointments</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html" style={{borderRight: 'none'}}>
                Contact Us
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
