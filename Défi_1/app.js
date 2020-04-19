/* 

var btn = document.getElementById('button');

  btn.addEventListener('click', loadData);

  var show= document.getElementById('output');

  function loadData(){

    let request = new XMLHttpRequest();

    

    request.onload = function () {

      show.innerHTML=this.responseText;

    }
  request.open('GET', 'data.txt');

    request.send();

  
   } */
   
   var button = document.getElementById('button');



   
  function loadData() {

       const xhr = new XMLHttpRequest();
       
       xhr.onload = function() {
            
        document.getElementById('output').innerHTML=this.responseText

       }
      

       xhr.open('GET', 'data.txt');
       xhr.send();

   }
  
   
   button.addEventListener('click', loadData) ;
