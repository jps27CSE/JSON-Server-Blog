const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details')
const delete_Post = document.querySelector('.button')
const renderDetails = async() =>{
    const res = await fetch('http://localhost:3000/posts/' + id);

    const posts = await res.json();

    console.log(posts);

    const template =`
    <h1>${posts.title}</h1>
    <p>${posts.body}</p>
    `

    container.innerHTML = template;
}

delete_Post.addEventListener('click',async(e)=>{
    const res = await fetch('http://localhost:3000/posts/' + id,{
        method: 'DELETE'
    })
    window.location.replace('/index.html')
})

window.addEventListener('DOMContentLoaded', renderDetails);