import React from "react";
import { SliderData } from "../../../images/SliderData";
import { Junior } from "../../../images/Junior";
import "./aboutus.scss";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

function Aboutus() {
  return (
    <div className="aboutus">
        <Navbar></Navbar>
      <div className="header">
        <div className="header-img">
          <img src={SliderData[1].image} alt="" />
          <strong>Hakkımızda</strong>
        </div>
      </div>
      <div className="content">
        <div className="content-text">
          <h2>Ramada By Wyndham Sakarya</h2>
          <p>
            Dünyanın en yaygın uluslararası otel markası olan Wyndham Hotels &
            Group’un bir üyesi olarak, yüksek otel standartları ile tasarlanmış
            Ramada By Wyndham Sakarya Otel, sizleri ileri teknoloji, konfor ve
            estetik ile buluşturuyor. Lobideki sıcak bir gülümseme ile başlayan
            hoşgeldiniz, sizin Ramada By Wyndham Sakarya deneyiminizin
            başlangıcıdır.Kusursuz dizaynının özünde 60 Superior Oda, 28 Deluxe
            Oda, 2 Junior Suit, 2 King Suit ve 1 Engelli Odası olmak üzere
            toplam 93 odası bulunmaktadır.Tüm genel alanlar ve tüm odalarda
            ücretsiz kablosuz internet kullanımı, odalarda günlük birer adet 0,5
            lt su, çay ve kahve ücretsiz sunulmaktadır.
          </p>
          <p>
            Tüm misafirlerimiz, günlük streslerinden arınmak için içerisinde
            kapalı havuzun bulunduğu Ramada By Wyndham Sakarya Spa
            olanaklarından ücretsiz faydalanabilirler. Restoranlarımızda, damak
            zevkinizi yüceltmek için sizlere Türk Mutfağının ve Uluslararası
            mutfakların en lezzetli örneklerini sunuyoruz.
          </p>
          <p>
            Otelimiz bünyesinde bulunan Dolce Cafe & Restoran ile farklı
            lezzetleri tadabilir, içeceklerinizi yudumlayarak günün yorgunluğunu
            atabilirsiniz. Misyonumuz, geleneksel Türk misafirperverliği ile
            sizin rahatınızı üst seviyelere yükseltmek ve standartlarımızı en
            üst seviyede tutarak, sizlere unutulmaz bir konaklama deneyimi
            yaşatmaktır. Otelimizin hiçbir yerinde Alkol hizmeti
            verilmemektedir. Ramada By Wyndham Sakarya Otel, organizasyonlarınız
            ve toplantılarınızda size kendinizi rahat ve ayrıcalıklı
            hissedebileceğiniz, üst düzey bir hizmet sunar.
          </p>
          <p>
            Uluslararası Ramada standartlarına sahip toplantı odaları ve yüksek
            teknoloji ile donatılmış Business Centre'ı ile toplantılarınızı en
            verimli şekilde geçirebilirsiniz. Otelimiz bünyesinde 850 kişilik
            Balo Salonu, 100 ve 150 kişilik 2 adet toplantı salonu
            bulunmaktadır.
          </p>
          <p>
            Ramada By Wyndham Sakarya Hotel, şehrin en merkezi yerinde
            konumlanmıştır. Şehrin birçok merkezi alanına yürüme mesafesindedir.
            Ramada By Wyndham Sakarya Hotel, Cengiz Topel Havalimanı'na 30 km,
            Sabiha Gökçen Havalimanı'na 110 km mesafededir. Ayrıca Marmara
            bölgesinin birçok turistik merkezine de araç mesafesindedir. Sapanca
            15 km, Karasu 40 km, Kartepe sadece 35 km uzaklıktadır.
          </p>
        </div>
        <div className="content-details">
          <div className="content-details-item">
            <div className="content-details-item-text">
              <h3>Kusursuz ve Göz Alıcı</h3>
              <p>
                Kendinizi Evinizde hissedeceğiniz ; Modern çizgilerin
                kullanıldığı, Şıklığın ve Zerafetin buluştuğu Ramada By Wyndham
                Sakarya değerli misafirlerine muhteşem bir deneyim sunuyor.
              </p>
            </div>
            <div className="content-details-item-img">
              <img src={SliderData[2].image} alt="" />
            </div>
          </div>
          <div className="content-details-item">
            <div className="content-details-item-img">
              <img src={Junior[1].image} alt="" />
            </div>
            <div className="content-details-item-text">
              <h3>Geniş ve Ferah Odalar</h3>
              <p>
                Misafir odalarımız rahat nefes alabileceğiniz, güne mutlu
                başlayacağınız uyumaktan keyif alacağınız şekilde
                tasarlanmıştır. Ücretsiz Hızlı Kablosuz internet ve birçok
                uluslar arası kanalı ücretsiz izleyebileceğiniz akıllı
                televizyon ile değerli misafirlerin hoşça vakit geçireceği ve
                çalışabileceği konfordadır.
              </p>
            </div>
          </div>
          <div className="content-details-item">
            <div className="content-details-item-text">
              <h3>Justinyen Spa Merkezi</h3>
              <p>
                Değerli Misafirlerimizin ücretsiz faydalanabileceği Kapalı yüzme
                havuzu, Jakuzi , Türk hamamı, Sauna, Spor salonundan
                oluşmaktadır. Günün yorgunluğunu atabilmeniz için uzman
                terapistlerce masajın keyfini çıkarabilirsiniz.
              </p>
            </div>
            <div className="content-details-item-img">
              <img src={SliderData[6].image} alt="" />
            </div>
          </div>
        </div>
        <div className="content-features">
            <div className="content-features-items">
            <div className="content-features-item">
                <div className="content-features-item-img">
                <i class="fa-solid fa-utensils"></i>
                </div>
                <div className="content-features-item-text">
                Restoran & Cafe
                </div>
            </div> <div className="content-features-item">
                <div className="content-features-item-img">
                <i class="fa-solid fa-car"></i>
                </div>
                <div className="content-features-item-text">
                Otopark
                </div>
            </div> <div className="content-features-item">
                <div className="content-features-item-img">
                <i class="fa-solid fa-swatchbook"></i>
                </div>
                <div className="content-features-item-text">
                Restoran Menü
                </div>
            </div>
            </div>
            <div className="content-features-items">
            <div className="content-features-item">
                <div className="content-features-item-img">
                <i class="fa-solid fa-mobile"></i>
                </div>
                <div className="content-features-item-text">
                Business Centre
                </div>
            </div> <div className="content-features-item">
                <div className="content-features-item-img">
                <i class="fa-solid fa-shirt"></i>
                </div>
                <div className="content-features-item-text">
                Çamaşırhane
                </div>
            </div> <div className="content-features-item">
                <div className="content-features-item-img">
                <i class="fa-solid fa-wheelchair"></i>
                </div>
                <div className="content-features-item-text">
                Engelli Dostu
                </div>
            </div>
            </div>


        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Aboutus;
