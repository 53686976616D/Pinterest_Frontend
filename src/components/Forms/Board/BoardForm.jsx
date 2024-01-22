import React, { useRef } from "react";
import styles from "./BoardForm.module.css";

const BoardForm = ({ isSetBoard }) => {

  const boardName = useRef(null)
  const addSecret = useRef(null)

  function handleSubmit(event) {
    event.preventDefault();
    const data = {boardName: boardName.current.value, addSecret : addSecret.current.checked};
    console.log(data);
    event.target.reset();
    isSetBoard(false)
  }

  return (
    <div className={styles.containerBG}>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <p className={styles.modalTitle}>Create board</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputsection}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder='Like "Place to Go" or "Recipes to Make"'
                name="name"
                ref={boardName}
                required
              />
            </div>
            <div className={styles.checkboxContainer}>
              <div>
                <label className={styles.checkbox}>
                  <input type="checkbox" name="addSecret" ref={addSecret}/>
                  <span className={styles.checkmark}></span>
                </label>
              </div>
              <div className={styles.checkBoxLable}>
                <p>Keep this board secret</p>
                <p>
                  So only you and collaborators can see it.
                  <a href="#"> Learn more</a>
                </p>
              </div>
            </div>
            <p className={styles.buttonBox}>
              <button type="button" onClick={() => isSetBoard(false)}>
                Cancel
              </button>
              <button type="submit">Create</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoardForm;
