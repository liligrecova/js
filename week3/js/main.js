// **** CLASS 3 NOTES ****

// ====================
// DOCUMENT OBJECT MODEL
// ====================
// $(function(){
//   createHTML();
//   defineEvents();//posle sozd html
// });//eto govorit deistvui kogda doc is ready, te zagrujen html
// const createHTML = () => {
//   let body = document.getElementsByTagName("BODY")[0];
// //---------------------------------------------------------
//   let div_container = document.createElement("DIV");//A
//   div_container.setAttribute("class", "div_container_class");//A+
//   div_container.setAttribute("id", "div_container_id");//A+
//   //------------------------------------------------------------------
//   let span = document.createElement("SPAN"); //B
//   let text_title = document.createTextNode("ClASS 3");// C
//   span.appendChild(text_title);//C
//   div_container.appendChild(span);//B
//   //------------------------------------------------------------
//   let button_alert = document.createElement("BUTTON");//D
//   button_alert.setAttribute("class", "button_alert_class");//D+
//   button_alert.setAttribute("id", "button_alert_id");//D+
//   let text_button = document.createTextNode("CLICK ME");// E
//   button_alert.appendChild(text_button);//E
//   div_container.appendChild(button_alert);//D
//
//   body.appendChild(div_container); //A
//   //-----------------------------------------
//
// };
//  const defineEvents = () => {
//    $("#button_alert_id").click(function(){
//      alert("Thank you");
//    });
//  }
// ====================
// AJAX
// ====================

// $(function(){
//   let global_result;
//   $.getJSON("json/data.json", function(result){
//     // console.log(result.FRENCH.title);
//     global_result = result;
//     $("h3").text(result.FRENCH.title);
//     $("#button").val(result.FRENCH.button_text);
//   });
//   $("#button").click(function(){
//     if($("h3").text()===global_result.FRENCH.title){
//       $("h3").text(global_result.ENGLISH.title);
//       $("#button").val(global_result.ENGLISH.button_text);
//     }else{
//         $("h3").text(global_result.FRENCH.title);
//         $("#button").val(global_result.FRENCH.button_text);
//     }
//   });
// });

// ====================
// JAVASCRIPT ARRAYS
// ====================

/*** JavaScript arrays are used to store
multiple values in a single variable. ***/
// const fruits = ["oranges", "bananas", "apples"];

// -----------------------------------

/*** The toString() method returns an array as a string ***/

// const fruits = ["oranges", "bananas", "apples"];
// console.log(fruits.toString());


// -----------------------------------

/*** The join() method also joins all array elements into a string.
It behaves just like toString(), but you can specify the separator ***/
// const fruits = ["oranges", "bananas", "apples"];
// console.log(fruits.join(" / "));



// -----------------------------------

/*** When you work with arrays, it is easy to remove elements and
add new elements. This is what popping and pushing is: Popping items
out of an array, or pushing items into an array.
The pop() method removes the last element from an array ***/

// const fruits = ["oranges", "bananas", "apples"];
// fruits.pop();
// fruits.push("pear");
// console.log(fruits);


// -----------------------------------

/*** Shifting is equivalent to popping, working on the first element
instead of the last. The shift() method removes the first element of
an array, and "shifts" all other elements one place down. ***/
// const fruits = ["oranges", "bananas", "apples"];
// fruits.shift();
// console.log(fruits);


// -----------------------------------

/*** The unshift() method adds a new element to an array (at the beginning),
and "unshifts" older elements ***/
// const fruits = ["oranges", "bananas", "apples"];
// fruits.unshift("cherries");
// console.log(fruits);


// -----------------------------------

/*** Array elements are accessed using their index number ***/

// const fruits = ["oranges", "bananas", "apples"];
// fruits[1] = "kiwis";
// console.log(fruits);

// -----------------------------------

/*** Since JavaScript arrays are objects, elements can be deleted
by using the JavaScript operator delete. It leaves holes. ***/

// const fruits = ["oranges", "bananas", "apples"];
// delete fruits[0];
// console.log(fruits);
// -----------------------------------

/*** The splice() method can be used to add new items to an array
The first parameter defines the position where new elements should be added (spliced in)
The second parameter defines how many elements should be removed
The rest of the parameters define the new elements to be added ***/
// const fruits = ["oranges", "bananas", "apples"];
// fruits.splice(1, 1, "limes", "cheries");
// console.log(fruits);


