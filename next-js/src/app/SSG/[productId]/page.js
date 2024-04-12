import React from "react";
import getproduct from "../../../../service/getproduct";

const page = async (props) => {
  const getProductList = getproduct();
  const products = await getProductList;
  const currentId = props.params.productId;
  const productData = products?.products[currentId - 1];


  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h2>Products detail</h2>
      <h3>Id:{productData.id}</h3>
      <h3>Id:{productData.title}</h3>
      <h3>Name:{productData.description}</h3>
      <h3>Id:{productData.category}</h3>
    </div>
  );
};
export const generateStaticParams = async () => {
  const getProductList = getproduct();
  const products = await getProductList;
  return products.products?.map((product) => ({
    productId: product.id.toString(),
  }));
};
export default page;
