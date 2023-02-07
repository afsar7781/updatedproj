import React from "react";
import { useLocation } from "react-router";
import Cs from "./Cs";

const Todo = () => {
  const { state } = useLocation();
  const Headername="ToDo"
  return (
    <div>

      <Cs info={Headername} email={state.email}  state={state} />
    </div>
  );
};

export default Todo;
