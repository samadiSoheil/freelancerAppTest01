import { NavLink } from "react-router-dom";

const CustomNavLink = ({ link, title, iconComponent }) => {
  return (
    <li className="link__item">
      <NavLink
        to={link}
        className={({ isActive }) => {
          return isActive ? "link active" : "link";
        }}
      >
        {iconComponent}
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default CustomNavLink;
