//1

let euroCountries = ["Germany", "Italy", "France", "Portugal"];
let asianCountries = ["China", "Japan", "India", "Vietnam"];

euroCountries = [...euroCountries, ...asianCountries];
console.log(euroCountries);


const euroCountries2 = ["Germany", "Italy", "France", "Portugal"];
const asianCountries2 = ["Pakistan", "India", "China"];

const combinedArrays = euroCountries2.concat(asianCountries2);
console.log(combinedArrays)

//2

let copyAsianCountries = [...asianCountries];
console.log(copyAsianCountries);
console.log(asianCountries);

//3

function findLargestNumber(x){ 
    return Math.max(...x);
}
console.log(findLargestNumber([1,2,5]))

//or

const findLargestNumber2 = array => Math.max(...array);
console.log(findLargestNumber2([1, 2, 3]));

//or

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const maxArr = Math.max(...arr1, ...arr2);
console.log(maxArr);


//4

function findSmallestNumber(x){ 
    return Math.min(...x);
}
console.log(findSmallestNumber([1,2,5]))

//5

const person = {name: "John"}
const job = {role: "Teacher"}


const clonePerson = {...person};
console.log(clonePerson);

//5.2

const employee = {...person, ...job};
console.log(employee);

//5.3

employee.name = "Max"
console.log(employee)

//6

function isWhole(a,b,c,d){
    const total = a+b+c+d;
    const average = (a+b+c+d)/4;
    if(total % 4 === 0){
        return true
    } else {
        return false
    }
}
console.log(isWhole(4,4,4,5))