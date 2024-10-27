README.md(md--markdown)

1. initiate a node js server for this use --- npm init
2. allow everything then a package.json file will be created
3.install the required dependency
4.use npm i {package name} 
5.npm full form node package manager
6.i for install
7.Here I have install first express use npm i express
8.When I install express I got package-lock.json file 
9.package-lock.json is a lock file that is automatically generated when you run `npm install`. It contains a record of the exact versions of the packages that were installed, so that subsequent installs are guaranteed to produce the same result.
10.Then I install mysql (npm i mysql)
11.Then I install nodemone(npm i nodemon)
12.Then I install dotenv(npm i dotenv)
13.Then i install body-parcer(npm i body-parser)(to parce the request comming from body)
14.We can install all at once like-- npm i express mysql nodemon dotenv body-parcer
15.when initiating a nodejs server using npm init we have define our entry point here I have written 
server.js as entry point , we can check it in package.json file , so now I have to create that file 
16.Now we have to setup the express , for that I will go to server.js file and 
use the command -- 
const express = require('express')
then create a object of express
using 
const app = express() // app is an instance of express
we can thing require as alternative of import

17.then we have create our first api like 
app.get("/",(req,res)=>{
    res.send("api running success first api");
})
here app is the referance of express and get is a method of express "/" is endpoint and we have send a response 
using res.send

18. then we have listen to the port using 
app.listen(3000)
It specifies a function that will get executed, once your app starts listening to the specified port.
19.Now to reduce the overhead of starting the server everytime using -- node server.js we use nodemon which will keep alive untill any error occurs 
20.now we have two ways to start nodemon 
   1.use npx nodemon server.js (in terminal)
   2.use script go to package.json file to to script object -- "start" :"nodemon server.js"
   define the script like this then on the terminal use -- npm start
21.Now we will mode to database creating
22.For that we will use xampp 
23.start the apache and mysql , go to mysql admin create the database using new , then create a table with column and type.
24.next we will connect with database.
25.import mysql package using 
const mysql = require('mysql');
26.now we will create our connection 
For that there is a function is present which helps us to create function 
named createConnection , inside mysql package
which take a object of inside that object we need to provide host,user,password,database
we can find those in phpmyAdmin go to database and go to privileges 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_database'
})