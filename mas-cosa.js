fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(response) {
    return response.json();
  })
  .then(data => console.log(data))
  .catch(function(error) {
    console.log(error);
  }
}