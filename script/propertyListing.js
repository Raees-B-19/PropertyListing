let properties = JSON.parse(localStorage.getItem('property')) ?
    JSON.parse(localStorage.getItem('property')) : [{
            id: 1,
            type: 'Apartment',
            location: 'New York City',
            url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
            bed: `<i class="fa-solid fa-bed"> 4 </i>`,
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        },
        {
            id: 2,
            type: 'Apartment',
            location: 'New York City',
            url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
            bed: '<i class="fa-solid fa-bed"> 3</i>',
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        },
        {
            id: 3,
            type: 'Apartment',
            location: 'New York City',
            url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
            bed: '<i class="fa-solid fa-bed"> 2</i>',
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        },
        {
            id: 4,
            type: 'Apartment',
            location: 'New York City',
            url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
            bed: '<i class="fa-solid fa-bed"> 5</i>',
            toilet: `<i class="fa-solid fa-toilet"> 3</i>`,
            price: 10000
        },
        {
            id: 5,
            type: 'Apartment',
            location: 'New York City',
            url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
            bed: '<i class="fa-solid fa-bed"> 3</i>',
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        },
        {
            id: 6,
            type: 'Apartment',
            location: 'New York City',
            url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
            bed: '<i class="fa-solid fa-bed"> 3</i>',
            toilet: `<i class="fa-solid fa-toilet"> 2</i>`,
            price: 10000
        }
    ];


function getProperties(){
    properties.forEach((property,index) => {
        document.getElementById('properties-row').innerHTML +=
            `<div class="col-md-3 p-3">
            <div class="card" style="width: 18rem;">
            <img src="${property.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${property.type} in ${property.location}</h4>
              <h4 class="card-title">${property.bed} ${property.toilet}</h4>
              <h5>${property.price}</h5>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${index}" onclick="modalProperties()">
                View Property
               </button>
            <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${property.type}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div id="carouselExampleIndicators${index}" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${property.url}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${property.url}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${property.url}" class="d-block w-100" alt="...">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${index}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
                    </div>
                </div>
            </div>`
    })
}
getProperties();


// For Search Button
// function filterByOption(event) {
//     console.clear();// To clear the console
//     switch(event.target.value){
//         case 'wand': 
//             console.log(data.filter( e => e.toLowerCase().includes('wand')));
//         break
//         case 'rod': 
//             console.log(data.filter( e => e.toLowerCase().includes('rod')));
//         break  
//         case 'other': 
//             console.log(data.filter( e => !e.toLowerCase().includes('wand') && !e.toLowerCase().includes('rod')));
//         break  
//     }
// }
