import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
const Pagination = ({ pages, changepage, pageno }) => {
  let middlepaginaion;

  if (pages <= 4) {
    middlepaginaion = [...Array(pages)].map((val, ind) => {
      return (
        <button
          key={ind + 1}
          onClick={() => {
            changepage(ind + 1);
          }}
          disabled={pageno == ind + 1}
        >
          {ind + 1}
        </button>
      );
    });
  } else {
    let startvalue = Math.floor((pageno - 1) / 4) * 4;
    console.log(startvalue);
    middlepaginaion = (
      <>
        {[...Array(4)].map((val, ind) => {
          return (
            <button
              key={startvalue + ind + 1}
              style={
                pages < startvalue + ind + 1
                  ? { display: "none" }
                  : { display: "block" }
              }
              onClick={() => {
                changepage(startvalue + ind + 1);
              }}
              disabled={pageno == startvalue + ind + 1}
            >
              {startvalue + ind + 1}
            </button>
          );
        })}
        <button>...</button>
        <button onClick={() => changepage(pages)}>{pages}</button>
      </>
    );
    if (pageno > 4) {
      if (pages - startvalue >= 4) {
        middlepaginaion = (
          <>
            <button onClick={() => changepage(1)}>{1}</button>
            <button>...</button>
            {[...Array(4)].map((val, ind) => {
              return (
                <button
                  key={startvalue + ind + 1}
                  style={
                    pages < startvalue + ind + 1
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  onClick={() => {
                    changepage(startvalue + ind + 1);
                  }}
                  disabled={pageno == startvalue + ind + 1}
                >
                  {startvalue + ind + 1}
                </button>
              );
            })}
            <button>...</button>
            <button onClick={() => changepage(pages)}>{pages}</button>
          </>
        );
      } else {
        middlepaginaion = (
          <>
            <button onClick={() => changepage(1)}>{1}</button>
            <button>...</button>
            {[...Array(4)].map((val, ind) => {
              return (
                <button
                  key={startvalue + ind + 1}
                  style={
                    pages < startvalue + ind + 1
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  onClick={() => {
                    changepage(startvalue + ind + 1);
                  }}
                  disabled={pageno == startvalue + ind + 1}
                >
                  {startvalue + ind + 1}
                </button>
              );
            })}
          </>
        );
      }
    }
  }
  return (
    <div className="text-center my-3 btn_cont">
      <button
        onClick={() => changepage((page) => page - 1)}
        disabled={pageno == 1}
      >
        &#8592;{" "}
      </button>
      {/* middle_pagination */}
      {middlepaginaion}
      {/* end of middle pagination */}
      <button
        onClick={() => changepage((page) => Number(page) + 1)}
        disabled={pageno == pages}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Pagination;
