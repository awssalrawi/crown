import React from "react";
import "./homepage.styles.scss";
import "./../../component/directory/directory.component";
import Directory from "./../../component/directory/directory.component";
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
