import logo from './images/ezlogo.png';
import {useNavigate} from 'react-router-dom';

function Nav() {
  let navigate = useNavigate();

  return (
    <nav className="container mx-auto sticky top-0 flex flex-col flex-wrap justify-between content-center items-center bg-yellow-300 sm:flex-row p-5">
      <ul class=" flex-1">
        <li>
          <img src={logo} alt="logo" className="w-44" />
        </li>
      </ul>

      <ul className="flex flex-row flex-1 justify-center">
        <li
          className="mx-5 text-xl font-bold cursor-pointer hover:underline"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Home
        </li>
        <li
          className="mx-5 text-xl font-bold cursor-pointer hover:underline"
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
