"use strict";

const mainElement = document.getElementById('sales');
const table = document.createElement('table');
mainElement.appendChild(table);
let cityForm=document.getElementById('location-form');

let tfoot =document.createElement('tfoot');
let trow=document.createElement('tr');
let tfooter=document.createElement('th');
let totalColumn=0;
//craet constructor 
function Location(name,minCustomers,maxCustomers,averageCookies){
    this.name=name;
    this.minCustomers=minCustomers;
    this.maxCustomers=maxCustomers;
    this.averageCookies=averageCookies;
    this.resultArr=[0];
    this.total=0;
    Location.allLocation.push(this);

}
Location.allLocation=[];
Location.prototype.numberCustomersPerHour= function (){
    
    return getRandomNumber(this.minCustomers, this.maxCustomers);
};
Location.prototype.getResultArr = function (){
    for (let i = 0 ;i<14 ;i++){
        this.resultArr[i]=Math.floor(this.numberCustomersPerHour()*this.averageCookies);
        //console.log(this.resultArr[i]);
        this.total+=this.resultArr[i];
    }
};
Location.prototype.render=function(){
    this.getResultArr();
   
    
    const row=document.createElement('tr');
    let td=document.createElement('td');
    td.textContent=this.name;
    row.appendChild(td);
    for (let i=0;i<14;i++){
        td=document.createElement('td');
        td.textContent=this.resultArr[i];
        row.appendChild(td);
    }
    td=document.createElement('td');
    td.textContent=this.total;
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
     tfoot =document.createElement('tfoot');
     trow=document.createElement('tr');
    
    let td=document.createElement('th');
    td.textContent='Total';
    trow.appendChild(td);
    let allTotal=0;
    for (let i =0 ;i <14 ; i++){
        //let element=document.querySelectorAll('tr td:nth-child('+i+')');
         totalColumn=0;
        for(let r =0 ;r<Location.allLocation.length;r++){
           // console.log(element[r].textContent);
           // totalColumn+=parseInt(element[r].textContent);
           totalColumn+=Location.allLocation[r].resultArr[i];
           allTotal+=Location.allLocation[r].resultArr[i];
            
        }
        console.log(totalColumn);
        tfooter=document.createElement('td');
        tfooter.textContent=totalColumn;
        trow.appendChild(tfooter);


    }
    tfooter=document.createElement('th');
    tfooter.textContent=allTotal;
    trow.appendChild(tfooter);
    tfoot.appendChild(trow);
    return tfoot;
   
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

//form 

cityForm.addEventListener('submit',function(event){
    event.preventDefault();
    console.log(event.target.cityName.value);
    const name=event.target.cityName.value;
    const min = event.target.min.value;
    const max =event.target.max.value;
    const avg=event.target.avrg.value;
    let newLocation = new Location(name,min,max,avg);
    newLocation.render();
    
    table.removeChild(foot);
    foot =createFooterTable();
    table.appendChild(foot);
});

//footer of table 
let foot =createFooterTable();
table.appendChild(foot);

//Create random number
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
   
  }
