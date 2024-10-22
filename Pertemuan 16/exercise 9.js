// 1. Promise

// a. Fungsi helloWorld dengan Promise
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  // b. Async function messages
  async function messages() {
    let msg = await helloWorld();
    console.log(msg);
  }
  
  messages();
  
// 2. Fetch
function ambilDataUser() {
    fetch("https://reqres.in/api/users")
      .then(response => {
        return response.json(); 
      })
      .then(users => {
        users.data.forEach(user => {
          console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error); 
      });
  }
  
  ambilDataUser();
  

// 3. Async and Await
async function ambilDataUser() {
    try {
      let response = await fetch("https://reqres.in/api/users"); 
      let users = await response.json(); 
      
      users.data.forEach(user => {
        console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
      });
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  }
  
  ambilDataUser();

//  4.Axios

async function ambilDataUser() {
    try {
      let response = await axios.get("https://reqres.in/api/users");
      let users = response.data; 
      
      users.data.forEach(user => {
        console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
      });
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  }
  
  ambilDataUser();
  