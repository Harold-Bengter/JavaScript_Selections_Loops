console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i <= 100; i +=2 )
{
        console.log(i)   
} 
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i ++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    } else if (i % 5 == 0){
            console.log("FIZZ");
    } else if (i % 3 == 0){
             console.log("BUZZ")     
    } else {
        console.log(i)
    }


//Exercise 3
let i1 =  1;
   while(i1 <= 100){
    if(i1 % 2 != 0){
        console.log(i1);
    }
    i1++
   }

   let i2 = 0;
   do{
    if(i2 % 3 == 0 && i2 % 5 == 0){
    console.log(i2, "FIZZBUZZ");
   } else if (i2 % 5 == 0){
      console.log(i2, "BUZZ")
   } else if(i2 % 3 == 0){
    console.log(index2, "FIZZ");
   }else{
    console.log(i2);
   }
   i2++
}while (i2 < 100);



   //Exercise 4
console.log("exercise 4:\n==========\n")
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let result = "";

for(let i = 0; i < n; i++) {
     if(i == value) {
        result = "Found value.";
        break;
     }
}
if(result){
    console.log(result);
}else {
    console.log("Did not find the value");
} 
}