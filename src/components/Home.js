import Footer from './Footer.js';
import Header from './Header.js';
function Home() {
  return (
    <div className="Home">
      <Header />
      <div class="main1">
        <div class="div1">
          <h1>Easy Mobile Iphone Repair</h1>
          <p>
            Providing The Best Electronic Phone Repair <br />
            Service In The Greater Seattle, WA Area.
          </p>
          <button>Schedule Appointment</button>
        </div>
        <div class="div2">
          <img src="./images/phoneicon.png " alt="IPhone Pic" width="100px " />
        </div>
      </div>
      <div class="main2">
        <div>
          <h1>Experience An Easy Repair Today</h1>
          <p>
            Enter our office today, and you can expect premier customer service,
            starting with a free diagnostic test and a free quote for repairs
            with no obligation to purchase. With waiting times as short as 30
            minutes and a large stock of high quality parts, and reasonable
            prices we are ready to help you should you decide to go ahead with
            the fix. Combine this 5-star service with a free 30 day warranty on
            all repairs, and it’s no wonder that Easy Mobile Repair is Seattle’s
            first choice for smartphone repair.
          </p>
        </div>
        <div>
          <h2>Schedule your repair online!</h2>
          <br />
          <p>
            At Easy Mobile IPhone Repair, all repairs come with free diagnostics
            and a lifetime warranty – use our fast device repair services with
            confidence and leave with peace of mind that we’ve got your back, no
            matter what happens.
          </p>
        </div>
      </div>
      <div>
        <h3>HIGH-QUALITY PARTS</h3>
        <p>
          Easy Mobile Iphone Repair only uses high-quality OEM and aftermarket
          parts for repairs
        </p>

        <h3>FREE ISSUE DIAGNOSIS</h3>
        <p>
          Not sure what’s wrong? We’ll diagnose your issue free. No fix, no
          payment
        </p>
        <h3>CERTIFIED TECHNICIAN SAME-DAY REPAIR</h3>
        <p>
          Knowledgeable, passionate service from qualified and trained expert
          97% of Easy Mobile repairs are completed within 30 minutes
        </p>
        <h3>LIFETIME WARRANTIES</h3>
        <p>All repairs come with a Lifetime Warranty for your peace of mind</p>
        <h3>BEST REPAIR SERVICE IN SEATTLE</h3>
        <p>
          Easy Mobile’s expert, friendly service has earned us some 5-star
          reviews
        </p>

        <p>
          Easy Mobile iPhone Repair offers Seattle’s friendliest, fastest repair
          service with expert repairs for a variety of iPhone devices.
        </p>

        <p>
          And, with a lifetime warranty on all repairs, we’ve got your back when
          things go wrong in future
        </p>
      </div>
      ---------
      <div class="main1">
        <div>
          <p>Tel: (425) 298-5170 </p>
          <p> Email: HAKEEM@EasyMobileIphoneRepair.com</p>
          <p>Where You Can Find Us </p>
          <p>
            Easy Mobile Iphone Repair. 401 Olympia Ave NE Unit 351, Renton, WA
            98056
          </p>
          <p>Hours of Operation </p>
          <p>Monday—Friday: 8:00am through 8:00pm </p>
          <p>Saturday-Sunday: 10:00am through 4:00pm</p>
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
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
