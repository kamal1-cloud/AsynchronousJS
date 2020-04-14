

var btn = document.getElementById('button');

  btn.addEventListener('click', loadData);

  var show= document.getElementById('output');

  function loadData(){

    let request = new XMLHttpRequest();

    

    request.onreadystatechange = function () {

      show.innerHTML=this.responseText;

    }
  request.open('GET', 'data.txt');

    request.send();

  
   }
   

