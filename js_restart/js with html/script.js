// let age=prompt("provide me your age")
// age=Number.parseInt(age)
// if(age>=18){
//     alert(`YOUR AGE IS ${age} AND YOU CAN VOTE AND ALSO YOU CAN DRIVE THE CAR`);
//     console.log(age)
// }
// else if(age<18){
//     alert(`YOUR AGE IS ${age} AND YOU CAN NOTE VOTE AND ALSO YOU CAN NOTE DRIVE THE CAR`)
//     console.log(age)
// }
// else{
//     alert("enter a valid number")
// }
// console.log(`Your age is ${age} and you can `, age>=18? "drive":"not drive");
// const cup=1;
// switch (cup) {
//     case 2:
//         console.log("the value is 2")
//         break;
//     case 39:
//         console.log("the value of cup is 39")
//         case 41:
//         console.log("the value of cup is 41")
//     default:
//         console.log("the value is none")
//         break;
// }
// let arra=[1,2,34,5,5,7,8];

// let a2= arra.reduce((val,val2)=>{
//     return val>5
// })
// console.log(a2)

// let [a,b,...rest]=arra
// console.log(a, rest)
// let newarray=[1,3,...arra,77]
// console.log(newarray)

// const function1=([a,b,...rest])=>{
//     console.log(a,b,rest)
// }
// function1(arra)
// let newArray=[
//     {name:"abhishek",branch:"cse",course:"btech"},
//     {name:"john",branch:"ece",course:"mtech"},
//     {name:"jane",branch:"mech",course:"btech"},
//     {name:"doe",branch:"cse",course:"btech"}
// ]
// let a=newArray.filter((val)=>val.branch==="cse").map((val)=>val.name)
// console.log(a)

// let abhi=[
//     {name:"anhi",active:true,purchase:30},
//     {name:"xyz",active:false,purchase:20},
//     {name:"abc",active:true,purchase:50}
// ]
// const exchange=0.9;

// const TotalAmount=abhi.filter((val)=>val.active===true
// ).map((val)=>val.purchase*exchange).reduce((acc, val)=>acc+=val,0)
// console.log(TotalAmount)
// let another =[1,23,4]
// let a1=[...another]
// a1.push(45)
// console.log(a1,another)
// var name="abhishek";
//  function fun1(){
    
//     console.log(name);
//     hello="hi";
    // var name="john";
 

//  console.log(name);
// console.log(name);
//  fun1();
//  console.log(hello);
// function one(){
//     var a="inside one";
//     console.log(a);
//     function two(){
//         let b="inside two";
//         console.log(a);
//         function three(){
//             let c= "inside three";
//             console.log(c);
//         }
//         three();
//     }   
//     two();
// }
// one();

// function greet(name, bye){
//     console.log("Hello", name);
//     bye();
// }
// function bye(){
//     console.log("Goodbye")
// }


// greet("Abhishek", bye);


// function add(a, b){
//     return a + b;
// }
// function sub(a, b){
//     return a - b;
// }

// function calculator(num1, num2, ope){
//     return ope(num1, num2);
// }
// let a=calculator(5, 3, sub);
// console.log(a);
// let arra=["hello","world","Abhishek ver,ma",5];   
// let a=document.createElement("div");

// document.body.appendChild(a);
// for(let i=0;i<10;i++){
//     let b=document.createElement("li");
//     b.innerText=arra[i]
//     a.appendChild(b);
//     b.style.color="red";
// }

// let event=document.getElementById("alertButton");
// let event2=document.getElementById("alertButton2");

// event.addEventListener("click", () => {
//     let value= document.getElementById("inputField").value;
//     let body=document.body;
//     body.style.backgroundColor=value;
// });

// event2.addEventListener("click", () => {

//     let body=document.body;
//     body.style.backgroundColor="white";
// });

// let btn=document.getElementById("btn");

// btn.addEventListener("click", function onClick(){

//     let randomColor= `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
//     let body=document.body;
//     body.style.backgroundColor=randomColor;
// });
// let button=document.getElementById("alertButton2");
// let createElement=document.createElement("p");
//  document.body.appendChild(createElement);
// button.addEventListener("input" ,()=>{
//     console.log(button.value);
//     createElement.innerText=button.value;
   
// })
// let a=document.getElementById("box1");
// let b=document.getElementById("box2");
// let c=document.getElementsByClassName("box");

// for(let item of c){
//     item.addEventListener("dragstart", (e) => {
//         let data=e.target
//     b.addEventListener("dragover" , (e)=>{
//         e.preventDefault();
//         e.stopPropagation();
//     });
//     b.addEventListener("drop" , ()=>{
//         b.append(data)
//         data=""
        
//     })
//       a.addEventListener("dragover" , (e)=>{
//         e.preventDefault();
//         e.stopPropagation();
//     });
//     a.addEventListener("drop" , ()=>{
//          a.append(data)
//         data=""
        
        
//     })
    
// });

// }
    // });
    // aty.addEventListener("dragend", (e) => {
    
    // });
    // aty.addEventListener("dragover", (e) => {
    
    // });
    // aty.addEventListener("dragleave", (e) => {
    
    // });
    // aty.addEventListener("dragenter", (e) => {
  
    // });

    let finalPass=document.getElementById("finalPass");
    let btn=document.getElementById("generate");
    let passLength=document.getElementById("passLength");
    let rangeValue=document.getElementById("rangeValue");
    let upperCase=document.getElementById("upperCase");
    let lowerCase=document.getElementById("lowerCase");
    let numbers=document.getElementById("number");
    let symbols=document.getElementById("symbol");
    let copyIcon=document.getElementById("copyIcon");

passLength.addEventListener("input", () => {
        rangeValue.innerText=passLength.value;
    });
    
    
    btn.addEventListener("click", () => {

    let upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
    let numbersStr = "0123456789";
    let symbolsStr = "!@#$%^&*()_+[]{}|;:,.<>?";
    let allCharacters = "";
if(upperCase.checked){
    allCharacters += upperCaseStr;
}
if(lowerCase.checked){
    allCharacters += lowerCaseStr;
}
if(numbers.checked){
    allCharacters += numbersStr;+
}
if(symbols.checked){
    allCharacters += symbolsStr;
}
if(allCharacters.length===0){
    alert("Please select at least one option");
}
    let password = "";
    for (let i = 0; i < passLength.value; i++) {
        let randomNumber=Math.floor(Math.random() * allCharacters.length)
        password += allCharacters.charAt(randomNumber);
    }
    finalPass.innerText = `${password}`;
 });
copyIcon.addEventListener("click", () => {
    window.navigator.clipboard.writeText(finalPass.innerText);
});