// -----------------------------------

/*** The sort() method sorts an array alphabetically ***/
// const fruits = ["oranges", "bananas", "apples"];
// fruits.sort();
// console.log(fruits);


// -----------------------------------

/*** The reverse() method reverses the elements in an array
You can use it to sort an array in descending order ***/

// const fruits = ["oranges", "bananas", "apples"];
// fruits.reverse();
// console.log(fruits);

// -----------------------------------

/*** By default, the sort() function sorts values as strings
This works well for strings ("Apple" comes before "Banana")
However, if numbers are sorted as strings, "25" is bigger than "100",
because "2" is bigger than "1". Because of this, the sort() method
will produce incorrect result when sorting numbers
You can fix this by providing a compare function ***/
// let points = [40, 100, 1, 5, 10, 2]
// points.sort(sortNumbers = (a,b)=> a-b);
// console.log(points);
// When comparing 40 and 100, the sort() method calls the compare function sortNumbers(40,100).
// The function calculates 40-100, and returns -60 (a negative value).
// The sort function will sort 40 as a value lower than 100

// -----------------------------------

/*** The concat() method creates a new array by concatenating two arrays ***/
// let myGirls = ["Maude", "Kamille"];
// let myBoys = ["Gab"];
// let myChildren = myGirls.concat(myBoys);
//
// console.log(myChildren);
// -----------------------------------

/*** The slice() method slices out a piece of an array into a new array ***/

// let fruits = ["oranges", "lemons", "bananas", "apples"];
// let citrus = fruits.slice(0, 2);
// console.log(citrus);

// ====================
// IN-CLASS ASSIGNMENT (PART 1)

// Interface : Add field, add button,
// result DIV.

// Code : Global array with 2 fruits as values.
// Both fruits appearing in result DIV joined by an *
// by default.
// Event listener for button pointing to function.

// Function addFruit : Alert for empty fields.
// Adding fruit to array.
// Displaying array in result DIV with * if more than 1 fruit.
// Emptying add field.
// let arr_of_fruits = ["apples", "oranges"];
// $(function(){
//   $("#result").text(arr_of_fruits.join(" * "));
//   $("#add_button").click(addFruit);
// });

// const addFruit = () => {
//   if($("#add_field").val()===""){
//     alert("Do not leVE THE FIELD empty''''");
//   }else{
//     let new_fruit = $("#add_field").val();
//     arr_of_fruits.push(new_fruit);
//     $("#result").text(arr_of_fruits.join(" * "));
//     $("#add_field").val("");
//   }

// };

// ====================
// JAVASCRIPT LOOPS
// ====================

// The for statement creates a loop that is executed as long as a condition is true.
// The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false.

// JavaScript supports different kinds of loops:
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// while - loops through a block of code while a specified condition is true
// do/while - loops through a block of code once, and then
// repeats the loop while a specified condition is true



// -----------------------------------

/*** Using the continue statement - Loop through a block
of code, but skip the value of "3" ***/



// -----------------------------------

/*** Using the break statement - Loop through a block of code,
but exit the loop when the variable i is equal to "3" ***/



// -----------------------------------

/*** Loop through the indices of an array,
in descending order (negative increment) ***/



// -----------------------------------

/*** An example of a nested loop (a loop inside a loop) ***/



// -----------------------------------

/*** Loop through the properties of an object ***/



// -----------------------------------

/*** Loop through a block of code as long as a
variable (i) is less than 5 ***/



// -----------------------------------

/*** Loop through the indices of an array to collect
the fruit names from the fruit array ***/



// -----------------------------------

/*** Loop backwards through the indices of an array ***/



// -----------------------------------

/*** This loop will always be executed at least once, even if
the condition is false, because the code block is executed
before the condition is tested ***/



// -----------------------------------



// ====================
// ====================
// IN-CLASS ASSIGNMENT (PART 2)

// Interface : Delete field, delete button,
// result DIV.

// Code : Global array with 2 fruits as values.
// Both fruits appearing in result DIV joined by an *
// by default.
// Event listener for button pointing to function.

// Function deleteFruit : Alert for empty fields.
// Deleting fruit from array.
// Alert if fruit not present.
// Displaying array in result DIV with * if more than 1 fruit.
// Emptying delete field.

// -----------------------------------



// ====================
// ====================
