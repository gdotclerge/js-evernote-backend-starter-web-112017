class EventListener{


  static listen(){
    EventListener.clickNotes();
    EventListener.typeNotes();
    EventListener.addNote();
    EventListener.destroyNote();
  }


  static clickNotes(){
    let columnID = document.getElementById("left-column");
    columnID.addEventListener("click", (event) => {
      Note.showNote(event.target.id)
    })
  }


  static typeNotes(){
    let formTitle = document.getElementById("edit-form").getElementsByTagName("input")[0]
    let formBody = document.getElementById("edit-form").getElementsByTagName("input")[1]

    formTitle.addEventListener('keyup', (event) => {
      Fetch.updateNoteTitle(event.target)
    })

    formBody.addEventListener('keyup', (event) => {
      Fetch.updateNoteBody(event.target)
    })
  }


  static addNote(){
    let form = document.getElementById("new-form")

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let titleValue = event.target.getElementsByTagName("input")[0].value;
      let bodyValue = event.target.getElementsByTagName("input")[1].value;
      Fetch.createNote(titleValue, bodyValue)
    })
  }


  static destroyNote(){
    let deleteButton = document.getElementById("edit-form").getElementsByTagName("button")[0]

    deleteButton.addEventListener("click", (event) => {
      event.preventDefault;
      Fetch.destroyNote(event.target);
    })


  }

}
