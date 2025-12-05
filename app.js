let url = "https://bdygoubdkehbckhaomol.supabase.co/rest/v1/leads";
let apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkeWdvdWJka2VoYmNraGFvbW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDY3MzYsImV4cCI6MjA4MDM4MjczNn0.z0e3pKF4YvDuP3vHBJEvd8BWQfkuB4NJsEGjrlfB4JQ";

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