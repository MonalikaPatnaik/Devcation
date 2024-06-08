import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/index";
import Footer from "../components/Footer/Footer";
import BlogList from "../components/BlogList/index";
import { blogList } from "../config/data";
import { depressionBlogList } from "../config/depressionData";
import { anxietyBlogList } from "../config/anxietyData";
import { ptsdBlogList } from "../config/ptsdData";
import { adhdBlogList } from "../config/adhdData";
import EmptyList from "../components/EmptyList/index";
import ToggleBtn from "../components/ToggleBtn/index";


const ReadingArea = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [depressionBlogs, setDepressionBlogs] = useState(depressionBlogList);
  const [anxietyBlogs, setAnxietyBlogs] = useState(anxietyBlogList);
  const [ptsdBlogs, setPtsdBlogs] = useState(ptsdBlogList);
  const [adhdBlogs, setAdhdBlogs] = useState(adhdBlogList);
  const [searchKey, setSearchKey] = useState("");
  const [showRest, setShowRest] = useState(true);

  // Search Submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResult();
  };

  // Search Key
  const handleSearchResult = () => {
    const filteredBlogs = blogList.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    const filteredDepressionBlogs = depressionBlogList.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    const filteredAnxietyBlogs = anxietyBlogList.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    const filteredPtsdBlogs = ptsdBlogList.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    const filteredAdhdBlogs = adhdBlogList.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    // Merge all filtered results
    const allFilteredBlogs = [
      ...filteredBlogs,
      ...filteredDepressionBlogs,
      ...filteredAnxietyBlogs,
      ...filteredPtsdBlogs,
      ...filteredAdhdBlogs,
    ];

    setBlogs(allFilteredBlogs);
    setShowRest(allFilteredBlogs.length === 0);
    // Hide rest div if there are search results
  };

  // Clear Search
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
    setShowRest(true); // Show rest div when search is cleared
  };
  const [toggle, setToggle] = useState(false);
  const [on, setOn] = useState("Switch to Dark Mode");
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const toggleMode = () => {
    setToggle(!toggle);
    if (toggle) {
      setOn("Switch to Light Mode");
      setBgColor("#222222");
      setTextColor("white");
    }
    else {
      setOn("Switch to Dark Mode");
      setBgColor("white");
      setTextColor("black");
    }
  }

  return (
    <div style={
      {backgroundColor: bgColor}
    }>
      <Navbar />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      <ToggleBtn value={on} handleToggleMode={toggleMode} textColor={textColor}/>
      <br></br>
      <br></br>

      
      <h3 className="text-center pb-3" style={
        {color: textColor}
      }>Read, learn, connect!</h3>
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      <br></br>

      {showRest && (
        <div id="rest">
          <h3 className="text-center pb-3 pt-5" style={
        {color: textColor}
      }>Depression</h3>
          {!depressionBlogs.length ? <EmptyList /> : <BlogList blogs={depressionBlogs} />}
          <br></br>

          <h3 className="text-center pb-3 pt-5"
          style={
            {color: textColor}
          }>Anxiety</h3>
          {!anxietyBlogs.length ? <EmptyList /> : <BlogList blogs={anxietyBlogs} />}
          <br></br>

          <h3 className="text-center pb-3 pt-5"
          style={
            {color: textColor}
          }>Post Traumatic Stress Disorder (PTSD)</h3>
          {!ptsdBlogs.length ? <EmptyList /> : <BlogList blogs={ptsdBlogs} />}
          <br></br>

          <h3 className="text-center pb-3 pt-5"
          style={
            {color: textColor}
          }>Attention Deficit Hyperactivity Disorder (ADHD)</h3>
          {!adhdBlogs.length ? <EmptyList /> : <BlogList blogs={adhdBlogs} />}
          <br></br>
        </div>
      )}
      <br></br>
      <Footer/>
    </div>
  );
};

export default ReadingArea;
