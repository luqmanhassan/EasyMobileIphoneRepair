import Footer from './Footer.js';
import Nav from './Nav.js';
function Appointments() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="flex flex-col justify-center items-center p-10 bg-white">
        <h1 className="text-5xl font-bold mb-5">Appointments</h1>
        <iframe
          src="https://squareup.com/appointments/book/i46uvh6xxls625/L1Y72J1RG9D43/start"
          frameborder="0 "
          style={{border: '0px'}}
          allowfullscreen=" "
          aria-hidden="false"
          tabindex="0 "
          title="Appointments"
          height="1500px"
          className="w-full mt-5"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Appointments;
