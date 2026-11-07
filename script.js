// // const URL = "https://cat-fact.herokuapp.com/facts";
// // const btn = document.querySelector("#btn");
// // btn.addEventListener("click", getFacts);
// // //----best way----
// // const getFacts = async () => {
// //     console.log("Fetching Data ....");
// //     let response = await fetch(URL);
    
// //     console.log(response);//JSON format
// //     let data = await response.json();
// //     console.log(data[0].text);
// // };

// //---complex code---

// // function getFacts() {
// //     fetch(URL)
// //         .then((response) => {
// //             console.log(response);
// //             return response.json();
// //         })
// //         .then((data) => {
// //             console.log(data[0].text);
// //         })
// //         .catch((error) => {
// //             console.error("Error fetching data:", error);
// //         })
// //     };



// //----exercise 1----//
// async function getStudent() {
//     try{
//     const response =await fetch(
//      "https://jsonplaceholder.typicode.com/users/1"   
//     );

// if(!response.ok){
//     throw new Error('Failed to fetch user!')
// }
// const data = await response.json();
// console.log('Name: ',data.name);
// console.log('Email: ',data.email);
// console.log('username: ',data.username);
//     }catch(error){
//         console.log('Error:',error.message)
//     }
// }



// getStudent();


// //-----GET method---//
// // GET is used to receive information from a server.
// async function getUsers() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//             throw new Error("Failed to fetch users!");
//         }

//         const users = await response.json();

//         users.forEach((user) => {
//             console.log(user.name);
//         });

//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// getUsers();
// //----POST method — Send new data
// // POST is used to send new information to a server, commonly to create a new record.
// async function createStudent() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users",
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify({
//                     name: "Asad",
//                     email: "asad@example.com"
//                 })
//             }
//         );

//         if (!response.ok) {
//             throw new Error("Failed to create student!");
//         }

//         const data = await response.json();

//         console.log("Student created:", data);

//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// createStudent();
// // JSONPlaceholder is a testing API. It simulates creating a record and returns a response, but it does not permanently save the new user.


// // 4. Difference between GET and POST
// // GET	                                POST
// // Retrieves data	                   Sends data
// // Usually does not need a body     	Commonly sends a body
// // Used to read information	             Commonly used to create information       
// // // Example: Get students             	Example: Register student


// async function getProducts() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );

//         if (!response.ok) {
//             throw new Error("Failed to fetch posts!");
//         }

//         const posts = await response.json();

//         posts.slice(0,5).forEach((post) => {
//             console.log(post.title);
//         });

//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// getProducts();


// //------PUSH METHOD---//
// async function createStudent() {
//     try {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users",
//             {
//                 method: "POST",

//                 headers: {
//                     "Content-Type": "application/json"
//                 },

//                 body: JSON.stringify({
//                     name: "Asad",
//                     email: "asad@example.com"
//                 })
//             }
//         );

//         if (!response.ok) {
//             throw new Error("Failed to create student!");
//         }

//         const data = await response.json();

//         console.log("Student created:", data);

//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// createStudent();


// //----PATCH method-------//
// async function updateStudent() {
//     try{
//         const response= await fetch(
//           "https://jsonplaceholder.typicode.com/users/1",
//           {
//             method:"PATCH",
//             headers: {
//                 "Content-Type":"application/json"
//             },

//             body:JSON.stringify({
//               email : "newasad@example.com" 
//             })
//           }  
//         );
//         if(!response.ok){
//             throw new Error("failed to update email!");
//         }
//         const data =await response.json();
//         console.log("Student updated:",data);
//     }catch(error){
// console.log(error);
//     }
    
// }
// updateStudent();
// ///----PUT METHOD----//
// async function replaceStudent() {
//     try{
//         const response= await fetch(
//           "https://jsonplaceholder.typicode.com/users/1",
//           {
//             method:"PUT",
//             headers: {
//                 "Content-Type":"application/json"
//             },

//             body:JSON.stringify({
//     name: "Muhammad Asad",
//     email: "newasad@example.com",
//     username: "AsadDeveloper"
//           })
//           }  
//         );
//         if(!response.ok){
//             throw new Error("failed to update email!");
//         }
//         const data =await response.json();
//         console.log("Student replaced:",data);
//     }catch(error){
// console.log(error);
//     }
    
// }
// replaceStudent();
// //-----DELETE METHOD----///
// async function deleteStudent() {
//     try{
//         const response= await fetch(
//           "https://jsonplaceholder.typicode.com/users/1",
//           {
//             method:"DELETE",
           
//           }  
//         );
//         if(!response.ok){
//             throw new Error("failed to delete");
//         }
//         console.log("Student deleted successfully!");
//     }catch(error){
// console.log(error.message);
//     }
    
// }
// deleteStudent();




// Select HTML elements

const loadingMessage = document.getElementById("loadingMessage142");

const errorMessage = document.getElementById("errorMessage143");

const studentList = document.getElementById("studentList141");

const searchInput = document.getElementById("searchInput144");

const resultCount = document.getElementById("resultCount145");

const retryButton = document.getElementById("retryButton146");


// Store all fetched students

let allStudents = [];


// Function to fetch students

async function getStudents() {

    try {

        // Show loading message

        loadingMessage.textContent = "Loading students...";

        errorMessage.textContent = "";

        retryButton.hidden = true;

        studentList.innerHTML = "";

        searchInput.disabled = true;

        resultCount.textContent = "Loading students...";


        // Fetch API data

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );


        // Check response

        if (!response.ok) {

            throw new Error("Failed to fetch students!");

        }


        // Convert JSON into JavaScript data

        const students = await response.json();


        // Store students in array

        allStudents = students;


        // Display all students

        displayStudents(allStudents);


    } catch (error) {

        // Display error

        errorMessage.textContent = error.message;

        resultCount.textContent = "Unable to load students.";

        retryButton.hidden = false;


    } finally {

        // Hide loading message

        loadingMessage.textContent = "";

        searchInput.disabled = false;

    }

}


// Function to display students

function displayStudents(students) {

    // Clear previous cards

    studentList.innerHTML = "";


    // Update result count

    resultCount.textContent =
        `${students.length} student(s) found`;


    // Check if no students exist

    if (students.length === 0) {

        const message = document.createElement("p");

        message.className = "empty-message";

        message.textContent = "No students found!";

        studentList.appendChild(message);

        return;

    }


    // Loop through students

    students.forEach(function(student, index) {

        // Create card

        const card = document.createElement("div");

        card.className = "student-card";


        // Create number

        const number = document.createElement("div");

        number.className = "student-number";

        number.textContent = index + 1;


        // Create name

        const name = document.createElement("h2");

        name.textContent = student.name;


        // Create email

        const email = document.createElement("p");

        email.textContent = student.email;


        // Add elements to card

        card.append(number, name, email);


        // Add card to webpage

        studentList.appendChild(card);

    });

}


// Search students by name

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value
        .trim()
        .toLowerCase();


    // Filter students

    const filteredStudents = allStudents.filter(function(student) {

        return student.name.toLowerCase().includes(searchValue);

    });


    // Display matching students

    displayStudents(filteredStudents);

});


// Retry button

retryButton.addEventListener("click", function() {

    getStudents();

});


// Start application

getStudents();





