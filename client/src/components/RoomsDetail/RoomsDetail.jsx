import React from "react";
import "./roomsDetail.scss";
import RoomsSingle from "./Rooms-single/RoomsSingle";
import {Link, Outlet} from "react-router-dom"
function RoomsDetail() {
  return (
    <div className="rooms-detail">
      <div className="header">
        <img src="https://www.ramadasakarya.com/uploads/103243.jpg" alt="" />
        <span>Odalarımız</span>
      </div>
      <div className="content">
        <div className="content-rooms">
          <div className="superior-room">
            <div className="superior-room_content">
              <div className="superior-room_content-photo">
                <img
                  src="https://www.ramadasakarya.com/uploads/605381.jpg"
                  alt=""
                />
                <div className="superior-room_content-photo-icons">
                  <i class="fa-solid fa-bed"></i>
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-vault"></i>
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-solid fa-tv"></i>
                  <i class="fa-solid fa-shower"></i>
                  <i class="fa-solid fa-mug-hot"></i>
                  <i class="fa-solid fa-wifi"></i>
                </div>
              </div>
              <div className="superior-room_content-items">
                <div className="superior-room_content-items-1">
                  <span>Superior Oda</span>
                </div>
                <div className="superior-room_content-items-2">
                  <ul>
                    <li>Odadan ayarlanabilen klima sistemi</li>
                    <li>Oda içi elektronik kasa</li>
                    <li>Kablosuz internet hizmeti</li>
                    <li>Çay,Kahve Set-up</li>
                    <li>Saç kurutma makinesi</li>
                    <li>Led Televizyon</li>
                    <li>Direkt hatlı Telefon</li>
                    <li>Minibar</li>
                    <li>Elektronik kapı kilit sistemi</li>
                    <li>Duman dedektörü ve sprinkler</li>
                    <li>Ütü ve Ütü masası (istek üzerine)</li>
                  </ul>
                </div>
                <div className="superior-room_content-items-3">
                 <Link to="/rooms/superior"><button>Detay</button></Link>

                </div>
              </div>
            </div>
          </div>{" "}
          <div className="superior-room">
            <div className="superior-room_content">
              <div className="superior-room_content-photo">
                <img
                  src="https://www.ramadasakarya.com/uploads/269091.jpg"
                  alt=""
                />
                <div className="superior-room_content-photo-icons">
                  <i class="fa-solid fa-bed"></i>
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-vault"></i>
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-solid fa-tv"></i>
                  <i class="fa-solid fa-shower"></i>
                  <i class="fa-solid fa-mug-hot"></i>
                  <i class="fa-solid fa-wifi"></i>
                </div>
              </div>
              <div className="superior-room_content-items">
                <div className="superior-room_content-items-1">
                  <span>Deluxe Oda</span>
                </div>
                <div className="superior-room_content-items-2">
                  <ul>
                    <li>Balkon</li>
                    <li>Odadan ayarlanabilen klima sistemi</li>
                    <li>Oda içi elektronik kasa</li>
                    <li>Kablosuz internet hizmeti</li>
                    <li>Çay,Kahve Set-up</li>
                    <li>Saç kurutma makinesi</li>
                    <li>Led Televizyon</li>
                    <li>Direkt hatlı Telefon</li>
                    <li>Minibar</li>
                    <li>Elektronik kapı kilit sistemi</li>
                    <li>Duman dedektörü ve sprinkler</li>
                    <li>Ütü ve Ütü masası (istek üzerine)</li>
                  </ul>
                </div>
                <div className="superior-room_content-items-3">
                 
                <Link to="/rooms/deluxe"><button>Detay</button></Link>

                </div>
              </div>
            </div>
          </div>{" "}
          <div className="superior-room">
            <div className="superior-room_content">
              <div className="superior-room_content-photo">
                <img
                  src="https://www.ramadasakarya.com/uploads/270343.jpg"
                  alt=""
                />
                <div className="superior-room_content-photo-icons">
                  <i class="fa-solid fa-bed"></i>
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-vault"></i>
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-solid fa-tv"></i>
                  <i class="fa-solid fa-shower"></i>
                  <i class="fa-solid fa-mug-hot"></i>
                  <i class="fa-solid fa-wifi"></i>
                </div>
              </div>
              <div className="superior-room_content-items">
                <div className="superior-room_content-items-1">
                  <span>Junior Suite</span>
                </div>
                <div className="superior-room_content-items-2">
                  <ul>
                    <li>Mini Toplantı ve çalışma masası</li>
                    <li>Odadan ayarlanabilen klima sistem</li>
                    <li>Odadan ayarlanabilen klima sistemi</li>
                    <li>Oda içi elektronik kasa</li>
                    <li>Kablosuz internet hizmeti</li>
                    <li>Çay,Kahve Set-up</li>
                    <li>Saç kurutma makinesi</li>
                    <li>2 adet Led Televizyon</li>
                    <li>Direkt hatlı Telefon</li>
                    <li>Minibar</li>
                    <li>Elektronik kapı kilit sistemi</li>
                    <li>Duman dedektörü ve sprinkler</li>
                    <li>Ütü ve Ütü masası (istek üzerine)</li>
                  </ul>
                </div>
                <div className="superior-room_content-items-3">
                
                <Link to="/rooms/junior"><button>Detay</button></Link>

                </div>
              </div>
            </div>
          </div>{" "}
          <div className="superior-room">
            <div className="superior-room_content">
              <div className="superior-room_content-photo">
                <img
                  src="https://www.ramadasakarya.com/uploads/508165.jpg"
                  alt=""
                />
                <div className="superior-room_content-photo-icons">
                  <i class="fa-solid fa-bed"></i>
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-vault"></i>
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-solid fa-tv"></i>
                  <i class="fa-solid fa-shower"></i>
                  <i class="fa-solid fa-mug-hot"></i>
                  <i class="fa-solid fa-wifi"></i>
                </div>
              </div>
              <div className="superior-room_content-items">
                <div className="superior-room_content-items-1">
                  <span>Presidential Suite</span>
                </div>
                <div className="superior-room_content-items-2">
                  <ul>
                    <li>Koltuk Takımı</li>
                    <li>Özel Tasarım Yuvarlak Yatak</li>
                    <li>Jakuzi</li>
                    <li>Odadan ayarlanabilen klima sistemi</li>
                    <li>Oda içi elektronik kasa</li>
                    <li>Kablosuz internet hizmeti</li>
                    <li>Çay,Kahve Set-up</li>
                    <li>Saç kurutma makinesi</li>
                    <li>Led Televizyon</li>
                    <li>Direkt hatlı Telefon</li>
                    <li>Minibar</li>
                    <li>Elektronik kapı kilit sistemi</li>
                    <li>Duman dedektörü ve sprinkler</li>
                    <li>Ütü ve Ütü masası (istek üzerine)</li>
                  </ul>
                </div>
                <div className="superior-room_content-items-3">
                <Link to="/rooms/presidential"><button>Detay</button></Link>

                </div>
              </div>
            </div>
          </div>{" "}
          <div className="superior-room">
            <div className="superior-room_content">
              <div className="superior-room_content-photo">
                <img
                  src="https://www.ramadasakarya.com/uploads/103243.jpg"
                  alt=""
                />
                <div className="superior-room_content-photo-icons">
                  <i class="fa-solid fa-bed"></i>
                  <i class="fa-solid fa-plus"></i>
                  <i class="fa-solid fa-vault"></i>
                  <i class="fa-solid fa-phone"></i>
                  <i class="fa-solid fa-tv"></i>
                  <i class="fa-solid fa-shower"></i>
                  <i class="fa-solid fa-mug-hot"></i>
                  <i class="fa-solid fa-wifi"></i>
                </div>
              </div>
              <div className="superior-room_content-items">
                <div className="superior-room_content-items-1">
                  <span>Engellilere Uygun Misafir Odası</span>
                </div>
                <div className="superior-room_content-items-2">
                  <ul>
                    <li>Odadan ayarlanabilen klima sistemi</li>
                    <li>Oda içi elektronik kasa</li>
                    <li>Kablosuz internet hizmeti</li>
                    <li>Çay,Kahve Set-up</li>
                    <li>Saç kurutma makinesi</li>
                    <li>Led Televizyon</li>
                    <li>Direkt hatlı Telefon</li>
                    <li>Minibar</li>
                    <li>Elektronik kapı kilit sistemi</li>
                    <li>Duman dedektörü ve sprinkler</li>
                    <li>Ütü ve Ütü masası (istek üzerine)</li>
                  </ul>
                </div>
                <div className="superior-room_content-items-3">
                <Link to="/rooms/eum"><button>Detay</button></Link>
                  
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="content-sidebar">
          <div className="features">
            <span>Genel Özellikler</span>
            <ul>
              <li>
                <i class="fa-solid fa-plus"></i>
                <span>Ücretsiz Wifi</span>
              </li>
              <li>
                <i class="fa-solid fa-tv"></i>
                <span>Çamaşırhane</span>
              </li>
              <li>
                <i class="fa-solid fa-shower"></i>
                <span>Yüzme Havuzu</span>
              </li>
              <li>
                <i class="fa-solid fa-mug-hot"></i>
                <span>Restoran & Cafe</span>
              </li>
              <li>
                <i class="fa-solid fa-wifi"></i>
                <span>Otopark</span>
              </li>
            </ul>
          </div>
          <div className="contact-us">
            <i className="fa fa-phone"></i>
            <span>Yardıma mı ihtiyacınız var? Bizi arayın</span>
            <a href="tel://02646662244">0264 666 22 44</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RoomsDetail;
