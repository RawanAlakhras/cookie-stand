"use strict";

const mainElement = document.getElementById('sales');
const table = document.createElement('table');
mainElement.appendChild(table);
//craet constructor 
function Location(name,minCustomers,maxCustomers,averageCookies){
    this.name=name;
    this.minCustomers=minCustomers;
    this.maxCustomers=maxCustomers;
    this.averageCookies=averageCookies;
    this.resultArr=[0];

}
Location.prototype.numberCustomersPerHour= function (){
    
    return getRandomNumber(this.minCustomers, this.maxCustomers);
};
Location.prototype.getResultArr = function (){
    for (let i = 0 ;i<14 ;i++){
        this.resultArr[i]=Math.floor(this.numberCustomersPerHour()*this.averageCookies);
        //console.log(this.resultArr[i]);
    }
};
Location.prototype.render=function(){
    this.getResultArr();
   
    
    const row=document.createElement('tr');
    let td=document.createElement('td');
    td.textContent=this.name;
    row.appendChild(td);
    let total=0;
    for (let i=0;i<14;i++){
        td=document.createElement('td');
        td.textContent=this.resultArr[i];
        total+=this.resultArr[i];
        row.appendChild(td);
    }
    td=document.createElement('td');
    td.textContent=total;
    row.appendChild(td);
    table.appendChild(row);


};
let hourArr=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
//create header for table
function createHederTable(){
    const tr=document.createElement('tr');
    let th=document.createElement('th');
    th.textContent=' / ';
    tr.appendChild(th);
    for (let i=0;i<14;i++ ){
        let th=document.createElement('th');
        th.textContent=hourArr[i];
        tr.appendChild(th);
    }
    th=document.createElement('th');
    th.textContent='Daily Location Total';
    tr.appendChild(th);
    return tr;
}
//create footer for table
function createFooterTable(){
    const tfooter =document.createElement('tfoot');
    const trow=document.createElement('tr');
    
    let td=document.createElement('td');
    td.textContent=' / ';
    trow.appendChild(td);
    
    for (let i =2 ;i <17 ; i++){
        let element=document.querySelectorAll('tr td:nth-child('+i+')');
        let totalColumn=0;
        for(let r =0 ;r<element.length;r++){
           // console.log(element[r].textContent);
            totalColumn+=parseInt(element[r].textContent);
            
        }
        //console.log(totalColumn);
        td=document.createElement('td');
        td.textContent=totalColumn;
        trow.appendChild(td);

    }
    tfooter.appendChild(trow);
    return tfooter;
   
}
let trHeader=createHederTable();
    table.appendChild(trHeader);

let Seattle=new Location('Seattle',23,65,6.3);
Seattle.render();

let Tokyo=new Location('Tokyo',3,24,1.2);
Tokyo.render();

let Dubai=new Location('Dubai',11,38,3.7);
Dubai.render();

let Paris=new Location('Paris',20,38,2.3);
Paris.render();

let Lima=new Location('Lima',2,16,4.6);
Lima.render();

//footer of table 
let tfooter =createFooterTable();
table.appendChild(tfooter);

//Create random number
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
   
  }
/*
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
  */