const posts = require("../models/post");
const getPosts = async (req, res) => {
  //specific page no
  console.log("posts route called");
  const pageNo = Number(req.query.page) || 1;
  //page content size
  const pageSize = 10;
  const total = await posts.countDocuments();
  //calculate total no of pages for the require amount of data
  const pages = Math.ceil(total / pageSize);

  const skipPages = (pageNo - 1) * pageSize;

  //**************** find the specific page data  from databse */
  const data = await posts.find().skip(skipPages).limit(pageSize);

  res.json({
    pages: pages,
    data: data,
  });
};

module.exports = { getPosts };
