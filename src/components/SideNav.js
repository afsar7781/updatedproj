import React from "react";
import { useNavigate } from "react-router";

const SideNav = (props) => {
  const navigate = useNavigate();

  const handleClickDetails = () => {
    let path = `/details`;
    navigate(path, { state: props.state });
  };

  const handleClickPost = () => {
    let path = `/post`;
    navigate(path, { state: props.state });
  };

  const handleClickGallery = () => {
    let path = `/gallery`;
    navigate(path, { state: props.state });
  };

  const handleClickTodo = () => {
    let path = `/todo`;
    navigate(path, { state: props.state });
  };

  return (
    <div
      className="bg-primary"
      style={{
        backgroundColor: "blue",
        height: "96vh",
        width: "270px",
        borderRadius: "33px",
        cursor:"pointer"
      }}
    >
      <div
        className="relative"
        style={{
          marginTop: "300px",
          color: "white",
          marginRight: "15px",
          width: "250px"
        }}
      >
        <ul>
          <div className="relative" onClick={handleClickDetails}>
            profile
          </div>
          <hr />
          <div className="relative" onClick={handleClickPost}>
            post
          </div>
          <hr />
          <div className="relative" onClick={handleClickGallery}>
            Gallery
          </div>
          <hr />
          <div className="relative" onClick={handleClickTodo}>
            To Do
          </div>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default SideNav;