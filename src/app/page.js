import Image from "next/image";
import styles from "./page.module.css";

function FruitsContainer(props){
  return( <div className="fruitsContainer">
    <CategoryName dataCategory={props.dataCategory}></CategoryName>
    <Items></Items>
    <Items></Items>
    <Items></Items>
  </div>)
}
function CategoryName(props){
  return (
   <div className="categoryName">
    <h1>{props.dataCategory}</h1>
   </div>
  )
}
function Items(props){
  return(
    <div className="fruitsItems">
      <div className="containerMain">
        <p>Name</p>
        <p>Price</p>
      </div>
    </div>
  )
}
function SearchItems(props){
  return (
    <div className="details">
    <input placeholder="Search..."/>
    <div className="detailsA">
      <input type="checkbox"/>
      <p>Ony show products in stock</p>
    </div>
  </div>
  )
}
function Title(props){
  return (
    <div className="title">
    <div className="details">
      <h1>Name</h1>
      <h1>Price</h1>
    </div>
   </div>
  )
}

const SIMPLE_DATA = [
  {
    categoryName: "Fruits",
    items: []
  },
  {
    categoryName: "Fruits",
    items: []
  }
]

const DATA = [  { category: "Fruits", price: "$1", stocked: true, name: "Apple" }, 
   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },  
   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },  
   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },  
   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" }, 
   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }]

export default function Home() {

 return ( <div className="bodyContainer">
   <div className="container">
      <div className="search">
       <SearchItems/>
      </div>
      <Title/>
      <FruitsContainer dataCategory = {DATA[0].category}/>
      
   </div>

</div>)
}
