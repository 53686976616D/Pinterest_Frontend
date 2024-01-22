import { useState } from "react";
import Section from "../Section";
import styles from "./PinForm.module.css";
import { MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";

const PinForm = () => {
  const [file, setFile] = useState("File Name");
  const [image, setImage] = useState();
  const [disabled, setDisabled] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    event.target.reset();
    setImage();
    setFile("File Name");
  }

  function handleUpload({ target: { files } }) {
    files[0] && setFile(files[0].name);
    if (files) {
      setImage(URL.createObjectURL(files[0]));
      setDisabled(false);
    }
  }

  return (
    <Section>
      <div className={styles.topText}>
        <p>Create Pin</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <div className={styles.uploadContainer}>
              <div
                className={styles.uploadSection}
                onClick={() => document.querySelector(".uploadinput").click()}
              >
                <input
                  type="file"
                  accept="image/*"
                  name="file-upload"
                  hidden
                  onChange={handleUpload}
                  className="uploadinput"
                />
                {image ? (
                  <img
                    src={image}
                    width="100%"
                    height="100%"
                    className={styles.uploadImage}
                  />
                ) : (
                  <>
                    <FaArrowCircleUp size={35} />
                    <p className={styles.imgCaption}>Choose a file or drag and drop it here</p>
                  </>
                )}
              </div>
              <div className={styles.uploadFile}>
                <section className={styles.uploadedrow}>
                  <AiFillFileImage color="#1475cf" className={styles.imageIcons}/>
                  <span className={styles.uploadcontent}>
                    {file} -
                    <MdDelete
                      onClick={() => {
                        setFile("No selected File");
                        setImage();
                        setDisabled(true);
                      }}
                      className={styles.imageIcons}
                    />
                  </span>
                </section>
              </div>
            </div>

            <div className={styles.inputcontainer}>
              <div className={styles.inputsection}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  placeholder="Add a title"
                  name="title"
                  required
                  disabled={disabled}
                />
              </div>
              <div className={styles.inputsection}>
                <label htmlFor="descripton">Description</label>
                <textarea
                  type="text"
                  placeholder="Add a detailed description"
                  name="descripton"
                  className={styles.textarea}
                  disabled={disabled}
                />
              </div>
              <div className={styles.inputsection}>
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  placeholder="Add a link"
                  name="link"
                  disabled={disabled}
                />
              </div>
              <div className={styles.inputsection}>
                <label htmlFor="board">Board</label>
                <input
                  type="text"
                  placeholder="Choose a board"
                  name="board"
                  required
                  disabled={disabled}
                />
              </div>
              <div
                className={styles.inputsection}
                style={{ marginBottom: "5px" }}
              >
                <label htmlFor="taggedTopic">Tagged topics</label>
                <input
                  type="text"
                  placeholder="Search for a tag"
                  name="taggedTopic"
                  required
                  disabled={disabled}
                />
              </div>
              <p className={styles.formaction}>
                <button
                  type="submit"
                  className={styles.SaveButton}
                  style={disabled ? {display : 'none'} : {display: 'block'}}
                >
                  Post
                </button>
              </p>
            </div>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default PinForm;
