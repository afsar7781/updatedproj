import React, { useState } from "react";
import { Container } from "@mui/system";
import SideNav from "./SideNav";
import Navbar from "./Navbar";
const Cs = (props) => {
  return (
    <div>
      <div>
        <Container fixed sx={{ width: "100%", margin: 0, display: "flex" }}>
          <SideNav state={props?.state} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%"
            }}
          >
            <Navbar
              profilepicture={props?.state?.profilepicture}
              name={props?.state?.name} value={props.info} email={props?.state?.email}
              username={props?.state?.username}
            />
            <div
              className="cs"
              style={{
                width:"130%",
                display: "flex",
                justifyContent: "center",
                alingItems: "center",
                paddingTop: "150px",
                color: "silver",
                fontSize: "40px",
                marginLeft:"22px",
               
              }}
            >
              <h1>Coming soon</h1>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Cs;
