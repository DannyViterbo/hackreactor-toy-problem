function powerSet (string) {
  // Write your code here, and
  // return your final answer.
  var ans = [""];
  if (!string.length) return ans;
  var arr = string.split("").sort();
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true; 
  }
  var base = Object.keys(obj);
  ans = ans.concat(base);

  base.forEach(function(item, index) {
    if (base[index + 1]) { add(item, index + 1); }
  });
  
  function add(string, startIndex) {
    var series = [];
    for (var j = startIndex; j < base.length; j++) {
      series.push(string + base[j]);
      if (base[j+1]) { add(string + base[j], j+1) }
    }
    ans = ans.concat(series);
  }
  ans.sort();
  return ans;
}
