import React, { useState } from "react";
import AddImages from "./Components/AddImages/AddImages";
import Feed from "./Components/Feed/Feed";
import Filters from "./Components/Filter/Filters";
import SearchBar from "./Components/Search/SearchBar";

const App = () => {
  
  const [showDetail, setShowDetail] = useState(false);

  const detailShowHander = (event) => {
    setShowDetail(true);
  };
  
  return (
    <div>
      <h1 className="display-1 text-center">Imagify</h1>
      {/* <div className="container d-flex justify-content-center mt-4"> 
        <SearchBar/>
      </div> */}
      <div>
        <AddImages/>
      </div>
      {/* <div className="mt-5 d-flex justify-content-center">
        <Filters/>
      </div> */}
      <div>
        <Feed onShowDetail = {detailShowHander}/>
      </div>
    </div>
  );
}

export default App;
