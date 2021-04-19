"use strict";
let Seattle = {
    minCustomers:23,
    maxCustomers:65,
    averageCookies:6.3,
    resultArr:[0],

    numberCustomersPerHour:function(min,max){
        return getRandomNumber(min, max);
    },
    render: function() {
        let sales= document.getElementById('sales');
        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);
        let total=0;
        for (let i=0 ;i<14 ;i++){
            let liElement=document.createElement('li');
            this.resultArr[i]=Math.floor(this.numberCustomersPerHour(this.minCustomers,this.maxCustomers)*this.averageCookies);
            total+=this.resultArr[i];
            let temporary=i+6;
             if(temporary <12){
                liElement.textContent=temporary+'am: '+this.resultArr[i]+' cookies';
                 ulElement.appendChild(liElement);
             }
             else if(temporary>12){
                 liElement.textContent=(temporary-12)+'pm: '+this.resultArr[i]+' cookies';
                ulElement.appendChild(liElement);
            }
            else if(temporary==12){
                 liElement.textContent=temporary+'pm: '+this.resultArr[i]+' cookies';
             ulElement.appendChild(liElement);
            }
            //console.log(this.resultArr[i]);
        }
         let liele=document.createElement('li');
        liele.textContent='Total: '+total+' cookies';
         ulElement.appendChild(liele);
    },
    

}
let tokyo={
    minCustomers:3,
    maxCustomers:24,
    averageCookies:1.2,
    resultArr:[0],

    numberCustomersPerHour:function(min,max){
        return getRandomNumber(min, max);
    },
    render: function() {
        let sales= document.getElementById('sales2');
        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);
        let total=0;
        for (let i=0 ;i<14 ;i++){
            let liElement=document.createElement('li');
            this.resultArr[i]=Math.floor(this.numberCustomersPerHour(this.minCustomers,this.maxCustomers)*this.averageCookies);
            total+=this.resultArr[i];
            let temporary=i+6;
             if(temporary <12){
                liElement.textContent=temporary+'am: '+this.resultArr[i]+' cookies';
                 ulElement.appendChild(liElement);
             }
             else if(temporary>12){
                 liElement.textContent=(temporary-12)+'pm: '+this.resultArr[i]+' cookies';
                ulElement.appendChild(liElement);
            }
            else if(temporary==12){
                 liElement.textContent=temporary+'pm: '+this.resultArr[i]+' cookies';
             ulElement.appendChild(liElement);
            }
            //console.log(this.resultArr[i]);
        }
         let liele=document.createElement('li');
        liele.textContent='Total: '+total+' cookies';
         ulElement.appendChild(liele);
    },
    
}
let dubai={
    minCustomers:11,
    maxCustomers:38,
    averageCookies:3.7,
    resultArr:[0],

    numberCustomersPerHour:function(min,max){
        return getRandomNumber(min, max);
    },
    render: function() {
        let sales= document.getElementById('sales3');
        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);
        let total=0;
        for (let i=0 ;i<14 ;i++){
            let liElement=document.createElement('li');
            this.resultArr[i]=Math.floor(this.numberCustomersPerHour(this.minCustomers,this.maxCustomers)*this.averageCookies);
            total+=this.resultArr[i];
            let temporary=i+6;
             if(temporary <12){
                liElement.textContent=temporary+'am: '+this.resultArr[i]+' cookies';
                 ulElement.appendChild(liElement);
             }
             else if(temporary>12){
                 liElement.textContent=(temporary-12)+'pm: '+this.resultArr[i]+' cookies';
                ulElement.appendChild(liElement);
            }
            else if(temporary==12){
                 liElement.textContent=temporary+'pm: '+this.resultArr[i]+' cookies';
             ulElement.appendChild(liElement);
            }
            //console.log(this.resultArr[i]);
        }
         let liele=document.createElement('li');
        liele.textContent='Total: '+total+' cookies';
         ulElement.appendChild(liele);
    },
    

}
let paris={
    minCustomers:20,
    maxCustomers:38,
    averageCookies:2.3,
    resultArr:[0],

    numberCustomersPerHour:function(min,max){
        return getRandomNumber(min, max);
    },
    render: function() {
        let sales= document.getElementById('sales4');
        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);
        let total=0;
        for (let i=0 ;i<14 ;i++){
            let liElement=document.createElement('li');
            this.resultArr[i]=Math.floor(this.numberCustomersPerHour(this.minCustomers,this.maxCustomers)*this.averageCookies);
            total+=this.resultArr[i];
            let temporary=i+6;
             if(temporary <12){
                liElement.textContent=temporary+'am: '+this.resultArr[i]+' cookies';
                 ulElement.appendChild(liElement);
             }
             else if(temporary>12){
                 liElement.textContent=(temporary-12)+'pm: '+this.resultArr[i]+' cookies';
                ulElement.appendChild(liElement);
            }
            else if(temporary==12){
                 liElement.textContent=temporary+'pm: '+this.resultArr[i]+' cookies';
             ulElement.appendChild(liElement);
            }
            //console.log(this.resultArr[i]);
        }
         let liele=document.createElement('li');
        liele.textContent='Total: '+total+' cookies';
         ulElement.appendChild(liele);
    },
    
}
let lima={
    minCustomers:2,
    maxCustomers:16,
    averageCookies:4.6,
    resultArr:[0],

    numberCustomersPerHour:function(min,max){
        return getRandomNumber(min, max);
    },
    render: function() {
        let sales= document.getElementById('sales5');
        let ulElement = document.createElement('ul');
        sales.appendChild(ulElement);
        let total=0;
        for (let i=0 ;i<14 ;i++){
            let liElement=document.createElement('li');
            this.resultArr[i]=Math.floor(this.numberCustomersPerHour(this.minCustomers,this.maxCustomers)*this.averageCookies);
            total+=this.resultArr[i];
            let temporary=i+6;
             if(temporary <12){
                liElement.textContent=temporary+'am: '+this.resultArr[i]+' cookies';
                 ulElement.appendChild(liElement);
             }
             else if(temporary>12){
                 liElement.textContent=(temporary-12)+'pm: '+this.resultArr[i]+' cookies';
                ulElement.appendChild(liElement);
            }
            else if(temporary==12){
                 liElement.textContent=temporary+'pm: '+this.resultArr[i]+' cookies';
             ulElement.appendChild(liElement);
            }
            //console.log(this.resultArr[i]);
        }
         let liele=document.createElement('li');
        liele.textContent='Total: '+total+' cookies';
         ulElement.appendChild(liele);
    },
    
}
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
   
  }
 
  Seattle.render();
  document.getElementById('Seattle').textContent='Seattle';
  document.getElementById('Tokyo').textContent='Tokyo';
  tokyo.render();
  document.getElementById('Dubai').textContent='Dubai';
  dubai.render();
  document.getElementById('Paris').textContent='Paris';
  paris.render();
  document.getElementById('Lima').textContent='Lima';
  lima.render();
  