import Footer from './Footer.js';
import Nav from './Nav.js';
function Appointments() {
  return (
    <div className="Appointments">
      <Nav />
      <div className="main">
        <h1>Appointments</h1>
        <iframe
          src="https://squareup.com/appointments/book/i46uvh6xxls625/L1Y72J1RG9D43/start"
          width="500 "
          height="450 "
          frameborder="0 "
          style={{border: '0px'}}
          allowfullscreen=" "
          aria-hidden="false"
          tabindex="0 "
          title="Appointments"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Appointments;
