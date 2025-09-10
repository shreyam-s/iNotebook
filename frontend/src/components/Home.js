import React, { useEffect } from "react";
import Notes from "./Notes";
import { useNavigate } from "react-router-dom";

const Home = ({ showAlert }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login"); // redirect if user not logged in
    }
  }, [navigate]);

  return (
    <div>
      {/* Only show Notes if user is logged in */}
      {localStorage.getItem("token") && <Notes showAlert={showAlert} />}
    </div>
  );
};

export default Home;
