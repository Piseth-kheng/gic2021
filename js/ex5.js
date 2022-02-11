const table = document.getElementById("users-list");
const tableBody = document.getElementById("tbody");
const warning = document.getElementById("error");
const spinner = document.getElementById("spinner");
// spinner.style.display = 'none';
// table.style.display = 'block';

async function getUsers() {
    try {//retrieve datas from fake API and display in table
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      for(let i=0; i<response.data.length; i++){
        let name = response.data[i].name;
        let user = response.data[i].username;
        let email = response.data[i].email;
        let address = response.data[i].address.suite + ", " + response.data[i].address.street + ", " + response.data[i].address.city;
        let phone = response.data[i].phone;
        let website = response.data[i].website;
        let company = response.data[i].company.name;

        tableBody.innerHTML += `<tr><th scope="row">${name}</th><td>${user}</td><td>${email}</td><td>${address}</td><td>${phone}</td><td>${website}</td><td>${company}</td></tr>`
      }
      setTimeout(() => {
        spinner.style.display = 'none';
        table.style.display = 'block';
      },1000)
    } catch (error) {//catch an error when there is no connection.
        setTimeout(() => {
            spinner.style.display = 'none';
            warning.style.display = 'block';
        },10000)
      console.error(error);
    }
}
getUsers();