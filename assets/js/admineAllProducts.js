console.log("we are in");


fetch(`${apiUrl}/property`)
.then(response => response.json())
.then(data => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
      showDate(0,element) 
  }
  change()
})
.catch(error => console.error('Error:', error));


fetch(`${apiUrl}/coverImage`)
.then(response => response.json())
.then(data => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    populateImage(element)
  }
  editElements()
  deleteElements()
})
.catch(error => console.error('Error:', error));



fetch(`${apiUrl}/otherImage`)
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => console.error('Error:', error));



function showDate(No,data){
   const container = document.querySelectorAll(" .property-list")[No]
   var html=`
     
   <li class="items">

   <div class="property-card">
    <p class="hid">${data._id}</p>
    <p class="hid">${data.Chart}</p>


    <div class="ed_sub">
         
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="edit">
      <path d="M6.44977 8.50008C6.38977 8.50008 6.32978 8.49006 6.26978 8.48006C6.07978 8.43006 5.90977 8.3101 5.80977 8.1401L4.24978 5.5801C3.86978 4.9601 3.74977 4.22008 3.92977 3.50008C4.09977 2.79008 4.53977 2.18007 5.16977 1.80007C5.78977 1.42007 6.52978 1.30006 7.24978 1.48006C7.96978 1.65006 8.56977 2.09005 8.94977 2.72005L10.5098 5.28011C10.7298 5.63011 10.6098 6.09008 10.2598 6.31008L6.83977 8.3901C6.71977 8.4601 6.58977 8.50008 6.44977 8.50008ZM6.58977 2.90011C6.35977 2.90011 6.13977 2.9601 5.94977 3.0801C5.66977 3.2501 5.46978 3.53006 5.38978 3.85006C5.30977 4.18006 5.35977 4.51006 5.52977 4.79006L6.69977 6.7101L8.83977 5.41005L7.66977 3.49007C7.49977 3.21007 7.21977 3.01007 6.89977 2.93007C6.78977 2.91007 6.68977 2.90011 6.58977 2.90011Z" fill="#fff"/>
      <path d="M11.4198 22.61C11.1198 22.61 10.8198 22.57 10.5298 22.48C9.64985 22.22 8.93985 21.6201 8.52985 20.7701L6.47985 16.5901C5.38985 14.3701 6.15985 11.7301 8.26985 10.4401L11.4298 8.52007C13.5398 7.23008 16.2499 7.76006 17.7199 9.75006L20.4899 13.49C21.0499 14.25 21.2598 15.16 21.0898 16.05C20.9198 16.94 20.3799 17.7101 19.5699 18.2001L13.1398 22.11C12.5998 22.44 12.0098 22.61 11.4198 22.61ZM13.8998 9.32006C13.3198 9.32006 12.7398 9.48004 12.1998 9.80004L9.03984 11.72C7.58984 12.6 7.06985 14.41 7.80985 15.93L9.85985 20.11C10.0898 20.57 10.4699 20.9 10.9399 21.04C11.4099 21.18 11.9098 21.1001 12.3398 20.8401L18.7699 16.93C19.2099 16.66 19.4999 16.2501 19.5999 15.7701C19.6899 15.2901 19.5799 14.8001 19.2699 14.3901L16.4998 10.6501C15.8698 9.78008 14.8998 9.32006 13.8998 9.32006Z" fill="#fff"/>
      <path d="M7.67992 12.4299C7.61992 12.4299 7.55993 12.4199 7.49993 12.4099C7.30993 12.3599 7.13992 12.2399 7.03992 12.0699L4.95994 8.64995C4.73994 8.29995 4.85994 7.83993 5.20994 7.61993L10.3299 4.49993C10.6799 4.28993 11.1499 4.39993 11.3599 4.74993L13.4399 8.16991C13.5399 8.33991 13.5799 8.53992 13.5299 8.73992C13.4799 8.92992 13.3599 9.09994 13.1899 9.19994L8.06994 12.3199C7.94994 12.3999 7.80992 12.4299 7.67992 12.4299ZM6.62994 8.51995L7.92992 10.6599L11.7699 8.31994L10.4699 6.17992L6.62994 8.51995Z" fill="#fff"/>
      <path d="M15.9599 20.27C15.7099 20.27 15.4599 20.14 15.3199 19.91L13.6699 17.2C13.4499 16.85 13.5699 16.39 13.9199 16.17C14.2699 15.96 14.7399 16.07 14.9499 16.42L16.5999 19.13C16.8199 19.48 16.6999 19.94 16.3499 20.16C16.2299 20.23 16.0899 20.27 15.9599 20.27Z" fill="#fff"/>
      <path d="M13.3998 21.8299C13.1498 21.8299 12.8998 21.6999 12.7598 21.4699L11.1098 18.7599C10.8898 18.4099 11.0098 17.9499 11.3598 17.7299C11.7098 17.5199 12.1798 17.6299 12.3898 17.9799L14.0398 20.6899C14.2598 21.0399 14.1398 21.4999 13.7898 21.7199C13.6698 21.7899 13.5298 21.8299 13.3998 21.8299Z" fill="#fff"/>
      <path d="M18.52 18.7101C18.27 18.7101 18.02 18.58 17.88 18.35L16.23 15.6401C16.01 15.2901 16.13 14.83 16.48 14.61C16.83 14.4 17.3 14.51 17.51 14.86L19.16 17.5701C19.38 17.9201 19.26 18.38 18.91 18.6C18.79 18.67 18.66 18.7101 18.52 18.7101Z" fill="#fff"/>
      </svg>
    
      
      
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="delete">
      <path d="M21 6.73001C20.98 6.73001 20.95 6.73001 20.92 6.73001C15.63 6.20001 10.35 6.00001 5.12 6.53001L3.08 6.73001C2.66 6.77001 2.29 6.47001 2.25 6.05001C2.21 5.63001 2.51 5.27001 2.92 5.23001L4.96 5.03001C10.28 4.49001 15.67 4.70001 21.07 5.23001C21.48 5.27001 21.78 5.64001 21.74 6.05001C21.71 6.44001 21.38 6.73001 21 6.73001Z" fill="#FF0000"/>
      <path d="M8.5 5.72C8.46 5.72 8.42 5.72 8.37 5.71C7.97 5.64 7.69 5.25 7.76 4.85L7.98 3.54C8.14 2.58 8.36 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64 2.76 9.62 2.9 9.47 3.79L9.24 5.09C9.18 5.46 8.86 5.72 8.5 5.72Z" fill="#FF0000"/>
      <path d="M15.21 22.75H8.79C5.3 22.75 5.16 20.82 5.05 19.26L4.4 9.19C4.37 8.78 4.69 8.42 5.1 8.39C5.52 8.37 5.87 8.68 5.9 9.09L6.55 19.16C6.66 20.68 6.7 21.25 8.79 21.25H15.21C17.31 21.25 17.35 20.68 17.45 19.16L18.1 9.09C18.13 8.68 18.49 8.37 18.9 8.39C19.31 8.42 19.63 8.77 19.6 9.19L18.95 19.26C18.84 20.82 18.7 22.75 15.21 22.75Z" fill="#FF0000"/>
      <path d="M13.66 17.25H10.33C9.92 17.25 9.58 16.91 9.58 16.5C9.58 16.09 9.92 15.75 10.33 15.75H13.66C14.07 15.75 14.41 16.09 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z" fill="#FF0000"/>
      <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#FF0000"/>
      </svg>
      
            </div>


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
         ${data.Name}
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
           <img src="../assets/images/customer-service.png" alt="contact" class="w-100">
         </figure>

         <div>
           <p class="author-name">
             <a href="#">William Seklo</a>
           </p>

           <p class="author-title">Estate Agents</p>
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
  var imageParent = document.querySelectorAll(".property-list .items");
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
                  return; // Optimization: Stop looping once the image is updated
              }
          }
      }
  }
}

function change() {
  var buttons = document.querySelectorAll(".buttons p");

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          // Add 'active' class to clicked button and remove it from others
          buttons.forEach(btn => {
              if (btn === button) {
                  btn.classList.add("active");
              } else {
                  btn.classList.remove("active");
              }
          });

          var items = document.querySelectorAll(".property-list .items");
          if (items.length === 0) {
              console.error("Error: Items not found.");
              return;
          }

          var buttonText = button.textContent.trim().toLowerCase();
          items.forEach(item => {
              var hidElement = item.getElementsByClassName("hid")[1];
              if (!hidElement) {
                  console.error("Error: hid element not found in item.");
                  return;
              }

              var itemType = hidElement.textContent.trim().toLowerCase();
              if(itemType + "s" === buttonText || buttonText === "all"){
                item.classList.remove("hid")
              }else{
                item.classList.add("hid")
              }
          });
      });
  });
}

change();

function deleteElements() {
  var items = document.getElementsByClassName("delete");
 for (let i = 0; i < items.length; i++) {
  const element = items[i];
  element.addEventListener("click",()=>{
    var item = element.parentElement.parentElement
    var id = item.getElementsByClassName("hid")[0].innerHTML.trim()
    console.log(id);
    deleteItem(id)
  })
 }
}

function editElements() {
  var items = document.getElementsByClassName("edit");
 for (let i = 0; i < items.length; i++) {
  const element = items[i];
  element.addEventListener("click",()=>{
    var item = element.parentElement.parentElement
    var id = item.getElementsByClassName("hid")[0].innerHTML.trim()
    console.log(id);
    window.location=`${winUrl}/admine-pages/editeproducts.HTML?r=${id}`
    // deleteItem(id)
  })
 }
}


async function deleteItem(itemId) {
  try {
      const response = await fetch(`${apiUrl}/property/${itemId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              // Include any additional headers if necessary, e.g., authorization tokens
          }
      });

      if (response.ok) {
          const result = await response.json();
          console.log('Item deleted successfully:', result);
          // Perform any additional actions, such as removing the item from the DOM
      } else {
          console.error('Failed to delete item:', response.statusText);
      }
  } catch (error) {
      console.error('Error:', error);
  }
}

