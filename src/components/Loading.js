import React from "react";
import { LoadingBlock } from "./../styledComponents";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <LoadingBlock>
      <FontAwesomeIcon icon={faSpinner} />
    </LoadingBlock>
  );
};

export default Loading;
