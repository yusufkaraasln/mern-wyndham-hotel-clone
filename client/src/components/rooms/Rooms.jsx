import React from "react";
import "./rooms.scss";
import { Link } from "react-router-dom";

const Tooltip = () => {
  return <></>;
};
const Box = () => {
  return <></>;
};

function Rooms() {
  return (
    <div className="rooms">
      <div className="rooms-wrap-1">
        <div className="superior-room">
          <div className="superior-room_content">
            <div className="superior-room_content-photo">
              <img
                src="https://www.ramadasakarya.com/uploads/605381.jpg"
                alt=""
              />
            </div>
            <div className="superior-room_content-items">
              <div className="superior-room_content-items-1">
                <span>Superior Oda</span>
              </div>
              <div className="superior-room_content-items-2">
                <Tooltip>
                  <Box>
                    <i class="fa-solid fa-bed"></i>
                  </Box>
                </Tooltip>

                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px", fontWeight: "300" }}>
                      Ek Yatak
                    </span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-plus"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px" }}>Elektonik Kasa</span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-vault"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px" }}>
                      Direkt Hatlı Telefon
                    </span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-phone"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Led TV</span>}
                >
                  <Box>
                    <i class="fa-solid fa-tv"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Duş</span>}
                >
                  <Box>
                    <i class="fa-solid fa-shower"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={
                    <span style={{ fontSize: "14px" }}>Çay,Kahve Set-up</span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-mug-hot"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Wifi</span>}
                >
                  <Box>
                    <i class="fa-solid fa-wifi"></i>
                  </Box>
                </Tooltip>
              </div>
              <div className="superior-room_content-items-3">
                <button>
                  <Link to="rooms/superior">Detay</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="deluxe-room">
          <div className="deluxe-room_content">
            <div className="deluxe-room_content-items">
              <div className="deluxe-room_content-items-1">
                <span>Deluxe Oda</span>
              </div>
              <div className="superior-room_content-items-2">
                <Tooltip
                  title={<span style={{ fontSize: "14px" }}>Büyük Yatak</span>}
                  placement="top"
                >
                  <Box>
                    <i class="fa-solid fa-bed"></i>
                  </Box>
                </Tooltip>

                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px", fontWeight: "300" }}>
                      Ek Yatak
                    </span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-plus"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px" }}>Elektonik Kasa</span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-vault"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px" }}>
                      Direkt Hatlı Telefon
                    </span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-phone"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Led TV</span>}
                >
                  <Box>
                    <i class="fa-solid fa-tv"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Duş</span>}
                >
                  <Box>
                    <i class="fa-solid fa-shower"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={
                    <span style={{ fontSize: "14px" }}>Çay,Kahve Set-up</span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-mug-hot"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Wifi</span>}
                >
                  <Box>
                    <i class="fa-solid fa-wifi"></i>
                  </Box>
                </Tooltip>
              </div>
              <div className="deluxe-room_content-items-3">
                <button>
                  <Link to="rooms/deluxe">Detay</Link>
                </button>
              </div>
            </div>
            <div className="deluxe-room_content-photo">
              <img
                src="https://www.ramadasakarya.com/uploads/269091.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="presidential-room">
        <div className="presidential-room_content">
          <div className="presidential-room_content-photo">
            <img
              src="https://www.ramadasakarya.com/uploads/508165.jpg"
              alt=""
            />
          </div>
          <div className="presidential-room_content-items">
            <div className="presidential-room_content-items-1">
              <span>Presidential Suite</span>
            </div>
            <div className="presidential-room_content-items-2">
              <i class="fa-solid fa-bed"></i>
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-vault"></i>
              <i class="fa-solid fa-phone"></i>
              <i class="fa-solid fa-tv"></i>
              <i class="fa-solid fa-shower"></i>
              <i class="fa-solid fa-mug-hot"></i>
              <i class="fa-solid fa-wifi"></i>
            </div>
            <div className="presidential-room_content-items-3">
              <button>Detay</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="rooms-wrap-2">
        <div className="junior-room">
          <div className="junior-room_content">
            <div className="junior-room_content-photo">
              <img
                src="https://www.ramadasakarya.com/uploads/270343.jpg"
                alt=""
              />
            </div>
            <div className="junior-room_content-items">
              <div className="junior-room_content-items-1">
                <span>Junior Suite</span>
              </div>
              <div className="junior-room_content-items-2">
                <Tooltip
                  title={<span style={{ fontSize: "14px" }}>Büyük Yatak</span>}
                  placement="top"
                >
                  <Box>
                    <i class="fa-solid fa-bed"></i>
                  </Box>
                </Tooltip>

                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px", fontWeight: "300" }}>
                      Ek Yatak
                    </span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-plus"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px" }}>Elektonik Kasa</span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-vault"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px" }}>
                      Direkt Hatlı Telefon
                    </span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-phone"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Led TV</span>}
                >
                  <Box>
                    <i class="fa-solid fa-tv"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Duş</span>}
                >
                  <Box>
                    <i class="fa-solid fa-shower"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={
                    <span style={{ fontSize: "14px" }}>Çay,Kahve Set-up</span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-mug-hot"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Wifi</span>}
                >
                  <Box>
                    <i class="fa-solid fa-wifi"></i>
                  </Box>
                </Tooltip>
              </div>
              <div className="junior-room_content-items-3">
                <button>
                  <Link to="rooms/junior">Detay</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="wa_guest-room">
          <div className="wa_guest-room_content">
            <div className="wa_guest-room_content-items">
              <div className="wa_guest-room_content-items-1">
                <span>Engellilere Uygun Misafir Odası</span>
              </div>
              <div className="wa_guest-room_content-items-2">
                <Tooltip
                  title={<span style={{ fontSize: "14px" }}>Büyük Yatak</span>}
                  placement="top"
                >
                  <Box>
                    <i class="fa-solid fa-bed"></i>
                  </Box>
                </Tooltip>

                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px", fontWeight: "300" }}>
                      Ek Yatak
                    </span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-plus"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px" }}>Elektonik Kasa</span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-vault"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top"
                  title={
                    <span style={{ fontSize: "14px" }}>
                      Direkt Hatlı Telefon
                    </span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-phone"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Led TV</span>}
                >
                  <Box>
                    <i class="fa-solid fa-tv"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Duş</span>}
                >
                  <Box>
                    <i class="fa-solid fa-shower"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={
                    <span style={{ fontSize: "14px" }}>Çay,Kahve Set-up</span>
                  }
                >
                  <Box>
                    <i class="fa-solid fa-mug-hot"></i>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="bottom"
                  title={<span style={{ fontSize: "14px" }}>Wifi</span>}
                >
                  <Box>
                    <i class="fa-solid fa-wifi"></i>
                  </Box>
                </Tooltip>
              </div>
              <div className="wa_guest-room_content-items-3">
                <button>
                  <Link to="rooms/eum">Detay</Link>
                </button>
              </div>
            </div>
            <div className="wa_guest-room_content-photo">
              <img
                src="https://www.ramadasakarya.com/uploads/103243.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
