

let items=JSON.parse(localStorage.getItem("listItems"))||[];

let container=document.getElementById("container");
displayItems(items);

console.log("items:",items)

function displayItems(items){
container.innerHTML="";
items.forEach((el,index)=>{
    let {name,image,price,color_size}=el;
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=image;
    img.id="image";
    let name1=document.createElement("h4");
    name1.innerText=name;
    let size=document.createElement("h4");
    size.innerText=color_size;
    let price1=document.createElement("h3");
    price1.innerText=`₹${price}`;
    price.id="priceid";
    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.id="btnid";
    btn.addEventListener("click",function(){
        deleteItem(index);
    })

    div.append(img,name1,color_size,price1,btn);
container.append(div);

})


}


function deleteItem(index){ 
    items.splice(index,1);
    console.log(items); 
    localStorage.setItem("listItems",JSON.stringify(items));
    displayItems(items);

}
