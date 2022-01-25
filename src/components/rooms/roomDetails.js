import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const RoomDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
    // navigate("/rooms", {
    //   replace: true,
    // });
  }

  return (
    <div className="page">
      <h1>Room Details</h1>
      <p>Post id is {params.id}</p>
      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default RoomDetails;
