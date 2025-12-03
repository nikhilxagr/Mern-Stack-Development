import React, { useEffect } from "react";

const Navbar = ({ color }) => {
  
  useEffect(() => {
    alert("Hey I will run on every render");
  });


  useEffect(() => {
    alert("Hey welcome to my page. This is the first render");
  }, []);

  
  useEffect(() => {
    alert("Hey I am running because color was changed");
  }, [color]);

  // Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx");

    return () => {
      alert("component was unmounted");
    };
  }, []);

  return <div>I am navbar of {color} color hehe..</div>;
};

export default Navbar;
