// XMLhttprequest GET

/*  let request = new XMLHttpRequest();

request.open('GET', './db.json');

   request.onload = function () {

    console.log(this.responseText);

   }
 

   request.send();
  */

// *****************************XMLhttprequest POST******************************

/*  const params = {
        
        "author": "kamal",
        "country": "morocco",
        "imageLink": "images/the-mahab-harata.jpg",
        "language": "Sanskrit",
        "link": "https://en.wikipedia.org/wiki/Mahabharata\n",
        "pages": 276,
        "title": "i fuck up",
        "year": -700,
    } 
     
     const request = new XMLhttpRequest()

    
     request.open('POST', './db.json', true)


     request.setRequestHeader('Content-type', 'application/json')



     request.onload = function() {

         // Do whatever with response
         document.body.innerHTML =request.responseText  

     }

    request.send(JSON.stringify(params));// Make sure to stringify
 
     */


//  ******************* Fetch get request******************************


/* fetch('./db.json')


.then((Response) => Response.json())
    
  .then((data) => console.log(data)); */

//********************************** */ fetch post request****************************************/

// 405 veut dire que la méthode  que tu as utilisé n'est pas autorisée
fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      // la recherche ajout et mise à jour se fait par id donc il faut ajouté un id dans la base de donné "db.json"
      "id": 4,
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

  .then(data => console.log(data))

  .then(error => console.log('ERROR'))






//******************************* */ Fetch  put request******************************/

/* fetch('./db.json',{
    method : 'PUT',
    headers: {
        'content-type' : 'application/json'
    },
   body : JSON.stringify({
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

/* fetch('./db.json',{
    method : 'delete ',
    headers: {
        'content-type' : 'application/json'
    },
   body : JSON.stringify({
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
/*****************************ASYN/AWAIT************************************************
 * async/await
 */

/*   async function getData() {
    const response =await fetch('db.json');
    const data = await response.json();
    document.getElementById('btn').innerHTML=data;
}

getData();


/***************************************async/await POST****************************************** */

/* const add = async (device) => {
    const { hostname: location } = window.location;
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
  }; */