let properties = JSON.parse(localStorage.getItem('property'))
// console.log(JSON.parse(localStorage.getItem('property')))

function tableData(){
    let tb = document.getElementById('table-body');
    tb.innerHTML = '';
    properties.forEach((td) => {
        tb.innerHTML += `
            <tr>
                <td>${td.id}</td>
                <td><img src="${td.url}" alt="" width="100px" height="80px"></td>
                <td>${td.type}</td>
                <td>${td.location}</td>
                <td>${td.bed}</td>
                <td>${td.toilet}</td>
                <td>${td.price}</td>
            </tr>
        `
    })
}
tableData();