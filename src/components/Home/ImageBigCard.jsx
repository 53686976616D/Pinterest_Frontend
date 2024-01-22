import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineIosShare } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import "./ImageBigCard.css";
import IconButton from "../Buttons/IconButton";
import Share from "../Share/Share";
import { Modal } from "../Header/Modals/Modal";

const ImageBigCard = ({ setIsOpen, isImg }) => {
  const [isShare, setIsShare] = useState(false);

  function handleShare() {
    setIsShare(true);
  }

  return (
    <>
      <Modal setIsOpen={setIsOpen}>
        <div className="img-modal">
          <img
            src={isImg.image_URL}
            alt="foto"
            width="100%"
            height="100%"
            className="ImgModal"
          />
        </div>
        <div className="headline-modal">
          <div className="modal-top">
            <div className="modal-icons">
              <IconButton isClick={handleShare}>
                <MdOutlineIosShare />
              </IconButton>
              <IconButton>
                <MdOutlineMoreHoriz />
              </IconButton>
            </div>
            <div className="modal-icons">
              <IconButton isClick={() => setIsOpen(false)}>
                <RiCloseLine />
              </IconButton>
            </div>
          </div>

          <div className="heading-modal">
            <p className="fileName">In this Folder</p>
            <h2 style={{ margin: "0px", textTransform: "uppercase" }}>
              This is a {isImg.title}
            </h2>
          </div>
          <div className="subheading-modal">
            <h5 style={{ margin: "0px" }}>
              {/* This is a Subheading.This is a Subheading.This is a
              Subheading.This is a Subheading.This is a Subheading. */}
              {isImg.description}
            </h5>
            <p className="Tags">#Tags #Tags #Tags #Tags</p>
          </div>
        </div>
      </Modal>

      {isShare && <Share isSetShare={setIsShare} />}
    </>
  );
};

export default ImageBigCard;

// {/* <div className="darkBG" onClick={() => setIsOpen(false)}>
//         <div className="centered">
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <div className="img-modal">
//               <img
//                 src={isImg.src}
//                 alt="foto"
//                 width="100%"
//                 height="100%"
//                 className="ImgModal"
//               />
//             </div>
//             <div className="headline-modal">
//               <div className="modal-top">
//                 <div className="modal-icons">
//                   <IconButton isClick={handleShare}>
//                     <MdOutlineIosShare />
//                   </IconButton>
//                   <IconButton>
//                     <MdOutlineMoreHoriz />
//                   </IconButton>
//                 </div>
//                 <div className="modal-icons">
//                   <IconButton isClick={() => setIsOpen(false)}>
//                     <RiCloseLine />
//                   </IconButton>
//                 </div>
//               </div>

//               <div className="heading-modal">
//                 <p className="fileName">In this Folder</p>
//                 <h2 style={{ margin: "0px", textTransform: "uppercase" }}>
//                   This is a {isImg.alt}
//                 </h2>
//               </div>
//               <div className="subheading-modal">
//                 <h5 style={{ margin: "0px" }}>
//                   This is a Subheading.This is a Subheading.This is a
//                   Subheading.This is a Subheading.This is a Subheading.
//                 </h5>
//                 <p className="Tags">#Tags #Tags #Tags #Tags</p>
//               </div>
//               {/* <button
//                 className="downBtn-modal"
//                 onClick={() => downloadImage(isImg.src, isImg.alt)}
//               >
//                 <MdDownload />
//               </button> */}
//             </div>
//             {/* <button className="closebtn-modal" onClick={() => setIsOpen(false)}>
//               <RiCloseLine style={{ marginBottom: "-3px" }} />
//             </button> */}
//           </div>
//         </div>
//       </div> */}
