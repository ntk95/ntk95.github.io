$(function () {
   
    // $('#search-name').keydown(function (event) {
    //     if (event.which === 13) {
    //         $.get(`http://localhost:3000/listStudent?name_like=${event.target.value}`, function (data, status) {
    //             data.forEach(item => {
    //                 $('#body-data').append(`
                            
    //                         <tr>
    //                             <td> ${item.name} </td> 
    //                             <td> ${item.price} </td> 
    //                              <td> ${item.description} </td> 
    //                          </tr>
    //                         `)
    //             })
    //         })
    //     }
    // })

    const reUpdateDom =  () => {
        $.get(`http://localhost:3000/listStudent`, function(data, status){
            // lay du lieu xong thi lam gi -> in danh sach học viên vào bảng

            let newDowmString = ''
            
            data.forEach(item => {
                newDowmString = newDowmString +  `
                         <tr>
                         <td>${item.name}</td>
                         <td>${item.price}</td>
                         
                         <td>${item.description}</td>
                         <td class="data-delete" data-id="${item.id}">xoá</td>
                     </tr>
                     `
            })
            let wrapBodyData = `<tbody id="body-data"> ${newDowmString} </tbody>`
            $("#body-data").replaceWith(wrapBodyData); 
            listenClick()
        })
    }

    const listenClick = () => {
        $(".data-delete").click(function(event){
            let {id} = event.currentTarget.dataset
            $.ajax({
                url: `http://localhost:3000/listStudent/${id}`,
                type: 'DELETE',
                success: function(result) {
                    // Do something with the result
                    debugger
                    // replaceWith lai body data
                    reUpdateDom()

                }
            });
        })
    }


            $.get(`http://localhost:3000/listStudent`, function(data, status){
                // lay du lieu xong thi lam gi -> in danh sach học viên vào bảng
                data.forEach(item => {
                    $('#body-data').append(`
                        <tr>
                        <td>${item.name}</td>
                         <td>${item.price}</td>
                         
                         <td>${item.description}</td>
                        <td class="data-delete" data-id="${item.id}">xoá</td>
                    </tr>
                    `)
                });
                listenClick()

               
            });


            $('#onAdd').click(function(){
                // lay data cua 3 field
                let name = $('#field-name').val()
                let price = $('#field-price').val()
                let description = $('#field-description').val()

                $.ajax({
                    type: "POST",
                    url: "http://localhost:3000/listStudent",
                    data: {
                        name,
                        price,
                        
                        description
                    },
                    success: function(result) {
                        $('#exampleModal').modal('toggle')
                        reUpdateDom()
                    }
                  });

            })


})