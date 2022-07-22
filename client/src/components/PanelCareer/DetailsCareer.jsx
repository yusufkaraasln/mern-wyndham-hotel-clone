import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./details-career.scss";

function DetailsCareer() {
  const location = useLocation();

  const [careerDetail, setCareerDetail] = useState([]);
  const path = location.pathname.split("/")[3];
  const [loading, setLoading] = useState(true);

  

  
  
  useEffect(() => {
    const getCareerDetail = async () => {
        try{
          const res = await axios.get(`/career/${path}`);
      setCareerDetail(res.data);
        }
        catch(e){
          console.log(e);
        } 
        finally{
          setLoading(false);
        }
      
    };
    getCareerDetail();
  }, [path]);


  const applyDate = new Date(careerDetail.createdAt);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  const applyDateString = applyDate.toLocaleDateString("tr-TR",options);
 
  return (
    <div className="career">
      <div className="career-content">
        <div className="career-content-header">
          <span>Kariyer</span>
        </div>
        <div style={{ margin: "auto" }} className="career-content-form">
          <div className="career-content-form_business">
            <div className="career-content-form_business-header">
              <span>İŞ BAŞVURU FORMU</span>
            </div>
            <div className="career-content-form_business-content">
              <div className="career-content-form_business-content-item">
                <span>Başvurulan Pozisyon</span>
                <span>{loading ? "Yükleniyor..." :careerDetail.pozition}</span>
              </div>
              <div className="career-content-form_business-content-item">
                <span>Talep Edilen Ücret</span>
                <span>{loading ? "Yükleniyor..." :careerDetail.price}</span>
              </div>
              <div className="career-content-form_business-content-item">
                <span>İşe Başlayabileceğiniz Tarih</span>
                <span>{loading ? "Yükleniyor..." :  careerDetail.start_date}</span>
              </div>
              <div className="career-content-form_business-content-item">
                <span>Başvuru Tarihi</span>
                <span>{ loading ? "Yükleniyor..." : applyDateString}</span>
              </div>
            </div>
          </div>

          <div className="career-content-form_personal">
            <div className="career-content-form_personal-header">
              <span>KİŞİLER BİLGİLER</span>
            </div>

            <div className="career-content-form_personal-content">
              <div className="career-content-form_personal-content-group">
                <div className="career-content-form_personal-content-group-item">
                  <span>Adı - Soyadı</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.name}</span>
                </div>
                <div className="career-content-form_personal-content-group-item">
                  <span>Adres</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.address}</span>
                </div>
              </div>
              <div className="career-content-form_personal-content-group-2">
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Doğum Yeri</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.birth_place}</span>
                </div>
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Doğum Tarihi</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.birth_date}</span>
                </div>
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Uyruğu</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.nationality}</span>
                </div>
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Cinsiyet</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.sex}</span>
                </div>
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Medeni Hal</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.marital_status}</span>
                </div>
              </div>
              <div className="career-content-form_personal-content-group-3">
                <div className="career-content-form_personal-content-group-3-item">
                  <span>GSM Numarası</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.phone}</span>
                </div>
                <div className="career-content-form_personal-content-group-3-item">
                  <span>E-Posta Adresi</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.email}</span>
                </div>
              </div>
              <div className="career-content-form_personal-content-group-2">
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Askerlik Hizmeti</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.military_status}</span>
                </div>
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Tarih</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.military_date}</span>
                </div>
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Ehliyet (Varsa Sınıfı)</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.driving_license}</span>
                </div>
                <div className="career-content-form_personal-content-group-2-item">
                  <span>Çalışma Durumu</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.current_job}</span>
                </div>
              </div>
              <div
                style={{ justifyContent: "space-around" }}
                className="career-content-form_personal-content-group-2"
              >
                <div
                  style={{ width: "20%" }}
                  className="career-content-form_personal-content-group-2-item"
                >
                  <span>Sigara Kullanıyormusunuz ?</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.smoking}</span>
                </div>
                <div
                  style={{ width: "20%" }}
                  className="career-content-form_personal-content-group-2-item"
                >
                  <span>Engel Durumunuz Varmıdır ?</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.physical_disability}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="career-content-form_education">
            <div className="career-content-form_education-header">
              <span>EĞİTİM BİLGİLERİ</span>
            </div>

            <div className="career-content-form_education-content">
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>Mezun Olunan Okul ve Bölüm</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.bachelor1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Başlangıç Tarihi</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.start_date1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Mezuniyet Tarihi</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.end_date1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Derece</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.degree1}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.bachelor2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.start_date2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.end_date2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.degree2}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.bachelor3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.start_date3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.end_date3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.degree3}</span>
                </div>
              </div>

              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>Katıldığınız Kurs ve Seminerler</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.course_name1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Başlangıç Tarihi</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.course_start_date1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Bitirme Tarihi</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.course_end_date1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Konu</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.course_features1}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.course_name2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.course_start_date2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.course_end_date2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.course_features2}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.course_name3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.course_start_date3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.course_end_date3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.course_features3}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>Yabancı Diller</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.language1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Okuma</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.reading1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Yazma</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.writing1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Konuşma</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.speaking1}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.language2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.reading2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.writing2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.speaking2}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.language3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.reading3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.writing3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.speaking3}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="career-content-form_education">
            <div className="career-content-form_education-header">
              <span>İŞ DENEYİMİNİZ</span>
            </div>

            <div className="career-content-form_education-content">
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>Firma Ünvan</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.company1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Başlangıç Tarihi</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.experience_start_date1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Görev / Pozisyon</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.position1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Tarih</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.experience_date1}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.company2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.experience_start_date2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.position2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.experience_date2}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.company3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.experience_start_date3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.position3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.experience_date3}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="career-content-form_education">
            <div className="career-content-form_education-header">
              <span>ŞAHSİ REFERANSLARINIZ</span>
            </div>

            <div className="career-content-form_education-content">
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>Adı - Soyadı</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_name1}</span>
                </div>

                <div className="career-content-form_education-content-group-item">
                  <span>Mesleği</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_job1}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>Telefonu</span>

                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_phone1}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_name2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_job2}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_phone2}</span>
                </div>
              </div>
              <div className="career-content-form_education-content-group">
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_name3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_job3}</span>
                </div>
                <div className="career-content-form_education-content-group-item">
                  <span>{loading ? "Yükleniyor..." :careerDetail.reference_phone3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCareer;
