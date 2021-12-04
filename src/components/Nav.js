import logo from './images/ezlogo.png';
import {useNavigate} from 'react-router-dom';

function Nav() {
  let navigate = useNavigate();

  return (
    <nav className="Nav">
      <ul class="ul1">
        <li>
          <img src={logo} alt="logo" width="200px" />
        </li>
      </ul>

      <ul class="ul-2">
        <li
          onClick={() => {
            navigate(`/`);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate(`/appointments`);
          }}
        >
          Appointments
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
