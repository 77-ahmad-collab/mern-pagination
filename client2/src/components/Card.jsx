import React from "react";
import { useParams } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Card = ({ posts }) => {
  const { pageNumber } = useParams();
  return (
    <div className="card_cont">
      {posts.map((val, ind) => {
        const { title, author, body, _id } = val;
        return (
          <div key={_id} className="cards">
            <div className="circle_num">
              <h1>{(pageNumber - 1) * 50 + ind + 1}</h1>
            </div>
            <div className="content mt-5">
              <h3>{title}</h3>
              {/* <h4>{author}</h4> */}
              <p>{body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
