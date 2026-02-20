const storageKey="mmd_crud";

let notes = loadNotes();

const creatForm= document.getElementById("createForm");
const noteInput= document.getElementById("noteInput");
const notesList= document.getElementById("notesList");

function loadNotes(){
    const raw:=localStorage.getItem();

    if(raw === null){
        return [
            {id:1, text: "klik 'Rediger' for at ændre noten✏️", done: false},
            {id:2, text: "klik 'Done' for at markere færdig", done: true}
        ];
    }

    try{
        const parsed = JSON.parse(raw);

        if(!Array.isArray(parsed)) return [];
        return parsed;
    }    catch (error){
        return [];
    }
}

