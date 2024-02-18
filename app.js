
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let n=0; n < 100; n++){
    if(n % 2 == !0){ 
        console.log(n);  
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let n = 1; n < 100; n++){
    
   if(n % 3 == 0 && n % 5 == 0){
    console.log(n, "FIZZBUZZ");
  } 
   else if (n % 3 == 0){
    console.log(n, "FIZZ");
 }
  else {
    if (n % 5 == 0){
    console.log(n, "BUZZ");
  }
 }
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let n = 0;
while (n < 100) {
    if (n % 2 !== 0){ 
       console.log(n);  
        
}
n++; 
}

let x = 0;
do{
if (x % 2 !== 0){
    console.log(x);
}
x++;
}while (x < 100);



let y = 1;
while(y < 100){
    if(y % 3 == 0 && y % 5 == 0){
        console.log(y, "FIZZBUZZ");
    }
    if (y % 3 == 0){
        console.log(y, "FIZZ");
    }
    if (y % 5 == 0){
        console.log(y, "BUZZ")
    }
    y++;
    
}


let m = 0;
do{
  if(m % 3 == 0 && m % 5 == 0){
        console.log(m, "FIZZBUZZ");
    }
    if (m % 3 == 0){
        console.log(m, "FIZZ");
    }
    if (m % 5 == 0){
        console.log(m, "BUZZ")
    }
    m++;  
}while (m<100);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500 
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number **range** between 100 and 500 

for(let i = 0; i <= n; i++){
    if(i == value){
        console.log(`You found the value (${value})!`);
        break;
    }
    if(i == n){
         console.log(`You did not find the value (${value}) between 1- ${n}!`);
    }
       
}
       
 
    

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);   // ***end
let start = Math.round(Math.random() * (10 - 1) + 1);



 for(let i = start; i <= end; i++){
    let print = "";

  if(i % fizzDivisor == 0){
    print += "FIZZ";
    
  }
  if(i % buzzDivisor == 0){
    print +="BUZZ";
    
  }
  console.log(`${i} ${print}`);
}
console.log(fizzDivisor, buzzDivisor);

