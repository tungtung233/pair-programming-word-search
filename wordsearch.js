const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    const vertical = letters[0].map((_, columnIndex) =>
      letters.map((row) => row[columnIndex]).join(""),
    );
    for (row of vertical) {
      if (row.includes(word)) return true;
    }
  
    if (undefined) {
      return false;
    }

    return false;
};
  
  module.exports = wordSearch;
  