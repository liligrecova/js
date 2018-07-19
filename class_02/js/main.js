//CLASS #1


//JavaScript variables

// let x=5;
// let y=6;
// let z=x+y;
// console.log(z);

//let easierTpRead="Yes!"
// let anInteger=5;
// let aFloat=5.5;
// let aString="Double quotation string";
// let anotherString='Single quotation string';
// let aBoolean=true;

//Javascript operators

// let x=5+6;
// let x=5-6;
// let x=5*6;
// let x=5/6;
// let x=9%4;
// x++;
// x--;

//Assignment operators
// =
// +=
// -=
// *=
// /=
// %=


//Inclass Assignment 1

// Variable "amount"=AMOUNT
// Variable "gst"=GST //100*0.05
// Variable "qst"=QST //100*0.09975
// Variable "taxes"=taxes
// Variable "amount_with_taxes"=AMOUNT+taxes
// Display "amount_with_taxes" in console log

// let amount=100;
// let gst=amount*0.05;
// let qst=amount*0.09975;
// let amount_with_taxes=(amount+gst+qst).toFixed(2);
// console.log(amount_with_taxes);

//String operators

// let firstName="Mario";
// let lastName="Geneau";
// //let name=firstName+" "+lastName;
// //Interpolated string
// let name = `${firstName} ${lastName}`
// console.log(name);


//Comparison and logical perators
//== equal to
//=== strict equal (number and type)
// != not equal to
// !==
// >
// <
// >=
// <=

// let x=12;
// let y="12";
// if (x==y) alert ("yes");
// if (x===y) alert ("yes");

// Javascript functions

// function sum(num1, num2) {
//   return num1+num2;
// }
// console.log(sum(6,7));

// const sum=function(num1,num2) {
//   return num1+num2;
// }

// const sum=(num1,num2)=> num1+num2;
// console.log(sum(6,7));

//Inclass Assignment 2

// Function "gst" with 1 parameter called amount
// Function "qst" with 1 parameter called amount
// Function "total" with 3 parameters (amount, gst,qst)
// console calls the "total" function

// const gst=(amount)=> Number((amount*0.05).toFixed(2));
// const qst=(amount)=> Number((amount*0.09975).toFixed(2));
// const total=(amount,gst,qst)=> amount+gst+qst;
// console.log(total(100, gst(100), qst(100)));


//$(function() {
//  $("#sum_button").click(function(){
//    let v1=Number($("#field_1").val());
//    let v2=Number($("#field_2").val());
//    let sum=v1+v2;
//    $("#result").text(sum);
//  });
//  $("#mult_button").click(function(){
//    let v1=Number($("#field_1").val());
//    let v2=Number($("#field_2").val());
//    let mult=v1*v2;
//    $("#result").text(mult);
//});
	
//	$.getJSON('json/contacts.json', function(result){
//		console.log(result);
//		console.log(result["1"]);
//		let arr_of_keys = Object.keys(result);
//		console.log(arr_of_keys);
//		let first_value = result[arr_of_keys[0]];
//		console.log(first_value);
		
//		for (let key in result) {
//			console.log(`KEY: ${key} & VALUE: ${result[key]}`);			
//		}
		
//	});
//});






//CLASS #2

//??contditional statements
//
//let age = 17;
//if (age < 13) {
//	console.log ("child");
//} else if (age>=13 && age<18) {
//    console.log ("teenager");
//		   }
//  else {		   
//	console.log ("adult");
//}

//??switch

//switch (new Date().getDay()){
//	case 0:
//		console.log ("Sunday");
//		break;
//	case 4:
//		console.log ("Thursday");
//		break;
//	default:
//		console.log ("Looking forward to the weekend");
//}

//??Short conditional statements

//let myAge = 17;
//let legalAge = 18;
//let canDrink = (myAge>=legalAge) ? true:false;
//console.log (canDrink);

//
//$(function() {
//  "use strict"; //for quality control
//  $("#pass_button").click(function(){
//    let pass_field_value=$("#pass_field").val();
//	if (pass_field_value==="secret")
//		location="http://www.apple.com";
//	else
//		alert("Wrong password!"); 
//	    $("#pass_field").val("");
//  });
//});



//??FUNCTIONS

//$(function() {
//	$("#sum_button").click(clickEvent);
//	$("#mult_button").click(clickEvent);
//});
  
//const clickEvent = (evt) =>{
//	let f1=$("#field1").val();
//	let f2=$("#field2").val();
//	switch (evt.target.name){
//		case "sum":
//			$("#result").text(sum(f1,f2));
//			break;
//			
//		case "mult":
//			$("#result").text(mult(f1,f2));
//			break;
//			
//		default:
//	}
//	
//};
//
//const sum = (n1,n2)=>{
//	if (n1===undefined || n2===undefined){
//		return "Error returning sum...";
//}
//	return (Number(n1) + Number(n2)).toString();
//};
//  
//const mult = (n1,n2)=>{
//	if (n1===undefined || n2===undefined){
//		return "Error returning mult...";
//}
//	return (Number(n1) * Number(n2)).toString();
//};


//inclass assignment

$(function() {
	$("#f_button").click(clickEvent);
	$("#c_button").click(clickEvent);
});
  
const clickEvent = (evt) =>{
	let t=$("#temperature").val();
	switch (evt.target.name){
		case "toF":
			$("#result").text(f(t));
			break;
			
		case "toC":
			$("#result").text(c(t));
			break;
			
		default:
	}
	
};

const f = (value)=>{
	if (value===undefined){
		return "Error returning temperature...";
}
	return `${(Number(value) * 1.8 + 32).toFixed(1)} F`;
};
  
const c = (value)=>{
	if (value===undefined){
		return "Error returning temperature...";
}
	return `${((Number(value) -32)/1.8).toFixed(1)} C`;
};