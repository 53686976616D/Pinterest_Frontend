import React from "react";
import IconButton from "./IconButton";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Tooltip from "../Header/Tooltip/Tooltip";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Tooltip setText={'Back'}>
      <IconButton isClick={() => navigate(-1)}>
        <IoMdArrowRoundBack />
      </IconButton>
    </Tooltip>
  );
};

export default BackButton;
