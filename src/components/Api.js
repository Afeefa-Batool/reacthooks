import React, { useEffect, useState } from "react";

const Api = () => {
  //hook for getting the data from API
  const [products, setProducts] = useState([]);

  // useEffect(()=>{

  // })
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        // console.log(products)
        setProducts(products);
      });
  });

  // fetch('https://fakestoreapi.com/products/1')
  // .then(res=>res.json())
  // .then(json=>console.log(json))

  return (
    <div>
      <h1 className="text-center mt-4">List of All Products</h1>
      <div className="row">
        {products.map((pro) => (
   
          
              <div className="col-lg-4">
                <div className="card " style={{ width: "18rem" }}>
                  <img src={pro.image} className="card-img-top img-fluid img-responsive" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pro.title}</h5>
                    <p className="card-text">{pro.description}</p>
                    <a href="#" className="btn btn-primary">
                      {pro.rating.rate}
                    </a>
                  </div>
                </div>
              </div>
         
        
        ))}
                 </div>
                 </div>
   

  );
};

export default Api;
