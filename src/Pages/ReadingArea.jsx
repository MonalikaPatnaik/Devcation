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
import { SearchAndToggle } from "../components/ReadingAreaElements";

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
  const [imgSrc, setImageSrc] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWD5JG36hXD349vgUn0dPfl7MPMGni1dalA&s");
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
    const toggleMode = () => {
      setToggle((prevToggle) => {
        const newToggle = !prevToggle;
        setImageSrc(newToggle ? "data:image/png;base64,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" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWD5JG36hXD349vgUn0dPfl7MPMGni1dalA&s"); // Change the image source based on the toggle state
        setBgColor(newToggle ? "#222222":"white");
        setTextColor(newToggle ? "white" : "#222222");
        return newToggle;
      });
    };
  

  return (
    <div style={
      {backgroundColor: bgColor}
    }>
      <Navbar/>

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      <ToggleBtn imgSrc={imgSrc} handleToggleMode={toggleMode} textColor={textColor}/>
      <br></br>
      <h1 className="text-center pb-3" style={
        {color: textColor}
      }>Read, learn, connect!</h1>
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

      <br></br>

      {showRest && (
        <div id="rest">
          <h1 className="text-center pb-3 pt-5" style={
        {color: textColor}
      }>Depression</h1>
          {!depressionBlogs.length ? <EmptyList /> : <BlogList blogs={depressionBlogs} />}
          <br></br>

          <h1 className="text-center pb-3 pt-5"
          style={
            {color: textColor}
          }>Anxiety</h1>
          {!anxietyBlogs.length ? <EmptyList /> : <BlogList blogs={anxietyBlogs} />}
          <br></br>

          <h1 className="text-center pb-3 pt-5"
          style={
            {color: textColor}
          }>Post Traumatic Stress Disorder (PTSD)</h1>
          {!ptsdBlogs.length ? <EmptyList /> : <BlogList blogs={ptsdBlogs} />}
          <br></br>

          <h1 className="text-center pb-3 pt-5"
          style={
            {color: textColor}
          }>Attention Deficit Hyperactivity Disorder (ADHD)</h1>
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
