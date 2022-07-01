let properties = JSON.parse(localStorage.getItem('property'))
// console.log(JSON.parse(localStorage.getItem('property')))
function tableData() {
    let tb = document.getElementById('table-body');
    tb.innerHTML = '';
    properties.forEach((td, index) => {
        tb.innerHTML += `
            <tr>
                <td scope="row">${td.id}</td>
                <td scope="row"><img src="${td.url}" alt="" width="100px" height="80px"></td>
                <td scope="row">${td.type}</td>
                <td scope="row">${td.location}</td>
                <td scope="row">${td.bed}</td>
                <td scope="row">${td.bathrooms}</td>
                <td scope="row">${td.price}</td>
                <!-- Button trigger modal -->
                <td scope="row">
                <a class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
                <i class="bi bi-pencil-square"></i>
                </a>
                </td>
                <td scope="row"><i class="bi bi-trash" onclick="remove(${index})"></i></td>
            </tr>



            <!-- Modal -->
            <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit the Property</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <h6>Type of Property</h6>
                <input value="${td.type}" id="pType${index}">
                <h6>Type of Location</h6>
                <input value="${td.location}" id="pLocation${index}">
                <h6>Amount of Beds</h6>
                <input value="${td.bed}" id="pBed${index}">
                <h6>Amount of Bathrooms</h6>
                <input value="${td.bathrooms}" id="pBathrooms${index}">
                <h6>Property Price</h6>
                <input value="${td.price}" id="pPrice${index}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onclick="edit(${index})">Save changes</button>
                </div>
                </div>
            </div>
            </div>

        `
    })
}
tableData();

function edit(id) {
    // UPDATE
    console.log("Im being clicked");
    // variables for edited values
    let pType = document.getElementById(`pType${id}`).value;
    let pLocation = document.getElementById(`pLocation${id}`).value;
    let pBed = document.getElementById(`pBed${id}`).value;
    let pBathrooms = document.getElementById(`pBathrooms${id}`).value;
    let pPrice = document.getElementById(`pPrice${id}`).value;
    // passing edited values into array
      properties[id].type = pType
      properties[id].location = pLocation
      properties[id].bed = parseInt(pBed)
      properties[id].bathrooms = parseInt(pBathrooms)
      properties[id].price = parseInt(pPrice)
    //   Save it to localStorage
      localStorage.setItem('property', JSON.stringify(properties));
    // Calling Function
    tableData();
};

function remove(id) {
    if (id > -1) {
        properties.splice(id, 1);
        // Apply the change
        localStorage.setItem('property', JSON.stringify(properties));
    }
    for (i = 0; i < properties.length; i++) {
        properties[i].id = i + 1;
    }
    tableData();
};