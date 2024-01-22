import React from "react";
import styles from "./Home.module.css";
import ImageCard from "./ImageCard";

const Home = ({ ImageData }) => {

  return (
    <>
      <div className={styles["image-row"]}>
        {ImageData.data.map((item, key) => {
          return (
            <div className={styles["image-column"]} key={key}>
              <ImageCard imgdata={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
