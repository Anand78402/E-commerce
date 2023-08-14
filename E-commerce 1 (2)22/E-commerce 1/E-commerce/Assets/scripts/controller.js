// import { printOneElement } from "./CartController.js";
window.addEventListener("load", manycalls);
function manycalls() {
  bindEvents();
  getData();
}

function bindEvents() {
  //   document.getElementById("but").addEventListener("click", getData);
  document.getElementById("but").addEventListener("click", openCart);
  document.getElementById("search-btn").addEventListener("click", search);
  document.getElementById("mob").addEventListener("click", printmob);
  document.getElementById("price").addEventListener("click", printlaptops);
  document.getElementById("all").addEventListener("click", printall);
  if(localStorage.getItem("isadded") !== null)
  {
    console.log(
      "present"
    )
  }
  else
  {
    localStorage.setItem("isadded",JSON.stringify(true));
  }

  //   document.getElementById("ht").addEventListener("click", hiCart);
}
let productArr = [];
export let cartArr = [];

const URL =
  "https://raw.githubusercontent.com/brainmentorspvtltd/json-data/main/products.json";

const getData = async () => {
  let respose = await fetch(URL);
  console.log(respose);
  let Data = await respose.json();
  console.log("Json is", Data);
  fillData(Data);
};

const printmob = () => {
  const newArr = productArr.filter((ele) => ele.category == "smartphones");
  const section = document.getElementById("products-list");
  section.innerHTML = "";
  newArr.map((ele) => printCards(ele));
};
const printlaptops = () => {
  const newArr = productArr.filter((ele) => ele.category == "laptops");
  const section = document.getElementById("products-list");
  section.innerHTML = "";
  newArr.map((ele) => printCards(ele));
};
const printall = () => {
  const section = document.getElementById("products-list");
  section.innerHTML = "";
  const newArr = productArr.slice();
  newArr.map((ele) => printCards(ele));
};
const search = () => {
  const textin = document.getElementById("search-text");
  const text = textin.value;

  const newArr = productArr.filter(
    (ele) => ele.id == text || ele.title == text
  );

  console.log(newArr);
  const section = document.getElementById("products-list");
  section.innerHTML = "";
  newArr.map((ele) => printCards(ele));
};
const openCart = (cartArr) => {
  window.location.href = "Cart.html";
  console.log("Add to Cart ", id);
  // let newArr = productArr.filter((ele) => ele.id == id);
  // console.log(newArr)
  // cartArr = [...cartArr, ...newArr];
 
  

  printCart(cartArr);
};

const fillData = (Data) => {
  const { products } = Data;
  productArr = [...products];
  console.log(productArr);
  showProducts();
};
const printCart = (cartArr) => { 
  console.log(cartArr)
// // console.log(cartArr)
// console.log(cartArr[0])
// // let cartArray=[];
// // cartArray.push()
//   // cartArr.map((ele, index) => {
//   //   console.log(ele[0]);
//   //   // printOneElement(ele[0]);
//   // });
  printOneElement(cartArr);
};

const openPage = (id) => {
  let Item = productArr.filter((ele) => ele.id == id);
  localStorage.setItem("Item", JSON.stringify(Item));
  console.log(Item);
  openProduct();
};
const openProduct = () => {
  window.location.href = "Product.html";
};

const addToCart = (id) => {
  
  console.log(localStorage.getItem("isadded"))
  if(JSON.parse(localStorage.getItem("isadded"))){
    console.log("abhi bhi chal ")
    console.log("Add to Cart ", id);
    
  let newArr = productArr.filter((ele) => ele.id == id);
  
  cartArr = [...cartArr, ...newArr];
  
    let arrr= cartArr.map((e)=> {
      return {...e,quantity:1};
    });
  let merge =[];
  if(localStorage.getItem("cartArr") !== null)
  {
    merge =[...arrr,...JSON.parse(localStorage.getItem("cartArr"))]
    localStorage.setItem("cartArr", JSON.stringify(merge));
    localStorage.setItem("isadded",false)
  }
  else{
    localStorage.setItem("cartArr", JSON.stringify(arrr));
    localStorage.setItem("isadded",false) 
  }

  }
  else
  {
    let newArr = productArr.filter((ele) => ele.id == id);
  
    cartArr = [...cartArr, ...newArr];
  
    let arrr= cartArr.map((e)=> {
      return {...e,quantity:1};
    });
 

      localStorage.setItem("cartArr", JSON.stringify(arrr));
  }

  
    // console.log("Cart Arr", merge);
};

const showProducts = () => {
  productArr.map((ele) => {
    printCards(ele, openPage, addToCart);
  });
};

const printCards = ({ images, title, rating, price, id }, openPage) => {
  const div = document.createElement("div");
  div.className = "card-div";
  const button = document.createElement("button");
  button.className = "card-but";
  button.onclick = () => openPage(id);
  const imgDiv = document.createElement("div");
  imgDiv.className = "img-div";
  const img = document.createElement("img");
  img.className = "card-img";
  img.src = `${images[0]}`;
  const titleDiv = document.createElement("div");
  titleDiv.className = "title-div";
  const titleHead = document.createElement("h3");
  titleHead.className = "title-head";
  titleHead.innerHTML = title;
  const priceDiv = document.createElement("div");
  priceDiv.className = "price-div";
  const priceHead = document.createElement("h4");
  priceHead.className = "price-head";
  priceHead.innerHTML = `Rs. ${price}`;
  const AdcBut = document.createElement("button");
  AdcBut.className = "AddToCart";
  AdcBut.innerText = "Add to Cart";
  AdcBut.onclick = () => addToCart(id);
  priceDiv.appendChild(priceHead);
  titleDiv.appendChild(titleHead);
  imgDiv.appendChild(img);
  button.appendChild(imgDiv);
  div.appendChild(button);
  div.appendChild(titleDiv);
  div.appendChild(priceDiv);
  div.appendChild(AdcBut);
  const section = document.getElementById("products-list");
  section.appendChild(div);
};
