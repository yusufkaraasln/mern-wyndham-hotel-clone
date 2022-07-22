import React from "react";
import "./career.scss";
import { SliderData } from "../../../images/SliderData";
import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";
function Career() {
  const [pozition, setPozition] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [start_date, setStart_date] = useState("");
  const [address, setAddress] = useState("");
  const [birth_place, setBirth_place] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [nationality, setNationality] = useState("");
  const [sex, setSex] = useState("");
  const [marital_status, setMarital_status] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [military_status, setMilitary_status] = useState("");
  const [military_date, setMilitary_date] = useState("");
  const [driving_license, setDriving_license] = useState("");
  const [current_job, setCurrent_job] = useState("");
  const [smoking, setSmoking] = useState("");
  const [physical_disability, setPhysical_disability] = useState("");
  const [bachelor1, setBachelor1] = useState("");
  const [start_date1, setStart_date1] = useState("");
  const [end_date1, setEnd_date1] = useState("");
  const [degree1, setDegree1] = useState("");
  const [bachelor2, setBachelor2] = useState("");
  const [start_date2, setStart_date2] = useState("");
  const [end_date2, setEnd_date2] = useState("");
  const [degree2, setDegree2] = useState("");
  const [bachelor3, setBachelor3] = useState("");
  const [start_date3, setStart_date3] = useState("");
  const [end_date3, setEnd_date3] = useState("");
  const [degree3, setDegree3] = useState("");
  const [course_name1, setCourse_name1] = useState("");
  const [course_start_date1, setCourse_start_date1] = useState("");
  const [course_end_date1, setCourse_end_date1] = useState("");
  const [course_features1, setCourse_features1] = useState("");

  const [course_name2, setCourse_name2] = useState("");
  const [course_start_date2, setCourse_start_date2] = useState("");
  const [course_end_date2, setCourse_end_date2] = useState("");
  const [course_features2, setCourse_features2] = useState("");

  const [course_name3, setCourse_name3] = useState("");
  const [course_start_date3, setCourse_start_date3] = useState("");
  const [course_end_date3, setCourse_end_date3] = useState("");
  const [course_features3, setCourse_features3] = useState("");
  const [language1, setLanguage1] = useState("");
  const [reading1, setReading1] = useState("");
  const [writing1, setWriting1] = useState("");
  const [speaking1, setSpeaking1] = useState("");

  const [language2, setLanguage2] = useState("");
  const [reading2, setReading2] = useState("");
  const [writing2, setWriting2] = useState("");
  const [speaking2, setSpeaking2] = useState("");

  const [language3, setLanguage3] = useState("");
  const [reading3, setReading3] = useState("");
  const [writing3, setWriting3] = useState("");
  const [speaking3, setSpeaking3] = useState("");

  const [company1, setCompany1] = useState("");
  const [experience_start_date1, setExperience_start_date1] = useState("");
  const [position1, setPosition1] = useState("");
  const [experience_date1, setExperience_date1] = useState("");

  const [company2, setCompany2] = useState("");
  const [experience_start_date2, setExperience_start_date2] = useState("");
  const [position2, setPosition2] = useState("");
  const [experience_date2, setExperience_date2] = useState("");

  const [company3, setCompany3] = useState("");
  const [experience_start_date3, setExperience_start_date3] = useState("");
  const [position3, setPosition3] = useState("");
  const [experience_date3, setExperience_date3] = useState("");

  const [reference_name1, setReference_name1] = useState("");
  const [reference_job1, setReference_job1] = useState("");
  const [reference_phone1, setReference_phone1] = useState("");

  const [reference_name2, setReference_name2] = useState("");
  const [reference_job2, setReference_job2] = useState("");
  const [reference_phone2, setReference_phone2] = useState("");

  const [reference_name3, setReference_name3] = useState("");
  const [reference_job3, setReference_job3] = useState("");
  const [reference_phone3, setReference_phone3] = useState("");

  console.log(marital_status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = {
      pozition,
      price,
      start_date,
      name,
      address,
      birth_place,
      birth_date,
      nationality,
      sex,
      marital_status,
      phone,
      email,
      military_status,
      military_date,
      driving_license,
      current_job,
      smoking,
      physical_disability,
      bachelor1,
      start_date1,
      end_date1,
      degree1,
      bachelor2,
      start_date2,
      end_date2,
      degree2,
      bachelor3,
      start_date3,
      end_date3,
      degree3,
      course_name1,
      course_start_date1,
      course_end_date1,
      course_features1,
      course_name2,
      course_start_date2,
      course_end_date2,
      course_features2,
      course_name3,
      course_start_date3,
      course_end_date3,
      course_features3,

      language1,
      reading1,
      writing1,
      speaking1,

      language2,
      reading2,
      writing2,
      speaking2,

      language3,
      reading3,
      writing3,
      speaking3,

      company1,
      experience_start_date1,
      position1,
      experience_date1,

      company2,
      experience_start_date2,
      position2,
      experience_date2,

      company3,
      experience_start_date3,
      position3,
      experience_date3,

      reference_name1,
      reference_job1,
      reference_phone1,

      reference_name2,
      reference_job2,
      reference_phone2,

      reference_name3,
      reference_job3,
      reference_phone3,
    };
    try {
      const res = await axios.post("/career", newContact);
      console.log(res);
    } catch (e) {
      console.log("Error" + e);
    }
  };

  return (
    <div className="career">
      <Navbar></Navbar>
      <div className="career-header">
        <img src={SliderData[0].image} alt="" />
      </div>
      <div className="career-content">
        <form onSubmit={handleSubmit} style={{ width: "100%", margin: "auto" }}>
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
                  <input
                    onChange={(e) => setPozition(e.target.value)}
                    required
                    type="text"
                  />
                </div>
                <div className="career-content-form_business-content-item">
                  <span>Talep Edilen Ücret</span>
                  <input
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="career-content-form_business-content-item">
                  <span>İşe Başlayabileceğiniz Tarih</span>
                  <input
                    onChange={(e) => setStart_date(e.target.value)}
                    required
                    type="date"
                  />
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

                    <input
                      required
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_personal-content-group-item">
                    <span>Adres</span>

                    <input
                      required
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_personal-content-group-2">
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Doğum Yeri</span>

                    <input
                      required
                      onChange={(e) => setBirth_place(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Doğum Tarihi</span>

                    <input
                      required
                      onChange={(e) => setBirth_date(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Uyruğu</span>

                    <input
                      required
                      onChange={(e) => setNationality(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Cinsiyet</span>

                    <select
                      onChange={(e) => setSex(e.target.value)}
                      id="gender"
                    >
                      <option value="Boş Bırakılmış">Seçiniz</option>
                      <option value="Erkek">Erkek</option>
                      <option value="Kadın">Kadın</option>
                    </select>
                  </div>
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Medeni Hal</span>

                    <select
                      onChange={(e) => setMarital_status(e.target.value)}
                      id="married"
                    >
                      <option value="Boş Bırakılmış">Seçiniz</option>
                      <option value="Evli">Evli</option>
                      <option value="Bekar">Bekar</option>
                    </select>
                  </div>
                </div>
                <div className="career-content-form_personal-content-group-3">
                  <div className="career-content-form_personal-content-group-3-item">
                    <span>GSM Numarası</span>

                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_personal-content-group-3-item">
                    <span>E-Posta Adresi</span>

                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="career-content-form_personal-content-group-2">
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Askerlik Hizmeti</span>

                    <select
                      onChange={(e) => setMilitary_status(e.target.value)}
                      id="military"
                    >
                      <option value="Boş Bıkakılmış">Seçiniz</option>
                      <option value="Tamamlandı">Tamamlandı</option>
                      <option value="Tecilli">Tecilli</option>
                    </select>
                  </div>
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Tarih</span>

                    <input
                      onChange={(e) => setMilitary_date(e.target.value)}
                      required
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Ehliyet (Varsa Sınıfı)</span>

                    <select
                      onChange={(e) => setDriving_license(e.target.value)}
                      class="form-control"
                      name="ehliyet"
                      id="f14"
                    >
                      <option value="Boş Bırakılmış">Seçiniz / Choose</option>
                      <option value="Hayır">Hayır / No</option>
                      <option value="M Sınıfı">M</option>
                      <option value="A1 Sınıfı">A1</option>
                      <option value="A2 Sınıfı">A2</option>
                      <option value="A Sınıfı">A</option>
                      <option value="B1 Sınıfı">B1</option>
                      <option value="B Sınıfı">B</option>
                      <option value="BE Sınıfı">BE</option>
                      <option value="C1 Sınıfı">C1</option>
                      <option value="C1E Sınıfı">C1E</option>
                      <option value="C Sınıfı">C</option>
                      <option value="CE Sınıfı">CE</option>
                      <option value="D1 Sınıfı">D1</option>
                      <option value="D1E Sınıfı">D1E</option>
                      <option value="D Sınıfı">D</option>
                      <option value="DE Sınıfı">DE</option>
                      <option value="F Sınıfı">F</option>
                      <option value="G Sınıfı">G</option>
                    </select>
                  </div>
                  <div className="career-content-form_personal-content-group-2-item">
                    <span>Çalışma Durumu</span>

                    <select
                      onChange={(e) => setCurrent_job(e.target.value)}
                      class="form-control"
                      name="calismadurumu"
                      id="d15"
                    >
                      <option value="Boş Bırakılmış">Seçiniz / Choose</option>
                      <option value="Çalışıyorum">
                        Çalışıyorum / Employed
                      </option>
                      <option value="Çalışmıyorum">
                        Çalışmıyorum / Unemplomed
                      </option>
                    </select>
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

                    <select
                      onChange={(e) => setSmoking(e.target.value)}
                      class="form-control"
                      name="sigara"
                    >
                      <option value="Boş Bırakılmış">Seçiniz / Choose</option>
                      <option value="Evet">Evet / Yes</option>
                      <option value="Hayır">Hayır / No</option>
                    </select>
                  </div>
                  <div
                    style={{ width: "20%" }}
                    className="career-content-form_personal-content-group-2-item"
                  >
                    <span>Engel Durumunuz Varmıdır ?</span>

                    <select
                      onChange={(e) => setPhysical_disability(e.target.value)}
                      class="form-control"
                      name="engel"
                    >
                      <option value="Boş Bırakılmış">Seçiniz / Choose</option>
                      <option value="Evet">Evet / Yes</option>
                      <option value="Hayır">Hayır / No</option>
                    </select>
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

                    <input
                      onChange={(e) => setBachelor1(e.target.value)}
                      required
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Başlangıç Tarihi</span>

                    <input
                      onChange={(e) => setStart_date1(e.target.value)}
                      required
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Mezuniyet Tarihi</span>

                    <input
                      onChange={(e) => setEnd_date1(e.target.value)}
                      required
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Derece</span>

                    <input
                      onChange={(e) => setDegree1(e.target.value)}
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setBachelor2(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setStart_date2(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setEnd_date2(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setDegree2(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setBachelor3(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setStart_date3(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setEnd_date3(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setDegree3(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>

                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <span>Katıldığınız Kurs ve Seminerler</span>

                    <input
                      onChange={(e) => setCourse_name1(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Başlangıç Tarihi</span>

                    <input
                      onChange={(e) => setCourse_start_date1(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Bitirme Tarihi</span>

                    <input
                      onChange={(e) => setCourse_end_date1(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Konu</span>

                    <input
                      onChange={(e) => setCourse_features1(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCourse_name2(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCourse_start_date2(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCourse_end_date2(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCourse_features2(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCourse_name3(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCourse_start_date3(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCourse_end_date3(e.target.value)}
                      type="date"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCourse_features3(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <span>Yabancı Diller</span>

                    <input
                      onChange={(e) => setLanguage1(e.target.value)}
                      required
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Okuma</span>

                    <select
                      onChange={(e) => setReading1(e.target.value)}
                      name="dil1okuma"
                    >
                      <option value="Boş Bırakılmış">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Yazma</span>

                    <select
                      onChange={(e) => setWriting1(e.target.value)}
                      class="form-control"
                      name="dil1yazma"
                    >
                      <option value="Boş Bırakılmış">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Konuşma</span>

                    <select
                      onChange={(e) => setSpeaking1(e.target.value)}
                      class="form-control"
                      name="dil1konusma"
                    >
                      <option value="Boş Bırakılmış">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setLanguage2(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <select
                      onChange={(e) => setReading2(e.target.value)}
                      name="dil1okuma"
                    >
                      <option value="">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <select
                      onChange={(e) => setWriting2(e.target.value)}
                      class="form-control"
                      name="dil1yazma"
                    >
                      <option value="">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <select
                      onChange={(e) => setSpeaking2(e.target.value)}
                      class="form-control"
                      name="dil1konusma"
                    >
                      <option value="">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setLanguage3(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <select
                      onChange={(e) => setReading3(e.target.value)}
                      name="dil1okuma"
                    >
                      <option value="">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <select
                      onChange={(e) => setWriting3(e.target.value)}
                      class="form-control"
                      name="dil1yazma"
                    >
                      <option value="">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <select
                      onChange={(e) => setSpeaking3(e.target.value)}
                      class="form-control"
                      name="dil1konusma"
                    >
                      <option value="">Seçiniz / Choose</option>
                      <option value="İyi">İyi / Well</option>
                      <option value="Orta">Orta / Fair</option>
                      <option value="Az">Az / Poor</option>
                    </select>
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

                    <input
                      onChange={(e) => setCompany1(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Başlangıç Tarihi</span>

                    <input
                      onChange={(e) =>
                        setExperience_start_date1(e.target.value)
                      }
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Görev / Pozisyon</span>

                    <input
                      onChange={(e) => setPosition1(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Tarih</span>

                    <input
                      onChange={(e) => setExperience_date1(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCompany2(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) =>
                        setExperience_start_date2(e.target.value)
                      }
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setPosition2(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setExperience_date2(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setCompany3(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) =>
                        setExperience_start_date3(e.target.value)
                      }
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setPosition3(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setExperience_date3(e.target.value)}
                      type="text"
                    />
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

                    <input
                      onChange={(e) => setReference_name1(e.target.value)}
                      type="text"
                    />
                  </div>

                  <div className="career-content-form_education-content-group-item">
                    <span>Mesleği</span>

                    <input
                      onChange={(e) => setReference_job1(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <span>Telefonu</span>

                    <input
                      onChange={(e) => setReference_phone1(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setReference_name2(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setReference_job2(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setReference_phone2(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
                <div className="career-content-form_education-content-group">
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setReference_name3(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setReference_job3(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="career-content-form_education-content-group-item">
                    <input
                      onChange={(e) => setReference_phone3(e.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button type="submit">Gönder</button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Career;
