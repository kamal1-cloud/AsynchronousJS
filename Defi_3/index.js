// XMLhttprequest GET

/*  let request = new XMLHttpRequest();

request.open('GET', './db.json');

   request.onload = function () {

    document.getElementById('btn').innerHTML=this.responseText
   var temp = "";
  responseText.array.forEach(element => {
      temp +="<tr>" ;
      temp += "<tr>"+books.author+"<tr>";
      temp += "<tr>"+books.country+"<tr>";
      temp += "<tr>"+books.title+"<tr>";
  });
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
 

fetch('./db.json',{
        method : 'POST',
        headers: {
            'content-type' : 'application/json'
        },
       body : JSON.stringify({
        "author": "kamal",
        "country": "morocco",
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