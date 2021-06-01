import "./App.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function App({ match }) {
  const { pageNumber } = useParams();

  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(false);
  const [pages, setpages] = useState();
  const [pageno, setpageno] = useState(pageNumber || 1);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const res = await axios.post(`/ahmad/v1/posts?page=${pageno}`);
        console.log(res.data.data);
        setposts(res.data.data);
        setpages(res.pages);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pageno]);
  return (
    <div>
      <h3>Mern Pagination</h3>
      {loading ? (
        <h2>Loading...</h2>
      ) : posts.length == 0 ? (
        <h1>NOthing to show</h1>
      ) : (
        posts.map((val) => {
          return <h2>{val.body}</h2>;
        })
      )}
      {/* pagination Component */}
      {/* posts cards componnets */}
    </div>
  );
}

export default App;
