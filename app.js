// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDUOyulb5oTLKkGK4GunJKAa7hjm6Xy5wM",
//     authDomain: "login-with-firebase-data-b3d7b.firebaseapp.com",
//     projectId: "login-with-firebase-data-b3d7b",
//     storageBucket: "login-with-firebase-data-b3d7b.appspot.com",
//     messagingSenderId: "889799286073",
//     appId: "1:889799286073:web:0bdc296ead15d142491ce8",
//     measurementId: "G-5G41KM4MFX"
//   };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db= getFirestore(app);


//todoapp

var getul = document.getElementById('ul');

function addTodo() {
    var ca = document.getElementById('inp2');
    var li = document.createElement('li');
    var litext = document.createTextNode(ca.value);
    li.appendChild(litext);

    savingtoLocalStorage(li.innerText.trim());

    getul.appendChild(li);
}

function removeTodo() {
    // Assuming you have a function called removeFromLocalStorage to remove the item from local storage
    // removeFromLocalStorage(li.innerText.trim());

    // Assuming you want to remove the clicked li element
    getul.removeChild(this.parentNode);
}

// Assuming you have a function called savingtoLocalStorage to save the todo item to local storage
function savingtoLocalStorage(...args: [todo: any]) {
    // Retriving Existing items in our local storage
    var items = JSON.parse(localStorage.getItem('items')) || [];
    // Now we add new items into array, ab ham new item array mai add krengai
    items.push(itemText);
    // save the updated array back to local storage
    localStorage.setItem('items', JSON.stringify(items));

}

function loadAndDisplayItems() {
    var items = JSON.parse(localStorage.getItem('items')) || [];
    var ul = document.getElementById('ul');

    // Clear existing items in the ul
    ul.innerHTML = '';

    // Loop through the items and create li elements
    items.forEach(function (itemText) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(itemText));

        var deletebtn = document.createElement('button');
        deletebtn.appendChild(document.createTextNode('del'));
        deletebtn.setAttribute('onclick', 'del(this.parentNode)');
        deletebtn.setAttribute('class', 'btn btn-danger aaa');
        li.appendChild(deletebtn);

        var editbtn = document.createElement('button');
        editbtn.appendChild(document.createTextNode('Edit'));
        editbtn.setAttribute('onclick', 'editfun(this)');
        editbtn.setAttribute('class', 'btn btn-info aaa');
        li.appendChild(editbtn);

        li.style.listStyleType = 'none';
        ul.appendChild(li);
    });
}


function deleteall(){
    getul.innerHTML = '' 
    localStorage.clear()

}


function del(e){
    e.parentNode.remove()
}


function editfun(e){
    var userEdit = prompt('Enter Edit value' ,e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = userEdit;
}

loadAndDisplayItems();