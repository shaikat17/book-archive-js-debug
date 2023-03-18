
//------------- handle search button-----------
const searchBook = () => {
  const searchField = document.getElementById("search-input");
  const searchText = searchField.value;

  // validate input field
  if(!searchText) {
    alert("Please enter a valid name.");
    return;
  }

  // ----------load data----------
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.docs)
      displaySearchResult(data.docs)
    });
};

// ----------display search result data----------
const displaySearchResult = (myBooks) => {
  // console.log(myBooks)
  const searchResult = document.getElementById("search-result");
  searchResult.innerText = "";


  const books = myBooks;
  console.log(books)
  books.forEach((book) => {
    console.log(book);
    const div = document.createElement("div");
    div.classList.add("col-sm-1", "col-md-4");
    div.innerHTML = `
        <div class="card">
            <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title"> Name: ${book.title}</h5>
              <h6> Author: ${book.author_name}</h6>
              <p>Publisher: ${book.publisher ? `<small>${book.publisher[0]}</small>` : 'Not Found'}</p>
              <small> First Published Year: ${book.first_publish_year}</small>
            </div>
        </div>
        `;
    searchResult.appendChild(div);
  });
};
