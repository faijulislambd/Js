var today = new Date();
var container = document.getElementById("container");
var ul = document.createElement('ul');
ul.classList.add('list-unstyled');
var liDate = document.createElement('li');
liDate.innerHTML = today.getDate();
ul.appendChild(liDate);
var liYear = document.createElement('li');
liYear.innerHTML = today.getFullYear();
ul.appendChild(liYear);
var liMonth = document.createElement('li');
liMonth.innerHTML = today.getMonth();
ul.appendChild(liMonth);
var liDay = document.createElement('li');
liDay.innerHTML = today.getDay();
ul.appendChild(liDay);
var liHour = document.createElement('li');
liHour.innerHTML = today.getHours();
ul.appendChild(liHour);
var liMin = document.createElement('li');
liMin.innerHTML = today.getMinutes();
ul.appendChild(liMin);
var liSec = document.createElement('li');
ul.appendChild(liSec);
liSec.innerHTML = today.getSeconds();
container.appendChild(ul);

var testVlaue = Number(liSec.innerHTML);


if(typeof testVlaue === 'number'){
    liSec.append(String(' Number'));
}
else{
    alert(typeof testVlaue);
}