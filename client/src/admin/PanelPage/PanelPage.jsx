import React from "react";
import "./panel-page.scss";

import { useSelector } from "react-redux";
import PanelContact from "../../components/PanelContact/PanelContact";
import PanelPageList from "./PanelPageList";
import PanelMeeting from "../../components/PanelMeeting/PanelMeeting";
import PanelCareer from "../../components/PanelCareer/PanelCareer";
import PanelFood from "../../components/PanelRestaurant/PanelFood";
import PanelMinibar from  "../../components/PanelMinibar/PanelMinibar"

function PanelPage() {
  const authDataState = useSelector((state) => state.auth.authData.data);
  const authData = useSelector((state) => state.auth.auth);
  const [selected, setSelected] = React.useState("iletisim");
  console.log(authData);

  const list = [
    {
      id: "iletisim",
      title: "İletişim",
    },
    {
      id: "toplanti",
      title: "Toplantı",
    },
    {
      id: "kariyer",
      title: "Kariyer",
    },
    {
      id: "restoran",
      title: "Restoran",
    },
    {
      id: "minibar",
      title: "Minibar",
    },
  ];
  console.log(selected);

  return (
    <div className="panel-page">
      <header>
        <ul>
          <li>
          </li>
          <li>
            <i
              style={{
                cursor: "pointer",
                background: "#ce0538",
                padding: "20px",
                borderRadius: "50%",
              }}
              onClick={() => {
                localStorage.clear("auth")
                window.location.reload()
              }  }
              class="fa-solid fa-arrow-right-from-bracket"
            ></i>
          </li>
        </ul>
      </header>

      <main>
        <div className="main-panel-container">
          <div className="main-panel-container-header">
            <ul>
              {list.map((item) => (
                <PanelPageList
                  title={item.title}
                  active={selected === item.id}
                  setSelected={setSelected}
                  id={item.id}
                />
              ))}
            </ul>
          </div>
          <div className="main-panel-container-body">
            {selected === "iletisim" && <PanelContact />}
            {selected === "toplanti" && <PanelMeeting />}
            {selected === "kariyer" && <PanelCareer />}
            {selected === "restoran" && <PanelFood />}
            {selected === "minibar" && <PanelMinibar />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PanelPage;
