let properties = JSON.parse(localStorage.getItem('property'))
// console.log(JSON.parse(localStorage.getItem('property')))

function tableData(){
    let tb = document.getElementById('table-body');
    tb.innerHTML = '';
    properties.forEach((td,index) => {
        tb.innerHTML += `
            <tr>
                <td>${td.id}</td>
                <td><img src="${td.url}" alt="" width="100px" height="80px"></td>
                <td>${td.type}</td>
                <td>${td.location}</td>
                <td>${td.bed}</td>
                <td>${td.toilet}</td>
                <td>${td.price}</td>
                <td><i class="bi bi-pencil-square" onclick="edit(${td.id})"></i></td>
                <td><i class="bi bi-trash" onclick="remove(${index})"></i></td>
                </tr>
        `
    })
}
tableData();

function edit(id){
    const newProp = prompt('What would u change')
    const task = properties.find((property) => property.id === id);
    task.type = newProp
    localStorage.setItem('property',JSON.stringify(properties));
    tableData();
};

function remove(id) {
    if (id > -1) {
      properties.splice(id, 1);
      // Apply the change
      localStorage.setItem('property', JSON.stringify(properties));
    }
    for(i=0;i<properties.length;i++){
        properties[i].id = i+1;
    }
    tableData();
};