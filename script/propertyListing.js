// let properties = JSON.parse(localStorage.getItem('property')) ?JSON.parse(localStorage.getItem('property')) :
let properties = JSON.parse(localStorage.getItem('property'))?
JSON.parse(localStorage.getItem('property')):
localStorage.setItem('property',JSON.stringify([{
        id: 1,
        type: 'Apartment',
        location: 'Parrow',
        url: "https://i.postimg.cc/gjbnktg3/House-3.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 4,
        bathroom: 2,
        price:15000,
        for: 'Sale'
    },
    {
        id: 2,
        type: 'Apartment',
        location: 'Vanguard',
        url: "https://i.postimg.cc/dVDjrzVF/House-1.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 2,
        price:15000
    },
    {
        id: 3,
        type: 'Apartment',
        location: 'Vanguard',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 2,
        bathroom: 2,
        price:70000
    },
    {
        id: 4,
        type: 'Apartment',
        location: 'Seapoint',
        url: "https://i.postimg.cc/LXcZg88Y/House-5.png",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 5,
        bathroom: 3,
        price:70000
    },
    {
        id: 5,
        type: 'House',
        location: 'Parrow',
        url: "https://i.postimg.cc/NF6BNJGf/House-2.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 2,
        price:10000000,
        for: 'Sale'
    },
    {
        id: 6,
        type: 'House',
        location: 'Seapoint',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 1,
        price:10000000,
        for: 'Sale'
    },
    {
        id: 7,
        type: 'House',
        location: 'Parrow',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 2,
        price:100000000
    },
    {
        id: 8,
        type: 'House',
        location: 'Crawford',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 2,
        price:10000000
    },
    {
        id: 9,
        type: 'House',
        location: 'Crawford',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 2,
        price:100000000
    },
    {
        id: 10,
        type: 'House',
        location: 'SilverTown',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 2,
        price:10000000
    },
    {
        id: 11,
        type: 'House',
        location: 'Crawford',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 2,
        price:100000000
    },
    {
        id: 12,
        type: 'House',
        location: 'Seapoint',
        url: "https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        url1: "https://i.postimg.cc/Qdmv2zzB/Set1-4.jpg",
        url2: "https://i.postimg.cc/W4Q8C6sF/Set1-2.jpg",
        url3: "https://i.postimg.cc/pdzqjWh5/Ser1-4.jpg",
        bed: 3,
        bathroom: 2,
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
            <div class="col-md-3 p-3">
            <div class="card card-property-height" style="width: 18rem;">
            <img src="${property.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${property.type} in ${property.location}</h4>
              <h4 class="card-title"><i class="fa-solid fa-bed">${property.bed}</i><i class="fa-solid fa-bath">${property.bathroom}</i></h4>
              <h5>R ${property.price}</h5>
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
getProperties(properties);


// For  ToiletSearch
function toilet(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newToilets = properties.filter(property => {
        return property.toilet <= event.target.value
    })
    getProperties(newToilets)
}

// For Room Search
function room(event){
    // console.log(properties);
    if (event.target.value === 'All') {
        return getProperties (properties)
      }
    let newRooms = properties.filter(property => {
        return property.bed <= event.target.value
    })
    getProperties(newRooms)
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
document.querySelector('#property-budget').addEventListener('change',budget);

document.getElementById('relaod-btn').addEventListener('click',() => {
    window.location.reload()
})


    // localStorage.setItem('property',JSON.stringify(property))
    // console.log(localStorage)