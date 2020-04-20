/* // XMLhttprequest GET
 var myBtn = document.getElementById('btn');

myBtn.addEventListener('click', creat)

function creat() {
  var url  = "db.json";

  var xhr  = new XMLHttpRequest()

  xhr.open('GET', url, true)

  xhr.onload = function () {

    var books = xhr.responseText;

    if (xhr.readyState == 4 && xhr.status == "200") {
       
   
      console.table(books);

  }
  else {
      console.error(books);
  }

    }
xhr.send(null);
/********************************************************************** */

 var myBtn = document.querySelector("button");

myBtn.addEventListener('click',showList);

var xhr= new XMLHttpRequest();



function showList(){
  
xhr.onload= function(){
 
  var data = JSON.parse(xhr.response)
    if(data.length>0){
        var output= "";

        // star for loop

        data.forEach((u)=>{
          output +=`
          <tr>
          <td>${u.id}</td>
          <td>${u.author}</td>
          <td>${u.country}</td>
          <td>${u.imagetdnk}</td>
          <td>${u.language}</td>
          <td>${u.tdnk}</td>
          <td>${u.pages}</td>
          <td>${u.title}</td>
          <td>${u.year}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
          </tr> 
        
          ` 
          })
        // close for loop
        document.getElementById("book-list").innerHTML= output;
    }
    
}
xhr.open('get','http://localhost:3000/books');
xhr.send();
}



/* 
var request = new XMLHttpRequest();
var url = 'http://localhost:3000/books/3';
request.open('GET', url)
request.onload= function(){
  var books = JSON.parse(this.responseText);
  if (request.readyState == 4 && request.status == "200"){
    console.table(books);
  }else{
    console.error(error);
  }
}
request.send()

 */


 /* var myBtn = document.getElementById('btn');

 myBtn.addEventListener('click', creat)

 var url  = "http://localhost:3000/books";
var xhr  = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function () {
	var books = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
	console.table(books);
	} else {
		console.error(books);
	}
}
xhr.send(null);
  */

// *****************************XMLhttprequest POST******************************


/*  

  var url = "http://localhost:3000/books/";


    var data = {
      "id": 31,
    "author": "kamal",
    "country": "morocco",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "arab",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958}

      
   
  
   var json = JSON.stringify(data);
 
   var xhr = new XMLHttpRequest();

   xhr.open("POST", url);

   xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  
   
   xhr.onload = function () {
  
     var books = JSON.parse(xhr.responseText);

     if ((xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)) {
       document.body.innerHTML = books;
     } else {
       console.error(books);
     }
   }
   xhr.send(json);
     */
   // *****************************XMLhttprequest PUT******************************/

/* 
   var url = "http://localhost:3000/books/20";


    var data = {"id": 20,
    "author": "kamalHABRICH",
    "country": "moroccoCITY",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "arab",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 2000}

      
   
  
   var json = JSON.stringify(data);
 
   var xhr = new XMLHttpRequest();

   xhr.open("PUT", url);

   xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  
   
   xhr.onload = function () {
  
     var books = JSON.parse(xhr.responseText);

     if ((xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)) {
       document.body.innerHTML = books;
     } else {
       console.error(books);
     }
   }
   xhr.send(json);
 */
/************************************************************************************ */

   // *****************************XMLhttprequest DELETE******************************/

/* 
   var url = "http://localhost:3000/books/31";

   var xhr = new XMLHttpRequest();

   xhr.open("delete", url);

   xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  
   
   xhr.onload = function () {
  
     var books = JSON.parse(xhr.responseText);

     if ((xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200)) {
       document.body.innerHTML = books;
     } else {
       console.error(books);
     }
   }
   xhr.send(); 
 */
/************************************************************************************ */

//  ******************* Fetch get request******************************

/*  var url = "http://localhost:3000/books/";
  fetch(url)
.then((Response) => Response.json())
    
  .then((books) => console.table(books));   */
  


  /**************************************************************** */
  
 
/* 
     var url = "http://localhost:3000/books/20";
    
   fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      // la recherche ajout et mise à jour se fait par id donc il faut ajouté un id dans la base de donné "db.json"
      "id": 20,
      "author": "kamal",
      "country": "morocco",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "arab",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    })

  })
  // à revoir 
  .then(res => {
    return res.json();
  })

  .then(data => document.body.innerHTML= data)

  .then(error => console.log('ERROR'))

 */

//******************************* */ Fetch  put request******************************/
/* 
 var url = "http://localhost:3000/books/20";
     
fetch(url,{
    method : 'PUT',
    headers: {
        'content-type' : 'application/json'
    },
   body : JSON.stringify({
     "id":20,
    "author": "kamalhabrich",
    "country": "algerie",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "arab",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
   })

})

.then(res => {
  return res.json()
})

.then(data => console.log(data))

.then(error => console.log('ERROR'))


 */





//**************************************** fetch delete request********************************/
/* 
 var url = "http://localhost:3000/books/20";

 fetch( url ,{
    method : 'DELETE'
})

.then(res => {
  return res.json()
})

.then(data => console.log(data))

.then(error => console.log('ERROR'))

 */
/*****************************ASYN/AWAIT************************************************
 */ 
/* 
var url = "http://localhost:3000/books/";

  async function getData() {
    const response =await fetch(url);
    const books = await response.json();
    console.table(books);
}

getData();
 */

/***************************************async/await POST****************************************** */
 
/*  const add = async (device) => {

  const data = JSON.stringify({
    "id":31,
    "author": "kamalhabrich",
    "country": "algerie",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "arab",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  })

    const settings = {
      method: 'POST',
      body: JSON.stringify(device),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  
    const response = await fetch(`db.json`, settings);
    if (!response.ok) throw Error(response.message);
  
    try {
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  }; 
 
 */
     

/* 
$(document).ready(function(){
  $.ajax({
      type: "GET",
      url: "http://localhost:3000/",
      contentType: "application/json"
    }).done(function(data){
         for(var i =1; i<= 10; i++){
         $('#itemsList').append('<div id="r'+ i +'"></div>')
         }
    })
}); */




// Book Class: Represents a Book
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// UI Class: Handle UI Tasks
 class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.id}</td>
    <td>${book.author}</td>
    <td>${book.country}</td>
    <td>${book.imagetdnk}</td>
    <td>${book.langbookage}</td>
    <td>${book.tdnk}</td>
    <td>${book.pages}</td>
    <td>${book.title}</td>
    <td>${book.year}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';

  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
 
  // Validate
  if(title === '') {
    UI.showAlert('Please fill in all fields', 'danger');
  } else {
    // Instatiate book
    const book = new Book(title, author, isbn);

    // Add Book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert('Book Added', 'success');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Book Removed', 'success');
}); 

