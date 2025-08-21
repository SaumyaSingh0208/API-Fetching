import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

const App=()=>{

  const [productList, setProductList]=useState([]);

  // *************************  Using Fetch  ******************************//
  // Uncomment the below code for checking with fetch
  // const apiFetching=async()=>{
  //   try {
  //     const response=await fetch("https://dummyjson.com/products",{
  //     method:"GET",
  //   });
  //   const {products} = await response.json();
  //   setProductList(products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // console.log("response", productList);

  // useEffect(()=>{
  //   apiFetching();
  // },[])


  // *************************  Using Axios  ******************************//

  const apiFetchingUsingAxios=async()=>{
    const {data} = await axios.get("https://dummyjson.com/products");
    setProductList(data?.products);
  }

  useEffect(()=>{
    apiFetchingUsingAxios();
  },[]);

  return(<>
  <h1>Our Products</h1>
  <div className="product-conatiner">
   {productList?.map((products)=>{
    return(
      <div className="products">
         <img src={products?.images[0]} alt="" className="product-image"></img>
         <p>{products?.brand}</p>
         <button>Buy Now</button>
      </div>
    )
   })}
  </div>
  </>
  
  );
}

export default App;