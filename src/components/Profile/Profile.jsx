import React, { useState } from "react";
import styles from "./Profile.module.css";
import { FaUserCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Section from "../Section";
import IconButton from "../Buttons/IconButton";
import { NavLink } from "react-router-dom";
import Board from "../Forms/Board/Board";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBoard, setIsBoard] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleOpenBoard() {
    setIsBoard(true);
    setIsOpen(false);
  }

  function handleClick() {
    console.log('click');
  }

  return (
    <Section>
      <div onClick={() => setIsOpen(false)} style={{ width: '100%', height: '100vh'}}>
        <div className={styles.profileContainer}>
          <i className={styles.ProfilePicture}>
            <FaUserCircle />
          </i>
          <p className={styles.profileName}>Name</p>
          <p className={styles.profileId}>abs123</p>
          <p className={styles.profileFollower}>0 Followers</p>
          <div className={styles.button}>
            {/* <Button bg="grey">Share</Button>
          <Button bg="grey">Edit Profile</Button> */}
          </div>
        </div>
        <div className={styles["add-Post-Container"]}>
          <div className={styles.addPost} onClick={(e) => e.stopPropagation()}>
            <IconButton isClick={handleOpen}>
              <FaPlus />
            </IconButton>
            {isOpen && (
              <div className={styles.dropDownBox}>
                <ul>
                  <p className={styles.text}>Create</p>
                  <NavLink
                    to="/create"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <li>Pin</li>
                  </NavLink>
                  <li onClick={handleOpenBoard}>Broad</li>
                </ul>
              </div>
            )}
          </div>
          {isBoard && <Board isSetBoard={setIsBoard} />}
        </div>
      </div>
    </Section>
  );
};

export default Profile;
