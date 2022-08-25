import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer">
        <nav>
          <ul>
            <li className="footer__menu-item">
              {/* <a className="footer__menu-link" href="#/">A jugar</a> */}
              <NavLink to="/">A jugar</NavLink>
            </li>
            <li className="footer__menu-item">
              {/* <a className="footer__menu-link active" href="#/instructions"
                  >¿Cómo se juega?</a
                > */}
              <NavLink to="/instructions">¿Cómo se juega?</NavLink>
            </li>
            <li className="footer__menu-item">
              {/* <a className="footer__menu-link" href="#/options">Más opciones</a> */}
              <NavLink to="/options">Más opciones</NavLink>
            </li>
          </ul>
        </nav>
        <small className="footer__copy">© Adalab</small>
      </footer>
    </>
  )
};

export default Footer;