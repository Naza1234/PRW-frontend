

const currentURL = window.location.search;
// get url params
 const searchParams= new URLSearchParams(currentURL)
 const itemId=searchParams.get("r")

 console.log(itemId);
 fetchAndLogAllData(apiUrl, itemId);
 
 async function fetchAndLogAllData(apiUrl, itemId) {
    try {
        // Fetch property data
        const propertyResponse = await fetch(`${apiUrl}/property/${itemId}`);
        if (!propertyResponse.ok) {
            throw new Error(`Failed to fetch property: ${propertyResponse.statusText}`);
        }
        const propertyData = await propertyResponse.json();
        console.log('Property Data:', propertyData);

        // Fetch cover image data
        const coverImageResponse = await fetch(`${apiUrl}/coverImage/${itemId}`);
        if (!coverImageResponse.ok) {
            throw new Error(`Failed to fetch cover image: ${coverImageResponse.statusText}`);
        }
        const coverImageData = await coverImageResponse.json();
        console.log('Cover Image Data:', coverImageData);

        // Fetch other image data
        const otherImageResponse = await fetch(`${apiUrl}/otherImage/by-id/${itemId}`);
        if (!otherImageResponse.ok) {
            throw new Error(`Failed to fetch other image: ${otherImageResponse.statusText}`);
        }
        const otherImageData = await otherImageResponse.json();
        console.log('Other Image Data:', otherImageData);

    } catch (error) {
        console.error('Error:', error);
    }
}






    function showDate(No,data){
        const container = document.querySelectorAll(" .property-list")[No]
        var html=`
  
        `
        container.insertAdjacentHTML("beforeend",html)
     }
     
     
     