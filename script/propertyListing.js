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
    properties.forEach((e) => {
        document.getElementById('properties-row').innerHTML +=
            `<div class="col-md-3 p-3">
            <div class="card" style="width: 18rem;">
            <img src="${e.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title">${e.type} in ${e.location}</h4>
              <h4 class="card-title">${e.bed} ${e.toilet}</h4>
              <h5>${e.price}</h5>
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