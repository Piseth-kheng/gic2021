var selectedRow = null;
let x = -1;
var names = [];
var price = [];
var category = [];
var storedBooks = [];
let header = document.getElementsByClassName("header-add")[0];

if(localStorage.getItem("books")!=null){
    storedBooks = JSON.parse(localStorage.getItem("books"));
    storedBooks.forEach(book => {
        names[x + 1] = book['Name'];
        price[x + 1] = book['Price'];
        category[x + 1] = book['Category'];

        document.getElementById("add_items").innerHTML +=
            `<div class="items"><img src="book.png" alt="#"><div class="name" data="${book['Name']}">Name : ${book['Name']}</div><div class="price">Price : ${book['Price']} riels</div><div class="category">Category : ${book['Category']}</div><div class="button"><button id="${parseInt(x+1)}" class="editBtn" onclick="updateRecord(this.id)">Change name</button><button id="${parseInt(x+1)}" class="deletBtn" onclick="deleteBook(this.id)">Delete</button></div></div>`;
        x++;
    })
}

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
        console.log("hello")
    } else {
        updateRecord(formData);
    }
    resetForm();
}

//clear placeholder
document.querySelector('.add_book').placeholder = '';

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name_book"] = document.getElementById("name_book").value;
    formData["price_book"] = document.getElementById("price_book").value;
    formData["category_book"] = document.getElementById("category_book").value;

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    
    if(data.name_book=='') {data.name_book="undefined"};
    if(data.category_book=='') {data.category_book= "undefined"};
    if(data.price_book=='') {data.price_book= "undefined"};
    names[x + 1] = data.name_book;
    price[x + 1] = data.price_book;
    category[x + 1] = data.category_book;

    document.getElementById("add_items").innerHTML +=
        `<div class="items"><img src="book.png" alt="#"><div class="name" data="${data.name_book}">Name : ${data.name_book}</div><div class="price">Price : ${data.price_book} riels</div><div class="category">Category : ${data.category_book}</div><div class="button"><button id="${parseInt(x+1)}" class="editBtn" onclick="updateRecord(this.id)">Change name</button><button id="${parseInt(x+1)}" class="deletBtn" onclick="deleteBook(this.id)">Delete</button></div></div>`;
    storedBooks.push({Name: `${data.name_book}`, Price: `${data.price_book}`, Category: `${data.category_book}`});
    localStorage.setItem("books",JSON.stringify(storedBooks));
    x++;
}

//Update name
function updateRecord(id) {
    let names = prompt('Please enter new name');
    let prices = document.getElementsByClassName("price")[id].innerHTML.slice(8,-6);
    let category = document.getElementsByClassName("category")[id].innerHTML.slice(11);

    document.getElementsByClassName("name")[id].innerHTML = "Name : " + names;
    document.getElementsByClassName("edit_book")[0].style.visibility = 'hidden';
    document.getElementsByClassName("add_book")[0].style.visibility = 'visible';

    storedBooks[id]={Name: `${names}`, Price: `${prices}`, Category: `${category}`};
    localStorage.setItem("books",JSON.stringify(storedBooks));
    selectedRow = null;
}

//delete
function deleteBook(id) {
    console.log(id);
    if (confirm('Do you want to delete this record?')) {
        document.getElementsByClassName('items')[id].hidden = true;
        storedBooks.splice(id,1);
        localStorage.setItem("books",JSON.stringify(storedBooks));
    }
    resetForm();
}

function resetForm() {
    document.getElementById('name_book').value = '';
    document.getElementById('price_book').value = '';
    document.getElementById('category_book').value = '';
}