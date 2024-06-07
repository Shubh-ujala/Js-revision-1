//============================================================================================================
//Day 1
// 

let student ={
    name:"kishan",
    age:20,
    marks:80,
}
console.log(student);  //Objectage: 20marks: 80name: "kishan"[[Prototype]]: Object

const student1 ={
    name:"kishan",
    age:20,
    marks:80,
}

console.log(student1);
const item={
    price:100.99,
    discount:50,
    color :["red","pink"],
}
console.log(item);

//============================================================================================================
//Day 2
//Thread/twitter post
//username ,content likes report taggs


const post={
    username:"kishan",
    content:"This is my #myfirstpost",
    likes:150,
    reports :5,
    tags:"kishan" , 
}
console.log(post);

//============================================================================================================
//Day 3
//get values



const post1={
    username:"kishan",
    content:"This is my #myfirstpost",
    likes:150,
    reports :5,
    tags:"kishan" , 
}
console.log(post1);  //  example- for search for likes post["likes"] or post["username"]
//or post.content // post.likes

// let prop ="reports"
// undefined
// post[prop];
// 5
// post.prop;
// undefined
// post.prop();


//============================================================================================================
//Day 4
// Conversion in Get Values


//-js automattically converts object keys to strings.
// Even if we made the number as a key, the number will be converted to string

const objy={
    1:"a",
    2:"b",
    true:'c',
    null:"D",
    undefined:"E",
}

// null
// null

// "null"
// 'null'
//oby[1] ="a"
//obj[null]="d"

//============================================================================================================
//Day 5
//ADD / UPDATE VALUES


//{change the city to "Mumbai"  

//student2.city
// 'delhi'
// student2.city="Mumbai"
// 'Mumbai'
// student2.city
// 'Mumbai'
// student2
// {name: 'shardda', age: 20, marks: 94.5, city: 'Mumbai'}


// Add a new property, gender: "Female"
// student2.city
// 'delhi'
// student2.city="Mumbai"
// 'Mumbai'
// student2.city
// 'Mumbai'
// student2
// {name: 'shardda', age: 20, marks: 94.5, city: 'Mumbai'}



//Change the marks to "A"
// student2.marks
// 94.5
// student2.marks="A";
// 'A'
// student2
// {name: 'shardda', age: 20, marks: 'A', city: 'Mumbai', gender: 'female'}

//delete 
// student2.marks
// 'A'
// delete student2.marks
// true
// student2
// {name: 'shardda', age: 20, city: 'Mumbai', gender: 'female'}




const student2={
    name: "shardda",
    age: 20,
    marks:94.5,
    city:"delhi",
}
console.log(student2);  //{name: 'shardda', age: 20, marks: 94.5, city: 'delhi'}

//============================================================================================================
//Day 6
//object of objects - storing information of multiple students



const classinfo={
aman:{
    grade:"A+",
    city:"Delhi",
},
shraddha:{
    grade:"o",
    city:"Pune",
},
karan:{
    grade:"A",
    city:"Mumbai",
},
};

console.log(classinfo);  
// {aman: {…}, shraddha: {…}, karan: {…}}
// aman
// : 
// {grade: 'A+', city: 'Delhi'}
// karan
// : 
// {grade: 'A', city: 'Mumbai'}
// shraddha
// : 
// {grade: 'o', city: 'Pune'}
// [[Prototype]]
// : 
// Object

//classinfo.shraddha.city -- Pune

//============================================================================================================
//Day 7
// Array of object -storing information of multiple students


const classinfor=[
    {
        name:"aman",
        grade:"A+",
        city:"delhi",
    },
    {
        name:"shraddha",
        grade:"o",
        city:"delhi",
    },
    {
        name:"karan",
        grade:"A",
        city:"Mumbai",
    },
]

console.log(classinfor);
// (3) [{…}, {…}, {…}]
// 0
// : 
// {name: 'aman', grade: 'A+', city: 'delhi'}
// 1
// : 
// {name: 'shraddha', grade: 'o', city: 'delhi'}
// 2
// : 
// {name: 'karan', grade: 'A', city: 'Mumbai'}
// length
// : 
// 3

//classinfor[1].gender="female",

//============================================================================================================
//Day 8
//  Math object

//properties                              Method
//1. Math.PI                              Math.abs(n)
//2. Math.E                               Math.pow(a,b)
//                                        Math.floor(n)
//                                        Math.ceil(n)
//                                        Math.random()

//============================================================================================================
//Day 9
// Random Integer

//from 1 to 10
let step1 =Math.random();  //0.23586629025129113
let step2= step1*10;       //2.3586629025129113
let step3= Math.floor(step2);  //2
let step4= step3+1;           //3

let random=Math.floor(Math.random()*10) +1;  //5

/*let say if you want to generate random number from 10 to 20 then you can use the general formula which is applicable
not only for 10 to 20 but also for any random two numbers 
formula OR way 
solution-> let min =10;
           let max = 20;
           console.log(Math.floor(Math.random()*(Max-min+1)+min))
Remember here 10 ans 20 both inclusive
*/

//============================================================================================================
//Day 10
//Practice question


// generate a random number between 1 and 100;
 let random1=Math.floor(Math.random() *100)+1;  //77

 //generate a random number between 1 and 5
 let random2 =Math.floor(Math.random() *5)+1;   //2



 //============================================================================================================
//Day 11
// Guessing GAME- user enters a max number & then tries to guess a random generated number between 1 to max.


const max= prompt("enter the max number");


const random3 = Math.floor( Math.random() * max)+1;

let guess=prompt("guess the number"); 
 while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random3){
        console.log("You are right! congrats!! random number was",random3);
        break;
    }
    else if(guess<random3){
        guess= prompt(" Hint: your guess was too small. please try again");
    }
    else{
        guess= prompt(" Hint: your guess was too large . please try again");
    }
    // else{
    //     guess=prompt("your guess was wrong. please try agian");
    // }
 }




//============================================================================================================
//Day 12
// HOMEWORK QUESTION

//Ques1-Create a program that generate a random number representing a dice roll [The number should be between 1 and 6]
//Ans1-
const dice=Math.floor(Math.random() *6)+1;
console.log(dice);

//Ques2-Create an objrct representing a car that stores the following properties for the car:name,model,color.
//print the car's name

//Ans2-
const car={
    name:"Toyota",
    model:"Toyota Fortuner GR-S",
    color:["Black","White"],
}
console.log(car.name);


//Ques3- CReate an object person with their name, age and city.
//Edit their city's original values to change it 'New York".
//Add a new property country and set it to the united states.


//Ans3-
const person={
    name:"Titu",
    age:20,
    city:"Jalandha",
}

console.log(person);
person.city="New York";
console.log(person);
person.country="United States";
console.log(person);
