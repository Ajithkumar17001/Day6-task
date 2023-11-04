const xhr=new XMLHttpRequest();
xhr.open('GET',"https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function(){const response=JSON.parse(xhr.responseText);

   
// Q.1
console.log(response.filter((cty)=>cty.region==="Asia"));

// Q.2

console.log(response.filter((pop)=>pop.population<200000));

// Q.3
for(let count of response){console.log(count.name.common,count.capital,count.flag);}


// Q.4
let pop=[];
for(let popu of response){
    pop.push(popu.population);}
console.log(pop.reduce((key,val)=>key+val));    

// Q.5
console.log(response.filter((cty)=>{const{currencies={}}=cty;
return Object.keys(currencies).includes("USD");})
)
}