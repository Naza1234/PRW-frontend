console.log("we are in");


fetch(`${apiUrl}/property?limit=5&sortBy=date:desc`)
.then(response => response.json())
.then(data => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element.Chart === "house") {
      showDate(0,element,"items")
    }else{
      showDate(1,element,"items_car")
    }
  }
})
.catch(error => console.error('Error:', error));


fetch(`${apiUrl}/coverImage?limit=5&sortBy=date:desc`)
.then(response => response.json())
.then(data => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    populateImage(element)
  }
})
.catch(error => console.error('Error:', error));



fetch(`${apiUrl}/otherImage`)
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => console.error('Error:', error));



function showDate(No,data,itemType){
   const container = document.querySelectorAll(" .property-list")[No]
   var html=`
     
   <li class="${itemType}">

   <div class="property-card">
    <p class="hid">${data._id}</p>
     <figure class="card-banner">

       
         <img src="" alt="" class="w-100 item-image-cover">
      

       <div class="card-badge green ${data.for === "rentals"?"green":"orange"}">${data.for}</div>

       <div class="banner-actions">

         <button class="banner-actions-btn">
           <ion-icon name="location"></ion-icon>

           <address>${data.LocationName}</address>
         </button>
      
       </div>

     </figure>

     <div class="card-content">

       <div class="card-price">
         <strong>$${data.Price}</strong>/Month
       </div>

       <h3 class="h3 card-title">
         <a href="#">${data.Name}</a>
       </h3>

       <p class="card-text">
        ${data.Details}
       </p>

       <ul class="card-list" style="${data.Chart === "car" ? "opacity: 0;" : ""}">


         <li class="card-item">
           <strong>${data.Bedrooms}</strong>

           <ion-icon name="bed-outline"></ion-icon>

           <span>Bedrooms</span>
         </li>

         <li class="card-item">
           <strong>${data.Bathrooms}</strong>

           <ion-icon name="man-outline"></ion-icon>

           <span>Bathrooms</span>
         </li>

         <li class="card-item">
           <strong>${data.squareFit}</strong>

           <ion-icon name="square-outline"></ion-icon>

           <span>Square Ft</span>
         </li>

       </ul>

     </div>

     <div class="card-footer">

       <div class="card-author">

         <figure class="author-avatar">
           <img src="./assets/images/customer-service.png" alt="contact" class="w-100">
         </figure>

         <div>
           <p class="author-name">
             <a href="#">${data.landLordAgentsName || "not available"}</a>
           </p>

           <p class="author-title">${data.landLordAgentsContact || "not available"}</p>
         </div>

       </div>

       <!-- <div class="card-footer-actions">

         <button class="card-footer-actions-btn">
           <ion-icon name="resize-outline"></ion-icon>
         </button>

         <button class="card-footer-actions-btn">
           <ion-icon name="heart-outline"></ion-icon>
         </button>

         <button class="card-footer-actions-btn">
           <ion-icon name="add-circle-outline"></ion-icon>
         </button>

       </div> -->

     </div>

   </div>
 </li>

   `
   container.insertAdjacentHTML("beforeend",html)
}



function populateImage(data) {
  var items = document.querySelectorAll(".property-list .items");
var itemsCar = document.querySelectorAll(".property-list .items_car");

var  imageParent = [...items, ...itemsCar];
 console.log(imageParent);
  // var imageParent = document.querySelectorAll(".property-list .items") && document.querySelectorAll(".property-list .items_car");
  for (let i = 0; i < imageParent.length; i++) {
      const element = imageParent[i];
      var idElement = element.getElementsByClassName("hid")[0];
      if (idElement) {
          var id = idElement.textContent.trim();
          if (id === data.PropertyId) {
              var imageElement = element.getElementsByClassName("item-image-cover")[0];
              if (imageElement) {
                  imageElement.src = data.ImageUrl;
                  // Add style to unset the display property
                  element.style.display = "unset";
                  return; // Optimization: Stop looping once the image is updated
              }
          }
      }
  }
}