
var url="https://62ebccba55d2bd170e767907.mockapi.io/stud";


// GET method:  (To retrieve data from an api)
function getData(){
    fetch(url,{
        method:"GET",
        headers:{"Content-Type":"application/json"},
    })
    .then(result=>result.json())
    .then(data=>{console.log(data)})
    .catch(err=>{console.log(err)})
}
getData()




// POST method:   (To insert data into an api)
function createData(){
    let data={
        name:"Mommy",
        email:"mom@gmail.com",
    }
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"}
    })
    .then(result=>result.json())
    .then(data=>{console.log(data)})
    .catch(err=>{console.log(err)})
}
createData()




// PUT method:   (To edit a data available in the api)
function updateData(){
    let data={
        name:"Vaishoo",
        email:"vaishna@gmail.com"
    }
    fetch(url+'/11',{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"}
    })
    .then(response=>response.json())
    .then(data=>{console.log(data)})
    .catch(err=>{console.log(err)})
}
updateData()




// DELETE method:    (To delete an existing data in an api)
function deleteData(){
    fetch(url+'/2',{
        method:"DELETE",
    })
    .then(response=>response.json())
    .then(data=>{console.log(data)})
    .catch(err=>{console.log(err)})
}
deleteData()
