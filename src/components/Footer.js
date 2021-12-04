import {useNavigate} from 'react-router-dom';
import google from './images/google.png';
import yelp from './images/yelp.png';

function Footer() {
  let navigate = useNavigate();

  return (
    <div className="Footer">
      <div>
        <span
          onClick={() => {
            navigate(`/`);
          }}
        >
          Home
        </span>
        <span
          onClick={() => {
            navigate(`/appointments`);
          }}
        >
          Appointments
        </span>
      </div>
      <div>
        <img src={google} alt="google" width="40px" />
        <img src={yelp} alt="yelp" width="50px" />
      </div>
    </div>
  );
}

export default Footer;
