//console.log("Hello World");

var chicken = "Hello ";

console.log(chicken + "Rick");
console.log(chicken + "Tony");

var age = 65;

if(age >=21){
      console.log("You may legal have a drink")

    if(age<25) {console.log("You probaly want Jaeger"); }
    if(age >=25 && age<60)  {console.log("You want an old fashioned");}
    if(age >= 60){console.log("You want the drink brandy");}
}
// Intro to While loops

var counter = 1;
while(counter < 10){
    console.log("WhooHoo! " + counter);

    if(counter % 3 == 0){
        break
    }
    counter++;
}