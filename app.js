let url = "https://bdygoubdkehbckhaomol.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkeWdvdWJka2VoYmNraGFvbW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDY3MzYsImV4cCI6MjA4MDM4MjczNn0.z0e3pKF4YvDuP3vHBJEvd8BWQfkuB4NJsEGjrlfB4JQ";
let urlProducts = "https://bdygoubdkehbckhaomol.supabase.co/rest/v1/products";


async function createLead(){

    event.preventDefault();

    let name = document.getElementById("contactName").value;
    let email = document.getElementById("contactEmail").value;
    let message = document.getElementById("contactMessage").value;

    let lead = {
        "name" : name , 
        "email" : email,
        "message" : message
    }

    let response = await fetch(url , {
        method: "POST",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify(lead)
    })

    console.log("Lead Created")

}


async function getProducts(){

    // promise= is an operation JS loading in the background 
    let response = await fetch(urlProducts , {
        method: "GET",
        headers: {
            "apikey" : apikey,
            "Content-Type" : "application/json"
        }
    });

    let data = await response.json();

    let cardsContainer = document.getElementById("cardsContainer");

    for(let i = 0; i < data.length; i++){

        cardsContainer.innerHTML += `
        
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card" style="width: 18rem">
            <img
              src="${data[i].image_url}"
              class="card-img-top"
              alt="${data[i].name}"
            />
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              <p class="card-text">
                ${data[i].description}
              </p>
              <p class="btn btn-primary">$ ${data[i].price}</p>
            </div>
          </div>
        </div>

        `

    }



}