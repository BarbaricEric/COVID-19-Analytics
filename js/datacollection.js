//DOM Elements
const usCaseDeath = document.querySelector(".us-case-death");
const usCaseConfirm = document.querySelector(".us-case-confirmed");
const caCaseConfirm = document.querySelector(".ca-case-confirmed");
const caCaseDeath = document.querySelector(".ca-case-confirmed");
const waCaseConfirm = document.querySelector(".wa-case-confirmed");
const waCaseDeath = document.querySelector(".wa-case-confirmed");
const nyCaseDeath = document.querySelector(".ny-case-confirmed");
const nyCaseConfirm = document.querySelector(".ny-case-confirmed");

//Define API
const globalapi1 = 'https://corona-api.com/countries';
const globalapi2 = 'https://api.covid19api.com/summary';
const localapi1 = 'https://api.covidtracking.com/v1/us/current.json';
const localapi2 = 'https://corona-api.com/countries/US';

//US Count from about-corona
   fetch(localapi2)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);   
   const { deaths, confirmed } = data.data.latest_data;
   /*Set DOM element from API
   usCaseDeath.textContent = deaths;
   usCaseConfirm.textContent = confirmed;*/
   });      
     
//Global Count from covid19api      
   fetch(globalapi2)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//CA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ca/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//WA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/wa/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//NY Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ny/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//US Count from COVID Tracking Project 
   fetch(localapi1)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   usCaseDeath.textContent = getArrayFields(data, "death");
   usCaseConfirm.textContent = getArrayFields(data, "positive");  
   });  

function getArrayFields(input, field) {
    const output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

/*        fetch('.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
                mainContainer.appendChild(div);
            }
        }*/

/*
objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
I want to extract a field from each object, and get an array containing the values, for example field foo would give array [ 1, 3, 5 ].

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]

*/
