import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [products, setProducts] = useState([]);

  //hook to fetch data from api
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((response) => response.json())
      .then((products) => {
        // console.log(products);

        setProducts(products);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center mt-4">Cart Items</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">UserID</th>
              <th scope="col">Date</th>
              <th scope="col">Products</th>
            </tr>
          </thead>

          {products.map((pro) => (
              console.log(pro.products.productId)
            //   console.log(pro.id)

            // <tr key={pro.id}>
            //   <td>{pro.id}</td>
            //   <td>{pro.userId}</td>

            //   <td>{pro.date}</td>
            //   {/* <td>{pro.products}</td> */}
            // </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Fetch;
