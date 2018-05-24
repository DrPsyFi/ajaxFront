const baseURL = 'http://localhost:3000'

let  create = document.querySelector("#createPost")
let oldPosts = document.querySelector("#oldPosts")

const show = document.querySelector('#sayIt').addEventListener('click', () => {

  create.classList.remove('hide')
  createPost()
})

/////// Get all OLD POSTS ///////////////////////////////////////
showOldPosts()

function showOldPosts() {

    axios.get(`${baseURL}/blogs`)
     .then(function(result) {

       let oldPostsData = result.data.data
       let postParent = document.querySelector("#history")
       postParent.innerHTML = ""
       oldPostsData.map((oldPost) => { oldPost.title


          const postLi =  document.createElement('button')
          postLi.id = oldPost.id
          postLi.addEventListener('click', (event) => {updatePost(oldPost.id)})
          postLi.classList.add('list-group-item')
          postLi.classList.add('list-group-item-action')
          postLi.innerHTML= oldPost.title
          postParent.appendChild(postLi)

        })
    })
}

///////////////// Create Post ///////////////////

function createPost(){
  let postTitle = document.querySelector('#title')


  let postContent = document.querySelector('#content')
  let postForm = document.getElementById('submitThis')

  postForm.addEventListener('submit',(event) => {
    event.preventDefault()

    axios.post(`${baseURL}/blogs`, {
      title: postTitle.value ,
      content: postContent.value
    })
    .then(function(response){
      postTitle.value =""
      postContent.value = ""

      setTimeout(function(){
      document.querySelector('#createPost').classList.add('hide')
      message.innerHTML = ""
      showOldPosts()
            },3000);

        showOldPosts()
    }).catch(function (error) {
      console.log(error)
    })

  })
}

function updatePost(id) {

  let showUpdate = document.querySelector('#updatePost')
  showUpdate.classList.remove('hide')
  let updateContent = document.querySelector('#updateContent')
  let updateTitle = document.querySelector('#updateTitle')
  let updateButton = document.querySelector("#updateButton")
  let deleteButton = document.querySelector("#deleteButton")

  axios.get(`${baseURL}/blogs/${id}`)
    .then(function(result) {
      let data = result.data.data
      updateTitle.value = data.title
      updateContent.value = data.content

      updateButton.onclick=()=> sendUpdate(data.id)

      deleteButton.onclick=()=> deletePost(data.id)

  })
}

function sendUpdate(id) {
  event.preventDefault()
  console.log('update');
  console.log("r");
  let updateContent = document.querySelector('#updateContent')
  let updateTitle = document.querySelector('#updateTitle')
  axios.put(`${baseURL}/blogs/${id}`, {
      title: updateTitle.value,
      content: updateContent.value
    }).then(function(result) {
       let message = document.querySelector('#updateMessage')
       message.innerHTML = "Succesful Update!!!"

       setTimeout(function(){
       document.querySelector('#updatePost').classList.add('hide')
       message.innerHTML = ""
       showOldPosts()
             },3000);

    }).catch(console.error)
}

function deletePost(id) {
  event.preventDefault()
  console.log('delete');
    console.log("l");
  axios.delete(`${baseURL}/blogs/${id}`)
    .then(function(result) {
      let message = document.querySelector('#updateMessage')
      message.innerHTML = "Succesful Delete!!!"

      setTimeout(function(){
      document.querySelector('#updatePost').classList.add('hide')
      message.innerHTML = ""
      showOldPosts()
            },3000);

    }).catch(console.error)
}
