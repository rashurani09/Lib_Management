// Add to shopping cart
var cartItems = document.getElementById('cart-items');

// Get the product list
var productList = document.querySelectorAll('#products ul li');

// Add event listener to each product
productList.forEach(function(product) {
  product.addEventListener('click', function() {
    // Create a new cart item
    var cartItem = document.createElement('li');
    cartItem.textContent = product.getAttribute('data-name') + ' - 💵' + product.getAttribute('data-price');

    // Append the cart item to the cart
    cartItems.appendChild(cartItem);
  });
});



// update Availabilty
function Add(event) {
    event.preventDefault();
    
    // Get the parent <li> element of the clicked button
    var listItem = event.target.closest('li');
  
    // Get the availability value of the item
    var availabilitySpan = listItem.querySelector('.availability');
    var availability = parseInt(availabilitySpan.innerText);
     
     var heart = listItem.querySelector('.button');
     var text = heart.innerText;
  
  setTimeout(function () {
    heart.innerText = "😁  Added ";
  },100);
  setTimeout(function () {
    heart.innerText = text;
  }, 350);
 
    if (availability > 0) {
      // Decrease the availability by 1
      availability -= 1;
  
      if(availability<0)
      heart.innerText = "Not Available";
      // Update the availability in the HTML
      availabilitySpan.innerText = availability;

    }
  }

  function redirectToPosition(x, y) {
    window.scrollTo(x, y);
  }
  



// search book  
function matchSearchInput() {
  // Get the value of the search input
  var searchValue = document.getElementById("search-input").value;

  // Get all of the headings and li tags on the page
  var elements = document.querySelectorAll("h2,  li");

  // Loop through the elements and set their opacity to 0
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0;
  }

  // Check if the search value is empty
  if (searchValue === "") {
    return;
  }

  // Loop through the elements and see if they match the search value, ignoring case and spaces
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent.toLowerCase().replace(/\s/g, '').indexOf(searchValue.toLowerCase().replace(/\s/g, '')) !== -1) {
      // If the element matches the search value, set its opacity to 1
      elements[i].style.opacity = 1;
      var parentElement = elements[i].parentElement;
      parentElement.insertBefore(elements[i], parentElement.firstChild);
    }
  }

}

//loading
document.addEventListener("DOMContentLoaded", function() {
  var loadingContainer = document.querySelector(".loading-container");
  var content = document.querySelector("#body");

  setTimeout(function() {
    loadingContainer.style.display = "none";
    content.style.display = "block";
  }, 3000); // 3 seconds
});
