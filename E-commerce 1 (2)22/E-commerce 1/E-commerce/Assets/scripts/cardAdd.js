window.addEventListener("load",bindEvents);
let newArr;
const cartArr = JSON.parse(localStorage.getItem("cartArr"));
newArr = cartArr;
cartTotal(newArr);
function cartTotal(newArr){
    console.log("my arr is ad:",newArr);
  }
function bindEvents(newArr){
 cart(newArr);
}

// const call(){
//   newArr.map((ele, index) => cart(ele, index));

// }

const cart=(newArr,index)=>{

    const { images, title, rating, price, id } = ele[0];

    const itemTitle=document.querySelector(".tasks");
    itemTitle.innerHTML="title";
    console.log("the title is ha ",title)
}