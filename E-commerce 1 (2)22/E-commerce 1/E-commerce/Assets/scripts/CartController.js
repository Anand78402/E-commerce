// import { cartArr } from "./controller.js";
window.addEventListener("load", bind);
// let hel;
let newArr;
let miscalled =false;
let isdeleted=false;
const cartArr = JSON.parse(localStorage.getItem("cartArr"));
newArr = cartArr;
cartTotal(newArr);
const hel = document.getElementById("hel");
console.log("HEl is ", hel);
function bind() {
  call();
  // cart();

  console.log("Data is ", cartArr);
}
const call = () => {
  // hel.innerHTML = "";
   miscalled=true;
  if (newArr.length == 0) {
    let app= document.getElementById("append");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Cart is Empty Please Add some Items Here";
    app.appendChild(h1);
  }

  else
  {
    printOneElement();
  }
 
  // newArr.map((ele, index) => printOneElement(ele, index));
  // newArr.map((ele, index) => cart(ele,index));
};

function cartTotal(newArr) {
  console.log("my arr is:", newArr);
}

const DeleFromCart = (id) => {
   isdeleted=true;
  console.log("Id is ", id);
  console.log("xfgfg",newArr)
  newArr = newArr.filter((ele) => ele.id != id);
  localStorage.clear();
  localStorage.setItem("cartArr", JSON.stringify(newArr));
  printOneElement();
  
};

// const printOneElement = (ele, index) => {
//   const { images, title, rating, price, id } = ele[0];
//   console.log("fddd",ele)
//   console.log("Ele", ele);
//   console.log(title, price, id);
//   console.log("Title is ", title);
//   console.log("the price is ",price);
//   const div = document.createElement("div");
//   div.className = "card-div";
//   const imgDiv = document.createElement("div");
//   imgDiv.className = "img-div";
//   const img = document.createElement("img");
//   img.className = "card-img";
//   img.src = `${images[0]}`;
//   const titleDiv = document.createElement("div");
//   titleDiv.className = "title-div";
//   //   titleHead.innerHTML = title;
//   const titleHead = document.createElement("h4");
//   titleHead.className = "title-head";
//   titleHead.innerHTML = title;
//   const priceDiv = document.createElement("div");
//   priceDiv.className = "price-div";
//   const priceHead = document.createElement("h5");
//   priceHead.className = "price-head";
//   priceHead.innerHTML = price;
//   const AdcBut = document.createElement("button");
//   AdcBut.className = "AddToCart";
//   AdcBut.innerText = "Delete";
//   AdcBut.onclick = () => DeleFromCart(id);
//   imgDiv.appendChild(img);
//   priceDiv.appendChild(priceHead);
//   titleDiv.appendChild(titleHead);
//   div.appendChild(imgDiv);
//   div.appendChild(titleDiv);
//   div.appendChild(priceDiv);
//   div.appendChild(AdcBut);
//   hel.appendChild(div);
//   //   hel.innerHTML = "";
//   // cart();
//   // cart();
// };

const printOneElement = (cartArr, index) => {
  if(isdeleted){
    let tasks = document.getElementById("tasks");
   tasks.innerHTML="";
  }
  let cart = JSON.parse(localStorage.getItem("cartArr"));
  let quansum=0;
  let pricesum=0;
  cart.forEach((e)=>{
    quansum=quansum+e.quantity;
    pricesum=pricesum+e.price;
  })
  // console.log(quansum)

  let tasks = document.getElementById("tasks");
  if (localStorage.getItem("cartArr")==="[]") {
   call()
  }

  else{
    cart.forEach((element) => {
      // debugger;
      let tr = document.createElement("tr");
      tasks.appendChild(tr);
      tr.insertCell(0).innerText = element.title;
      tr.insertCell(1).innerText = element.price;
      tr.insertCell(2).innerText = 1;
      tr.insertCell(3).innerText = element.price;
      let image = document.createElement("img");
      image.setAttribute("width", 48);
      image.setAttribute("height", 48);
      image.setAttribute(
        "src",
        "https://img.icons8.com/fluency/48/filled-trash.png"
      );
      image.setAttribute("id",element.id)
      image.setAttribute("alt", "delete");
      image.addEventListener("click",()=>{DeleFromCart(element.id)});
      tr.insertCell(4).appendChild(image);
      // document.createElement("td");
    });
    let tr = document.createElement("tr");
    tasks.appendChild(tr);
    tr.insertCell(0).innerText = "";
    tr.insertCell(1).innerText = "Total";
    tr.insertCell(2).innerText = quansum;
    tr.insertCell(3).innerText = pricesum;
   
    
    if(miscalled || true)
    {

     
      if(localStorage.getItem("cartArr")==="[]"){ 
        let pay =document.getElementById("payment");
        pay.innerHTML="";
      }
    
     if(miscalled)
     {
     let d= document.createElement("div")
     d.innerHTML="Checkout "
     
      let scrip= document.createElement("script");
      scrip.setAttribute("src","https://checkout.razorpay.com/v1/payment-button.js")  ;
      scrip.setAttribute("data-payment_button_id","pl_LrGqndJ9xhRPfX");
      scrip.async=true;
      let pay =document.getElementById("payment");
      pay.appendChild(scrip);
     }
     
     miscalled=false;
    }
  }


};
{/* <img width="50" height="50" src="https://img.icons8.com/ios/50/plus--v1.png" alt="plus--v1"/>
<img width="50" height="50" src="https://img.icons8.com/ios-filled/50/minus.png" alt="minus"/> */}
{/* <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_LrGqndJ9xhRPfX" async> </script> </form> */}