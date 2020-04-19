// XMLhttprequest GET
 var myBtn = document.getElementById('btn');

myBtn.addEventListener('click', creat)

function creat() {
  var url  = "http://localhost:3000/books/2";

  var xhr  = new XMLHttpRequest()

  xhr.open('GET', url, true)

  xhr.onload = function () {

    var books = xhr.responseText;

    if (xhr.readyState == 4 && xhr.status == "200") {
   
   
      document.getElementById('output').innerHTML = books;

  }
  else {
      console.error(res);
  }

   
   
    }
xhr.send(null);
} 


/* var mydiv = document.getElementById('btn');
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
   var url = "http://localhost:3000/books/20";

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
   xhr.send(); */

/************************************************************************************ */

//  ******************* Fetch get request******************************

/* var url = "http://localhost:3000/books/";

 fetch(url)
.then((Response) => Response.json())
    
  .then((books) => console.table(books)); 


 */

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
/* 
 const add = async (device) => {

    const location = window.location.hostname;
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