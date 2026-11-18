// const Full_name = 'kartik'
// const City = 'Mathura'
// const rol_no = 261640085
// const college = 'zenith'


// const student = {
//     full_name: 'kartik',
//     City: 'Mathura',
//     roll_no: 261640085,
//     college: 'zenith'
// }

// we can mutate a const object


// console.log(student)
// console.log(typeof(student))


// // To read
// console.log(student.City)
// console.log(student['roll_no'])


// //To read (not present) --> undefined
// console.log(student.phone)
// console.log(student['phone'])

// //To create
// student.country = 'INIDA'
// console.log(student)


// //To update
// student.City = 'Agra'
// console.log(student)

// // To delete
// delete student.country
// console.log(student)

// const product = {
//     title: "Monitor",
//     price: 7000,

// }

// const keyboard = product
// keyboard.title = "keyboard"     // Mutatation
// console.log(keyboard)
// console.log(product)

// const fruitsArr = ["Mango","Grapes"]
// console.log(fruitsArr)

// const fruits0bj = { 
//     0: "mango",
//     1: "grapes",
// }
// console.log(fruits0bj)

// console.log(typeof(fruits0bj))
// console.log(typeof(fruitsArr))

// // To read
// console.log(fruits0bj[0])
// console.log(fruitsArr[0])

// To create
// fruits0bj[20] = "apple"
// fruitsArr[20] = "Apple"


// fruitsArr.push("apple")

// console.log(fruits0bj)
// console.log(fruitsArr)


// const students = [
//     "yash","naman","aaryamaan",
// ]
// console.log(students)
// console.log(students[1])

// students[20] = "kartik"
// console.log(students)

// students[17]="shlok"
// console.log(students)

// students.push("shubham") // add element to the last index
// console.log(students)

// students.pop()  // remove the last element
// console.log(students)

// students.unshift("abnish")  // insert new element from the start
// console.log(students)

// students.shift() // remove the first elemwnt
// console.log(students)

// const len = students.length
// console.log(len)
// const lastElement=students[len-1] 
// console.log(lastElement)

// //splice
// students.splice(1,2) // delete elements from selected index
// console.log(students)

// students.splice(1,2, "jatin","kush","yash raj") // add elements to selected index (added names could be more than seledted index)
// console.log(students)

// students.splice(2,0,"prajal","vaibhav")
// console.log(students)


//-----------------------------------------------------------------Loops---------------------------------------------------------------\\

// let count=0
// while(count<10){
//     console.log(count)
//     count++
// }

// let i = 0
// while (i<10){
//     console.log("hello world")
//     i++
// }


// Do While
// let j =0
// do{
//     console.log(j)
//     j++
// }while (j<10);


//Prompt input
// let n = prompt()
// console.log(n)

//Typecast
//--------Number----------\\
// n=Number(n)
// console.log(typeof n)
//--------ParseInt----------\\
// let weight = prompt("Enter your weight")
// weight = parseInt(weight)
// console.log(weight)
// console.log(typeof weight)
//--------ParseFloat----------\\
let weight = prompt("Enter your weight")
weight = parseFloat(weight)
console.log(weight)
console.log(typeof weight)
