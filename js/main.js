// HTML element
let elBookmarkForm = document.querySelector("#bookmark__form");
let elBookmarkInput = document.querySelector(".bookmark__input");
let elToggleLink = document.querySelector("#header__link");
let elAlertResult = document.querySelector("#hero__result");
let elOrderNewest = document.querySelector("#hero__order-link");
let elBokmarksList = document.querySelector("#bookmarks__list");
let elBookmarkWrapper = document.querySelector(".bookmarks__wrapper");
let elBookmarksTemplate = document.querySelector("#template1").content;
let elBookmarksWrapperTemplate = document.querySelector("#template2").content;

// console.log(elBookmarksWrapperTemplate);

// let findMovies = function (title) {

//     let filterBookmark = filter( item => {

//         return item.volumeInfo.title.match(title) && item.volumeInfo.publisher
//     })

//     return filterBookmark

// }

// elBookmarkForm.addEventListener("input", (event) => {
//     event.preventDefault()
    
//     let searchInput = elBookmarkInput.value.trim();
//     console.log(searchInput);
//     // renderBookmarks(searchInput, elBookmarkWrapper);
// })



function renderBookmarks(array, node) {
    
    node.innerHTML = null;
    let bookmarkFragment = document.createDocumentFragment();
    
    array.forEach( item => {
        
        let bookmarkTemplate = elBookmarksWrapperTemplate.cloneNode(true);
        
        bookmarkTemplate.querySelector(".card-img-top").src = item.volumeInfo.imageLinks.smallThumbnail
        bookmarkTemplate.querySelector(".card-title").textContent = item.volumeInfo.title;
        bookmarkTemplate.querySelector(".card-info").textContent = item.volumeInfo.publisher;
        bookmarkTemplate.querySelector(".card-year").textContent = item.volumeInfo.publishedDate;
        bookmarkTemplate.querySelector(".bookmark-btn").dataset.bookmarkId = item.id
        bookmarkTemplate.querySelector(".modal-btn").dataset.modalId = item.id
        // bookmarkTemplate.querySelector(".read-btn").href = item.
        
        
        bookmarkFragment.appendChild(bookmarkTemplate);
    });
    
    node.appendChild(bookmarkFragment)
    
    // let lenghtAlert = array.lenght
    
}


fetch("https://www.googleapis.com/books/v1/volumes?q=${bookmark}")
.then(result => result.json())
.then(data => renderBookmarks(data.items, elBookmarkWrapper))


elBookmarkWrapper.addEventListener("click", function (event) {
    let getting = event.target.dataset.bookmarkId ;
     
    if (getting) {
        
        let 
    }
})



function renderBookmarkList(array, wrapper) {
    
    wrapper.innerHTML = null;

    let elFragment = document.createDocumentFragment();

    array.forEach(function (item) {
        
        let templateBookmark = elBookmarksTemplate.cloneNode(true);
        
        templateBookmark.querySelector(".bookmark-title").textContent = item.volumeInfo.title;;
        templateBookmark.querySelector(".bookmark-text").textContent = item.volumeInfo.publisher;
        templateBookmark.querySelector(".bookmarks-link").src = item.image
        templateBookmark.querySelector(".delete-link").dataset.MovieId = item.movie_youtubeLink;
        
        elFragment.appendChild(templateBookmark);
    })

    wrapper.appendChild(elFragment)

}




