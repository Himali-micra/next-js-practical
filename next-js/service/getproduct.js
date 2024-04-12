const getproduct = async () => {
  let result = await fetch("https://dummyjson.com/products");
  // console.log(result, "result");
  return result.json();
};

export default getproduct;
