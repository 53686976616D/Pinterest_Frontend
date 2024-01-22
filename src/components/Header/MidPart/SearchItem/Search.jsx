import React from "react";
import { useLocation } from "react-router-dom";
import ImageCard from "../../../Home/ImageCard";
import styles from "./Search.module.css";
import MidPart from "../MidPart";

const Search = () => {
  const location = useLocation();
  const data = location.state;
  // console.log(data);

  return (
    <>
    <div className={styles["image-row"]}>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles["image-column"]}>
            <ImageCard imgdata={item} />
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Search;
