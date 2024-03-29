let properties = JSON.parse(localStorage.getItem('property')) ?
JSON.parse(localStorage.getItem('property')) :
localStorage.setItem('property',JSON.stringify([{
        id: 1,
        forWhat: 'Rent',    
        type: 'Apartment',
        location: 'Parow',
        url: "https://i.postimg.cc/MGrVkB7V/Apartment-1.jpg",
        url1: "https://i.postimg.cc/L8D01ySS/Room-5.jpg",
        url2: "https://i.postimg.cc/0NJ2QJgp/Room-4.jpg",
        url3: "https://i.postimg.cc/52Xf7F2Z/Toilet-1.jpg",
        bed: 4,
        bathrooms: 2,
        price:15000,
    },
    {
        id: 2,
        forWhat: 'Rent',
        type: 'Apartment',
        location: 'Vanguard',
        url: "https://i.postimg.cc/2y3Csqxb/Apartment-3.jpg",
        url1: "https://i.postimg.cc/x1VSRpBb/Room-2.jpg",
        url2: "https://i.postimg.cc/pTrNTw53/Room-3.jpg",
        url3: "https://i.postimg.cc/mr2ZY6Fy/Toilet-4.jpg",
        bed: 3,
        bathrooms: 2,
        price:15000
    },
    {
        id: 3,
        forWhat: 'Rent',
        type: 'Apartment',
        location: 'Vanguard',
        url: "https://i.postimg.cc/MGrVkB7V/Apartment-1.jpg",
        url1: "https://i.postimg.cc/L8D01ySS/Room-5.jpg",
        url2: "https://i.postimg.cc/0NJ2QJgp/Room-4.jpg",
        url3: "https://i.postimg.cc/52Xf7F2Z/Toilet-1.jpg",
        bed: 5,
        bathrooms: 3,
        price:70000
    },
    {
        id: 4,
        forWhat: 'Sale',
        type: 'Apartment',
        location: 'Seapoint',
        url: "https://i.postimg.cc/2y3Csqxb/Apartment-3.jpg",
        url1: "https://i.postimg.cc/x1VSRpBb/Room-2.jpg",
        url2: "https://i.postimg.cc/pTrNTw53/Room-3.jpg",
        url3: "https://i.postimg.cc/mr2ZY6Fy/Toilet-4.jpg",
        bed: 5,
        bathrooms: 3,
        price:70000
    },
    {
        id: 5,
        forWhat: 'Sale',
        type: 'House',
        location: 'Parow',
        url: "https://i.postimg.cc/W11xXRXz/House-1.jpg",
        url1: "https://i.postimg.cc/jjJgFRNx/Lounge-5.jpg",
        url2: "https://i.postimg.cc/BbhBvzD7/Room-6.jpg",
        url3: "https://i.postimg.cc/52Xf7F2Z/Toilet-1.jpg",
        bed: 3,
        bathrooms: 2,
        price:500000,
        for: 'Sale'
    },
    {
        id: 6,
        forWhat: 'Sale',
        type: 'House',
        location: 'Seapoint',
        url: "https://i.postimg.cc/gk83QrtB/House-5.png",
        url1: "https://i.postimg.cc/0QKzSHLH/Lounge-2.jpg",
        url2: "https://i.postimg.cc/BbhBvzD7/Room-6.jpg",
        url3: "https://i.postimg.cc/52Xf7F2Z/Toilet-1.jpg",
        bed: 3,
        bathrooms: 1,
        price:10000000,
        for: 'Sale'
    },
    {
        id: 7,
        forWhat: 'Sale',
        type: 'House',
        location: 'Parow',
        url: "https://i.postimg.cc/W11xXRXz/House-1.jpg",
        url1: "https://i.postimg.cc/jjJgFRNx/Lounge-5.jpg",
        url2: "https://i.postimg.cc/BbhBvzD7/Room-6.jpg",
        url3: "https://i.postimg.cc/52Xf7F2Z/Toilet-1.jpg",
        bed: 3,
        bathrooms: 2,
        price:500000
    },
    {
        id: 8,
        forWhat: 'Sale',
        type: 'House',
        location: 'Crawford',
        url: "https://i.postimg.cc/gk83QrtB/House-5.png",
        url1: "https://i.postimg.cc/0QKzSHLH/Lounge-2.jpg",
        url2: "https://i.postimg.cc/BbhBvzD7/Room-6.jpg",
        url3: "https://i.postimg.cc/52Xf7F2Z/Toilet-1.jpg",
        bed: 3,
        bathrooms: 2,
        price:10000000
    },
    {
        id: 9,
        forWhat: 'Sale',
        type: 'House',
        location: 'Crawford',
        url: "https://i.postimg.cc/VkT1tLmm/House-3.jpg",
        url1: "https://i.postimg.cc/SQwvc2zZ/Lounge-7.jpg",
        url2: "https://i.postimg.cc/VvY5hLJ2/Room-4.jpg",
        url3: "https://i.postimg.cc/Kjqcs7Sg/Toilet-2.jpg",
        bed: 5,
        bathrooms: 3,
        price:100000000
    },
    {
        id: 10,
        forWhat: 'Sale',
        type: 'House',
        location: 'SilverTown',
        url: "https://i.postimg.cc/N0kcz8Rf/House-4.jpg",
        url1: "https://i.postimg.cc/0QKzSHLH/Lounge-2.jpg",
        url2: "https://i.postimg.cc/tJVvLy8t/Room-1.jpg",
        url3: "https://i.postimg.cc/52Xf7F2Z/Toilet-1.jpg",
        bed: 3,
        bathrooms: 5,
        price:10000000
    },
    {
        id: 11,
        forWhat: 'Sale',
        type: 'House',
        location: 'Crawford',
        url: "https://i.postimg.cc/VkT1tLmm/House-3.jpg",
        url1: "https://i.postimg.cc/SQwvc2zZ/Lounge-7.jpg",
        url2: "https://i.postimg.cc/VvY5hLJ2/Room-4.jpg",
        url3: "https://i.postimg.cc/Kjqcs7Sg/Toilet-2.jpg",
        bed: 3,
        bathrooms: 2,
        price:100000000
    },
    {
        id: 12,
        forWhat: 'Sale',
        type: 'House',
        location: 'Seapoint',
        url: "https://i.postimg.cc/N0kcz8Rf/House-4.jpg",
        url1: "https://i.postimg.cc/0QKzSHLH/Lounge-2.jpg",
        url2: "https://i.postimg.cc/tJVvLy8t/Room-1.jpg",
        url3: "https://i.postimg.cc/52Xf7F2Z/Toilet-1.jpg",
        bed: 4,
        bathrooms: 3,
        price:10000000
    }
]));
// console.log(JSON.parse(localStorage.getItem('property')))
// console.log(localStorage.removeItem('property'))

