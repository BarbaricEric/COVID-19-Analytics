(async function() {
  let urlList = [
    "https://data.cdc.gov/resource/saz5-9hgg.json",
    "https://data.cdc.gov/resource/b7pe-5nws.json",
    "https://data.cdc.gov/resource/w9zu-fywh.json"
  ];

  const promiseList = urlList.map((url) => {
    return fetch(url)
        .then(response => response.json())
  })

  const jsonBaseList = await Promise.all(promiseList)
  console.log('All done.');
  console.log('jsonBaseList: ', jsonBaseList)
})()

//US Administration Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_administration.csv").then(function(data) {
   console.log(data);  
   /*const usCaseConfirm = document.querySelector(".us-newyorktimes-confirm");
   const usCaseDeath = document.querySelector(".us-newyorktimes-death");
   const usCaseRecent = document.querySelector(".us-newyorktimes-recent");
   usCaseConfirm.textContent = addCommas(data[442].cases);
   usCaseDeath.textContent = addCommas(data[442].deaths); 
   usCaseRecent.textContent = data[442].date;*/
  });

//US Deluvered Count from CDC
  d3v6.csv("./cdc_vaccination/vaccine_delivered.csv").then(function(data) {
   console.log(data);  
   /*const usCaseConfirm = document.querySelector(".us-newyorktimes-confirm");
   const usCaseDeath = document.querySelector(".us-newyorktimes-death");
   const usCaseRecent = document.querySelector(".us-newyorktimes-recent");
   usCaseConfirm.textContent = addCommas(data[442].cases);
   usCaseDeath.textContent = addCommas(data[442].deaths); 
   usCaseRecent.textContent = data[442].date;*/
  });