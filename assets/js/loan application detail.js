const currentURL = window.location.search;
// get url params
 const searchParams= new URLSearchParams(currentURL)
 const itemId=searchParams.get("r")

 console.log(itemId);

// var productId

 
fetch(`${apiUrl}/loan-application/applications/${itemId}`)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
})
.then(data => {
//  productId=data.productId
  console.log(data);






  const containerList = document.getElementById('application_details');

  for (const [key, value] of Object.entries(data)) {
    
    var newHtml = `<li>
    ${key} : <b>${value}</b>
    </li>`;
    containerList.insertAdjacentHTML("beforeend",newHtml);
  }





})
.catch(error => console.error('Error:', error));










