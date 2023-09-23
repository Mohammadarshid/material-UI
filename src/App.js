import React, { useState } from "react";

import { Typography, AppBar, Toolbar, Tabs, Tab, Dialog } from "@mui/material";
// import Form from "./Components/Form";
// import Cards from "./Components/Cards";
import Modals from "./Components/Modals";
import Containers from "./Components/Containers";
import List from "./Components/List";
function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div>
        {/* <Form /> */}
        {/* <AppBar> */}
        {/* <Toolbar> */}
        {/* <Typography variant="h4">E commerce</Typography> */}
        {/* <Tabs */}
        {/* // sx={{ marginLeft: "auto" }} */}
        {/* // value={value} */}
        {/* // onChange={(e, val) => setValue(val)} */}
        {/* // textColor="inherit" // indicatorColor="secondary" // > */}
        {/* <Tab label="home" /> */}
        {/* <Tab label="About" /> */}
        {/* <Tab label="Contact" /> */}
        {/* <Tab label=" Career" /> */}
        {/* </Tabs> */}
        {/* </Toolbar> */}
        {/* </AppBar> */}
        {/* <Form /> */}
        <div className="arsg">
          {/* <Cards /> */}
          {/* <Modals /> */}
          {/* <Containers /> */}
          <List />
        </div>
      </div>
    </>
  );
}

export default App;
