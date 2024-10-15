const books = [
    {
        "title": "Alibaba. Jek Ma bunyod etgan maskan",
        "author": "Dunkan Klark",
        "year": 2016,
        "image": "path/to/image.jpg",
        "file": "path/to/book.pdf"
    },
    {
        "title": "Noldan boshlangan biznes",
        "author": "Erik Ris",
        "year": 2011,
        "image": "path/to/image.jpg",
        "file": "path/to/book.pdf"
    },
    // Boshqa kitoblar ham shu tarzda qo'shiladi
];

function displayBooks() {
    const booksList = document.getElementById('books-list');
    booksList.innerHTML = '';
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        
        const bookTitle = document.createElement('h2');
        bookTitle.textContent = book.title;
        bookDiv.appendChild(bookTitle);
        
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Muallif: ${book.author}`;
        bookDiv.appendChild(bookAuthor);
        
        const bookYear = document.createElement('p');
        bookYear.textContent = `Yil: ${book.year}`;
        bookDiv.appendChild(bookYear);

        if (book.image) {
            const bookImage = document.createElement('img');
            bookImage.src = book.image;
            bookImage.alt = book.title;
            bookDiv.appendChild(bookImage);
        }
        
        const downloadLink = document.createElement('a');
        downloadLink.href = book.file;
        downloadLink.textContent = 'Yuklab olish';
        downloadLink.download = '';
        bookDiv.appendChild(downloadLink);
        
        booksList.appendChild(bookDiv);
    });
}

window.onload = displayBooks;
