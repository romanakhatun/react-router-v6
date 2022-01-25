import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageLayouts from "./components/pageLayouts";
import NotFound from "./components/notFound";
import About from "./components/about";
import Home from "./components/home";
import Rooms from "./components/rooms/rooms";
import RoomDetails from "./components/rooms/roomDetails";
import FamilyRoom from "./components/rooms/familyRoom";
import LivingRoom from "./components/rooms/livingRoom";
import GuestRoom from "./components/rooms/guestRoom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayouts />}>
            <Route index element={<Home />} />

            {/* Rooms Route  */}
            <Route path="rooms" element={<Rooms />}>
              <Route index element={<LivingRoom />} />
              <Route path="family-rooms" element={<FamilyRoom />} />
              <Route path="guest-rooms" element={<GuestRoom />} />
            </Route>
            <Route path="rooms/:id" element={<RoomDetails />} />

            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
