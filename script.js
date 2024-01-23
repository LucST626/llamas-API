
  async function mi_funcion() {
    var response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
  }
  mi_funcion()