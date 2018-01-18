class Fetch {


  static getNotes(){
    fetch("http://localhost:3000/api/v1/notes")
    .then(res => res.json())
    .then(json => {
      json.forEach((noteData) => {
        let note = new Note(noteData)
      })
      Note.renderAll()
    })
  }



  static createNote(titleValue, bodyValue){
    fetch("http://localhost:3000/api/v1/notes",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        title: `${titleValue}`,
        body: `${bodyValue}`
      })
    }).then(resp => resp.json()).then(json => {
      let note = new Note(json)
      note.create();
    })
  }



  static updateNoteTitle(target){
    let id = target.id.split("-")
    fetch(`http://localhost:3000/api/v1/notes/${id[2]}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'},
      body: JSON.stringify({
        title: `${target.value}`
      })
    }).then(resp => resp.json()).then(json => {
      let note = Note.findNote(json.id)
      note.update(json)
    })

  }



  static updateNoteBody(target){
    let id = target.id.split("-")
    fetch(`http://localhost:3000/api/v1/notes/${id[2]}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'},
      body: JSON.stringify({
        body: `${target.value}`
      })
    }).then(resp => resp.json()).then(json => {
      let note = Note.findNote(json.id)
      note.update(json)
      console.log(note)
    })

  }


  static destroyNote(target){
    // let id = target.id.split("-")
    // fetch(`http://localhost:3000/api/v1/notes/${id[2]}`, {
    //   method: "DELETE",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   },
    // }).then(resp => resp.json()).then(()=> {
    //   Note.destroyNote(id);
    //   // Note.renderAll()
    // })
  }


}
