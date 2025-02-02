import Image from "next/image";
import styles from "./page.module.css";

function FruitsContainer(props) {
  const ItemContainer = [];
  props.dataName.items.map((el) => {
    if (props.dataName.items.length) {
      ItemContainer.push(<Items itemData={el}></Items>)
    }
  })

  return (<div className="fruitsContainer">
    <CategoryName dataCateName={props.dataName.categoryName}></CategoryName>
    {ItemContainer}
  </div>)
}
function CategoryName(props) {
  return (
    <div className="categoryName">
      <h1>{props.dataCateName}</h1>
    </div>
  )
}
function SearchItems(props) {
  return (
    <div className="details">
      <input placeholder="Search..." />
      <div className="detailsA">
        <input type="checkbox" />
        <p>Only show products in stock</p>
      </div>
    </div>
  )
}
function Title(props) {
  return (
    <div className="title">
      <div className="details">
        <h1>Name</h1>
        <h1>Price</h1>
      </div>
    </div>
  )
}
function Items(props) {

  return (
    <div className="fruitsItems">
      <div className="containerMain">
        <p>{props.itemData.name}</p>
        <p>{props.itemData.price}</p>
      </div>
    </div>
  )
}
const SIMPLE_DATA = [
  {
    categoryName: "Fruits",
    items: [
      {
        name: 'Apple',
        price: '$1'
      },
      {
        name: 'Dragonfruit',
        price: '$1'
      },
      {
        name: 'Passionfruit',
        price: '$2'
      }
    ]
  },
  {
    categoryName: "Vegetables",
    items: [
      {
        name: 'Spinach',
        price: '$2'
      },
      {
        name: 'Pumpkin',
        price: '$4'
      },
      {
        name: 'Peas',
        price: '$1'
      }
    ]
  },

]
export default function Home() {
  const ItemsContainer = [];
  SIMPLE_DATA.map((el) => {
    if (SIMPLE_DATA.length == SIMPLE_DATA.length) {
      ItemsContainer.push(<FruitsContainer dataName={el}></FruitsContainer>)
    }
  });

  return (<div className="bodyContainer">
    <div className="container">
      <div className="search">
        <SearchItems />
      </div>
      <Title />
      {ItemsContainer}
    </div>
  </div>);
}
