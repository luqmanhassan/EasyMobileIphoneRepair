import {useNavigate} from 'react-router-dom';
import google from './images/google.png';
import yelp from './images/yelp.png';

function Footer() {
  let navigate = useNavigate();

  return (
    <div className="container mx-auto flex flex-row flex-wrap justify-between content-center items-center bg-yellow-300 p-10">
      <div className="flex">
        <span
          className="text-xl font-bold underline mx-5"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Home
        </span>
        <span
          className="text-xl font-bold underline mx-5"
          onClick={() => {
            navigate(`/appointments`);
          }}
        >
          Appointments
        </span>
      </div>
      <div className="flex">
        <a href="https://g.page/r/CQNIox3az0mJEBA">
          <img src={google} alt="google" className="w-10 mx-2" />
        </a>
        <a href="https://www.yelp.com/biz/easy-mobile-iphone-screen-repair-renton?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)">
          <img src={yelp} alt="yelp" className="w-10 mx-2" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
