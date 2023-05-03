let mainContainer = document.querySelector("#mainContainer")
let addNoteBox = document.querySelector("#add-note-box")
let newNoteTitle = document.querySelector("#new-note-title")
let addButton = document.querySelector("#add-button")

let getUrl = "http://localhost:3000/notes/"

fetch(getUrl, {
    method: "GET",
    headers: { "Content-Type": "application.json" },
})

.then(function (response) {
    return response.json()
})
.then((parsedResponse) => {
  console.log(parsedResponse)
    for (let data of parsedResponse) {
      console.log(data.title)
    let noteCard = document.createElement('div')
    mainContainer.appendChild(noteCard)

    let noteTitle = document.createElement('h1')
    noteTitle.innerText = data.title
    noteCard.appendChild(noteTitle)

    let noteBody = document.createElement('p')
    noteBody.innerText = data.body 
    noteCard.appendChild(noteBody)
    }

    addButton.addEventListener("click", (event) => {
      event.preventDefault()
      console.log(event.target.innerText)
      let postUrl = 'http://localhost:3000/notes/'
      fetch(postUrl, {
        method: 'POST', 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({"title": "Good evening", "body": "have a good day"})
      })
      .then(r => r.json())
      .then((information) => {
        console.log(information)
        let noteCard = document.createElement('div')
        mainContainer.appendChild(noteCard)
    
        let noteTitle = document.createElement('h1')
        noteTitle.innerText = information.title
        noteCard.appendChild(noteTitle)
    
        let noteBody = document.createElement('p')
        noteBody.innerText = information.body 
        noteCard.appendChild(noteBody)
        })
      })
    })
    
