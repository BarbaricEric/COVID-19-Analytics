//DOM Elements
const usCaseDeathJh = document.querySelector(".us-testing-two");
const usCaseConfirmJh = document.querySelector(".us-testing");

//Define API (https://about-corona.net/documentation, https://covid19api.com/)
const globalapi1 = 'https://corona-api.com/countries';
const globalapi2 = 'https://api.covid19api.com/summary';

//Global Count from covid19-api.org   
   fetch('https://covid19-api.org/api/status')
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   //usCaseDeathJh.textContent = data.Global.TotalDeaths + ' as of ' + data.Date.toString().substring(0, 10);
   //usCaseConfirmJh.textContent = data.Global.TotalConfirmed + ' as of ' + data.Date.toString().substring(0, 10);
   });
   
//Global Count from corona-api      
   fetch(globalapi1)
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   });

//Global Count from covid19api
  fetch(globalapi2, {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },   
})
  .then(response => {
   return response.json();
  })
  .then(data => {
   console.log(data);
   options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', 
      dayPeriod: 'short',
      timeZone: 'America/Los_Angeles'
   };
   const date = new Date();
   const datea = new Intl.DateTimeFormat('default', options).format(date);    
   usCaseConfirmJh.textContent = addCommaDecimal(data.Global.TotalConfirmed) + ' as of ' + datea;
   usCaseDeathJh.textContent = addCommaDecimal(data.Global.TotalDeaths) + ' as of ' + datea;   
   /*
   const birthday = new Date();
   const date1 = birthday.getDate();
   const date2 = birthday.getFullYear();
   const date3 = birthday.getMonth() + 1;
   const date4 = date3 + "/" + date1 + "/" + date2;
   usCaseConfirmJh.textContent = data[0].total_cases + ' as of ' + data[0].last_update.toString().substring(6,7) + '/' + data[0].last_update.toString().substring(8,10) + '/' + data[0].last_update.toString().substring(0,4); 
   usCaseDeathJh.textContent = data[0].total_deaths + ' as of ' + data[0].last_update.toString().substring(6,7) + '/' + data[0].last_update.toString().substring(8,10) + '/' + data[0].last_update.toString().substring(0,4);*/   
   });

