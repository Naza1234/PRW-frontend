
goSeeDetails()
search()
goSeeDetailsCar()

function goSeeDetails() {
    var items = document.querySelectorAll(".property-list .items");
    if (items.length === 0) {
        // If imageParent doesn't exist, call the function again after 5 seconds
        console.log("yes");
        setTimeout(goSeeDetails, 5000); // 5000 milliseconds = 5 seconds
        return; // Exit the function to avoid further execution
    }
    
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
      
           element.addEventListener("click", () => {
                var idElement = element.getElementsByClassName("hid")[0];
                var id = idElement.textContent.trim();
                window.location = `${winUrl}/details.html?r=${id}`;
            })
      
    }
}
function goSeeDetailsCar() {
    var items = document.querySelectorAll(".property-list .items_car");
    console.log("item:",items);
    if (items.length === 0) {
        // If imageParent doesn't exist, call the function again after 5 seconds
        console.log("yes");
        setTimeout( goSeeDetailsCar, 5000); // 5000 milliseconds = 5 seconds
        return; // Exit the function to avoid further execution
    }
    
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
      
            element.addEventListener("click", () => {
                var idElement = element.getElementsByClassName("hid")[0];
                var id = idElement.textContent.trim();
                window.location = `${winUrl}/car details.html?r=${id}`;
            });
      
    }
}


function search(){
    var item = document.querySelector(".header-bottom-actions button.header-bottom-actions-btn")
    console.log(item);
    if(item){
       item.addEventListener("click",()=>{
        window.location=`${winUrl}/search.html`
       })
    }
}