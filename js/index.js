function loadPosts(){
    fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    .then(res=>res.json())
    .then(data=>{
        
        displayposts(data.posts);
    })
}

const displayposts = (allPosts) => {
    
    
    
    const sectionDiv = document.getElementById('section-div');
    sectionDiv.innerHTML = '';
    for (const post of allPosts){
        // console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = 'flex gap-5 bg-gray-300 p-7 rounded-3xl mb-8';
        postCard.innerHTML = `
        
        
        <div id="profile-container" class="w-10 h-8  mt-2">
        <img src=${post.image} alt="">  
        <div class='status-indicator inactive' id='status-div'></div>  
         </div>
         <div class="flex-1"> 
                    <div class="flex gap-8 mb-3">
                        <p>#${post.category}</p>
                        <p>Author: ${post.author.name}</p>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold mb-3">${post.title}</h1>
                        <p class="mb-3">
                            ${post.description}
                        </p>
                        <hr class="mb-3">
                        <div class="flex justify-between">
                           <div class="lg:flex ">
                            <p class="flex gap-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
                              </svg>
                              ${post.comment_count}</p>
                            <p class="flex gap-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
                              </svg>
                             ${post.view_count} </p>
                            <p class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
                              </svg>
                              ${post.posted_time}min</p>
                           </div>
                             <div>
                                <button class="mark-btn bg-white rounded-full p-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-green-500">
                                    <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                                    <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                                  </svg>
                                  </button>
                             </div>
                        </div>
                    </div>
                </div>
        
        
        `

        

        postCard.querySelector('.mark-btn').addEventListener('click',()=> markPost(post));
        
       
        sectionDiv.appendChild(postCard);
        setStatus(post,postCard);

        
        
         
       
    
    }
  
   
    
}



let readCounter = 0;

const markPost = (post) =>{
    // console.log('marked',post);
    
    const postSection = document.getElementById('post-section');
    const markedDiv = document.getElementById('marked-div');

    const markedPost = document.createElement('div');
    markedPost.classList = ' mt-7';
    markedPost.innerHTML = `
<div class="flex justify-around bg-gray-100 shadow-md shadow-white px-3 py-5 rounded-xl">
    <p>${post.title}</p>
    <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
      </svg>
      </p>
    <p>${post.view_count}</p>
</div>
      
    `
   

    markedDiv.appendChild(markedPost);
    readCounter++;
    document.getElementById('counter').textContent = `Marked as Read(${readCounter})`
    
    

    

}


const setStatus = (post,postCard) =>{
    // console.log(post);
    const statusDiv = postCard.querySelector('.status-indicator');
        
        if(post.isActive){
            statusDiv.classList.remove('inactive')
            statusDiv.classList.add('active');

        }
        else{
            statusDiv.classList.add('inactive')
            statusDiv.classList.remove('active')
        }
}

const searchPost = () =>{
    const searchInput = document.getElementById('search');
    const searchtext = searchInput.value;
    fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchtext}`)
    .then(res => res.json())
    .then(data => {
        categorizedPost = data.posts;
        displayposts(categorizedPost);
    })
    console.log(searchtext);
    loadPosts(searchtext);
}

function loadLatest(){
    fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    .then(res => res.json())
    .then(data => displayLatest(data))
}

loadLatest();

const displayLatest = (posts) => {
      for(post of posts){
        console.log(post);

        const latestDiv = document.getElementById('latest-div');
        const latestPost = document.createElement('div');
        latestPost.classList = 'card card-compact  shadow-xl bg-white mt-7';
        latestPost.innerHTML = `
        <figure>
        <img
          src=${post.cover_image}
          alt="Shoes" class="p-8"/>
      </figure>
      <div class="card-body">
          <div class='flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
  <path fill-rule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clip-rule="evenodd" />
</svg>

          <p>${post.author.posted_date ? post.author.posted_date : 'No Publish Date'}</p>
          </div>
          
        <h2 class="card-title font-bold">${post.title}</h2>
        <p>${post.description}</p>
        <div class='flex gap-2'>
          <div class='w-10 h-15'>
          <img class='rounded-3xl'  src=${post.profile_image} alt=""></div>
          <div>
              <p class='font-bold'>${post.author.name}</p>
              <p>${post.author.designation ? post.author.designation : 'Unknown'}</p>
          </div>
        </div>
      </div>
    </div>
        
        `

        latestDiv.appendChild(latestPost);
      }
}


loadPosts();