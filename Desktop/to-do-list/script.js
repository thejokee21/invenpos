
const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addTask(){

    /* CUANDO DOY CLICK SE EJECUTA
    ESTA FUNCION */

    
        const task= inputBox.value.trim();
        
        
        if(!task){
            alert("debe ingresar una tarea");
            return
        }

        /* ESTO DE ARRIBA
        OBTIENE EL TEXTO ESCRITO */
        
        
        
        /* CREA UN ELEMENTO  */
        const li = document.createElement("li");
        
        li.textContent = task;
        
        listContainer.appendChild(li);

        inputBox.value = ""; /* despues de esta tarea se limpia el input
        se ve el placeholder */

        /* vamos a agregar el check list */
        
       
       
        let span =document.createElement("span");
        span.textContent="\u00d7";
        li.appendChild(span);

        span.classList.add("delete-btn");
        showMessage();
        saveData();



}

/* addEventlistener  */

listContainer.addEventListener("click" , (e)=>{
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

    }else if (e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();

        showMessage();
        saveData();
    }
});

const emptyMessage= document.createElement("p");
emptyMessage.textContent = "no tienes tareas pendientes";
emptyMessage.className ="message";


listContainer.parentElement.appendChild(emptyMessage);


function showMessage(){
    emptyMessage.style.display = listContainer.children.length === 0 ? "block" : "none";

}

/* almacenamiento local = localstorage */

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask (){
    listContainer.innerHTML = localStorage.getItem("data");
    showMessage();

}

document.addEventListener("keydown", (event) =>{
    if (event.key ==="Enter"){
        addTask()
    }
})

showTask();
