

   var mybutton1 = document.getElementById('button1');

   var mybutton2 =  document.getElementById ('button2');

   mybutton1.addEventListener('click', loadCustomer);

   mybutton2.addEventListener('click', loadCustomers);


   function loadCustomer() {

    'use strict'

    let request = new XMLHttpRequest();

    
    request.onload = function () {

        console.log(this.responseText)

    }
  request.open('GET', 'customer.json');

    request.send();
   }

function loadCustomers() {

    'use strict'

    let request = new XMLHttpRequest();

    
    request.onload = function () {

        console.log(this.responseText)

    }
  request.open('GET', 'customers.json');

    request.send();


}