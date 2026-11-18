// alert("hello")




// // --------Function declaration-------------\\
// function greet(){
//     console.log("Hello welcome to class")
// }
// // -------------function calling------------\\
// greet()




// function greet(studentname){
//     console.log(`Hello, welcome to class ${studentname}`)
// }
// greet()
// greet("Shubham")


// function printPrice(name,basePrice){
//     const p = Math.round(100*basePrice)
//     console.log(`${name}: ${p}`)
// }
// printPrice("kiwi",5.62)
// printPrice("Apple",6)


// function sum_of_two_number(a,b){
//     const ans = a+b
//     console.log(ans)
//     return ans
// }
// sum_of_two_number(99,78)



// function sum_of_two(a,b){
//     const ans = a+b
//     return ans
// }
// console.log(sum_of_two(9,78))


// function check() {
// return "done";
// console.log("Will this print?");
// }
// console.log(check());




//----------Question practice---------\\
// Q1
// function cube(number){
//     let cube_of_3=number*number*number
//     return cube_of_3
// }
// let number = (prompt())
// alert(cube(number))
// console.log(cube(number))



// Q2
// function Isadult(age){
//     if (age >= 18){
//         return true
//     }else{
//         return false
//     }
// }

// let age = prompt()
// console.log(Isadult(age))


// Q3
// function calculateBMI(weight,height){
//     let bmi = weight / (height * height)
//     return bmi
// }
// let weight = prompt("Enter weight")
// let height = prompt("Enter height")
// let bmi = calculateBMI(weight,height)
// alert(bmi)

// console.log(calculateBMI(70,1.75))


// Q4
// function gradefrommarks(marks){
//     if (marks >=90){
//         return "A"
//     }else if (marks <=89 && marks >=75 ){
//         return "B"
//     }else if (marks <= 74 && marks >=50 ){
//         return "C"
//     }else if (marks <= 50){
//         return "F"
//     }
// }
// let marks = parseInt(prompt("Enter marks"))
// let pass = gradefrommarks(marks)
// console.log(pass)


// Q5
// function applyDsicount(price,isMember=false){
//     if (isMember){
//         return price * 0.9
//     }else{
//         return price
//     }
// }
// // console.log(applyDsicount(500))
// // console.log(applyDsicount(500,true))
// let amount = prompt("Enter the price")
// let isMember = prompt("Are you a member")
// let Member;
// if (isMember === "Yes"){
//     Member = true
// }else{
//     Member = false
// }
// console.log(applyDsicount(amount,Member))



// Q6
// function countVowels(word){

// }

// || "y" || "yes"


function hello(a){
    c = a
    return c
}

console.log(hello(23,5454))