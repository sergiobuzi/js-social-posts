// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed, prendendo le informazioni che ci servono dall’array di oggetti che già trovate.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const container = document.getElementById("container");

posts.forEach((element) => {
    console.log(element);
    
    let post = 
    
        `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element.author.name}</div>
                    <div class="post-meta__time">${element.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${element.content}</div>
        <div class="post__image">
            <img src="${element.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
        `

    //inserisco i blocchi all'interno dell'html
    container.innerHTML += post;

});



// Milestone 2 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.


//creo un array dove salvo i post che mi piacciono
const likedPosts =[];

//creo la variabile per il bottone
const postini = document.querySelectorAll(".post");


postini.forEach(post => {

    const button = post.querySelector(".like-button");

    //attivo la funzione del click al bottone
    button.addEventListener("click",

        function (event){ 

            //funzione per non far tornare la pagina all'inizio quando premo like
            event.preventDefault();
            
            //variabile che mi prende il 
            const postId = button.getAttribute("data-postid");


            //SE il post a cui metto like non e nell'array
            if(!likedPosts.includes(postId)){

                //allora lo pusho dentro e stampo
                likedPosts.push(postId);
                console.log(likedPosts);


                //Se invece e gia presente nell'array
                if(likedPosts.includes(postId)){
                    //a questo punto aggiungo la classe per i post con il like
                    const noliketext = post.querySelector(".like-button__label");
                    const nolikeicon = post.querySelector(".like-button__icon");
                    noliketext.classList.add("like-button--liked");
                    nolikeicon.classList.add("like-button--liked");


                    //creo una costante per il contatore dei likes
                    let likesCounter = post.querySelector(".js-likes-counter");

                    //funzione per incrementare il contatore dei likes
                    likesCounter.textContent = parseInt(likesCounter.textContent) + 1;
                    
                };
            }
        }
    );
});