async function getCountryCountFromCovidApi() {
 await fetch(globalapi2, {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },   
}).then(response => response.json())
  .then(data => {
   const usCaseConfirm = document.querySelector('.usCaseConfirm');
   const usCaseDeath = document.querySelector('.usCaseDeath');
   const usDate = document.querySelector('.usDate');
   usCaseConfirm.textContent = addComma(data.Countries[181].TotalConfirmed);
   usCaseDeath.textContent = addComma(data.Countries[181].TotalDeaths);
   usDate.textContent = new Date(data.Countries[181].Date).toString().substring(0,15);
   const inCaseConfirm = document.querySelector('.inCaseConfirm');
   const inCaseDeath = document.querySelector('.inCaseDeath');
   const inDate = document.querySelector(".inDate");
   inCaseConfirm.textContent = addCommaDecimal(data.Countries[76].TotalConfirmed);
   inCaseDeath.textContent = addCommaDecimal(data.Countries[76].TotalDeaths);
   inDate.textContent = new Date(data.Countries[76].Date).toString().substring(0,15);
   const afCaseConfirm = document.querySelector('.afCaseConfirm');
   const afCaseDeath = document.querySelector('.afCaseDeath');
   const afDate = document.querySelector('.afDate');
   afCaseConfirm.textContent = addCommaDecimal(data.Countries[0].TotalConfirmed);
   afCaseDeath.textContent = addCommaDecimal(data.Countries[0].TotalDeaths);
   afDate.textContent = new Date(data.Countries[0].Date).toString().substring(0,15);  
   const alCaseConfirm = document.querySelector('.alCaseConfirm');
   const alCaseDeath = document.querySelector('.alCaseDeath');
   const alDate = document.querySelector('.alDate');
   alCaseConfirm.textContent = addCommaDecimal(data.Countries[1].TotalConfirmed);
   alCaseDeath.textContent = addCommaDecimal(data.Countries[1].TotalDeaths);
   alDate.textContent = new Date(data.Countries[1].Date).toString().substring(0,15);
   const dzCaseConfirm = document.querySelector('.dzCaseConfirm');
   const dzCaseDeath = document.querySelector('.dzCaseDeath');
   const dzDate = document.querySelector('.dzDate');
   dzCaseConfirm.textContent = addCommaDecimal(data.Countries[2].TotalConfirmed);
   dzCaseDeath.textContent = addCommaDecimal(data.Countries[2].TotalDeaths);
   dzDate.textContent = new Date(data.Countries[2].Date).toString().substring(0,15);
   const adCaseConfirm = document.querySelector('.adCaseConfirm');
   const adCaseDeath = document.querySelector('.adCaseDeath');
   const adDate = document.querySelector('.adDate');
   adCaseConfirm.textContent = addCommaDecimal(data.Countries[3].TotalConfirmed);
   adCaseDeath.textContent = addCommaDecimal(data.Countries[3].TotalDeaths);
   adDate.textContent = new Date(data.Countries[3].Date).toString().substring(0,15);
   const aoCaseConfirm = document.querySelector('.aoCaseConfirm');
   const aoCaseDeath = document.querySelector('.aoCaseDeath');
   const aoDate = document.querySelector('.aoDate');
   aoCaseConfirm.textContent = addCommaDecimal(data.Countries[4].TotalConfirmed);
   aoCaseDeath.textContent = addCommaDecimal(data.Countries[4].TotalDeaths);
   aoDate.textContent = new Date(data.Countries[4].Date).toString().substring(0,15);
   const agCaseConfirm = document.querySelector('.agCaseConfirm');
   const agCaseDeath = document.querySelector('.agCaseDeath');
   const agDate = document.querySelector('.agDate');
   agCaseConfirm.textContent = addCommaDecimal(data.Countries[5].TotalConfirmed);
   agCaseDeath.textContent = addCommaDecimal(data.Countries[5].TotalDeaths);
   agDate.textContent = new Date(data.Countries[5].Date).toString().substring(0,15); 
   const arCaseConfirm = document.querySelector('.arCaseConfirm');
   const arCaseDeath = document.querySelector('.arCaseDeath');
   const arDate = document.querySelector('.arDate');
   arCaseConfirm.textContent = addCommaDecimal(data.Countries[6].TotalConfirmed);
   arCaseDeath.textContent = addCommaDecimal(data.Countries[6].TotalDeaths);
   arDate.textContent = new Date(data.Countries[6].Date).toString().substring(0,15);
   const amCaseConfirm = document.querySelector('.amCaseConfirm');
   const amCaseDeath = document.querySelector('.amCaseDeath');
   const amDate = document.querySelector('.amDate');
   amCaseConfirm.textContent = addCommaDecimal(data.Countries[7].TotalConfirmed);
   amCaseDeath.textContent = addCommaDecimal(data.Countries[7].TotalDeaths);
   amDate.textContent = new Date(data.Countries[7].Date).toString().substring(0,15);
   const auCaseConfirm = document.querySelector('.auCaseConfirm');
   const auCaseDeath = document.querySelector('.auCaseDeath');
   const auDate = document.querySelector('.auDate');
   auCaseConfirm.textContent = addCommaDecimal(data.Countries[8].TotalConfirmed);
   auCaseDeath.textContent = addCommaDecimal(data.Countries[8].TotalDeaths);
   auDate.textContent = new Date(data.Countries[8].Date).toString().substring(0,15);
   const atCaseConfirm = document.querySelector('.atCaseConfirm');
   const atCaseDeath = document.querySelector('.atCaseDeath');
   const atDate = document.querySelector('.atDate');
   atCaseConfirm.textContent = addCommaDecimal(data.Countries[9].TotalConfirmed);
   atCaseDeath.textContent = addCommaDecimal(data.Countries[9].TotalDeaths);
   atDate.textContent = new Date(data.Countries[9].Date).toString().substring(0,15);
   const azCaseConfirm = document.querySelector('.azCaseConfirm');
   const azCaseDeath = document.querySelector('.azCaseDeath');
   const azDate = document.querySelector('.azDate');
   azCaseConfirm.textContent = addCommaDecimal(data.Countries[10].TotalConfirmed);
   azCaseDeath.textContent = addCommaDecimal(data.Countries[10].TotalDeaths);
   azDate.textContent = new Date(data.Countries[10].Date).toString().substring(0,15);
   const bsCaseConfirm = document.querySelector('.bsCaseConfirm');
   const bsCaseDeath = document.querySelector('.bsCaseDeath');
   const bsDate = document.querySelector('.bsDate');
   bsCaseConfirm.textContent = addCommaDecimal(data.Countries[11].TotalConfirmed);
   bsCaseDeath.textContent = addCommaDecimal(data.Countries[11].TotalDeaths);
   bsDate.textContent = new Date(data.Countries[11].Date).toString().substring(0,15);
   const bhCaseConfirm = document.querySelector('.bhCaseConfirm');
   const bhCaseDeath = document.querySelector('.bhCaseDeath');
   const bhDate = document.querySelector('.bhDate');
   bhCaseConfirm.textContent = addCommaDecimal(data.Countries[12].TotalConfirmed);
   bhCaseDeath.textContent = addCommaDecimal(data.Countries[12].TotalDeaths);
   bhDate.textContent = new Date(data.Countries[12].Date).toString().substring(0,15);
   const bdCaseConfirm = document.querySelector('.bdCaseConfirm');
   const bdCaseDeath = document.querySelector('.bdCaseDeath');
   const bdDate = document.querySelector('.bdDate');
   bdCaseConfirm.textContent = addCommaDecimal(data.Countries[13].TotalConfirmed);
   bdCaseDeath.textContent = addCommaDecimal(data.Countries[13].TotalDeaths);
   bdDate.textContent = new Date(data.Countries[13].Date).toString().substring(0,15);
   const bbCaseConfirm = document.querySelector('.bbCaseConfirm');
   const bbCaseDeath = document.querySelector('.bbCaseDeath');
   const bbDate = document.querySelector('.bbDate');
   bbCaseConfirm.textContent = addCommaDecimal(data.Countries[14].TotalConfirmed);
   bbCaseDeath.textContent = addCommaDecimal(data.Countries[14].TotalDeaths);
   bbDate.textContent = new Date(data.Countries[14].Date).toString().substring(0,15);
   const byCaseConfirm = document.querySelector('.byCaseConfirm');
   const byCaseDeath = document.querySelector('.byCaseDeath');
   const byDate = document.querySelector('.byDate');
   byCaseConfirm.textContent = addCommaDecimal(data.Countries[15].TotalConfirmed);
   byCaseDeath.textContent = addCommaDecimal(data.Countries[15].TotalDeaths);
   byDate.textContent = new Date(data.Countries[15].Date).toString().substring(0,15);
   const beCaseConfirm = document.querySelector('.beCaseConfirm');
   const beCaseDeath = document.querySelector('.beCaseDeath');
   const beDate = document.querySelector('.beDate');
   beCaseConfirm.textContent = addCommaDecimal(data.Countries[16].TotalConfirmed);
   beCaseDeath.textContent = addCommaDecimal(data.Countries[16].TotalDeaths);
   beDate.textContent = new Date(data.Countries[16].Date).toString().substring(0,15);
   const bzCaseConfirm = document.querySelector('.bzCaseConfirm');
   const bzCaseDeath = document.querySelector('.bzCaseDeath');
   const bzDate = document.querySelector('.bzDate');
   bzCaseConfirm.textContent = addCommaDecimal(data.Countries[17].TotalConfirmed);
   bzCaseDeath.textContent = addCommaDecimal(data.Countries[17].TotalDeaths);
   bzDate.textContent = new Date(data.Countries[17].Date).toString().substring(0,15);
   const bjCaseConfirm = document.querySelector('.bjCaseConfirm');
   const bjCaseDeath = document.querySelector('.bjCaseDeath');
   const bjDate = document.querySelector('.bjDate');
   bjCaseConfirm.textContent = addCommaDecimal(data.Countries[18].TotalConfirmed);
   bjCaseDeath.textContent = addCommaDecimal(data.Countries[18].TotalDeaths);
   bjDate.textContent = new Date(data.Countries[18].Date).toString().substring(0,15);
       const btCaseConfirm = document.querySelector('.btCaseConfirm');
   const btCaseDeath = document.querySelector('.btCaseDeath');
   const btDate = document.querySelector('.btDate');
   btCaseConfirm.textContent = addCommaDecimal(data.Countries[19].TotalConfirmed);
   btCaseDeath.textContent = addCommaDecimal(data.Countries[19].TotalDeaths);
   btDate.textContent = new Date(data.Countries[19].Date).toString().substring(0,15);
       const veCaseConfirm = document.querySelector('.veCaseConfirm');
   const veCaseDeath = document.querySelector('.veCaseDeath');
   const veDate = document.querySelector('.veDate');
   veCaseConfirm.textContent = addCommaDecimal(data.cases);
   veCaseDeath.textContent = addCommaDecimal(data.deaths);
   veDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const baCaseConfirm = document.querySelector('.baCaseConfirm');
   const baCaseDeath = document.querySelector('.baCaseDeath');
   const baDate = document.querySelector('.baDate');
   baCaseConfirm.textContent = addCommaDecimal(data.cases);
   baCaseDeath.textContent = addCommaDecimal(data.deaths);
   baDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const bwCaseConfirm = document.querySelector('.bwCaseConfirm');
   const bwCaseDeath = document.querySelector('.bwCaseDeath');
   const bwDate = document.querySelector('.bwDate');
   bwCaseConfirm.textContent = addCommaDecimal(data.cases);
   bwCaseDeath.textContent = addCommaDecimal(data.deaths);
   bwDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const brCaseConfirm = document.querySelector('.brCaseConfirm');
   const brCaseDeath = document.querySelector('.brCaseDeath');
   const brDate = document.querySelector('.brDate');
   brCaseConfirm.textContent = addCommaDecimal(data.cases);
   brCaseDeath.textContent = addCommaDecimal(data.deaths);
   brDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const bnCaseConfirm = document.querySelector('.bnCaseConfirm');
   const bnCaseDeath = document.querySelector('.bnCaseDeath');
   const bnDate = document.querySelector('.bnDate');
   bnCaseConfirm.textContent = addCommaDecimal(data.cases);
   bnCaseDeath.textContent = addCommaDecimal(data.deaths);
   bnDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const bgCaseConfirm = document.querySelector('.bgCaseConfirm');
   const bgCaseDeath = document.querySelector('.bgCaseDeath');
   const bgDate = document.querySelector('.bgDate');
   bgCaseConfirm.textContent = addCommaDecimal(data.cases);
   bgCaseDeath.textContent = addCommaDecimal(data.deaths);
   bgDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const bfCaseConfirm = document.querySelector('.bfCaseConfirm');
   const bfCaseDeath = document.querySelector('.bfCaseDeath');
   const bfDate = document.querySelector('.bfDate');
   bfCaseConfirm.textContent = addCommaDecimal(data.cases);
   bfCaseDeath.textContent = addCommaDecimal(data.deaths);
   bfDate.textContent = new Date(data.last_update).toString().substring(0,15);  
       const biCaseConfirm = document.querySelector('.biCaseConfirm');
   const biCaseDeath = document.querySelector('.biCaseDeath');
   const biDate = document.querySelector('.biDate');
   biCaseConfirm.textContent = addCommaDecimal(data.cases);
   biCaseDeath.textContent = addCommaDecimal(data.deaths);
   biDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const khCaseConfirm = document.querySelector('.khCaseConfirm');
   const khCaseDeath = document.querySelector('.khCaseDeath');
   const khDate = document.querySelector('.khDate');
   khCaseConfirm.textContent = addCommaDecimal(data.cases);
   khCaseDeath.textContent = addCommaDecimal(data.deaths);
   khDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const cmCaseConfirm = document.querySelector('.cmCaseConfirm');
   const cmCaseDeath = document.querySelector('.cmCaseDeath');
   const cmDate = document.querySelector('.cmDate');
   cmCaseConfirm.textContent = addCommaDecimal(data.cases);
   cmCaseDeath.textContent = addCommaDecimal(data.deaths);
   cmDate.textContent = new Date(data.last_update).toString().substring(0,15);  
      const caCaseConfirm = document.querySelector('.caCaseConfirm');
   const caCaseDeath = document.querySelector('.caCaseDeath');
   const caDate = document.querySelector('.caDate');
   caCaseConfirm.textContent = addCommaDecimal(data.cases);
   caCaseDeath.textContent = addCommaDecimal(data.deaths);
   caDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const cvCaseConfirm = document.querySelector('.cvCaseConfirm');
   const cvCaseDeath = document.querySelector('.cvCaseDeath');
   const cvDate = document.querySelector('.cvDate');
   cvCaseConfirm.textContent = addCommaDecimal(data.Countries[31].TotalConfirmed);
   cvCaseDeath.textContent = addCommaDecimal(data.Countries[31].TotalDeaths);
   cvDate.textContent = new Date(data.Countries[31].Date).toString().substring(0,15);
      const cfCaseConfirm = document.querySelector('.cfCaseConfirm');
   const cfCaseDeath = document.querySelector('.cfCaseDeath');
   const cfDate = document.querySelector('.cfDate');
   cfCaseConfirm.textContent = addCommaDecimal(data.cases);
   cfCaseDeath.textContent = addCommaDecimal(data.deaths);
   cfDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const tdCaseConfirm = document.querySelector('.tdCaseConfirm');
   const tdCaseDeath = document.querySelector('.tdCaseDeath');
   const tdDate = document.querySelector('.tdDate');
   tdCaseConfirm.textContent = addCommaDecimal(data.cases);
   tdCaseDeath.textContent = addCommaDecimal(data.deaths);
   tdDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const clCaseConfirm = document.querySelector('.clCaseConfirm');
   const clCaseDeath = document.querySelector('.clCaseDeath');
   const clDate = document.querySelector('.clDate');
   clCaseConfirm.textContent = addCommaDecimal(data.cases);
   clCaseDeath.textContent = addCommaDecimal(data.deaths);
   clDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const cnCaseConfirm = document.querySelector('.cnCaseConfirm');
   const cnCaseDeath = document.querySelector('.cnCaseDeath');
   const cnDate = document.querySelector('.cnDate');
   cnCaseConfirm.textContent = addCommaDecimal(data.cases);
   cnCaseDeath.textContent = addCommaDecimal(data.deaths);
   cnDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const coCaseConfirm = document.querySelector('.coCaseConfirm');
   const coCaseDeath = document.querySelector('.coCaseDeath');
   const coDate = document.querySelector('.coDate');
   coCaseConfirm.textContent = addCommaDecimal(data.cases);
   coCaseDeath.textContent = addCommaDecimal(data.deaths);
   coDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const kmCaseConfirm = document.querySelector('.kmCaseConfirm');
   const kmCaseDeath = document.querySelector('.kmCaseDeath');
   const kmDate = document.querySelector('.kmDate');
   kmCaseConfirm.textContent = addCommaDecimal(data.cases);
   kmCaseDeath.textContent = addCommaDecimal(data.deaths);
   kmDate.textContent = new Date(data.last_update).toString().substring(0,15);  
       const cgCaseConfirm = document.querySelector('.cgCaseConfirm');
   const cgCaseDeath = document.querySelector('.cgCaseDeath');
   const cgDate = document.querySelector('.cgDate');
   cgCaseConfirm.textContent = addCommaDecimal(data.cases);
   cgCaseDeath.textContent = addCommaDecimal(data.deaths);
   cgDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const cdcaseConfirm = document.querySelector('.cdCaseConfirm');
   const cdcaseDeath = document.querySelector('.cdCaseDeath');
   const cdcurDate = document.querySelector('.cdDate');
   cdcaseConfirm.textContent = addCommaDecimal(data.cases);
   cdcaseDeath.textContent = addCommaDecimal(data.deaths);
   cdcurDate.textContent = new Date(data.last_update).toString().substring(0,15);  
      const crCaseConfirm = document.querySelector('.crCaseConfirm');
   const crCaseDeath = document.querySelector('.crCaseDeath');
   const crDate = document.querySelector('.crDate');
   crCaseConfirm.textContent = addCommaDecimal(data.Countries[40].TotalConfirmed);
   crCaseDeath.textContent = addCommaDecimal(data.Countries[40].TotalDeaths);
   crDate.textContent = new Date(data.Countries[40].Date).toString().substring(0,15); 
       const hrcaseConfirm = document.querySelector('.hrCaseConfirm');
   const hrcaseDeath = document.querySelector('.hrCaseDeath');
   const hrcurDate = document.querySelector('.hrDate');
   hrcaseConfirm.textContent = addCommaDecimal(data.cases);
   hrcaseDeath.textContent = addCommaDecimal(data.deaths);
   hrcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const cucaseConfirm = document.querySelector('.cuCaseConfirm');
   const cucaseDeath = document.querySelector('.cuCaseDeath');
   const cucurDate = document.querySelector('.cuDate');
   cucaseConfirm.textContent = addCommaDecimal(data.cases);
   cucaseDeath.textContent = addCommaDecimal(data.deaths);
   cucurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const cycaseConfirm = document.querySelector('.cyCaseConfirm');
   const cycaseDeath = document.querySelector('.cyCaseDeath');
   const cycurDate = document.querySelector('.cyDate');
   cycaseConfirm.textContent = addCommaDecimal(data.cases);
   cycaseDeath.textContent = addCommaDecimal(data.deaths);
   cycurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
      const czcaseConfirm = document.querySelector('.czCaseConfirm');
   const czcaseDeath = document.querySelector('.czCaseDeath');
   const czcurDate = document.querySelector('.czDate');
   czcaseConfirm.textContent = addCommaDecimal(data.cases);
   czcaseDeath.textContent = addCommaDecimal(data.deaths);
   czcurDate.textContent = new Date(data.last_update).toString().substring(0,15); 
       const ciCaseConfirm = document.querySelector('.ciCaseConfirm');
   const ciCaseDeath = document.querySelector('.ciCaseDeath');
   const ciDate = document.querySelector('.ciDate');
   ciCaseConfirm.textContent = addCommaDecimal(data.cases);
   ciCaseDeath.textContent = addCommaDecimal(data.deaths);
   ciDate.textContent = new Date(data.last_update).toString().substring(0,15); 
    
  });

   const awCaseConfirm = document.querySelector('.awCaseConfirm');
   const awCaseDeath = document.querySelector('.awCaseDeath');
   const awDate = document.querySelector('.awDate');
   awCaseConfirm.textContent = 'NA'
   awCaseDeath.textContent = 'NA'
   awDate.textContent = 'NA'
   const kyCaseConfirm = document.querySelector('.kyCaseConfirm');
   const kyCaseDeath = document.querySelector('.kyCaseDeath');
   const kyDate = document.querySelector('.kyDate');
   kyCaseConfirm.textContent = 'NA'
   kyCaseDeath.textContent = 'NA'
   kyDate.textContent = 'NA'
   const cwcaseConfirm = document.querySelector('.cwCaseConfirm');
   const cwcaseDeath = document.querySelector('.cwCaseDeath');
   const cwcurDate = document.querySelector('.cwDate');
   cwcaseConfirm.textContent = 'NA'
   cwcaseDeath.textContent = 'NA'
   cwcurDate.textContent = 'NA' 
         
               
 await fetch('https://covid19-api.org/api/status/kp').then(response => response.json())
  .then(data => {
   const kpcaseConfirm = document.querySelector('.kpCaseConfirm');
   const kpcaseDeath = document.querySelector('.kpCaseDeath');
   const kpcurDate = document.querySelector('.kpDate');
   kpcaseConfirm.textContent = addCommaDecimal(data.Countries[88].TotalConfirmed);
   kpcaseDeath.textContent = addCommaDecimal(data.Countries[88].TotalDeaths);
   kpcurDate.textContent = new Date(data.Countries[88].Date).toString().substring(0,15); 
  });
              
               
 await fetch('https://covid19-api.org/api/status/dk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.dkCaseConfirm');
   const caseDeath = document.querySelector('.dkCaseDeath');
   const curDate = document.querySelector('.dkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/dj').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.djCaseConfirm');
   const caseDeath = document.querySelector('.djCaseDeath');
   const curDate = document.querySelector('.djDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/dm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.dmCaseConfirm');
   const caseDeath = document.querySelector('.dmCaseDeath');
   const curDate = document.querySelector('.dmDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/do').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.doCaseConfirm');
   const caseDeath = document.querySelector('.doCaseDeath');
   const curDate = document.querySelector('.doDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
 await fetch('https://covid19-api.org/api/status/ec').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ecCaseConfirm');
   const caseDeath = document.querySelector('.ecCaseDeath');
   const curDate = document.querySelector('.ecDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/eg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.egCaseConfirm');
   const caseDeath = document.querySelector('.egCaseDeath');
   const curDate = document.querySelector('.egDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/sv').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.svCaseConfirm');
   const caseDeath = document.querySelector('.svCaseDeath');
   const curDate = document.querySelector('.svDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/gq').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gqCaseConfirm');
   const caseDeath = document.querySelector('.gqCaseDeath');
   const curDate = document.querySelector('.gqDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/er').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.erCaseConfirm');
   const caseDeath = document.querySelector('.erCaseDeath');
   const curDate = document.querySelector('.erDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/ee').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.eeCaseConfirm');
   const caseDeath = document.querySelector('.eeCaseDeath');
   const curDate = document.querySelector('.eeDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/et').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.etCaseConfirm');
   const caseDeath = document.querySelector('.etCaseDeath');
   const curDate = document.querySelector('.etDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
 await fetch('https://covid19-api.org/api/status/fo').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.foCaseConfirm');
   const caseDeath = document.querySelector('.foCaseDeath');
   const curDate = document.querySelector('.foDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fj').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.fjCaseConfirm');
   const caseDeath = document.querySelector('.fjCaseDeath');
   const curDate = document.querySelector('.fjDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fi').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.fiCaseConfirm');
   const caseDeath = document.querySelector('.fiCaseDeath');
   const curDate = document.querySelector('.fiDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/fr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.frCaseConfirm');
   const caseDeath = document.querySelector('.frCaseDeath');
   const curDate = document.querySelector('.frDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
 await fetch('https://covid19-api.org/api/status/gf').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gfCaseConfirm');
   const caseDeath = document.querySelector('.gfCaseDeath');
   const curDate = document.querySelector('.gfDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/ga').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gaCaseConfirm');
   const caseDeath = document.querySelector('.gaCaseDeath');
   const curDate = document.querySelector('.gaDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gmCaseConfirm');
   const caseDeath = document.querySelector('.gmCaseDeath');
   const curDate = document.querySelector('.gmDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gmCaseConfirm');
   const caseDeath = document.querySelector('.gmCaseDeath');
   const curDate = document.querySelector('.gmDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/ge').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.geCaseConfirm');
   const caseDeath = document.querySelector('.geCaseDeath');
   const curDate = document.querySelector('.geDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/de').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.deCaseConfirm');
   const caseDeath = document.querySelector('.deCaseDeath');
   const curDate = document.querySelector('.deDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gh').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ghCaseConfirm');
   const caseDeath = document.querySelector('.ghCaseDeath');
   const curDate = document.querySelector('.ghDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gi').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.giCaseConfirm');
   const caseDeath = document.querySelector('.giCaseDeath');
   const curDate = document.querySelector('.giDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.grCaseConfirm');
   const caseDeath = document.querySelector('.grCaseDeath');
   const curDate = document.querySelector('.grDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.glCaseConfirm');
   const caseDeath = document.querySelector('.glCaseDeath');
   const curDate = document.querySelector('.glDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gd').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gdCaseConfirm');
   const caseDeath = document.querySelector('.gdCaseDeath');
   const curDate = document.querySelector('.gdDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gp').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gpCaseConfirm');
   const caseDeath = document.querySelector('.gpCaseDeath');
   const curDate = document.querySelector('.gpDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.guCaseConfirm');
   const caseDeath = document.querySelector('.guCaseDeath');
   const curDate = document.querySelector('.guDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
   
await fetch('https://covid19-api.org/api/status/gt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gtCaseConfirm');
   const caseDeath = document.querySelector('.gtCaseDeath');
   const curDate = document.querySelector('.gtDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ggCaseConfirm');
   const caseDeath = document.querySelector('.ggCaseDeath');
   const curDate = document.querySelector('.ggDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gnCaseConfirm');
   const caseDeath = document.querySelector('.gnCaseDeath');
   const curDate = document.querySelector('.gnDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gwCaseConfirm');
   const caseDeath = document.querySelector('.gwCaseDeath');
   const curDate = document.querySelector('.gwDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/gy').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gyCaseConfirm');
   const caseDeath = document.querySelector('.gyCaseDeath');
   const curDate = document.querySelector('.gyDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
      
await fetch('https://covid19-api.org/api/status/ht').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.htCaseConfirm');
   const caseDeath = document.querySelector('.htCaseDeath');
   const curDate = document.querySelector('.htDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/va').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.vaCaseConfirm');
   const caseDeath = document.querySelector('.vaCaseDeath');
   const curDate = document.querySelector('.vaDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.hnCaseConfirm');
   const caseDeath = document.querySelector('.hnCaseDeath');
   const curDate = document.querySelector('.hnDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.hkCaseConfirm');
   const caseDeath = document.querySelector('.hkCaseDeath');
   const curDate = document.querySelector('.hkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/hu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.huCaseConfirm');
   const caseDeath = document.querySelector('.huCaseDeath');
   const curDate = document.querySelector('.huDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
         
await fetch('https://covid19-api.org/api/status/is').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.isCaseConfirm');
   const caseDeath = document.querySelector('.isCaseDeath');
   const curDate = document.querySelector('.isDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/id').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.idCaseConfirm');
   const caseDeath = document.querySelector('.idCaseDeath');
   const curDate = document.querySelector('.idDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/iq').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.iqCaseConfirm');
   const caseDeath = document.querySelector('.iqCaseDeath');
   const curDate = document.querySelector('.iqDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/ie').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ieCaseConfirm');
   const caseDeath = document.querySelector('.ieCaseDeath');
   const curDate = document.querySelector('.ieDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/ir').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.irCaseConfirm');
   const caseDeath = document.querySelector('.irCaseDeath');
   const curDate = document.querySelector('.irDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/il').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ilCaseConfirm');
   const caseDeath = document.querySelector('.ilCaseDeath');
   const curDate = document.querySelector('.ilDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/it').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.itCaseConfirm');
   const caseDeath = document.querySelector('.itCaseDeath');
   const curDate = document.querySelector('.itDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
            
await fetch('https://covid19-api.org/api/status/jm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.jmCaseConfirm');
   const caseDeath = document.querySelector('.jmCaseDeath');
   const curDate = document.querySelector('.jmDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
await fetch('https://covid19-api.org/api/status/jp').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.jpCaseConfirm');
   const caseDeath = document.querySelector('.jpCaseDeath');
   const curDate = document.querySelector('.jpDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
await fetch('https://covid19-api.org/api/status/je').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.jeCaseConfirm');
   const caseDeath = document.querySelector('.jeCaseDeath');
   const curDate = document.querySelector('.jeDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
await fetch('https://covid19-api.org/api/status/jo').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.joCaseConfirm');
   const caseDeath = document.querySelector('.joCaseDeath');
   const curDate = document.querySelector('.joDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
               
await fetch('https://covid19-api.org/api/status/kz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.kzCaseConfirm');
   const caseDeath = document.querySelector('.kzCaseDeath');
   const curDate = document.querySelector('.kzDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
await fetch('https://covid19-api.org/api/status/ke').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.keCaseConfirm');
   const caseDeath = document.querySelector('.keCaseDeath');
   const curDate = document.querySelector('.keDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
await fetch('https://covid19-api.org/api/status/kw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.kwCaseConfirm');
   const caseDeath = document.querySelector('.kwCaseDeath');
   const curDate = document.querySelector('.kwDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
await fetch('https://covid19-api.org/api/status/kg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.kgCaseConfirm');
   const caseDeath = document.querySelector('.kgCaseDeath');
   const curDate = document.querySelector('.kgDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                  
await fetch('https://covid19-api.org/api/status/la').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.laCaseConfirm');
   const caseDeath = document.querySelector('.laCaseDeath');
   const curDate = document.querySelector('.laDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lv').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.lvCaseConfirm');
   const caseDeath = document.querySelector('.lvCaseDeath');
   const curDate = document.querySelector('.lvDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lb').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.lbCaseConfirm');
   const caseDeath = document.querySelector('.lbCaseDeath');
   const curDate = document.querySelector('.lbDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/ls').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.lsCaseConfirm');
   const caseDeath = document.querySelector('.lsCaseDeath');
   const curDate = document.querySelector('.lsDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.lrCaseConfirm');
   const caseDeath = document.querySelector('.lrCaseDeath');
   const curDate = document.querySelector('.lrDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/ly').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.lyCaseConfirm');
   const caseDeath = document.querySelector('.lyCaseDeath');
   const curDate = document.querySelector('.lyDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/li').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.liCaseConfirm');
   const caseDeath = document.querySelector('.liCaseDeath');
   const curDate = document.querySelector('.liDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ltCaseConfirm');
   const caseDeath = document.querySelector('.ltCaseDeath');
   const curDate = document.querySelector('.ltDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/lu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.luCaseConfirm');
   const caseDeath = document.querySelector('.luCaseDeath');
   const curDate = document.querySelector('.luDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                     
await fetch('https://covid19-api.org/api/status/mo').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.moCaseConfirm');
   const caseDeath = document.querySelector('.moCaseDeath');
   const curDate = document.querySelector('.moDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mgCaseConfirm');
   const caseDeath = document.querySelector('.mgCaseDeath');
   const curDate = document.querySelector('.mgDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mwCaseConfirm');
   const caseDeath = document.querySelector('.mwCaseDeath');
   const curDate = document.querySelector('.mwDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/my').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.myCaseConfirm');
   const caseDeath = document.querySelector('.myCaseDeath');
   const curDate = document.querySelector('.myDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mv').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mvCaseConfirm');
   const caseDeath = document.querySelector('.mvCaseDeath');
   const curDate = document.querySelector('.mvDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/ml').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mlCaseConfirm');
   const caseDeath = document.querySelector('.mlCaseDeath');
   const curDate = document.querySelector('.mlDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mtCaseConfirm');
   const caseDeath = document.querySelector('.mtCaseDeath');
   const curDate = document.querySelector('.mtDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mh').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mhCaseConfirm');
   const caseDeath = document.querySelector('.mhCaseDeath');
   const curDate = document.querySelector('.mhDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mq').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mqCaseConfirm');
   const caseDeath = document.querySelector('.mqCaseDeath');
   const curDate = document.querySelector('.mqDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mrCaseConfirm');
   const caseDeath = document.querySelector('.mrCaseDeath');
   const curDate = document.querySelector('.mrDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.muCaseConfirm');
   const caseDeath = document.querySelector('.muCaseDeath');
   const curDate = document.querySelector('.muDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/yt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ytCaseConfirm');
   const caseDeath = document.querySelector('.ytCaseDeath');
   const curDate = document.querySelector('.ytDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mx').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mxCaseConfirm');
   const caseDeath = document.querySelector('.mxCaseDeath');
   const curDate = document.querySelector('.mxDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mc').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mcCaseConfirm');
   const caseDeath = document.querySelector('.mcCaseDeath');
   const curDate = document.querySelector('.mcDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mnCaseConfirm');
   const caseDeath = document.querySelector('.mnCaseDeath');
   const curDate = document.querySelector('.mnDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/me').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.meCaseConfirm');
   const caseDeath = document.querySelector('.meCaseDeath');
   const curDate = document.querySelector('.meDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/ma').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.maCaseConfirm');
   const caseDeath = document.querySelector('.maCaseDeath');
   const curDate = document.querySelector('.maDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mzCaseConfirm');
   const caseDeath = document.querySelector('.mzCaseDeath');
   const curDate = document.querySelector('.mzDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/mm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mmCaseConfirm');
   const caseDeath = document.querySelector('.mmCaseDeath');
   const curDate = document.querySelector('.mmDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/na').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.naCaseConfirm');
   const caseDeath = document.querySelector('.naCaseDeath');
   const curDate = document.querySelector('.naDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                        
await fetch('https://covid19-api.org/api/status/np').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.npCaseConfirm');
   const caseDeath = document.querySelector('.npCaseDeath');
   const curDate = document.querySelector('.npDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/nl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.nlCaseConfirm');
   const caseDeath = document.querySelector('.nlCaseDeath');
   const curDate = document.querySelector('.nlDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/nz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.nzCaseConfirm');
   const caseDeath = document.querySelector('.nzCaseDeath');
   const curDate = document.querySelector('.nzDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/ni').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.niCaseConfirm');
   const caseDeath = document.querySelector('.niCaseDeath');
   const curDate = document.querySelector('.niDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/ne').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.neCaseConfirm');
   const caseDeath = document.querySelector('.neCaseDeath');
   const curDate = document.querySelector('.neDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/ng').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ngCaseConfirm');
   const caseDeath = document.querySelector('.ngCaseDeath');
   const curDate = document.querySelector('.ngDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/no').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.noCaseConfirm');
   const caseDeath = document.querySelector('.noCaseDeath');
   const curDate = document.querySelector('.noDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                           
await fetch('https://covid19-api.org/api/status/om').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.omCaseConfirm');
   const caseDeath = document.querySelector('.omCaseDeath');
   const curDate = document.querySelector('.omDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                              
await fetch('https://covid19-api.org/api/status/pk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.pkCaseConfirm');
   const caseDeath = document.querySelector('.pkCaseDeath');
   const curDate = document.querySelector('.pkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                              
await fetch('https://covid19-api.org/api/status/pa').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.paCaseConfirm');
   const caseDeath = document.querySelector('.paCaseDeath');
   const curDate = document.querySelector('.paDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.pgCaseConfirm');
   const caseDeath = document.querySelector('.pgCaseDeath');
   const curDate = document.querySelector('.pgDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/py').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.pyCaseConfirm');
   const caseDeath = document.querySelector('.pyCaseDeath');
   const curDate = document.querySelector('.pyDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pe').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.peCaseConfirm');
   const caseDeath = document.querySelector('.peCaseDeath');
   const curDate = document.querySelector('.peDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/ph').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.phCaseConfirm');
   const caseDeath = document.querySelector('.phCaseDeath');
   const curDate = document.querySelector('.phDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/bo').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.boCaseConfirm');
   const caseDeath = document.querySelector('.boCaseDeath');
   const curDate = document.querySelector('.boDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.plCaseConfirm');
   const caseDeath = document.querySelector('.plCaseDeath');
   const curDate = document.querySelector('.plDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ptCaseConfirm');
   const caseDeath = document.querySelector('.ptCaseDeath');
   const curDate = document.querySelector('.ptDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/pr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.prCaseConfirm');
   const caseDeath = document.querySelector('.prCaseDeath');
   const curDate = document.querySelector('.prDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                 
await fetch('https://covid19-api.org/api/status/qa').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.qaCaseConfirm');
   const caseDeath = document.querySelector('.qaCaseDeath');
   const curDate = document.querySelector('.qaDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                    
await fetch('https://covid19-api.org/api/status/kr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.krCaseConfirm');
   const caseDeath = document.querySelector('.krCaseDeath');
   const curDate = document.querySelector('.krDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                    
await fetch('https://covid19-api.org/api/status/xk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.xkCaseConfirm');
   const caseDeath = document.querySelector('.xkCaseDeath');
   const curDate = document.querySelector('.xkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                    
await fetch('https://covid19-api.org/api/status/md').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mdCaseConfirm');
   const caseDeath = document.querySelector('.mdCaseDeath');
   const curDate = document.querySelector('.mdDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                    
await fetch('https://covid19-api.org/api/status/mk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mkCaseConfirm');
   const caseDeath = document.querySelector('.mkCaseDeath');
   const curDate = document.querySelector('.mkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                       
await fetch('https://covid19-api.org/api/status/re').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.reCaseConfirm');
   const caseDeath = document.querySelector('.reCaseDeath');
   const curDate = document.querySelector('.reDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/ro').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.roCaseConfirm');
   const caseDeath = document.querySelector('.roCaseDeath');
   const curDate = document.querySelector('.roDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/ru').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ruCaseConfirm');
   const caseDeath = document.querySelector('.ruCaseDeath');
   const curDate = document.querySelector('.ruDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/rw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.rwCaseConfirm');
   const caseDeath = document.querySelector('.rwCaseDeath');
   const curDate = document.querySelector('.rwDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/bl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.blCaseConfirm');
   const caseDeath = document.querySelector('.blCaseDeath');
   const curDate = document.querySelector('.blDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/kn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.knCaseConfirm');
   const caseDeath = document.querySelector('.knCaseDeath');
   const curDate = document.querySelector('.knDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/lc').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.lcCaseConfirm');
   const caseDeath = document.querySelector('.lcCaseDeath');
   const curDate = document.querySelector('.lcDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/mf').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.mfCaseConfirm');
   const caseDeath = document.querySelector('.mfCaseDeath');
   const curDate = document.querySelector('.mfDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/vc').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.vcCaseConfirm');
   const caseDeath = document.querySelector('.vcCaseDeath');
   const curDate = document.querySelector('.vcDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/ws').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.wsCaseConfirm');
   const caseDeath = document.querySelector('.wsCaseDeath');
   const curDate = document.querySelector('.wsDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                          
await fetch('https://covid19-api.org/api/status/sm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.smCaseConfirm');
   const caseDeath = document.querySelector('.smCaseDeath');
   const curDate = document.querySelector('.smDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/st').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.stCaseConfirm');
   const caseDeath = document.querySelector('.stCaseDeath');
   const curDate = document.querySelector('.stDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sa').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.saCaseConfirm');
   const caseDeath = document.querySelector('.saCaseDeath');
   const curDate = document.querySelector('.saDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.snCaseConfirm');
   const caseDeath = document.querySelector('.snCaseDeath');
   const curDate = document.querySelector('.snDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/rs').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.rsCaseConfirm');
   const caseDeath = document.querySelector('.rsCaseDeath');
   const curDate = document.querySelector('.rsDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sc').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.scCaseConfirm');
   const caseDeath = document.querySelector('.scCaseDeath');
   const curDate = document.querySelector('.scDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.slCaseConfirm');
   const caseDeath = document.querySelector('.slCaseDeath');
   const curDate = document.querySelector('.slDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.sgCaseConfirm');
   const caseDeath = document.querySelector('.sgCaseDeath');
   const curDate = document.querySelector('.sgDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.skCaseConfirm');
   const caseDeath = document.querySelector('.skCaseDeath');
   const curDate = document.querySelector('.skDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/si').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.siCaseConfirm');
   const caseDeath = document.querySelector('.siCaseDeath');
   const curDate = document.querySelector('.siDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sb').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.sbCaseConfirm');
   const caseDeath = document.querySelector('.sbCaseDeath');
   const curDate = document.querySelector('.sbDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/so').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.soCaseConfirm');
   const caseDeath = document.querySelector('.soCaseDeath');
   const curDate = document.querySelector('.soDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/za').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.zaCaseConfirm');
   const caseDeath = document.querySelector('.zaCaseDeath');
   const curDate = document.querySelector('.zaDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/ss').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ssCaseConfirm');
   const caseDeath = document.querySelector('.ssCaseDeath');
   const curDate = document.querySelector('.ssDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/es').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.esCaseConfirm');
   const caseDeath = document.querySelector('.esCaseDeath');
   const curDate = document.querySelector('.esDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/lk').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.lkCaseConfirm');
   const caseDeath = document.querySelector('.lkCaseDeath');
   const curDate = document.querySelector('.lkDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/ps').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.psCaseConfirm');
   const caseDeath = document.querySelector('.psCaseDeath');
   const curDate = document.querySelector('.psDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sd').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.sdCaseConfirm');
   const caseDeath = document.querySelector('.sdCaseDeath');
   const curDate = document.querySelector('.sdDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.srCaseConfirm');
   const caseDeath = document.querySelector('.srCaseDeath');
   const curDate = document.querySelector('.srDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.szCaseConfirm');
   const caseDeath = document.querySelector('.szCaseDeath');
   const curDate = document.querySelector('.szDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/se').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.seCaseConfirm');
   const caseDeath = document.querySelector('.seCaseDeath');
   const curDate = document.querySelector('.seDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/ch').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.chCaseConfirm');
   const caseDeath = document.querySelector('.chCaseDeath');
   const curDate = document.querySelector('.chDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/sy').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.syCaseConfirm');
   const caseDeath = document.querySelector('.syCaseDeath');
   const curDate = document.querySelector('.syDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                             
await fetch('https://covid19-api.org/api/status/tw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.twCaseConfirm');
   const caseDeath = document.querySelector('.twCaseDeath');
   const curDate = document.querySelector('.twDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tj').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tjCaseConfirm');
   const caseDeath = document.querySelector('.tjCaseDeath');
   const curDate = document.querySelector('.tjDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/th').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.thCaseConfirm');
   const caseDeath = document.querySelector('.thCaseDeath');
   const curDate = document.querySelector('.thDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tl').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tlCaseConfirm');
   const caseDeath = document.querySelector('.tlCaseDeath');
   const curDate = document.querySelector('.tlDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tg').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tgCaseConfirm');
   const caseDeath = document.querySelector('.tgCaseDeath');
   const curDate = document.querySelector('.tgDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tt').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ttCaseConfirm');
   const caseDeath = document.querySelector('.ttCaseDeath');
   const curDate = document.querySelector('.ttDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tnCaseConfirm');
   const caseDeath = document.querySelector('.tnCaseDeath');
   const curDate = document.querySelector('.tnDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/tr').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.trCaseConfirm');
   const caseDeath = document.querySelector('.trCaseDeath');
   const curDate = document.querySelector('.trDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                
await fetch('https://covid19-api.org/api/status/ug').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ugCaseConfirm');
   const caseDeath = document.querySelector('.ugCaseDeath');
   const curDate = document.querySelector('.ugDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/ua').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.uaCaseConfirm');
   const caseDeath = document.querySelector('.uaCaseDeath');
   const curDate = document.querySelector('.uaDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/ae').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.aeCaseConfirm');
   const caseDeath = document.querySelector('.aeCaseDeath');
   const curDate = document.querySelector('.aeDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/gb').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.gbCaseConfirm');
   const caseDeath = document.querySelector('.gbCaseDeath');
   const curDate = document.querySelector('.gbDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/tz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.tzCaseConfirm');
   const caseDeath = document.querySelector('.tzCaseDeath');
   const curDate = document.querySelector('.tzDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/uy').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.uyCaseConfirm');
   const caseDeath = document.querySelector('.uyCaseDeath');
   const curDate = document.querySelector('.uyDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/uz').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.uzCaseConfirm');
   const caseDeath = document.querySelector('.uzCaseDeath');
   const curDate = document.querySelector('.uzDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                   
await fetch('https://covid19-api.org/api/status/vu').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.vuCaseConfirm');
   const caseDeath = document.querySelector('.vuCaseDeath');
   const curDate = document.querySelector('.vuDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/vn').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.vnCaseConfirm');
   const caseDeath = document.querySelector('.vnCaseDeath');
   const curDate = document.querySelector('.vnDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/eh').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.ehCaseConfirm');
   const caseDeath = document.querySelector('.ehCaseDeath');
   const curDate = document.querySelector('.ehDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/ye').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.yeCaseConfirm');
   const caseDeath = document.querySelector('.yeCaseDeath');
   const curDate = document.querySelector('.yeDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/zm').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.zmCaseConfirm');
   const caseDeath = document.querySelector('.zmCaseDeath');
   const curDate = document.querySelector('.zmDate');
   caseConfirm.textContent = addCommaDecimal(data.cases);
   caseDeath.textContent = addCommaDecimal(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
                                                      
await fetch('https://covid19-api.org/api/status/zw').then(response => response.json())
  .then(data => {
   const caseConfirm = document.querySelector('.zyCaseConfirm');
   const caseDeath = document.querySelector('.zyCaseDeath');
   const curDate = document.querySelector('.zyDate');
   caseConfirm.textContent = addComma(data.cases);
   caseDeath.textContent = addComma(data.deaths);
   curDate.textContent = new Date(data.last_update).toString().substring(0,15); 
  });
}

getCountryCountFromCovidApi();

(async function() {
  let urlList = [
    "https://api.covidtracking.com/v1/us/current.json",
    "https://api.covidtracking.com/v1/states/current.json"
  ];

  const promiseList = urlList.map((url) => {
    return fetch(url)
        .then(response => response.json())
  })

  const jsonBaseList = await Promise.all(promiseList)
  console.log('All done.');
  console.log('jsonBaseList: ', jsonBaseList)
})()

//Global Functions    
   function getArrayFields(input, field) {
      const output = [];
      for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
      return output;
   }

   function addDateComma(dateinput) {
      let p = dateinput.toString()
      let d = p.substring(0,4) + ',' + p.substring(4,6) + ',' + p.substring(6,8)
      return d
   }

   function addComma(input) {
      let result;
      let d = input.toString().length;
      if ((input.toString().length > 3 && input.toString().length < 7)) {
         result = input.toString().slice(0,d-3) + ',' + input.toString().slice(d-3,d);
      } else if ((input.toString().length >= 7 && input.toString().length < 10)) {
         result = input.toString().slice(0,d-6) + ',' + input.toString().slice(d-6,d-3) + ',' + input.toString().slice(d-3,d);
      } else if ((input.toString().length >= 10 && input.toString().length < 13)) {
         result = input.toString().slice(0,d-9) + ',' + input.toString().slice(d-9,d-6) + ',' + input.toString().slice(d-6,d-3) + ',' + input.toString().slice(d-3,d);
      } else {
         result = input;
      }
      return result;
    }

function addCommaDecimal(x) {
    if (x == undefined || x == null) {
      return x = "Error";
    } else {
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }   
}

   const determineNull = input => input == undefined ? input = "NA" : input;
