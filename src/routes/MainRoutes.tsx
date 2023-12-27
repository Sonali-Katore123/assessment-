import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDash from "../dashbord/UserDash";
import CreateAds from "../screens/CreateAds";
import FillDataMedia from "../screens/FillDataMedia";
import FillDataText from "../screens/FillDataText";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/FillDataMedia" element={<FillDataMedia heading1={""} heading2={""} description={""}/>} />
      <Route path="/CreateAds" element ={<CreateAds/>}/>
      <Route path="/FillDataText" element={<FillDataText heading1={""} heading2={""} description={""} />} />
      <Route path="/UserDash" element={<UserDash/>} />
    </Routes>
  );
};

export default MainRoutes;
