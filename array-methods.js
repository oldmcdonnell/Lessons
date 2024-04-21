// Map
// creates a new array by applying a function to each element of the calling array

let firstName = ['super', 'spider', 'ant', 'irony']
let lastName = 'man'

// let fullNames = []

// for (let i=0; i < firstName.length; i++) {
//   fullNames.push(firstName[i] + lastName)
// }

let fullNames = firstName.map(name => name + lastName)

let fullNames = firstName.map()
console.log('fullNames: ', fullNames)

/*-

let fullNames = firstName.map((name) => {
  console.log('name: ', name)
  return name + lastName
})

-*/

// double each nuber
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map(num => 
    num * 2)
  
  console.log('doubledNumbers: ', doubledNumbers)

  /*-
  const doubledNumbers = numbers.map(num => {
  
  return num * 2
})

console.log('doubledNumbers: ', doubledNumbers)
-*/

/*-
const numbers = [[1, 2,], 3, 4, 5]
 
const doubledNumbers = numbers.map(num => {
  console.log('typeof: Num: ', num, typeof(num))
  if (typeof(num) === 'number') {
    return num * 2
  } else {
    return num.map(arrNum => arrNum * 2)
  }
})
-*/



// convert each string to uppercase
const words = ['apple', 'banana', 'orange', 'grape', 'kiwi']

const uppercaseWords = words.map(fruit => fruit.toUpperCase())

console.log('uppercaseWords: ', uppercaseWords)



/*--*//*-

const uppercaseWords = words.map((fruit, index) => {
  console.log('index: ', index, fruit)
  return fruit.toUpperCase()
})

-*/



const newThang = {
    name: 'Jason',
    sleepy: () => afterMidnight ? true : false,
    age: 46,
    likes: {
      blah: blah
    },
  
  }
  
  newThang.sleepy

  /*-
  () is an anoymenous function 

  a function called from an on=bject field is a method
  -*/


  // remove words form shorter than 6 letters




  /*-
  
  const words = ['apple', 'banana', 'orange', 'grape', 'kiwi']

let longWords = []
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    longWords.push(words[i])
  }
}
console.log('longWords: ', longWords)
  -*/
const longWords = words.filter(word => word.length > 5)


console.log('longWords: ', longWords)

//find the outlier, one item is odd or even 

function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }

/*--*//*--*//*--


const longWords = words.filter((word, index) => (
  word.length > 5 && 
  word.length < 7 ||
  word[0] === 'k'
))

console.log('longWords: ', longWords)*/


// || is an or statement so kiwi returns 



// create array with only students with scores greater than or equal to 80
const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 72 },
  { name: 'Charlie', score: 90 },
  { name: 'David', score: 64 },
  { name: 'Emma', score: 95 }
 ]



 const highScoringStudents = students.filter(theStudentWeAreIteratingOn => 
  theStudentWeAreIteratingOn.score >= 80
)

console.log('highScoringStudents: ', highScoringStudents)




//reduce



// sum all numbers in the array
const numbers = [9, 7, 8, 12]

let sum = 0 //accumulator
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]
}

console.log('sum: ', sum)

/*-*//*--*//*--*/

let sum = numbers.reduce((acc, cur) => {
    console.log('acc: ', acc)
    console.log('cur: ', cur)
    return acc + cur
  })
  
  
  console.log('sum: ', sum)


  /*--*//*--*//*--*/*-/*--*//*--*/

  let sum = numbers.reduce(
    (
      (acc, cur) => {
        console.log('acc: ', acc)
        console.log('cur: ', cur)
        return acc + cur
      }
    ), 
    100
  )


  let start = 200
  let sum = numbers.reduce((acc, cur) => acc + cur, start)

  console.log('sum: ', sum)
  
  

/*--*//*--*//*--*//*--*//*--*/

let start = 2
let sum = numbers.reduce((acc, cur) => acc * cur, start)


const words = ['Howdy', ' ', 'world', '!']

const concatenatedString = words.reduce((acc, cur) => acc + cur)
console.log('concatenatedString: ', concatenatedString)
/*--*//*--*//*--*//*--*/

const words = ['Howdy', ' ', 'world', '!']

const concatenatedString = words.reduce((acc, cur) => 
  acc + cur
)

console.log('concatenatedString: ', concatenatedString)

/*-
const concatenatedString = words.reduce((acc, cur) => {
  console.log('acc: ', acc)
  return acc + cur
})
-*/

//anomymous function if you are doing more than just returning you need brackets and have to add it to an object like the example above

// find the largest number
const numbers = [10, 5, 20, 8, 15]

const maxNumber = numbers.reduce((max, cur) => max > cur ? max : cur)

console.log('maxNumber: ', maxNumber)




/*--*//*--*/

let number = 0
numbers.forEach(num => num > number ? number = num : undefined)


/*--*//*--*//*--*//*--*//*--*//*--*/


// concat the strings
const names = ['Jacob', 'Jingleheimer', 'Schmidt']
const newName = names.reduce((acc, curr) => acc += (' ' + curr), 'John')
console.log('newName: ', newName)


/*--*//*-*//*--*/
/*--*//*-*//*--*/
/*--*//*-*//*--*/
/*--*//*-*//*--*/
/*--*//*-*//*--*/
/*--*//*-*//*--*/
/*--*//*-*//*--*/







// concat the strings
const testingCTRLD = ['Jacob', 'Jingleheimer', 'Schmidt']
const testingCTRLD = ['Jacob', 'Jingleheimer', 'Schmidt']
const testingCTRLD = ['Jacob', 'Jingleheimer', 'Schmidt']
const testingCTRLD = ['Jacob', 'Jingleheimer', 'Schmidt']
const testingCTRLD = ['Jacob', 'Jingleheimer', 'Schmidt']
const testingCTRLD = ['Jacob', 'Jingleheimer', 'Schmidt']
const testingCTRLD = ['Jacob', 'Jingleheimer', 'Schmidt']
const newName = testingCTRLD.reduce((acc, curr) => acc += (' ' + curr), 'John')
console.log('newName: ', newName)
testingCTRLD.something()
testingCTRLD.yep()
testingCTRLD.namesnames()


/*--*//*--*/

const words = ['apple', 'banana', 'orange', 'grape', 'ki']
let allWordsAreLongEnough = true

for(let i=0; i < words.length; i++) {
  if (words[i].length <= 3) {
    allWordsAreLongEnough = false
  }
}

console.log('allWordsAreLongEnough: ', allWordsAreLongEnough)

/*--*//*--*/

const allWordsAreLongEnough = words.every(word => word.length > 3)


console.log('allWordsAreLongEnough: ', allWordsAreLongEnough)

/*--*//*--*/


const allWordsAreLongEnough = words.every(word => word.length > 3 || word[0] === 'k' )


console.log('allWordsAreLongEnough: ', allWordsAreLongEnough)


/*--*//*--*//*--*//*--*//*--*//*--*//*--*/

// is there at least one number greater than 10
const numbers = [5, 8, 3, 12, 7]

// let hasNumGreater = false
// for (let i=0; i < numbers.length; i++) {
//   if (numbers[i] > 10) {
//     hasNumGreater = true
//   }
// }

const hasNumGreater = numbers.some(num => num > 10)


console.log('hasNumGreater: ', hasNumGreater)


const hasNumGreater = numbers.some(num => {
    console.log("number: ",num)
    return num % 2 === 0
  })
  
  
  console.log('hasNumGreater: ', hasNumGreater)