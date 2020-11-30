//DOM Elements
const usCaseDeath = document.querySelector(".us-case-death");
const usCaseConfirm = document.querySelector(".us-case-confirmed");
const waCaseConfirm = document.querySelector(".wa-case-confirmed");
const waCaseDeath = document.querySelector(".wa-case-confirmed");
const nyCaseDeath = document.querySelector(".ny-case-confirmed");
const nyCaseConfirm = document.querySelector(".ny-case-confirmed");
const caCaseDeath = document.querySelector("#us-covidtrack-ca-death");
const caCaseConfirm = document.querySelector("#us-covidtrack-ca-confirm");  

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
   usCaseDeath.textContent = data.Countries[181].TotalDeaths + ' as of ' + data.Countries[181].Date.toString().substring(0, 10);
   usCaseConfirm.textContent = data.Countries[181].TotalConfirmed + ' as of ' + data.Countries[181].Date.toString().substring(0, 10);   
   ;   
   });

//AL Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/al/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const alCaseDeath = document.querySelector(".us-covidtrack-al-death");
   const alCaseConfirm = document.querySelector(".us-covidtrack-al-confirm");
   const alTotHos = document.querySelector(".us-covidtrack-al-tothos");
   const alCurHos = document.querySelector(".us-covidtrack-al-curhos");
   const alCurIcu = document.querySelector(".us-covidtrack-al-curicu");
   const alRecent = document.querySelector(".us-covidtrack-al-recent");   
   alCaseDeath.textContent = data.death;
   alCaseConfirm.textContent = data.positive;
   alTotHos.textContent = data.hospitalizedCumulative;
   alCurHos.textContent = data.hospitalizedCurrently;
   alCurIcu.textContent = data.inIcuCurrently;
   alRecent.textContent = data.dateModified.toString().substring(0, 10);
   });

//AK Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ak/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const akCaseDeath = document.querySelector(".us-covidtrack-ak-death");
   const akCaseConfirm = document.querySelector(".us-covidtrack-ak-confirm");    
   akCaseDeath.textContent = data.death;
   akCaseConfirm.textContent = data.positive;   
   });

//AS Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/as/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const asCaseDeath = document.querySelector(".us-covidtrack-as-death");
   const asCaseConfirm = document.querySelector(".us-covidtrack-as-confirm");    
   asCaseDeath.textContent = data.death;
   asCaseConfirm.textContent = data.positive;   
   });

//AZ Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/az/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const azCaseDeath = document.querySelector(".us-covidtrack-az-death");
   const azCaseConfirm = document.querySelector(".us-covidtrack-az-confirm");    
   azCaseDeath.textContent = data.death;
   azCaseConfirm.textContent = data.positive;   
   });

//AR Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ar/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const arCaseDeath = document.querySelector(".us-covidtrack-ar-death");
   const arCaseConfirm = document.querySelector(".us-covidtrack-ar-confirm");    
   arCaseDeath.textContent = data.death;
   arCaseConfirm.textContent = data.positive;   
   });

//CA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ca/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);  
   caCaseDeath.textContent = data.death;
   caCaseConfirm.textContent = data.positive;   
   });

//CO Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/co/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//CT Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ct/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//DE Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/de/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//DC Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/dc/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//FL Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/fl/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//GA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ga/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//GU Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/gu/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//HI Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/hi/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//ID Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/id/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const idCaseDeath = document.querySelector(".us-covidtrack-id-death");
   const idCaseConfirm = document.querySelector(".us-covidtrack-id-confirm");    
   idCaseDeath.textContent = data.death;
   idCaseConfirm.textContent = data.positive;
   });

//IL Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/il/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//IN Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/in/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//IA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ia/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//KS Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ks/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//KY Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ky/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//MD Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/md/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const mdCaseDeath = document.querySelector(".us-covidtrack-md-death");
   const mdCaseConfirm = document.querySelector(".us-covidtrack-md-confirm");    
   mdCaseDeath.textContent = data.death;
   mdCaseConfirm.textContent = data.positive;   
   });

//TX Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/tx/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const txCaseDeath = document.querySelector(".us-covidtrack-tx-death");
   const txCaseConfirm = document.querySelector(".us-covidtrack-tx-confirm");    
   txCaseDeath.textContent = data.death;
   txCaseConfirm.textContent = data.positive;   
   });

//WA Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/wa/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const waCaseDeath = document.querySelector(".us-covidtrack-wa-death");
   const waCaseConfirm = document.querySelector(".us-covidtrack-wa-confirm");    
   waCaseDeath.textContent = data.death;
   waCaseConfirm.textContent = data.positive;    
   });

//NY Count from COVID Tracking Project
   fetch('https://api.covidtracking.com/v1/states/ny/current.json')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const nyCaseDeath = document.querySelector(".us-covidtrack-ny-death");
   const nyCaseConfirm = document.querySelector(".us-covidtrack-ny-confirm");    
   nyCaseDeath.textContent = data.death;
   nyCaseConfirm.textContent = data.positive;    
   });

//US Count from COVID Tracking Project 
   fetch(localapi1)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   const usCaseDeathCTP = document.querySelector(".us-covidtrack-death");
   const usCaseConfirmCTP = document.querySelector(".us-covidtrack-confirm");
   const usTotHos = document.querySelector(".us-covidtrack-tothos");
   const usCurHos = document.querySelector(".us-covidtrack-curhos");
   const usCurIcu = document.querySelector(".us-covidtrack-curicu");
   const usRecent = document.querySelector(".us-covidtrack-recent");   
   const updateDate = getArrayFields(data, "lastModified").toString();    
   usCaseDeathCTP.textContent = getArrayFields(data, "death");
   usCaseConfirmCTP.textContent = getArrayFields(data, "positive");
   usTotHos.textContent = getArrayFields(data, "hospitalizedCumulative");
   usCurHos.textContent = getArrayFields(data, "hospitalizedCurrently");
   usCurIcu.textContent = getArrayFields(data, "inIcuCurrently");
   usRecent.textContent = updateDate.substring(0, 10);
   });  

//Functions
function getArrayFields(input, field) {
    const output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

function getCommas() {

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
