import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
const Pagination = () => {
  return (
    <div className="text-center my-3 btn_cont">
      <button>&#8592; </button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>&#8594;</button>
    </div>
  );
};

export default Pagination;
