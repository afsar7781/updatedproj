import React from "react";
import { useLocation } from "react-router";
import Cs from "./Cs";

const Posts = () => {
  const { state } = useLocation();
  const Headername="post"
  return (
    <div>
      <Cs info={Headername}  state={state} />
    </div>
  );
};

export default Posts;
