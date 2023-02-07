import React from "react";
import { useLocation } from "react-router";
import Cs from "./Cs";

const Gallery = () => {
  const { state } = useLocation();
  const Headername="Gallery"
  return (
    <div>
      <Cs info={Headername}  state={state}  />
    </div>
  );
};

export default Gallery;
