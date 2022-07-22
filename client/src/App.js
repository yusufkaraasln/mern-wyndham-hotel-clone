import Homepage from "./pages/Homepage/Homepage";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllRooms from "./pages/AllRooms/AllRooms";
import SuperiorRoom from "./pages/SingleRooms/SuperiorRoom/SuperiorRoom";
import { Junior } from "./images/Junior";
import { Presidential } from "./images/Presidential";
import { Eum } from "./images/Eum";
import { SliderData } from "./images/SliderData";
import { Spa_Wellness } from "./images/SpaWellness";
import DeluxeRoom from "./pages/SingleRooms/DeluxeRoom/DeluxeRoom";
import JuniorRoom from "./pages/SingleRooms/JuniorRoom/JuniorRoom";
import PresidentialRoom from "./pages/SingleRooms/Presidential/Presidential";
import EumRoom from "./pages/SingleRooms/EumRoom/EumRoom";
import ScrollToTop from "./components/ScrollToTop";
import SpaWellness from "./pages/SpaWellness/SpaWellness";
import { Meeting } from "./images/Meeting";
import MeetingRooms from "./pages/MeetingRooms/MeetingRooms";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Aboutus from "./pages/Corporate/Aboutus/Aboutus";
import Contact from "./pages/Contact/Contact";
import MeetingForm from "./pages/MeetingForm/MeetingForm";
import PanelPage from "./admin/PanelPage/PanelPage";
import PanelLogin from "./admin/PanelLogin/PanelLogin";
import { useSelector } from "react-redux";
import DetailsContact from "./components/PanelContact/DetailsContact";
import DetailsMeeting from "./components/PanelMeeting/DetailsMeeting";
import DetailsCareer from "./components/PanelCareer/DetailsCareer";
import Career from "./pages/Corporate/Career/Career";
import Restaurant from "./pages/Restaurant/Restaurant";
import DetailsFood from "./components/PanelRestaurant/DetailsFood";
import DetailsMinibar from "./components/PanelMinibar/DetailsMinibar"
import Minibar from "./pages/Minibar/Minibar";

function App() {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <Router>
      <Routes>
        <Route
          path="/panel/*"
          element={auth ? <PanelPage /> : <PanelLogin />}
        ></Route>
        <Route
          path="/panel/contact/:id"
          element={auth ? <DetailsContact /> : <PanelLogin />}
        ></Route>
        <Route
          path="/panel/meeting/:id"
          element={auth ? <DetailsMeeting /> : <PanelLogin />}
        ></Route>
        <Route
          path="/panel/career/:id"
          element={auth ? <DetailsCareer /> : <PanelLogin />}
        ></Route>

        <Route
          path="/panel/menu/:id"
          element={auth ? <DetailsFood /> : <PanelLogin />}
        ></Route>

        <Route
          path="/panel/minibar-menu/:id"
          element={auth ? <DetailsMinibar /> : <PanelLogin />}
        ></Route>
      </Routes>

      <ScrollToTop>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route path="/rooms" element={<AllRooms />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route
            path="/contact"
            element={<Contact slides={SliderData} />}
          ></Route>
          <Route path="/meeting-form" element={<MeetingForm />}></Route>
          <Route
            path="/career"
            element={<Career />}
            slides={SliderData}
          ></Route>
          <Route
            path="/rooms/superior"
            element={<SuperiorRoom slides={SliderData} />}
          ></Route>
          <Route
            path="/rooms/deluxe"
            element={<DeluxeRoom slides={SliderData} />}
          ></Route>
          <Route
            path="/rooms/junior"
            element={<JuniorRoom slides={Junior} />}
          ></Route>
          <Route
            path="/rooms/presidential"
            element={<PresidentialRoom slides={Presidential} />}
          ></Route>
          <Route path="/rooms/eum" element={<EumRoom slides={Eum} />}></Route>

          <Route
            path="/spa-wellness"
            element={<SpaWellness slides={Spa_Wellness} />}
          ></Route>
          <Route
            path="/meeting-rooms"
            element={<MeetingRooms slides={Meeting} />}
          >
            {" "}
          </Route>

          <Route path="/restaurant" element={<Restaurant />}></Route>
          <Route path="/minibar" element={<Minibar />}></Route>
        </Routes>

        <ScrollButton></ScrollButton>
      </ScrollToTop>
    </Router>
  );
}

export default App;
