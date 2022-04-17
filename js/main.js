
// HTML element
let elBookShelterForm = document.querySelector("#header__form");
let elToggleLink = document.querySelector("#header__link");
let elAlertResult = document.querySelector("#hero__result");
let elOrderNewest = document.querySelector("#hero__order-link");
let elBokmarksList = document.querySelector("#bookmarks__list");
let elBookmarkWrapper = document.querySelector(".bookmarks__wrapper");
let elBookmarksTemplate = document.querySelector("#template1").content;
let elBookmarksWrapperTemplate = document.querySelector("#template2").content;

// console.log(elBookmarksWrapperTemplate);




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
        console.log(bookmarkTemplate);
        // bookmarkTemplate.querySelector(".modal-btn").href = item.
        // bookmarkTemplate.querySelector(".read-btn").href = item.
    
        
        bookmarkFragment.appendChild(bookmarkTemplate);
    });
    
   node.appendChild(bookmarkFragment)

    // let lenghtAlert = array.lenght

}


fetch("https://www.googleapis.com/books/v1/volumes?q=${bookmark}")
.then(result => result.json())
.then(data => renderBookmarks(data.items, elBookmarkWrapper))



// function renderLeftBookmark(array, wrapper) {
    
//     wrapper.innerHTML = null;
//     let elFragment = document.createDocumentFragment();

//     array.forEach(item => {
        
//         let templateBookmark = elBookmarksTemplate.cloneNode(true);
        
//         templateBookmark.querySelector(".bookmarks-left-title").textContent = item.volumeInfo.title;
//         templateBookmark.querySelector(".bookmarks-left-text2").textContent = item.volumeInfo.publisher;
//         templateBookmark.querySelector(".bookmarks-left-link1").dataset.btnId = item.id;
//         console.log(templateBookmark);
//         // templateBookmark.querySelector(".bookmarks-left-link2").dataset.MovieId = item.movie_youtubeLink;
        
//         elFragment.appendChild(templateBookmark);
//     });
// }

// renderLeftBookmark()


// elBookmarkWrapper.addEventListener("click", function (event) {
//     let modalMoreInfoBtn = event.target.
// })

