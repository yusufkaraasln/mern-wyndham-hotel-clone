import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./details-food.scss";

function DetailsFood() {
  const { search } = useLocation();

  const [foodDetail, setFoodDetail] = useState([]);
  const [foodId, setFoodId] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getFoodDetail = async () => {
      const res = await axios.get(`/foodFeatures${search}`);
      setFoodDetail(res.data.reverse());
      console.log(foodDetail);
    };
    getFoodDetail();
  }, [search]);

  const foodSearch = search.split("=")[1];
  console.log(foodSearch);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      food: foodSearch,
      price,
      title,
      description,
    };

    try {
      const res = await axios.post(`/foodFeatures`, newPost);

      console.log(res.data);

      alert("Food Added");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete("/foodFeatures/" + foodId._id);
      alert("Food Deleted");
      window.location.reload();
    } catch (e) {}
  };


    const handleUpdate = async (e) => {
          e.preventDefault()
          try {
            const res = await axios.put(`/foodFeatures/${foodId._id}`, {
              food: foodSearch,
              price,
              title,
              description,
            })
            alert("Food Updated")
            console.log(res.data);
            window.location.reload()

          } catch (error) {
            alert("Something went wrong")
          }
    }

   const updateController = (item)=>{
    setFoodId(item)
    setUpdateMode(true)
   }

  console.log(foodId);

  return (
    <div className="food-details">
      <div className="food-details-container">
        <ul>
          {foodDetail.map((item) => (
            <li key={item._id}>
              <div className="food-details-container-item">
                <div className="food-details-container-item-left">
                  <span>{item.price} ₺</span>
                </div>
                <div className="food-details-container-item-left">
                  <i
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setFoodId(item)}
                    onClick={handleDelete}
                    class="fa-solid fa-trash"
                  ></i>

                  <i
                    onClick={() => updateController(item)}
                     
                    class="fa-solid fa-wrench"
                  ></i>
                </div>
                <div className="food-details-container-item-right">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {          
      
          updateMode ? <></> : (

            <div className="food-details-add">
            <form onSubmit={handleSubmit}>
              <div className="food-item">
                <span>Ücreti</span>
                <input
                  required
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                />
              </div>
    
              <div className="food-item">
                <span>Ürün Adı</span>
                <input
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
              </div>
    
              <div className="food-item">
                <span>Ürün Detayları</span>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                />
              </div>
    
              <div className="food-item">
                <button type="submit">Ekle</button>
              </div>
            </form>
          </div>


          )
      
      
      }

      {updateMode && (
        <div className="food-details-update">
          <form onSubmit={handleUpdate}>
            <div className="food-item">
              <div className="update-mode">
              <span>Güncelle</span>
              <i onClick={()=>setUpdateMode(false)} class="fa-solid fa-circle-xmark"></i>
              </div>
              <span>Ücreti</span>
              <input
                required
                placeholder={foodId.price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
              />
            </div>

            <div className="food-item">
              <span>Ürün Adı</span>
              <input
                required
                placeholder={foodId.title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </div>

            <div className="food-item">
              <span>Ürün Detayları</span>
              <input
                 placeholder={foodId.description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
              />
            </div>

            <div className="food-item">
              <button type="submit">Güncelle</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default DetailsFood;
