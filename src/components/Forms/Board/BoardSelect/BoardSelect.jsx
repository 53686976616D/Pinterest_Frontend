import React, { useEffect, useState } from "react";
import styles from "./BoardSelect.module.css";
import BoardInput from "../BoardInput";

const BoardSelect = ({ disabled, setBoard, selectBoard }) => {

      function handleChange() {
      if (!disabled) {
        setBoard(true);
      }
    }
    
  return (
    <>
      <label htmlFor="board">Board</label>
      <div className={styles.board} onClick={handleChange}>
        {selectBoard.image_URL ? (
          <>
            <img src={selectBoard.image_URL} alt={selectBoard.label} />
            <p>{selectBoard.label}</p>
          </>
        ) : (
          <p className={styles.boardPlaceholder}>Select Board</p>
        )}
      </div>
    </>
  );
};

export default BoardSelect;
