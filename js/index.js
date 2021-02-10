window.addEventListener('DOMContentLoaded', () => renderPosts());

const container = document.querySelector('.blogs')
const search_form = document.querySelector('.search')

const renderPosts = async (term) =>{
    let url = 'http://localhost:3000/posts?_sort=likes&_order=desc';

    if(term)
    {
        url += `&q=${term}`
    }

    const res = await fetch(url);
    const posts = await res.json();
    console.log(posts);

    let template = '';

    posts.forEach(post=>{
        template +=`
        <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} Likes</small></p>
        <p>${post.body.slice(0,200)}....</p>
        <a href="details.html?id=${post.id}">Read more</a>
        `
    })
    container.innerHTML= template
}

search_form.addEventListener('submit',(e)=>{
    e.preventDefault()

    renderPosts(search_form.term.value.trim())
})
