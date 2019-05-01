var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;
for(var i=0; i < prices.length; i++){

    sum += parseInt(prices[i]);

}
console.log("The sum is: ", sum);

let j = 99;

while (j > 0) {
  if (j > 2) {
    console.log(j + " crows on the wall. " + j + " crows.");
    console.log("1 fell down and became a wight.");
    console.log(j-1 + " crows on the wall");
    j--;
  }else if (j === 2){
    console.log(j + " crows on the wall. " + j + " crows.");
    console.log("1 fell down and became a wight.");
    console.log(j-1 + " crow on the wall");
    j--;
  }else {
    console.log("1 crow on the wall. 1 single crow.");
    console.log("It fell down and became a wight.");
    console.log("There's no one left to defend Westeros now.");
    j--;
  }
}
