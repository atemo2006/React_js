"use strict"
let arr = [1,2,3,4,5,6]

let newArray =  arr.map(timestwo)
// function double (item,index,array){
//     console.log(`item:${item}, index:${index}, array:${array}`)
// }

function timestwo(item){
    return item*2
}console.log(newArray)

let friends = ['john','praise','victor','johanson','richards']

let newFriends = friends.map(friend)

function friend(names){
    return names.toUpperCase()
}console.log(newFriends)

const quadpule = arr.map(function(item){return item*4})
console.log(quadpule)

const upper = friends.map(function(names){return names.toUpperCase()})
console.log(upper)

const students = [
    {
        id: 1,
        name: "john",
        age: 19,
        course: "Python",
        fee: "200",
        exam: 39,
        test: 24,
    },
    {
        id: 2,
        name: "nicholas",
        age: 20,
        course: "html",
        fee: "200",
        exam: 50,
        test: 28,
    },
    {
        id: 3,
        name: "joe",
        age: 29,
        course: "UX",
        fee: "200",
        exam: 48,
        test: 26,
    },
    {
        id: 4,
        name: "praise",
        age: 19,
        course: "UI",
        fee: "200",
        exam: 18,
        test: 39,
    },
    {
        id: 5,
        name: "james",
        age: 17,
        course: "js",
        fee: "200",
        exam: 15,
        test: 29,
    },
];
const studentId = students.map((students)=>students.id)
console.log(studentId)

const studentName = students.map((students)=>students.name)
console.log(studentName)

const studentAge = students.map((students)=>students.age)
console.log(studentAge)

const studentCourse = students.map((students) => students.course);
console.log(studentCourse);

const studentInfo = students.map((student)=>{
    return{
        id:student.id,
        name:student.name,
        course:student.course
}
})
console.log(studentInfo)

const awardMarks = students.map((student)=>{
    return{
        id:student.id,
        name:student.name,
        course:student.course,
        total_score:student.exam+student.test
    }
})
console.log(awardMarks)

// award a mark to a student that scored 60 and above 
const award = students.map((student) => {
  
  if (student.exam+student.test >= 60) {
    
    return {
      
      award_score: student.exam + student.test+10,
      
    };
    return 
  } else {
    console.log(`congrats on new scores`)
     return {
       award_score: student.exam + student.test - 10,
     };
  }
  }

);
console.log(award);


