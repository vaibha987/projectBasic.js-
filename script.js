let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   let developers = arr.map(employee => employee.profession === "developer");
    console.log(developers)
}


function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   arr.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);

    console.log(arr);
}
function removeAdmin() {
  //Write your code here, just console.log
   let filteredEmployees = arr.filter(employee => employee.profession !== "admin");

    console.log(filteredEmployees);
}
function ConcatinateArray(){
  //Write your code here, just console.log
  let additionalEmployees = [
        { id: 4, name: "emma", age: "22", profession: "designer" },
        { id: 5, name: "mike", age: "23", profession: "developer" },
        { id: 6, name: "lisa", age: "21", profession: "manager" }
    ];

    let concatenatedArray = arr.concat(additionalEmployees);

    console.log(concatenatedArray);
}
