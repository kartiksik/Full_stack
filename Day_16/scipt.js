const data = { "products": [{ "id": 26, "title": "Green Chili Pepper", "price": 0.99 }, { "id": 27, "title": "Honey Jar", "price": 6.99 }, { "id": 28, "title": "Ice Cream", "price": 5.49 }, { "id": 29, "title": "Juice", "price": 3.99 }, { "id": 30, "title": "Kiwi", "price": 2.49 }, { "id": 31, "title": "Lemon", "price": 0.79 }, { "id": 32, "title": "Milk", "price": 3.49 }, { "id": 33, "title": "Mulberry", "price": 4.99 }, { "id": 34, "title": "Nescafe Coffee", "price": 7.99 }, { "id": 35, "title": "Potatoes", "price": 2.29 }], "total": 194, "skip": 25, "limit": 10 }






// let i = 0;
// const n =data["products"].length
// while (i < n){
//     console.log(data["products"][i]["title"])
//     i++
// }

// -------------------------------------------------------Object Destructing---------------------------------------------------------- \\


// const std1 = {
//     city: "D",
//     rollNUmber:"2",
//     hobbies:["p","e","n"]
// }
// const{ hobbies,rollNUmber,country} =std1
// console.log(rollNUmber,country)
// console.log(hobbies[0])





// -------------------------------------------------------Array Destructing---------------------------------------------------------- \\

// const arr = ["a","b","c"]
// const [x,y,z,m]=arr
// console.log(x,m)


//--------------------Math functions--------------------\\
const marks = [56,75.5,88,92,65]
const mini_marks = Math.min(marks)
const maxi_marks = Math.max(marks)
console.log(mini_marks)
console.log(maxi_marks)
const min_marks = Math.min(...marks)
const max_marks = Math.max(...marks)
console.log(min_marks)
console.log(max_marks)
console.log(...marks)



