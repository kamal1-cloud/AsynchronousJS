

   var mybutton1 = document.getElementById('button1');


   var mybutton2 =  document.getElementById ('button2');



   mybutton1.addEventListener('click', loadCustomer);

   mybutton2.addEventListener('click', loadCustomers);


   

   this.responseText
 var myDiv2 =document.getElementById('customers');


   function loadCustomer() {

    'use strict'

    let request = new XMLHttpRequest();

    
    request.onload = function () {

      document.getElementById('customer').innerHTML = `name: ${ob1.name}<br>company: ${ob1.company}<br>phone: ${ob1.phone}<br>id: ${ob1.id}` ;

    }
  request.open('GET', 'customer.json');

    request.send();


   }

function loadCustomers() {

    'use strict'

    let request = new XMLHttpRequest();

    
    request.onload = function () {

      myDiv2.innerHTML= this.responseText

    }
  request.open('GET', 'customers.json');

    request.send();


}

output : `<ul><li> id : ${objet.id} </li></ul>`


var output = '';
for(var i in users){
    output += '<ul>' +
    '<li>ID : '+users[i].id+'</li>' +
    '<li>Name : '+users[i].name+'</li>' +
    '<li>Company : '+users[i].company+'</li>' +
    '<li>Phone : '+users[i].phone+'</li>' +
    '</ul>';
}
document.getElementById('customers').innerHTML = output;