var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
request.send();

request.onload = function() {
    const data = JSON.parse(request.response)
  console.log(data)
  if (request.status === 200){
    document.body.innerHTML =
    `
    <p>${JSON.stringify(data)}</p>
    <p>${data.title}</p>
    <p>${data.body}</p>`
  }
} 
