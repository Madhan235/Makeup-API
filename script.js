async function getdata(){
    var result = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
var result1 = await result.json();
// console.log(result1);

var box = document.createElement("div");
box.className = "container";
box.style="text-align:center";
var heading = document.createElement('h1');
heading.innerHTML = "FashionProducts.in";
heading.style="color: pink";
box.append(heading);
var label = document.createElement('label');
label.innerHTML = "Search For Products";
label.style="color: orange";
var br = document.createElement('br');
var input = document.createElement('input');
input.setAttribute('type', 'search' );
input.id = "searchbox";

// var buttonbox = document.createElement("div");
// buttonbox.innerHTML = <button class="btn btn-info 
// btn-lg" id="searcher"> GO </button>

box.append(label,br,input);
 




document.body.append(box);
}

async function displaydata() {
var data = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
 var Result = await data.json();

 var container1=document.createElement("div");
 container1.className="container";
var row=document.createElement("div");
 row.classList.add("row","m-3");
container1.append(row);



     for(var i=0;i<Result.length;i++){
       try{ row.innerHTML+=
        `<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
         <img src="${Result[i].image_link}" class="card-img-top" alt="fashion product">
         <div class="card-body text-sucess">
        <h5 class="card-title">${Result[i].brand}</h5>
          <p class="card-text"> ${Result[i].name}</p>
          <p class="card-text"> ${Result[i].price_sign} :  ${Result[i].price} </p>
           <p class="card-text">ProductLink : ${Result[i].product_link}</p>  
 <p class= "card-text">${Result[i].description}</p>
     </div>
      </div>
      </div>`
         } catch(e){ console.log(error); };

        
    }
         document.body.append(container1);
};
  


getdata();
displaydata();

