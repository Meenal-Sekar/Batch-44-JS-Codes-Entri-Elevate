// initialize empty array name as books

let books=[];
let editIndex= -1;


const bookName = document.getElementById("bookName");  //PS
const authorName = document.getElementById("authorName");//Kalki

//{name:bookName.value,author:authorname.value}

const bookTable = document.getElementById("bookTable");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("search");

// add book funtion
// ADD BOOK (Normal Function)

    //Write a functionalities for addbook() function
    // check if the empty field in the box make the alert
    // clear the form once they enter the book details
function addBook()
 {

    if(bookName === "" || authorName === "" )
    {
        alert('Fill all details');
        return;
    }
    if(editIndex === -1)
    {
        books.push({
            name: bookName.value,
            author: authorName.value
        });
    }
    else {
        books[editIndex] = {
            name: bookName.value,
            author: authorName.value
        };

        editIndex = -1;
    }

    clearForm();
    displayBooks(books);    //{name:thriukural,author:Thiruvalluvar}

}


function clearForm() 
{
    bookName.value = "";
    authorName.value = "";
}

//seperate the array to individual



// DISPLAY BOOKS (Arrow Function)  books--data  (a,b,c )

const displayBooks = (data) => {
    bookTable.innerHTML = "";

    data.forEach((book, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>
                <button class="edit" onclick="editBook(${index})">Edit</button>
                <button class="delete" onclick="deleteBook(${index})">Delete</button>
            </td>
        `;

        bookTable.appendChild(row);
    });
};


//Edit the book details

function editBook()
{

}

function deleteBook()
{

}


// FILTER BOOKS (Arrow Function)
const filterBooks = () => {
    const searchValue = searchInput.value.toLowerCase();

    const filtered = books.filter(book =>
        book.name.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
    );

    displayBooks(filtered);
};



