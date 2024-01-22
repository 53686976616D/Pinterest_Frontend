import React from "react";
import styles from './EndPart.module.css'
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Tooltip from "../Tooltip/Tooltip";

const EndPart = () => {
  return (
    <>
      {/* <Tooltip setText={"Notifications"}>
        <div className={styles.icon}>
          <IoMdNotifications />
        </div>
      </Tooltip>
      <Tooltip setText={"Messages"}>
        <div className={styles.icon}>
          <AiFillMessage />
        </div>
      </Tooltip> */}
      <Tooltip setText={"Your profile"}>
        <NavLink to="/profile">
          <div className={styles.icon}>
            <FaUserCircle />
          </div>
        </NavLink>
      </Tooltip>
      {/* <Tooltip setText={"Accounts and more options"}>
        <div className={styles.icon}>
          <IoIosArrowDown />
        </div>
      </Tooltip> */}
    </>
  );
};

export default EndPart;
