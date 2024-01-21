let taskcontainer = document.querySelector(".content");
let task = document.querySelector(".addbtn");
let addtask = document.getElementById("task");

task.addEventListener("click",()=>{

    // creating task div and li element  
    let Task = document.createElement("div");
    Task.classList.add("task");

    let newTask = document.createElement("li");
    newTask.innerText = `${addtask.value}`;
    Task.append(newTask);

    // creating completed button 
    let check = document.createElement("button");
    check.classList.add("checkbtn");
    check.innerHTML ="Completed";
    Task.append(check);

    // creating delete button 
    let del = document.createElement("button");
    del.classList.add("delbtn");
    del.innerHTML ="Delete";
    Task.append(del);

    // check if input is empty and append to main container
    if(addtask.value == ""){
        alert("Enter the Task")
    }else{
        taskcontainer.append(Task);
    }

    addtask.value="";

    // complete button functionality
    check.addEventListener("click", ()=>{
        newTask.style.textDecoration="line-through";
    })

    // delete button functionality
    del.addEventListener("click", (e)=>{
        let target = e.target;
        target.parentElement.remove("li");
    })

})