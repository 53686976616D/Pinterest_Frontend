import React from "react";
import styles from "./MobileNav.module.css";
import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { HiSearch } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const MobileNav = () => {

  const style = ({ isActive }) => ({ color: isActive ? "black" : "grey", transform: isActive ? 'scale(1.5)' : '' });

  return (
    <div className={styles.container}> 
      <NavLink
        to="/"
        className={styles.link}
        style={style}
      >
        <div className={styles.Icon}>
          <GoHomeFill />
        </div>
      </NavLink>
      <NavLink
        to="/search"
        className={styles.link}
        style={style}
      >
        <div className={styles.Icon}>
          <HiSearch />
        </div>
      </NavLink>
      <NavLink
        to="/create"
        className={styles.link}
        style={style}
      >
        <div className={styles.Icon}>
          <FaPlus />
        </div>
      </NavLink>
      <NavLink
        to="/profile"
        className={styles.link}
        style={style}
      >
        <div className={styles.Icon}>
          <FaUserCircle />
        </div>
      </NavLink>
    </div>
  );
};

export default MobileNav;
