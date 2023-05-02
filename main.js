let mainContainer = document.querySelector("mainContainer")

let getUrl = "http://localhost:3000/notes/"

fetch(getUrl, {
    method: "GET",
    headers: { "Content-Type": "application.json" },
})

.then(function (response) {
    return response.json()
})
.then((parsedResponse) => {
    return parsedResponse
})

fetch('http://localhost:3000/notes/', {
  method: 'POST', 
  headers: {"Content-Type": "application/json"}, 
  body: JSON.stringify({"id": 2, "title": "Hi", "body": "COOL"})
})
.then(r => r.json())
.then((hiResponse) => {
    return hiResponse
})

fetch('http://localhost:3000/notes/', {
  method: 'POST', 
  headers: {"Content-Type": "application/json"}, 
  body: JSON.stringify({"id": 3, "title": "Good Morning", "body": "YAY!"})
})
.then(r => r.json())
.then((morningResponse) => {
    return morningResponse
})

fetch('http://localhost:3000/notes/', {
  method: 'POST', 
  headers: {"Content-Type": "application/json"}, 
  body: JSON.stringify({"id": 4, "title": "ToDo", "body": "nothing"})
})
.then(r => r.json())
.then((toDoResponse) => {
    return toDoResponse   
})
