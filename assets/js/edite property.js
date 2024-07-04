

const currentURL = window.location.search;
// get url params
 const searchParams= new URLSearchParams(currentURL)
 const itemId=searchParams.get("r")

 console.log(itemId);
 fetchAndLogAllData(apiUrl, itemId);
 
 async function fetchAndLogAllData(apiUrl, itemId) {
    try {
        let propertyData, coverImageData, otherImageData;

        // Fetch property data
        const propertyResponse = await fetch(`${apiUrl}/property/${itemId}`);
        if (!propertyResponse.ok) {
            throw new Error(`Failed to fetch property: ${propertyResponse.statusText}`);
        }
        propertyData = await propertyResponse.json();

        // Fetch cover image data
        const coverImageResponse = await fetch(`${apiUrl}/coverImage/${itemId}`);
        if (!coverImageResponse.ok) {
            throw new Error(`Failed to fetch cover image: ${coverImageResponse.statusText}`);
        }
        coverImageData = await coverImageResponse.json();

        // Fetch other image data
        const otherImageResponse = await fetch(`${apiUrl}/otherImage/by-id/${itemId}`);
        if (!otherImageResponse.ok) {
            throw new Error(`Failed to fetch other image: ${otherImageResponse.statusText}`);
        }
        otherImageData = await otherImageResponse.json();

        // Log all data together
        console.log(propertyData,coverImageData,otherImageData);
        showDate(propertyData,coverImageData,otherImageData);

    } catch (error) {
        console.error('Error:', error);
    }
}

// Bathrooms
// : 
// "3"
// Bedrooms
// : 
// "3"
// Chart
// : 
// "house"
// Details
// : 
// "Gorgeous 3 BD 3 BA single-family home in the dynamic Pico neighborhood of Santa Monica. The airy and unfurnished interior features hardwood floors throughout the home. The kitchen is fully equipped with new quartz countertops, resurfaced cabinets that offer plenty of storage, and ready-to-use appliances - refrigerator, gas stove, oven, microwave, and garbage disposal. Includes brand new washer and dryer, ceiling fans, and wall heating installed for your convenience. The exterior has a backyard and a completely landscaped front and side yard. Additional Details: Off-street parking is available. This is a pet-friendly home, the owner will allow small pets. There is also a pet deposit of $500/pet Smoking on the property is prohibited. Tenant is responsible for electricity, gas, cable, and internet. The landlord will cover the water, trash, and sewage. Nearby Parks: Memorial Park, Virginia Avenue Park, Gandara Park, and Broadway Park.\n"
// LocationMap
// : 
// "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4676.587919985154!2d-118.47847357427537!3d34.022137259592775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb30714e2467%3A0xed58ad59f11d8870!2s1809%20Michigan%20Ave%2C%20Santa%20Monica%2C%20CA%2090404!5e0!3m2!1sen!2sus!4v1719752391535!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
// LocationName
// : 
// "1809 Michigan Ave, Santa Monica, CA 90404 "
// Name
// : 
// "Gorgeous 3 BD 3 BA"
// Price
// : 
// "$7,195 / MO"
// createdAt
// : 
// "2024-06-30T13:00:54.731Z"
// for
// : 
// "rentals"
// squareFit
// : 
// "2400"






    function showDate(propertyData,coverImageData,otherImageData){
        const container = document.querySelectorAll(" .add-products")[0]
        var html=`
       
        <section class="top_section">
            <div class="hover-img main-img">
                <img src="" alt="" class="img-uploded main">
                <input type="file" required>
                <span>
                    <img src="../assets/images/photos.png" alt="" class="icon">
                </span>
            </div>
            <section class="other-imgs">
                <div class="hover-img other-img">
                    <img src="" alt="" class="img-uploded main">
                    <input type="file" required>
                    <span>
                        <img src="../assets/images/photos.png" alt="" class="icon">
                    </span>
                </div>
                <div class="hover-img other-img">
                    <img src="" alt="" class="img-uploded main">
                    <input type="file" required>
                    <span>
                        <img src="../assets/images/photos.png" alt="" class="icon">
                    </span>
                </div>
                <div class="hover-img other-img">
                    <img src="" alt="" class="img-uploded main">
                    <input type="file" required>
                    <span>
                        <img src="../assets/images/photos.png" alt="" class="icon">
                    </span>
                </div>
                <div class="hover-img other-img">
                    <img src="" alt="" class="img-uploded main">
                    <input type="file">
                    <span>
                        <img src="../assets/images/photos.png" alt="" class="icon">
                    </span>
                </div>
                <div class="hover-img other-img">
                    <img src="" alt="" class="img-uploded main">
                    <input type="file">
                    <span>
                        <img src="../assets/images/photos.png" alt="" class="icon">
                    </span>
                </div>
                <div class="hover-img other-img">
                    <img src="" alt="" class="img-uploded main">
                    <input type="file">
                    <span>
                        <img src="../assets/images/photos.png" alt="" class="icon">
                    </span>
                </div>
            </section>
        </section>
        <section class="other-info">
          <label for="name">
            product name
            <input type="text" id="name"  value="${propertyData.Name}">
          </label>
          <label for="price">
            product price
            <input type="text" id="price" value="${propertyData.Price}">
          </label>
          <label for="for">
            what type of sales
            <select name="for" id="for" value="${propertyData.for}">
                <option value="rentals">rentals</option>
                <option value="sales">sales</option>
            </select>
        </label>
          <label for="Chart">
            car or house
            <select name="Chart" id="Chart" value="${propertyData.Chart}">
                <option value="car">car</option>
                <option value="house">house</option>
            </select>
        </label>
        </section>
        <h2>
            details of the Products
        </h2>
        <section class="textarea" style="display: flex;" >
            <textarea name=""  placeholder="write something about the products" style="width: 100%;" >value="${propertyData.Details}"</textarea>
        </section>
        <h2>
            only if you are adding a house
        </h2>
        <section class="option">
            <label for="Bedrooms">
                product Bedrooms No
                <input type="text" id="Bedrooms" value="${propertyData.Bedrooms}">
              </label>

            <label for="Bathrooms">
                product Bathrooms No
                <input type="text" id="Bathrooms" value="${propertyData.Bathrooms}">
              </label>

            <label for="squareFit">
                product squareFit 
                <input type="text" id="squareFit" value="${propertyData.squareFit}">
              </label>
        </section>
        <h2>
         Location details
        </h2>
        <section class="option">
          <label for="LocationName">
              location 
              <input type="text" id="LocationName" value="${propertyData.LocationName}">
            </label>

          <label for="LocationMap">
              location Map
              <input type="text" id="LocationMap" value="${propertyData.LocationMap}">
            </label>
      </section>
        <h2>
         owner info
        </h2>
        <section class="option">
          <label for="Bedrooms">
              landlord / agent name
              <input type="text" id="Bedrooms" value="${propertyData.landLordAgentsName}">
            </label>

          <label for="Bathrooms">
              landlord /agent contact
              <input type="text" id="Bathrooms" value="${propertyData.landLordAgentsContact}">
            </label>
      </section>
        <button>
            add property
        </button>
     
    
        `
        container.insertAdjacentHTML("beforeend",html)
     }
     
     
     