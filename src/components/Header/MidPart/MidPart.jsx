import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import styles from "./MidPart.module.css";
import ImageData from "../../../ImageData.json";
import { useNavigate } from "react-router-dom";

const MidPart = () => {
  const [search, setSearch] = useState("");
  // const [searchItem, setSearchItem] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  // const [isActive, setIsActive] = useState(false);
  const imageData = ImageData.data;

  const handleSubmit = (value) => {
    setSearch(value);
    searchData(value);
    // if (value.length > 0) {
    //   setIsActive(true);
    // } else if (value.length == 0) {
    //   setIsActive(false);
    // }
  };

  const searchData = (value) => {
    const newValue = value.toLowerCase();
    const result = imageData.filter((user) => {
      return (
        newValue && user.title && user.title.toLowerCase().includes(newValue)
      );
    });
    // console.log(searchValue);
    setSearchValue(result);
    
    
  //   function getUnique(arr, index) {
  //     const unique = arr
  //       .map((e) => e[index])
  //       .map((e, i, final) => final.indexOf(e) === i && i)
  //       .filter((e) => arr[e])
  //       .map((e) => arr[e]);
  //     return unique;
  //   }

  //   // console.log(getUnique(result, "title"));
  //   setSearchItem(getUnique(result, "title"));
  };
  // console.log(searchValue);
   
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate('/search', {state: searchValue});
  }

  // useEffect(() => {
  //   const keyDownHandler = event => {
  //     if (event.key === 'Enter') {
  //       event.preventDefault();
  //       handleClick();
  //     }
  //   };
  //   document.addEventListener('keydown', keyDownHandler);

  //   return () => {
  //   document.removeEventListener('keydown', keyDownHandler);
  //   }
  // }, []);

  return (
    <>
      <div className={styles["mid-container"]}>
        <span className={styles["search-icon"]}>
          <HiSearch />
        </span>
        <form onSubmit={handleClick}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          autoComplete="off"
          required
          value={search}
          onChange={(e) => handleSubmit(e.target.value)}
        />
        </form>
      </div>
      {/* {isActive && (
        <div className={styles["result-list"]}>
          {searchItem.map((item) => {
            return (
              <div key={item.id} className={styles.searchList} onClick={handleClick}>
                  <span className={styles["search-icon"]}>
                    <HiSearch />
                  </span>
                  <div className={styles["search-result"]}>{item.title}</div>
              </div>
            );
          })}
        </div>
      )} */}
    </>
  );
};

export default MidPart;
