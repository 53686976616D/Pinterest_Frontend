import React, { useState } from "react";
import styles from "./ImageCard.module.css";
import { MdOutlineIosShare } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import ImageBigCard from "./ImageBigCard";
import IconButton from "../Buttons/IconButton";
import Share from "../Share/Share";
import Tooltip from "../Header/Tooltip/Tooltip";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ imgdata }) => {
  // const imgURL = imgdata.image_URL;
  // const imgALT = imgdata.title;
  // console.log(imgdata);
  // const [isOpen, setIsOpen] = useState(false);
  const [share, setShare] = useState(false);
  // const [isImg, setIsImg] = useState("");

  // function selectHandle(event) {
  //   setIsImg(event.target);
  // }

  const navigate = useNavigate();
  function handleClick() {
    navigate('/pin', {state: imgdata})
  }

  return (
    <>
      <div className={styles["img-card"]}>
        <div id={styles.image} onClick={handleClick}>
          <img
            src={imgdata.image_URL}
            alt={imgdata.title}
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={styles["img-card-icons"]}>
          <Tooltip setText={"Share"}>
            <IconButton isClick={() => setShare(true)}>
              <MdOutlineIosShare />
            </IconButton>
          </Tooltip>
          <IconButton>
            <MdOutlineMoreHoriz />
          </IconButton>
        </div>
      </div>
      {/* {isOpen && <ImageBigCard setIsOpen={setIsOpen} isImg={imgdata} />} */}
      {share && <Share isSetShare={setShare} />}
    </>
  );
};

export default ImageCard;

{
  /* */
}

//   <div className=".window">
//   <img src={imgdata} alt="Images" style={{width: '100%'}} className="foto"/>
//   <div className="hover-zone">
//     <div className="top-bar">
//         <a>Save</a>
//     </div>
//     <div className="bottom-bar">
//         <div className="radius-ico">
//             <MdOutlineIosShare />
//             <MdOutlineMoreHoriz />
//         </div>
//     </div>
//   </div>
// </div>
