var input = document.querySelector("#input-box")
var list = document.querySelector("#list-container")

function addTask() {
    if (input.value === '') {
        alert('you must write something !')
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    input.value = "";
    savedata();
}

