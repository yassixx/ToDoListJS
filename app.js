/**
 * Récupère la valeur de l'input, puis si elle est valide, ajoute la tâche à la liste et met à jour la liste.
 */
const addBtn = document.querySelector("button")
addBtn.addEventListener('click', function(){
    const addText = document.querySelector("input")
    const taskText = addText.value.trim()
    if(taskText!=""){
        addList(taskText)
        maj()
    }else{
        alert("Rentrer une tache")
    }
});

/**
 * Ajoute une tâche à la liste.
 *
 * @param {string} tache - Le texte de la tâche à ajouter.
 */
function addList(tache){
    const d = document.createElement("div")
    const c = document.createElement("input")
    c.type='checkbox';
    const l = document.createElement("label");
    const newTask = document.createTextNode(tache)
    document.querySelector("#taskList").appendChild(d)
    d.appendChild(c)
    d.appendChild(l)
    l.appendChild(newTask)
}

/**
 * Maj la liste des tâches en supprimant toutes les tâches qui sont cochées.
 */
function maj(){
    const checs = document.querySelectorAll("#taskList input[type='checkbox']")
    for(let chec of checs){
        if(chec.checked){
            chec.parentElement.remove()
        }
    }
}

/**
 * Surveille les changements dans la liste des tâches et, lorsqu'un changement est détecté, demande une confirmation avant de supprimer les tâches cochées.
 */
const checs = document.querySelector("#taskList")
checs.addEventListener('change', function(e){
    if(confirm("Supprimer? ")){
        maj()
    }
})