const URL = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#btn");
btn.addEventListener("click", getFacts);
//----best way----
const getFacts = async () => {
    console.log("Fetching Data ....");
    let response = await fetch(URL);
    
    console.log(response);//JSON format
    let data = await response.json();
    console.log(data[0].text);
};

//---complex code---

// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data[0].text);
//         })
//         .catch((error) => {
//             console.error("Error fetching data:", error);
//         })
//     };