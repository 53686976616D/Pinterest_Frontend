import React, { useState } from "react";
import styles from "./LogoPart.module.css";
import { NavLink } from "react-router-dom";
import { Modal2 } from "../Modals/Modal";
import { IoIosArrowDown } from "react-icons/io";

const pages = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Create", path: "/create" },
];

const LogoPart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState("Home");

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function selectHandle(selected) {
    setIsSelect(selected);
    // setIsActive(true);
    setIsOpen(false);
  }

  return (
    <>
      <div className={styles["nav-start"]}>
        <a className={styles.logo} href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gTpjUxBnj4ugjxmU7c18lJCh3kdRRd4Orw&usqp=CAU"
            width={30}
            height={30}
            alt="Inc Logo"
          />
        </a>
        <div className={styles.menu}>
          <div className={styles["dropdown-btn"]} onClick={handleClick}>
            {isSelect}
            <IoIosArrowDown />
          </div>
          {isOpen && (
            <Modal2 setIsOpen={setIsOpen}>
              <div className={styles["drop-items"]}>
                <ul>
                  {pages.map((items) => (
                    <NavLink
                      to={items.path}
                      className={styles["drop-list"]}
                      key={items.name}
                    >
                      <li onClick={() => selectHandle(items.name)}>
                        {items.name}
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            </Modal2>
          )}
          <ul className={styles["menu-bar"]}>
            {pages.map((items) => (
              <li key={items.name}>
                <NavLink
                  to={items.path}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#000000",
                    background: isActive ? "#000000" : "#fff",
                  })}
                  className={styles["page-list"]}
                >
                  {items.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LogoPart;
