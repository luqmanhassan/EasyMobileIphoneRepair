import {useNavigate} from 'react-router-dom';
import google from './images/google.png';
import yelp from './images/yelp.png';

function Footer() {
  let navigate = useNavigate();

  return (
    <div className="container mx-auto bg-yellow-300 p-10">
      <div className="flex justify-center">
        <a href="https://g.page/r/CQNIox3az0mJEBA" className="w-10 mr-5">
          <img src={google} alt="google" />
        </a>
        <a
          href="https://www.yelp.com/biz/easy-mobile-iphone-screen-repair-renton?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
          className="w-10 "
        >
          <img src={yelp} alt="yelp" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
