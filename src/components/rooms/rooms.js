import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { RoomData } from "../variables";

const Rooms = () => {
  const navigate = useNavigate();

  return (
    <div className="page roomsPage">
      <div className="roomsNav">
        <Link to="family-rooms">Family Rooms</Link>
        <Link to="/rooms">Living Rooms</Link>
        <Link to="guest-rooms">Guest Room</Link>
      </div>

      <Outlet />

      <div className="allRooms">
        {RoomData.map((data) => (
          <div className="room" key={data.id}>
            <img
              onClick={() => {
                navigate(`/rooms/${data.id}`);
              }}
              src={data?.img}
              alt={data?.title}
            />
            <h3>{data?.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
