var commonCharacters = function(string1, string2){
  var refString 
  var ref = {};
  var ans = "";
  for (var i = 0; i < string2.length; i++) {
    ref[string2[i]] = 1;
  }
  for (var j = 0; j < string1.length; j++) {
    if (ref[string1[j]] === 1 && string1[j] !== " ") {
      ans += string1[j];
      ref[string1[j]]++;
    }
  }
  return ans;
};

// Common Characters
// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

// Example: commonCharacters('acexivou', 'aegihobu')

// Returns: 'aeiou'

// Your Code Should Pass:
// var should = chai.should();

// describe('Common Characters', function(){
//   it('returns common characters', function(){
//     commonCharacters('abc', 'abc').should.equal('abc');
//   });

//   it('returns common characters', function(){
//     commonCharacters("What is love?", "Baby don't hurt me").should.equal('hatoe');
//   });

//   it('returns common characters', function(){
//     commonCharacters('Riding on a buffalo makes me more approachable', 'so what').should.equal('oash');
//   });

//   it('returns empty string', function(){
//     commonCharacters('', 'No more').should.equal('');
//   });

//   it('returns empty string', function(){
//     commonCharacters('No more', '').should.equal('');
//   });

//   it('returns empty string', function(){
//     commonCharacters('', '').should.equal('')
//   });
// });