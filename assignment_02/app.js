// Assignment # 02, Submitted By: Syed Ahmed Mazhar Gillani.

// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function parentClou(num1){
    return function(num2){
        return num1 + num2;
    }
}

let childClou = parentClou(12);
let finalOutput = childClou(12);

// console.log(finalOutput);              // Answer # 1


// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function serachArr(arr, val){
    let len = arr.length;
    for (let i = 0; i < len; i++){
        let item = arr.at(i);
        if (item.toLowerCase() === val.toLowerCase()){
            return "Present";
        }else{
            return "Not Present";
        }
    }
}


let fruits = ["Banana", "Orange", "Apple", "Mango"];

let itemPresent = serachArr(fruits, "BaNaNa");


// console.log(itemPresent);              // Answer # 2


function recSearch(arr, l, r, x) 
{ 
    if (r < l) 
        return -1; 
    if (arr[l] == x) 
        return l; 
    if (arr[r] == x) 
        return r; 
     return recSearch(arr, l+1, r-1, x); 
} 
    
// Driver Code 
let arr = [12, 34, 54, 2, 3]; 
let i; 
let n = arr.length; 
let x = 24;     // search 23
let index = recSearch(arr, 0, n - 1, x); 

// Answer # 2

if (index != -1){
    console.log(`Element ${x} is present at index ${index}`); 
}
else{
    console.log("Element is not present " + x); 
}



// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function addPara(){
    let getEle = document.getElementById("P1"); // id = "P1"
    getEle.innerText = prompt("Entre paragraph content: ");
}

// addPara();              // Answer # 3


// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function unOdL(){
    let getEle = document.getElementById("UL1");  // id = "UL1"
    let ulCont = prompt("Entre list content: ")
    getEle.innerHTML = `<li>${ulCont}</li>`
}

// unOdL();              // Answer # 4


// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


function newBack(ele, back){
    ele.innerText = "Guten Morgan!"
    ele.style.backgroundColor = back;
    ele.style.width = "25%";
}

let para2 = document.getElementById("P2"); // id = "P2"
let backClr = "#6495ED";  // change color here

// newBack(para2, backClr);              // Answer # 5


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

function storeLocal(ki, obj){
    obj = JSON.stringify(obj);
    localStorage.setItem(ki, obj);
}

let object1 = {
    name: "Ahmed Gillani",
    email: "ahmedgillani142@gmail.com",
    contact: +"03216020299"
}

// saving object to local storage

// storeLocal("person1", object1);           // Answer # 6


// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function getObjLoc(ki){
    let obj = localStorage.getItem(ki);
    obj = JSON.parse(obj);
    return obj
}

let obj4rmLoc = getObjLoc("person1");    // key = "person1"

// console.log(obj4rmLoc);           // Answer # 7


// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function savObj(obj){
    let len = obj.length;
    for (let i = 0; i < len; i++){
        let key = obj[i]["key"];
        let val = obj[i]["value"];

        let d = JSON.stringify(val);
        localStorage.setItem(key, d);
    }


    let archive = [];
    for (var i = 0; i<localStorage.length; i++) {
        arch = localStorage.getItem(localStorage.key(i));
        archive.push(JSON.parse(arch));
    }

    return archive;
}

let doc = [
    {
        key: "person1",
        value: {
            name: "Ahmed Gillani",
            email: "ahmedgillani142@gmail.com",
            contact: +"03216020299"
        }
    },
    {
        key: "person2",
        value: {
            name: "Ali",
            email: "abc@gmail.com",
            contact: +"03000000000"
        }
    },
    {
        key: "person3",
        value: {
            name: "Hamza",
            email: "abc@gmail.com",
            contact: +"03000000000"
        }
    },
    {
        key: "person4",
        value: {
            name: "Nabeel",
            email: "abc@gmail.com",
            contact: +"03000000000"
        }
    },
    {
        key: "person5",
        value: {
            name: "Farman",
            email: "abc@gmail.com",
            contact: +"03000000000"
        }
    }
]

let data = savObj(doc);


// console.log(data);           // Answer # 8
