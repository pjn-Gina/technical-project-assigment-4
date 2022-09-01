import React from "react";

function Title({ id, text }) {
  return (
    <h1 className="text-center mt-3 text-white" id="{id}">
      {text}
    </h1>
  );
}

export default Title;
