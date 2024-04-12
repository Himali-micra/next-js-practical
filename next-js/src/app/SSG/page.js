import React from "react";
import getproduct from "../../../service/getproduct";
import Link from "next/link";

const page = async () => {
  const getProductList = getproduct();
  let products = await getProductList;

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1>Product List</h1>

      {products.products?.map((item) => (
        <div key={item.id} className=" mt-5">
          <Link
            className="underline text-[20px] font-bold"
            href={`/SSG/${item.id}`}
          >
            ProductName : {item.title}
          </Link>
          {/* <img src={item.thumbnail} alt={item.title} /> */}
        </div>
      ))}
    </div>
  );
};

export default page;
{
}
