/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
function PrintDeveloperbyMap() {
    
 let ans= arr.map((item)=>{
    return item.profession=="developer"})
  //Write your code here , just console.log
   console.log(ans)
}
PrintDeveloperbyMap()
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  //Write your code here , just console.log
  arr.forEach((item)=>{
   if(item.profession=="developer"){
    console.log(item)
   }
   })
  //Write your code here , just console.log
   

}
PrintDeveloperbyForEach()

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr)
}
addData()
function removeAdmin() {
  //Write your code here, just console.log
  let remove=arr.filter((item)=>{
   return (item.profession!="admin")
  })
  console.log(remove) 
}
removeAdmin()

function concatenateArray() {
  //Write your code here, just console.log
  let arr1= [
  { id: 5, name: "Rahul", age: "21", profession: "Enginner" },
  { id: 6, name: "Rohit", age: "22", profession: "doctor" },
  { id: 7, name: "Anjali", age: "23", profession: "Advocate" },
];

let arr2= [
  { id: 8, name: "priya", age: "24", profession: "Banker" },
  { id: 9, name: "Tarun", age: "25", profession: "CA" },
  { id: 10, name: "Anjay", age: "26", profession: "Cs" },
];

let final=[...arr,...arr1,...arr2]
console.log(final)

}
concatenateArray()

