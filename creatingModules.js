function sortArray(arr){
  arr.sort(function(a, b){
    return a - b
  })
  return arr;
}

var list = [];

module.exports = {
   takenNumber: function(numArr){
      list.push(numArr);
      return numArr;

  },
  sortedNumber: function(){
      var sortedList = sortArray(list);
      console.log(sortedList);
      return sortedList;
  }
}



