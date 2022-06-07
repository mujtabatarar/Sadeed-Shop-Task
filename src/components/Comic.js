import React from "react";
import { useSelector, useDispatch } from "react-redux";




const Comic = ({ item }) => {
  const userData = useSelector((state) => state);
  let searchItem = userData.searchString;
let minPrice = userData.minPrice;
let maxPrice = userData.maxPrice;
//let avalaible = userData.isAvaliable;

let priceWise = false;



  //console.log(item.fields.Images.map((etem)=>etem.url);
  const favorite = (item) => {
    // getting the previous element and adding the new favorite item
    // here we will get the previous item and add the new fav element.
    var preData = JSON.parse(localStorage.getItem("favorites"));
    preData.push(item);
    localStorage.setItem("favorites", JSON.stringify(preData));
  };



if(item.fields['Unit cost'] > parseFloat(minPrice) || item.fields['Unit cost'] < parseFloat(maxPrice)){
  priceWise = true;
}

//{ priceWise ? <></> :

console.log("check ----------------------------------------------------------");
console.log(parseFloat(minPrice));
console.log(
  
)
//console.log(typeof(item.fields['Unit cost']) );
//console.log(typeof(parseFloat(minPrice)));
  return (
    <>
    { searchItem !== "" && !item.fields.Name.includes(searchItem) ? <></> : 


    <div className="content">
      <div className="content-inner">
        <div className="content-front">
          {/* {(<img src={item.fields.Images.map((etem)=>etem.url)} alt="" />) ? <img src={item.thumbnail.path + "/detail.jpg"} alt="" /> : <img src={item.thumbnail.path + "/standard_fantastic.jpg"} alt="" /> } */}
          <img src={item.fields.Images.map((etem)=>etem.url)} onerror="this.onerror=null;this.src={item.thumbnail.path + '/standard_fantastic.jpg'};" />
          
          
          <h1>{item.fields.Name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.fields.Name}
            </li>
            <li>
              {/*<button type="button" onClick={()=>favorite(item)}>Favorite</button>*/}
            </li>
          </ul>
        </div>
        <div className="content-back">
          <h1>Color</h1>
          <ul>
            <li>
              <strong></strong>{" "}
              {item.fields.Color ? item.fields.Color : "no color avaliable"}
            </li>
          </ul>
          {/**<ul>
            <h1>
              Comics {" "}
              <mark className="text-styling-total">
                <small>
                  Total: {"item.comics.available"}
                </small>
              </mark>
            </h1>
            {item.comics.items.map((item, index) => (
               <li key={index}>- {item.name}</li>
            ))}
          </ul>
          <ul>
            <h1>
              Series {" "}
              <mark className="text-styling-total">
                <small>
                  Total: {item.series.available}
                </small>
              </mark>
            </h1>
            {item.series.items.map((item, index) => (
             <li key={index}>- {item.name}</li>
            ))}
          </ul>
          <h1>
            Stories :{" "}
            <mark className="text-styling-total">
              <small>
                Total: {item.stories.available}
              </small>
            </mark>
          </h1>
          <ul>
            {item.stories.items.map((item, index) => (
              <li key={index}>- {item.name}</li>
            ))}
          </ul>
            */}
        </div>
      </div>
    </div>
}
    </>
  );
};

export default Comic;
