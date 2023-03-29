import React from "react";
import { Routes, Route } from "react-router-dom";

import Address from "../Pages/Address";
import Cartpage from "../Pages/Cartpage";
import Payment from "../Pages/Payment";
import Summary from "../Pages/Summary";

import Homepage from "../Pages/Homepage";


function Allroutes() {
  return (
    <Routes>
      {/* TODO: add routes here */}

      <Route path="/cart" element={<Cartpage />}></Route>
      <Route path="/cart/address" element={<Address />}></Route>
      <Route path="/cart/payment" element={<Payment />}></Route>
      <Route path="/cart/summary" element={<Summary />}></Route>
      <Route path="/" element={<Homepage/>}/>
    </Routes>
  );
}

export default Allroutes;