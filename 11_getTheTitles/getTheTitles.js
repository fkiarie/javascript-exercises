const getTheTitles = function(books) {
    // Empty array to store the titles
    const titles = [];
  
    // Loop through the books array and extract the titles
    for (const book of books) {
      titles.push(book.title);
    }
  
    return titles;
  };

// Do not edit below this line
module.exports = getTheTitles;
