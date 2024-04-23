function findAccountById(accounts, id) {
  // Check if account.id is matching with given id
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  // Sort based on lower case letters of the Last Name
  return accounts.sort((lastName1, lastName2) => lastName1.name.last.toLowerCase() < lastName2.name.last.toLowerCase() ? -1 : 1);
}

function getAccountFullNames(accounts) {
  // Returns First Name " " Last Name
  return accounts.map(account => account.name.first + " " + account.name.last);
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
