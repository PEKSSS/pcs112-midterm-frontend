const content = document.querySelector("#content");
const submit = document.querySelector("#add");

submit.addEventListener("click", () => {

    let productName = document.querySelector("#product-name").value;
    let category = document.querySelector("#category").value;
    let stockCount = document.querySelector("#stock-count").value;
    let locationCode = document.querySelector("#location-code").value;
    let lastUpdated = document.querySelector("#last-updated").value;
    let formData = {productName, category, stockCount, locationCode, lastUpdated};

    fetch("https://pcs112-midterm-zn1k.onrender.com/api/users",{
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch((error) => {
        console.log(error);
    })
    alert("Item added successfully!");
    location.reload();
});

    window.addEventListener("load", () => {
        getUsers();
    });

    function getUsers() {
        let html = "";

        fetch("https://pcs112-midterm-zn1k.onrender.com/api/users", {mode: 'cors'})
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(element => {
                html += `<li>ID: ${element.id} <br> Product Name: ${element.productName} <br> Category: ${element.category} <br> Stock Count: ${element.stockCount} <br> Location Code: ${element.locationCode} <br> Last Updated: ${element.lastUpdated}</li>`;
            })

            content.innerHTML = html;
        })
        .catch(error=>{
        console.log(error);
    })

    }
