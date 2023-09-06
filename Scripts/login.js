const form = document.getElementById('form');
const usr_name = document.getElementById('usr_username');
const usr_password = document.getElementById('usr_password');

form.addEventListener('submit',(e) =>{
    /* database connection and getting data from server */

    console.log(usr_name.value);
    console.log(usr_password.value);
    if(usr_name.value == "test" && usr_password.value == "123456"){
        e.preventDefault();
        //Üstteki olmamalı ama sonra çöz
        sessionStorage.user = 1;
        sessionStorage.cart = JSON.stringify([]);
        console.log(sessionStorage.cart);
        location.href = "../Views/book_list.html";
    }
    else{
        e.preventDefault();
        alert("Invalid Login Credentials.");
    }
})