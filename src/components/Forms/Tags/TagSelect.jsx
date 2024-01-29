import React from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import Tags from "../../../Tags.json";

const Menu = props => {
    const optionSelectedLength = props.getValue().length || 0;
    return (
        <components.Menu {...props}>
            {optionSelectedLength < 10 ? (
                props.children
            ) : (
                <div style={{ margin: 15, color: 'red'}}>Max limit achieved</div>
            )}
        </components.Menu>
    )
  }

const TagSelect = ({ disabled, setTags }) => {
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      border: "1px solid gray",
      borderRadius: "15px",
      padding: "7px",
      backgroundColor: "#EFEFEF4D",
    }),
  };

  function handleChange(selectOption) {
    const tags = Object.create(selectOption)
    tags.tags = selectOption;
    setTags(tags);
  }

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filterData = Tags.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      //   console.log("SearchData", searchValue, filterData);
      callback(filterData);
    }, 2000);
  };

  const isValidNewOption = () => inputValue.length > 0 && selectValue.length < 5;

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      isValidNewOption={isValidNewOption}
      onChange={handleChange}
      components={{ Menu }}
      defaultOptions
      isMulti
      styles={colorStyles}
      placeholder="Search for a tag"
      isDisabled={disabled}
      required
    />
  );
};

export default TagSelect;
