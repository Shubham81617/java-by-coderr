// let userDetails = {
//     name: 'shubham',
//      age:20, 
//      city: 'delhi',
//      greet: function(){
//         console.log("hello, how areadf you?")
//      }
//    };
// userDetails.greet();

let userDetails = {
    name: 'shubham',
     age:20, 
     city: 'delhi',
     greet: function(){
        // return("hello, how are you?")
                // return("hello, " +name+" how are you?") //it will not work
             return("hello, " +this.name+" how are you?  ")      
     },
     hello: function(from){
        return(this.greet()+"hey, btw i am " +from +" i m good, what about you?")
     }
   };
// console.log(userDetails.greet());
// console.log(userDetails.hello("peter"));



// both funtion at once?
console.log(userDetails.hello("peter"));