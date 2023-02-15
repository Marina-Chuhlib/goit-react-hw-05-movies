import { NavLink } from 'react-router-dom';
import items from './items';

import css from './Navbar.module.css';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id} className={css.item}>
      <NavLink to={link} className={css.link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.wrapper}>
      <nav>
        <ul className={css.list}>{elements}</ul>
      </nav>
    </div>
  );
};

export default Navbar;
