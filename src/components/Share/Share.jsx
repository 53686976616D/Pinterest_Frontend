import React from "react";
import styles from "./Share.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import IconButton from "../Buttons/IconButton";
import{ Modal } from "../Header/Modals/Modal";

const Share = ({ isSetShare }) => {
  return (
    <Modal setIsOpen={isSetShare}>
      <div className={styles.shareModal}>
        <p className={styles.text}>Share</p>
        <hr className={styles.line} />
        <div className={styles.buttons}>
          <IconButton>
            <FaWhatsapp />
          </IconButton>
          <IconButton>
            <FaFacebook />
          </IconButton>
          <IconButton>
            <FaFacebookMessenger />
          </IconButton>
          <IconButton>
            <FaXTwitter />
          </IconButton>
          <IconButton>
            <FaLink />
          </IconButton>
          <IconButton>
            <FiMail />
          </IconButton>
        </div>
      </div>
    </Modal>
  );
};

export default Share;
