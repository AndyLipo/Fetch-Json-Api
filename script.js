let urlBase = 'https://jsonplaceholder.typicode.com';


//let query = 'posts/1'


//GET 
//  fetch(`${urlBase}/${query}`)
//        .then(response => response.json())
//        .then(json => console.log(json))


// let requestBody = {
//     title: 'Andres dale boca',
//     body: 'Argentina campeon',
//     userId: 1,
//   }


//POS: Mandar info
// fetch(`${urlBase}/posts`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(requestBody)
// })
//       .then(response => response.json())
//       .then(json => console.log(json))


//PUT: Editar  info

// let posteo = 5

// let requestBody2 = {
//     id: 3,
//     title: 'Andres',
//     body: 'Argentina campeon',
//     userId: 1,
//   }

// fetch(`${urlBase}/posts/${posteo}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(requestBody2)
// })
//       .then(response => response.json())
//       .then(json => console.log(json))


//PATCH: Modificar cosas

// let post = 10
// let modificacion = {
//     title: 'Este titulo ha sido modificacdo',
// }


// let requestBody2 = {
//     id: 3,
//     title: 'Andres',
//     body: 'Argentina campeon',
//     userId: 1,
//   }

// fetch(`${urlBase}/posts/${post}`, {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(modificacion)
// })
//       .then(response => response.json())
//       .then(json => console.log(json))


//DELETE

let elementoAEliminar = 7;

fetch(`${urlBase}/posts/${elementoAEliminar}`, {
    method: 'DELETE',
  });