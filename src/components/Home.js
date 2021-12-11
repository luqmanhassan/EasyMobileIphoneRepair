import Footer from './Footer.js';
import Nav from './Nav.js';
import phone from './images/phoneicon.png';
import {useNavigate} from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <Nav />
      <div className="bg-yellow-300 flex flex-row flex-wrap justify-around items-center p-10">
        <div className="div1">
          <img src={phone} alt="IPhone" className="w-80" />
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-bold">Easy Mobile Iphone Repair</h1>
          <p className="text-3xl my-10">
            Providing The Best IPhone Repair <br />
            Service In The Greater Seattle Area.
          </p>
          <button
            className="text-3xl bg-black p-4 text-white"
            onClick={() => {
              navigate(`/appointments`);
            }}
          >
            Book Repair
          </button>
        </div>
      </div>
      <div className="text-center p-10 bg-white">
        <h1 className="text-2xl font-bold my-5">
          Experience An Easy Repair Today
        </h1>
        <p className="text-lg">
          Enter our office today, and you can expect premier customer service,
          starting with a free diagnostic test and a free quote for repairs with
          no obligation to purchase. With waiting times as short as 30 minutes
          and a large stock of high quality parts, and reasonable prices we are
          ready to help you should you decide to go ahead with the fix. Combine
          this 5-star service with a free 30 day warranty on all repairs, and
          it’s no wonder that Easy Mobile Repair is Seattle’s first choice for
          iphone repairs.
        </p>

        <h1 className="text-2xl font-bold my-5">
          Schedule your repair online!
        </h1>
        <p className="text-lg">
          At Easy Mobile IPhone Repair, all repairs come with free diagnostics
          and a 30 day warranty – use our fast device repair services with
          confidence and leave with peace of mind that we’ve got your back, no
          matter what happens.
        </p>
      </div>
      <div className="bg-yellow-300 text-center p-10">
        <h1 className="text-2xl font-bold">HIGH-QUALITY PARTS</h1>
        <p className="text-lg my-5">
          Easy Mobile Iphone Repair only uses high-quality OEM and aftermarket
          parts for repairs
        </p>

        <h1 className="text-2xl font-bold">FREE ISSUE DIAGNOSIS</h1>
        <p className="text-lg my-5">
          Not sure what’s wrong? We’ll diagnose your issue free. No fix, no
          payment
        </p>
        <h1 className="text-2xl font-bold">
          CERTIFIED TECHNICIAN SAME-DAY REPAIR
        </h1>
        <p className="text-lg my-5">
          Knowledgeable, passionate service from qualified and trained expert
          97% of Easy Mobile repairs are completed within 30 minutes
        </p>
        <h1 className="text-2xl font-bold">30 DAY WARRANTY</h1>
        <p className="text-lg my-5">
          All repairs come with a 30 day Warranty for your peace of mind
        </p>
        <h1 className="text-2xl font-bold">BEST REPAIR SERVICE IN SEATTLE</h1>
        <p className="text-lg my-5">
          Easy Mobile’s expert, friendly service has earned us some 5-star
          reviews <br /> Easy Mobile iPhone Repair offers Seattle’s friendliest,
          fastest repair service with expert repairs for a variety of iPhone
          devices. <br />
          And, with a 30 day warranty on all repairs, we’ve got your back when
          things go wrong in future
        </p>
      </div>

      <div className="text-center p-10 flex flex-row flex-wrap justify-around  items-center bg-white">
        <div>
          <h1 className="text-2xl font-bold">Where You Can Find Us </h1>
          <p className="text-lg my-5">
            Easy Mobile Iphone Repair
            <br />
            401 Olympia Ave NE Unit 351, Renton, WA 98056 <br />
          </p>
          <p className="text-lg my-5">
            Hours of Operation <br />
            Monday-Friday: 8:00am through 8:00pm <br />
            Saturday-Sunday: 10:00am through 4:00pm
          </p>

          <p className="text-lg my-5">Tel: (425) 298-5170 </p>
        </div>
        <div>
          <iframe
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43125.25857266455!2d-122.19073828661517!3d47.50299028009258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sEasy%20Mobile%20Iphone%20Repair!5e0!3m2!1sen!2sus!4v1613693916444!5m2!1sen!2sus "
            width="600 "
            height="450 "
            frameborder="0 "
            style={{border: '0px'}}
            allowfullscreen=" "
            aria-hidden="false"
            tabindex="0 "
            title="Shop Location"
            className="p-20"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
