class Note{

  constructor(data){
    this.title = data.title;
    this.body = data.body;
    this.id = data.id;
    Note.all.unshift(this);
  }


  static renderAll(){
    let notes = Note.all;
    let leftColumn = document.getElementById("left-column");
    leftColumn.innerHTML = "";

    for(let n of notes){
      leftColumn.innerHTML += (`<h4 id="h4-${n.id}" class="note-show"> ${n.title} </h4>`);
      leftColumn.innerHTML += (`<p id="p-${n.id}" class="note-show"> ${n.body} </p>`);
    }
  }


  static showNote(columnID){
    let column = columnID.split("-");
    let note = Note.all.find((n) => {
      return n.id == column[1]
    })
    note.render();
  }


  render(){
    let formTitle = document.getElementById("edit-form").getElementsByTagName("input")[0]
    let formBody = document.getElementById("edit-form").getElementsByTagName("input")[1]
    let formButton = document.getElementById("edit-form").getElementsByTagName("button")[0]

    formTitle.value = `${this.title}`
    formTitle.id = `form-title-${this.id}`
    formBody.value = `${this.body}`
    formBody.id = `form-body-${this.id}`
    formButton.id = `form-button-${this.id}`
  }


  update(obj){
    this.title = obj.title;
    this.body = obj.body;
    Note.renderAll()
  }


  create(){
    Note.renderAll();
    let formTitle = document.getElementById("new-form").getElementsByTagName("input")[0]
    let formBody = document.getElementById("new-form").getElementsByTagName("input")[1]

    formTitle.value = ""
    formBody.value = ""
  }


  static findNote(id){
    const note = Note.all.find((note) => {
      return note.id == id;
    })
    return note
  }


  static destroyNote(id){
    let note = Note.findNote(id);
    console.log(note)
  
  }



}

Note.all = [];
