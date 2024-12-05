

function addtodohtml(todotext)
{
    const todotext1= document.getElementById('tasklist');
    const newtodo=document.createElement('li');
    newtodo.textContent=todotext;
    todotext1.appendChild(newtodo);

    }

function loadtodos()
{
    let todos= JSON.parse(localStorage.getItem("todos")) || {"todolist":[]};
    console.log(todos);
    return todos;
}

function addtolocalstorage(todotext)
{
    let todos= loadtodos();
    todos.todolist.push(todotext);
    localStorage.setItem("todos",JSON.stringify(todos));
   
}
document.addEventListener("DOMContentLoaded",() => {
   let  todoinput=document.getElementById("newi");

    let submitbutton=document.getElementById("bt");
    submitbutton.addEventListener("click",(event) => {

        const todotext1= document.getElementById('tasklist');
    const todotext=todoinput.value;

    if(todotext==="")
    {
        alert("Please enter a valid todo");
        return;
    }
    else
    {
        addtolocalstorage(todotext);
        addtodohtml(todotext);
    }
})



    todoinput.addEventListener("change",(event) =>
    {
          let todotext= event.target.value;
          event.target.value= todotext.trim();
          console.log(event.target.value);
    })


    let todo1 = loadtodos();
    todo1.todolist.forEach((todo) => {
        let todo2 = document.createElement('li');
        todo2.textContent = todo;
        const todotext1 = document.getElementById('tasklist');
        todotext1.appendChild(todo2);

      });
});

