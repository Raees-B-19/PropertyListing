let properties = JSON.parse(localStorage.getItem('property')) ?
JSON.parse(localStorage.getItem('property'))  :  [
    {
        id:1,
        type: 'Apartment',
        location: 'New York City',
        url:"https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        price: 10000
    },
    {
        id:2,
        type: 'Apartment',
        location: 'New York City',
        url:"https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        price: 10000
    },
    {
        id:3,
        type: 'Apartment',
        location: 'New York City',
        url:"https://i.postimg.cc/65Ms5MwD/Luxury-Apartment.jpg",
        price: 10000
    }
];

properties.forEach((e) => {
    
})


