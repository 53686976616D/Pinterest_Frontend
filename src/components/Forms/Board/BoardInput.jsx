import React, { useState } from "react";
import styles from "./BoardInput.module.css";
import { HiSearch } from "react-icons/hi";
import Board from "./Board";
import { FaPlus } from "react-icons/fa6";

const BoardInput = ({ setBoard }) => {
    const [creatBoard, setCreateBoard] = useState(false);

  return (
    <div className={styles.bg} onClick={() => setBoard(false)}>
      <div className={styles.centerd}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles["search-container"]}>
              <span className={styles["search-icon"]}>
                <HiSearch />
              </span>
              <form>
                <input
                  type="search"
                  name="search"
                  placeholder="Search Your Pins"
                  required
                />
              </form>
            </div>
          <div className={styles.boardItem}></div>
          <div className={styles.bottom} onClick={() => setCreateBoard(true)}>
            <FaPlus className={styles.Icon} />
            <p>Create board</p>
          </div>
          {creatBoard && <Board isSetBoard={setCreateBoard}/>}
        </div>
      </div>
    </div>
  );
};

export default BoardInput;
