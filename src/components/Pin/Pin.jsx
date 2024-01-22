import React from "react";
import styles from "./Pin.module.css";
import { useLocation } from "react-router-dom";
import Section from "../Section";
import { MdOutlineIosShare } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import IconButton from "../Buttons/IconButton";
import Tooltip from "../Header/Tooltip/Tooltip";
import GreyButton from "../Buttons/GreyButton";
import BackButton from "../Buttons/BackButton";

const Pin = () => {
  const location = useLocation();
  const data = location.state;
  //  console.log(data);

  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.BackButton}><BackButton /></div>
        <div className={styles.centre}>
          <div className={styles["img-container"]}>
            <img src={data.image_URL} alt={data.title} />
          </div>
          <div className={styles["text-container"]}>
            <div className={styles.topSection}>
              <div className={styles.topIcons}>
                <Tooltip setText={"Share"}>
                  <IconButton>
                    <MdOutlineIosShare />
                  </IconButton>
                </Tooltip>
                <Tooltip setText={"More Option"}>
                  <IconButton>
                    <MdOutlineMoreHoriz />
                  </IconButton>
                </Tooltip>
              </div>
              <GreyButton>Save</GreyButton>
            </div>
            <h1>This is a {data.title}</h1>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pin;
