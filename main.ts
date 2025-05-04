//Data Types
//string 
//double quote
let message: string = "Hello, TypeScript!";
console.log(message)
//single quote
let user1:string='Rida Amir';
console.log(user1)
//backticks
let user2:string=`Amir Sohail`;
console.log(user2)
//number
let age:number=5;
console.log(age)
let phone1:number=0;
console.log(phone1)
let phone2:number=0.347;
console.log(phone2)
//boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn)
//any
let data: any = "Hello";
data = 42
console.log(data)
//BigInt
let bigNum=BigInt(12345678999999);
console.log(BigInt)
// Unknown
let username:unknown="Ayyan";
console.log(username)
//null
let user_location=null;
console.log(user_location)
//undefined
let lastName;
console.log(lastName)
//strongly typed syntax
let a:string="Amna"
console.log(a)
let b:number=18
console.log(b)
let c:boolean=true;
console.log(c)
//type Inference
let d="Asad";
console.log(d)
let e=7
console.log(e)
let f=false
console.log(f)
//string concatenation
let firstName:string="Asia";
let secondName:string="Muqadas";
let fullName:string=firstName +' '+ lastName
console.log(fullName)
//template literals
let my_Name1:string="Hania";
let my_Name2:string="Ashir";
let final_Name=`${my_Name1} ${my_Name2}`;
console.log(final_Name)