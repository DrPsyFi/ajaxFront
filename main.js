const baseURL = 'http://localhost:3000'

const show = document.querySelector('#sayIt').addEventListener('click', () => {
  console.log('hello');
    show.classList.toggle("hide")
})

//
// document.querySelector("#get-one-button").addEventListener('click', () => {
//   const containerGetOne = document.querySelector("#get-one-container")
//   const container = document.querySelector("#get-one-id-input")
//   const id = container.value
//   axios.get(`${baseURL}/notes/${id}`)
//     .then(result => {
//       containerGetOne.innerHTML = `
//         <code>${JSON.stringify(result.data)}</code>
//       `
//     })
// })
//
// document.querySelector("#create-button").addEventListener('click', () => {
//   const containerCreate = document.querySelector("#create-container")
//   const container = document.querySelector("#create-note-input")
//   const note = container.value
//
//   axios.post(`${baseURL}/notes`, {content:note} )
//     .then(result =>
//       containerCreate.innerHTML = `
//         <code>${JSON.stringify(result.data.content)}</code>
//       `
//     )
// })
//
// document.querySelector("#update-button").addEventListener('click', () => {
//   const containerUpdate = document.querySelector("#update-container")
//   const containerInput = document.querySelector("#update-note-input")
//   const note = containerInput.value
//   const containerID = document.querySelector("#update-id-input")
//   const id = containerID.value
//   axios.put(`${baseURL}/notes/${id}`, {content:note} )
//     .then(result =>
//       containerUpdate.innerHTML = `
//         <code>${JSON.stringify(result.data.content)}</code>
//       `
//     )
// })
//
// document.querySelector("#destroy-button").addEventListener('click', () => {
//   const containerDestroy = document.querySelector("#destroy-container")
//   const containerID = document.querySelector("#destroy-id-input")
//   const id = containerID.value
//   axios.delete(`${baseURL}/notes/${id}`)
//     .then(result => {
//       containerDestroy.innerHTML = `
//         <code>${JSON.stringify(result.data)}</code>
//       `
//     })
// })
