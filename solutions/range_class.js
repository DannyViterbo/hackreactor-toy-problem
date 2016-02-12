var Range = function(start, end, step) {
  start = start !== undefined ? start : null;
  end = end !== undefined ? end : start;
  if (step === undefined) {
    step = start > end ? -1 : 1;
  }
  this.start = start;
  this.end = end;
  this.step = step;
};

Range.prototype.size = function () {
  if (this.start === this.end) return 1;
  return Math.round(((this.end - this.start) / this.step) + 1);
};

Range.prototype.each = function (callback) { 
  if (this.step < 0) {
    for (var i = this.start; i >= this.end; i += this.step) {
      callback(i);
    }
  } else if (this.step > 0) {
    for (var i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  }
};

Range.prototype.includes = function (val) {
  if (this.start === this.end) return val === this.start;
  if (this.step < 0) {
    return (val - this.start) % this.step === 0 && val <= this.start && val >= this.end;
  } else if (this.step > 0) {
    return (val - this.start) % this.step === 0 && val >= this.start && val <= this.end;
  }
};



// Build a class to represent a range of numbers that has:

// 1. a beginning index
// 2. an end index (optional). If there is no end index, the range should include only the passed-in start value.
// 3. a ‘step’ (optional)

// The step is the interval at which elements are included. For instance, a step of 1 includes every element in the range, while a step of 2 includes every other element.

// You should allow a negative value for ‘step’ to count backwards. If no step is provided and the start is more than the end, assume we’re counting backwards.

// The range should have a constructor that accepts these arguments in this order:

// 1. begining index
// 2. end index
// 3. step interval

// It should also support the following utility functions:

// 1. size(): return the number of items represented by the range
// 2. each(callback(index)): iterate over the range, passing each value to a callback function
// 3. includes(index): return whether or not the range includes the passed value

// You should also be aware of the following caveats:

// 1. Should return null if we are given no ‘start’ value.
// 2. Range should use constant space, even during the each() method, * i.e. you should not use an array as backing storage.


// USAGE EXAMPLES:

//  var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)

//  var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.

//  evenNumbers.each(function(val){ console.log(val+'!'); }); //Prints '2! 4! 6! 8!'

//  evenNumbers.size() //4

//  evenNumbers.includes(2) //True

//  evenNumbers.include(3) //False


// Your Code Should Pass:

// var should = chai.should();

// describe('Range', function() {
//   it('should exist', function() {
//     should.exist(Range);
//   });

//   it('should be a function', function(){
//     Range.should.be.a.Function;
//   });

//   it('should be a constructor', function() {
//     var range = new Range(1);
//     should.exist(range);
//     range.should.be.an.instanceOf(Range);
//    });

//   it('should have `size()` method that returns number of elements', function() {
//       var justOne = new Range(1);
//       should.exist(justOne.size);

//       justOne.size().should.eql(1);

//       var oneToTen = new Range(1, 10);
//       oneToTen.size().should.eql(10);

//       var evenDigits = new Range(2, 8, 2);
//       evenDigits.size().should.eql(4);

//       var threes = new Range(3, 100, 3);
//       threes.size().should.eql(33);
//   });

//   describe('#each', function(){
//     it('should iterate with a callback', function() {
//       var justOne = new Range(1);
//       should.exist(justOne.each);

//       var evenDigits = new Range(2, 8, 2);
//       var elements = [];
//       evenDigits.each(function(val){
//         elements.push(val);
//       });
//       elements.should.eql([2, 4, 6, 8]);

//       // Let's try this problem, summing up the numbers from 1 to 100:
//       // http://mathcentral.uregina.ca/QQ/database/QQ.02.06/jo1.html
//       var oneToOneHundred = new Range(1, 100);
//       var sum = 0;
//       oneToOneHundred.each(function(val){
//         sum += val;
//       });
//       sum.should.eql(5050);
//     });
//   });

//   describe('#includes', function(){
//    it('should tell us if a number is in the series', function() {
//       var justOne = new Range(1);
//       justOne.includes(1).should.eql(true);
//       justOne.includes(50).should.eql(false);

//       var threes = new Range(3, 100, 3);
//       threes.includes(3).should.eql(true);
//       threes.includes(4).should.eql(false);
//       threes.includes(33).should.eql(true);
//       threes.includes(99).should.eql(true);
//    });
//   });

//   it('should be able to count backwards', function() {
//     var countdown = new Range(10, 0, -1);
//     var elements = [];
//     countdown.each(function(val){
//       elements.push(val);
//     });
//     elements.should.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
//   });

//   it('should be able to count backwards implicitly', function(){
//     var countdown = new Range(10, 0);
//     var elements = [];
//     countdown.each(function(val){
//       elements.push(val);
//     });
//     elements.should.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
//   });

//   it('should be able to count down by 2', function(){
//     var countdown = new Range(10, 0, -2); // Let's count down by twos
//     var elements = [];
//     countdown.each(function(val){elements.push(val);});
//     elements.should.eql([10, 8, 6, 4, 2, 0]);
//   });
// });