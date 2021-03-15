$(function () {
   
    $('#search-name').keydown(function (event) {
        if (event.which === 13) {
            $.get(`http://localhost:3000/listStudent?name_like=${event.target.value}`, function (data, status) {
                data.forEach(item => {
                    $('#body-data').append(`
                            
                            <tr>
                                <td> ${item.name} </td> 
                                <td> ${item.price} </td> 
                                 <td> ${item.description} </td> 
                             </tr>
                            `)
                })
            })
        }
    })

})