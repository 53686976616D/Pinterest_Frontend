import React, { useState } from "react";
import styles from "./BoardInput.module.css";
import { HiSearch } from "react-icons/hi";
import Board from "./Board";
import { FaPlus } from "react-icons/fa6";
import BoardData from "../../../Board.json";

const BoardInput = ({ setBoard, setSelectBoard }) => {
  const board = BoardData;
  // console.log(board);
  const [creatBoard, setCreateBoard] = useState(false);
  const [boardValue, setBoardValue] = useState("");

  const handelSelect = (value) => {
    // if (setReset) {
    const Board = Object.create(value);
    Board.Board = value;
    setSelectBoard(Board);
    setBoard(false);
    // }
    // setSelectBoard();
  };

  return (
    <div className={styles.bg} onClick={() => setBoard(false)}>
      <div className={styles.center}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles["search-container"]}>
            <span className={styles["search-icon"]}>
              <HiSearch />
            </span>
            <input
              type="search"
              name="search"
              placeholder="Search Your Pins"
              onChange={(e) => setBoardValue(e.target.value)}
              required
            />
          </div>
          <div className={styles.boardItem}>
            <ul>
              {board
                .filter((item) => {
                  return boardValue.toLowerCase() === ""
                    ? item
                    : item.label.toLowerCase().includes(boardValue);
                })
                .map((item, key) => {
                  return (
                    <li key={key} onClick={() => handelSelect(item)}>
                      <img src={item.image_URL} alt={item.label} />
                      <p>{item.label}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className={styles.bottom} onClick={() => setCreateBoard(true)}>
            <FaPlus className={styles.Icon} />
            <p>Create board</p>
          </div>
          {creatBoard && <Board isSetBoard={setCreateBoard} />}
        </div>
      </div>
    </div>
  );
};

export default BoardInput;
