let book = {
    releaseDate: new Date()
}

let jsonText = JSON.stringify(book);
// let bookCopy = JSON.parse(jsonText)
let bookCopy = JSON.parse(jsonText, (key, val) => {
    return key === "releaseDate" ? new Date(val) : val;
});
console.log(bookCopy.releaseDate.getFullYear());