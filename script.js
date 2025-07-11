  function addtask(){
    const taskinput=document.getElementById("taskinput");
    const tasktext=taskinput.value.trim();
    
if (tasktext===""){
    alert("Please enter task ");
    return;
}
    
    const li=document.createElement("li");
    const span=document.createElement("span");
    
    span.textContent=tasktext;
    span.className="task-text";
    span.onclick=function(){
        li.classList.toggle("completed");
    };
    
    const deletebtn=document.createElement("button");
    deletebtn.textContent="X";
    deletebtn.className="delete-btn";
    deletebtn.onclick=function(){
        li.remove();
    };
    li.appendChild(span);
    li.appendChild(deletebtn);
    
    document.getElementById("tasklist").appendChild(li);
    
    taskinput.value="";
    
}


        
