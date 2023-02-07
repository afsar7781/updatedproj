import React from "react";
import { userData } from "../db.js";
import { useNavigate } from "react-router-dom";
import UserList from "./UserList.js";
import { Container } from "@mui/system";

const List = () => {
  const [users, setUsers] = React.useState(userData);
  const navigate = useNavigate();

  const handleClick = (user) => {
    let path = `details`;
    navigate(path, { state: user });
  };

  return (
    <div className="main_div">
      <Container>
        <div className="center_div">
          <h1>Select an account</h1>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <UserList user={user} handleClick={handleClick} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default List;
