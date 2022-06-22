var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      var container = document.querySelector("users")
      // TODO: Loop through the data and generate your HTML
      for (var i=o;i<5;i++){
        //Creating a h3 element and a p element
        var userNameElement and 
        var newLine = document.createElement("div");
        newLine.classList = "funTimes";
        newLine
        document.createElement("div")
        newLine.classList = (funtimes)
        newLine.innerHTML=data.user.login
        container.append(newLine);
        var newLin
      }
    });
}
fetchButton.addEventListener('click', getApi);
