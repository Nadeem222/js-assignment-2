// let arr = ["january" , "febuary" , "march" , "april" , "may" , "june", "july" ,"august" , "september" , "october", "november" ,"december"];

// arr[2] =  "june"; /// add value to any index number // bad practice
// // console.log(arr); 


// let arr1 = ["january" , "febuary" , "march" , "april" , "may" , "june", "july" ,"august" , "september" , "october", "november"];

// let storeValue = prompt("is it put value in array?")

// if (storeValue === "yes"){
//     arr1.push("december"); /// push value in last index 
// }

// // console.log(arr1);

// let arr2 = ["january" , "febuary" , "march" , "april" , "may" , "june", "july" ,"august" , "september" , "october", "november"];

//     arr2.shift(); // remove value from 1st index
//     arr2.unshift("jan");  // add value from 1st index
//     arr2.pop("jan");  // add value from remove index
//     arr2.lenght;  // calculate array length 

//     arr2.splice(2 , 1 , "hi"); // kisi bhi array k index ki value ko dlt karne k liye splice use hta hai, is mein  humein phele index num batana hta hai second dlt count bata hta hai ki kitni value dlt karni hai.



//     console.log(arr2);




// function searchArray(arr, value) {
//     if (arr.length === 0) {
//       return false; // value not found
//     }
  
//     if (arr[0] === value) {
//       return true; // value found
//     }
  
//     // Recursively search the rest of the array
//     return searchArray(arr.slice(1), value);
//   }
  
//   const arr = [1, 2, 3, 4, 5];
//   console.log(searchArray(arr, 3)); // Output: true
//   console.log(searchArray(arr, 6)); // Output: false


//let arr2 = prompt("Enter any number");


// question NO 1 : 1.	Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function addition (number){
    return function (addValue){
        return number + addValue ;
    };
}

let addTen = addition(10);

let result = addTen(5);

document.getElementById('result').innerHTML = "Result :" + result;

console.log(addTen(5));
console.log(addTen(9));

function additionFunction (number){
    return function (value){
        return number + value ;
    };

}

const addFive = additionFunction(5);

console.log (addFive (5));
console.log (addFive (7));

//Question # 2: 2.	Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.


function searchArray (arr , value){
    if (arr.length === 0){
    return false;
}

    if (arr[0] === value){
    return true;
    
}
    return searchArray(arr.slice(1), value);

}

const arr = [1 , 2 , 3 , 4 , 5 ];
console.log(searchArray (arr , 3));
console.log(searchArray (arr , 6));


//question# 3: Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function addParagraphToDocument(text) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    document.body.appendChild(newParagraph);
  }
  
  addParagraphToDocument('This is a new paragraph.'); // adds a new paragraph to the HTML document with the text 'This is a new paragraph.'

  //Question # 4 : Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.

  function addListItemToUnorderedList(text) {
    const newListItem = document.createElement('li');
    newListItem.textContent2 = text;
    const unorderedList = document.querySelector('ul'); // assuming there's only one unordered list in the document
    unorderedList.appendChild(newListItem);
  }
  
  addListItemToUnorderedList('New item'); // adds a new list item with the text 'New item' to the unordered list in the HTML document

  /// Question # 5.Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

  
  function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  
  const myElement = document.getElementById('myElement'); // assuming there's an HTML element with the id 'myElement'
  changeBackgroundColor(myElement, 'red'); // changes the background color of 'myElement' to red


  function backgroungChange ( element , color){
    element.style.backgroundColor = color;
  }

  const myPic = document.getElementById('myPic');
  backgroungChange (myPic , 'green');


  //Question # 6.	Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.
  
  function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  
  const myObj = { name: 'John', age: 30 };
  saveObjectToLocalStorage('myObjKey', myObj); // saves 'myObj' object to localStorage with the key 'myObjKey'

  
  //Question# 7 .Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.


  function getObjectFromLocalStorage(key) {
    const objString = localStorage.getItem(key);
    return JSON.parse(objString);
  }
  
  const retrievedObj = getObjectFromLocalStorage('myObjKey'); // retrieves the object with the key 'myObjKey' from localStorage
  console.log(retrievedObj);
  document.write( "Name : " ,  retrievedObj.name); // Output: { name: 'John', age: 30 }
  document.write(" ! Age :", + retrievedObj.age); // Output: { name: 'John', age: 30 }
  


  function saveToLocalStorage(obj) {
    // Loop through each property in the input object
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        // Save property key-value pair to localStorage
        localStorage.setItem(prop, JSON.stringify(obj[prop]));
      }
    }
  
    // Retrieve the object from localStorage
    const retrievedObj1 = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      retrievedObj1[key] = JSON.parse(localStorage.getItem(key));
    }
  
    // Return the retrieved object as a new object
    return retrievedObj1;
  }
  
