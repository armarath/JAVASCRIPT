//  alert ("Hello arm from JS Test 1")
//  alert("Hello arm from JS Test 2");

//  console.log("Hello prettire");

//  prompt("what is your name");
//  console.log(prompt("what is your name"));


//Topic 1   This is main JS for Project 1

//to save repsose of user we will create a variable

//  const userName = prompt("My Name is ARM, What is your name?");

//  console.log(userName);


//  Topic 2: Variables, Camel Case convention, Assignment to variables


//  console.log("before creating variable", teacherName);
//  var teacherName =   "Imran";

//  console.log("after creating variable", teacherName);

//  var subject =  "Java";

//  teaccherName ="Alexander";

//  console.log("after re assigning variable", teacherName);

//  Topic 3 Data Types, (Strings, Boolean, true,false, Numbers)

//  To know what is data type used in a variable

// e.g.

//  let teacherName2 ="Alexandar"
//  console.log(typeof teacherName2);
//  above will in console that its type is string

//  e.g.
//  let teacherAge= 18;
//  console.log(typeof teacherAge);

//above will in console that its type is Number, Number are not written in Quotes.

//  e.g. of Boolean
//  let nameChanged= true;
//  console.log(typeof nameChanged);

//above will show in console that its type is Boolean.

//  e.g. of Undefined

//  let teacherClass=undefined;
//  console.log(typeof teacherClass);

//above will show in console that its type is undefined.


//  e.g. of null
//  let teacherFavstudent=  null;
//  console.log(typeof teacherFavstudent);

//above will show in console that its type is oject i.e undefined.


// Topic 4 Arithmetic Operators + - / *, --, ++, **



//  Topic 5 Comparison operators = <, >, <=, =>

//  Logical Operators:      And, Or

//  when we want both cond to be true then use both Or & And 


//  Project Node. 2 (Conversion from miles to KM by taking input from user)

// Following statement is The Coversion factor from miles to km

let milesToKilomieters = 1.60934

// Now following statement is to get input from user

let miles = prompt("Please enter distance in miles");
console.log(miles, 'miles');

//divide the miles by conv factor to get desired result

let kilometers = miles/milesToKilomieters;
console.log(kilometers, "killometers");


// question as per book requirement:
//the ddistance of 130km is equal to 209miles

let sentence = "The distance of" + kilometers + "Km is equal to" + miles + "miles"
console.log(sentence);