function getProperties(prop){
    document.getElementById('properties-row').innerHTML = '';
    prop.forEach((property,index) => {
        document.getElementById('properties-row').innerHTML +=
            `
            <div class="col-md-3 p-4">
            <div class="card card-property-height">
            <img src="${property.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${property.forWhat}</h3>
              <h4 class="card-title">${property.type} in ${property.location}</h4>
              <h4 class="card-title"><i class="fa-solid fa-bed">${property.bed}</i><i class="fa-solid fa-bath">${property.bathrooms}</i></h4>
              <h5>R ${property.price}</h5>
              <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal${index}" onclick="modalProperties()">
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
                        <img src="${property.url1}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${property.url2}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${property.url3}" class="d-block w-100" alt="...">
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
                    </div>
                    </div>
                </div>
                </div>
                    </div>
                </div>
            </div>`
    })
}
getProperties(properties);

// For Room Search
function room(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newRooms = properties.filter(property => {
        return property.bed == event.target.value
    })
    getProperties(newRooms)
}
// For Bathrooms
function toilet(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newToilets = properties.filter(property => {
        return property.bathrooms == event.target.value
    })
    getProperties(newToilets)
}
// For  Location
function locations(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newLocation = properties.filter(property => {
        return property.location == event.target.value
    })
    getProperties(newLocation)
}
// For Buget Search
function budget(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newBudget = properties.filter(property => {
        return property.price == event.target.value
    })
    getProperties(newBudget)
}

document.querySelector('#property-toilets').addEventListener('change',toilet);
document.querySelector('#property-rooms').addEventListener('change',room);
document.querySelector('#property-location').addEventListener('change',locations);
document.querySelector('#property-budget').addEventListener('change',budget);

// Footer
const Year = new Date().getFullYear();
document.getElementById('foot').innerHTML = `&copy copyright Ra'ees Benny ${Year}`



    // localStorage.setItem('property',JSON.stringify(property))
    // console.log(localStorage)