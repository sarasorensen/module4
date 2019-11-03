fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
    consoleLogJson(json);
    })
    .catch(function (error) {
        console.log(error);
    });

//Console logs the JSON
function consoleLogJson(json) {

const resultsContainer = document.querySelector(".results");
const results = json;

    for (let i = 0; i < results.length; i++) {
        resultsContainer.innerHTML += "<div class='todo-card'> <div>Title: " + results[i].title + "</div>" + "<div>UserId: " + results[i].userId + "</div>" + "<div>Id: " + results[i].id + "</div>" + "<div>Completed: " + results[i].completed + "</div></div>";
    }
}






