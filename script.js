const submitButton = document.getElementById('submitButton')
submitButton.addEventListener("click", addTodo)

function addTodo() {
    const valueTodo = document.getElementById('todo').value
    // const p = document.createElement('p')
    // p.innerHTML = valueTodo
    const result = document.getElementById('result')
    // result.appendChild(p)
    result.innerHTML += `<li>${valueTodo}</li>`
}

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         for (let i = 0; i < json.length; i++) {
//             const result = document.getElementById("result");
//             result.innerHTML += `<li>${json[i].title}</li>`;
//         }
//     })

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await response.json()

    for (let i = 0; i < json.length; i++) {
        const result = document.getElementById("result");
        result.innerHTML += `<li>${json[i].title}</li>`;
    }
    console.log("This is from Git")
    console.log("this is from bracnh feature")
}

getData()