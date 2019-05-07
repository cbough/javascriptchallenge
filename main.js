function reverse(str){
  return str.split("").reverse().join("");
}

reverse('Marines')

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

function translatePig(str) {

     var vowels = ["a","e","i","o","u"];
     var smack = str.split("");
     var index;

     if(index !== 0){
       var sliced = str.slice(0, index);
       str = str.slice(index) + sliced + "ay";
     }else {
       str = str + "way";
     }

     return str;
   }

   translatePigLatin("consonant");
