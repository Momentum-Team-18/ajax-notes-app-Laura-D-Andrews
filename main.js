let mainContainer = document.querySelector("#mainContainer");
let addNoteBox = document.querySelector("#add-note-box");
let newNoteTitle = document.querySelector("#new-note-title");
let newNoteBody = document.querySelector("#new-note-body");
let addButton = document.querySelector("#add-button");
let deleteNote = document.querySelector("#delete-note");
let deleteButton = document.querySelector("#delete-button")
let editNote = document.querySelector("#edit-note")
let editButton = document.querySelector("#edit-button")

let getUrl = "http://localhost:3000/notes/";

fetch(getUrl, {
  method: "GET",
  headers: { "Content-Type": "application.json" },
})
  .then(function (response) {
    return response.json();
  })
  .then((parsedResponse) => {
    let myArray = parsedResponse;
    console.log(myArray);

    for (let data of parsedResponse) {
      let noteCard = document.createElement("div");
      mainContainer.appendChild(noteCard);
      noteCard.classList.add("noteCard");

      let noteId = document.createElement("h5");
      noteId.innerText = data.id;
      noteCard.appendChild(noteId);

      let noteTitle = document.createElement("p");
      noteTitle.innerText = data.title;
      noteCard.appendChild(noteTitle);

      let noteBody = document.createElement("textarea");
      noteBody.innerText = data.body;
      noteCard.appendChild(noteBody);
      noteBody.classList.add("noteBody");
    }

    addButton.addEventListener("click", (event) => {
      let postUrl = "http://localhost:3000/notes/";
      fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${newNoteTitle.value}`,
          body: "what's on your mind?",
        }),
      })
        .then((r) => r.json())
        .then((information) => {
          let noteCard = document.createElement("div");
          mainContainer.appendChild(noteCard);

          let noteTitle = document.createElement("h1");
          noteTitle.innerText = information.title;
          noteCard.appendChild(noteTitle);

          let noteBody = document.createElement("textarea");
          noteBody.innerText = information.body;
          noteCard.appendChild(noteBody);
          noteBody.classList.add("noteBody");
        });
    });

    deleteButton.addEventListener("click", (event) => {
      event.preventDefault()
      let userDeleteNumber = deleteNote.value
      console.log(userDeleteNumber)
      let deleteUrl = `http://localhost:3000/notes/${userDeleteNumber}`;
      fetch(deleteUrl, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
   .then((r) => r.json())
   
    .then((deleteInfo) => {
    })
   })

   editButton.addEventListener("click", (event) => {
    event.preventDefault()
    let userEditNumber = editNote.value
    console.log(userEditNumber)
    // document.getElementById("#new-note-title").appendChild(editNote)
    let editUrl = `http://localhost:3000/notes/${userEditNumber}`
    fetch(editUrl,  {
      method: "PATCH", 
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({
      //   title: `${newNoteTitle.value}`,
    })
    .then((r) => r.json())

    .then((editInfo) => {
      console.log(editInfo)
let editNoteTitle = editInfo.title
console.log(editNoteTitle)
    })
   })
  })
// })
