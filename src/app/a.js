import Image from "next/image";
import style from "./globals.css";
function ProductRow(props) {
  return (
    <div id="d1" className="productRow">
      <p className="productName">{props.items.name}</p>
      <p className="productPrice">{props.items.price}</p>
    </div>
  );
}
function ProductCategoryRow(props) {
  console.log(props.categoryName.products, "pr");
  const meals = [];
  for (let i = 0; i < props.categoryName.products.length; i++) {
    meals.push(
      <ProductRow items={props.categoryName.products[i]}></ProductRow>
    );
  }
  return (
    <div>
      <div className="productCategoryRow">{props.categoryName.category}</div>{" "}
      {meals}
    </div>
  );
}
function ProductTable() {
  const datas = [];
  for (let i = 0; i < DATA.length; i++) {
    datas.push(
      <ProductCategoryRow categoryName={DATA[i]}></ProductCategoryRow>
    );
  }
  return (
    <div id="productTable">
      {" "}
      <div id="category">
        <p id="categoryName">Name</p> <p id="categroyPrice">Price</p>{" "}
      </div>
      <div className="rows"> {datas} </div>{" "}
    </div>
  );
}
function SearchBar() {
  return (
    <div id="searchBar">
      {" "}
      <input id="search" placeholder="Search..."></input>
      <div id="checkSection">
        {" "}
        <input type="checkbox" id="checkBox"></input>
        <p id="checkText">Only in stock</p>{" "}
      </div>
    </div>
  );
}
const DATA = [
  {
    category: "Fruits",
    products: [
      { price: "$1", stocked: true, name: "Apple" },
      { price: "$1", stocked: true, name: "Dragonfruit" },
      { price: "$2", stocked: false, name: "Passionfruit" },
    ],
  },
  {
    category: "Vegetables",
    products: [
      { price: "$2", stocked: true, name: "Spinach" },
      { price: "$4", stocked: false, name: "Pumpkin" },
      { price: "$1", stocked: true, name: "Peas" },
    ],
  },
];
export default function Home() {
  return (
    <div id="body">
      {" "}
      <div id="container">
        <SearchBar></SearchBar> <ProductTable></ProductTable>
      </div>{" "}
    </div>
  );
}
