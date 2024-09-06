function loadPosts(){
    fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    .then(res=>res.json())
    .then(data=>{
        posts = data.posts;
        displayposts(posts);
    })
}

const displayposts = (allPosts) => {
    console.log(posts);
    const postDiv = document.getElementById('post-div');
    const postCard = document.createElement
}

loadPosts();