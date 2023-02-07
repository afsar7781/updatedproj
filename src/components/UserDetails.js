import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import SideNav from "./SideNav";
import Navbar from "./Navbar";



const UserDetails = () => {
   const { state } = useLocation();
  
  return (
    <div>
      <div>
        <Container fixed sx={{ width: "100%", margin: 0, display: "flex" }}>
          <SideNav state={state}/>
          <div
            style={{ 
              display: "flex",
              flexDirection: "column",
          
            }}
          >
            <Navbar  profilepicture={state.profilepicture}
             name={state.name}
              email={state.email} 
              username={state.username} 
              value="profile"/>
            <div 
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between", 
                width:"117%"
              }}
            >
           
              <div style={{ marginLeft: "30px", marginTop: "50px" }}>
                <img
                  alt="Ooops!"
                  src={state.profilepicture}
                  height="218px"
                  width="190px"
                  
                  style={{ borderRadius: "50%", marginLeft: "100px" }}
                />
                  <p style={{paddingLeft:"180px",}}>{state.username}</p>
                <div className="details" style={{
                paddingLeft:"78px",
                }}>
                <br />
                
                <div><p style={{display:"inline"}} >Username :</p> {state.name}</div>
                <br />
                <div><p style={{display:"inline"}}>email : </p> {state.email}</div>
                <br />
                <div> <p style={{display:"inline"}}>phoneNumber :</p> {state.phone}</div>
                <br />
                <div><p style={{display:"inline"}}>website :</p> {state.website}</div>
                <hr />
                <div><p style={{display:"inline"}}>Company Name :</p> {state.company.name}</div>
                <br />
                <div> <p style={{display:"inline"}}> catchPhrase :</p> {state.company.catchPhrase}</div>
                <br />
                <div><p style={{display:"inline"}}> bs :</p> {state.company.bs}</div>
              </div>
              </div>
              <hr style={{marginLeft:"22px"}}/>
              <div style={{marginTop: "20px",marginLeft:"40px"}}>
                <p style={{color:"gray",display:"inline"}}>Address:</p>
              </div>
              <div  style={{ marginTop: "50px",marginLeft:"7px" }}>
               
                <div>
                  <div><p style={{color:"gray",display:"inline"}}>Street : </p>  {state.address.street}</div>
                  <br />
                  <div> <p style={{color:"gray",display:"inline"}}>Suite : </p>  {state.address.suite}</div>
                  <br />
                  <div> <p style={{color:"gray",display:"inline"}}> City : </p>  {state.address.city}</div>
                  <br />
                  <div><p style={{color:"gray",display:"inline"}}>Zipcode : </p> {state.address.zipcode}</div>
                  <br />
                  <div><img src="mapimg.png" alt="map" width={"500px"} height={"380px"}/></div>
                  <div style={{paddingLeft:"270px"}}>
                  <div><p style={{color:"gray",display:"inline"}} >lng : </p> {state.address.geo.lng} <p style={{color:"gray",display:"inline"}}>  lat : </p>  {state.address.geo.lat}</div>
             
                  </div>
                </div>
                
              </div>
            </div>
            </div>
          
        </Container>
      </div>
    </div>
  );
};

export default UserDetails;
