import "./App.css";
import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./components/Card";
import "./index.css";
import Pagination from "./components/Pagination";
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
        setposts(res.data.data);
        setpages(res.data.pages);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [pageno]);
  return (
    <div>
      <h1 className="text-center text-white mt-3 ">Mern Pagination</h1>
      {/* pagination Component */}
      <Pagination pages={pages} changepage={setpageno} pageno={pageno} />
      {/* end of pagination component */}
      {/* start of posts cards component */}
      {loading ? (
        <h2 className="text-center my-4">Loading...</h2>
      ) : posts.length == 0 ? (
        <h1>NOthing to show</h1>
      ) : (
        <Card posts={posts} pageno={pageno} />
      )}

      {/* posts cards componnets */}
    </div>
  );
}

export default App;
