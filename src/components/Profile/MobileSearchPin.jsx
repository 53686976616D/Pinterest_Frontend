import React from "react";
import styles from "./MobileSearchPin.module.css";
import { HiSearch } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { RiSettingsFill } from "react-icons/ri";
import IconButton from "../Buttons/IconButton";

const MobileSearchPin = () => {
  return (
    <>
      <div className={styles["search-container"]}>
        <span className={styles["search-icon"]}>
          <HiSearch />
        </span>
        <form>
          <input type="search" name="search" placeholder="Search Your Pins" required />
        </form>
      </div>
      <div className={styles.Icons}>
        <IconButton>
            <FaPlus />
        </IconButton>
        <IconButton>
            <RiSettingsFill />
        </IconButton>
      </div>
    </>
  );
};

export default MobileSearchPin;
