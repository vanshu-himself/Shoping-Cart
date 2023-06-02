"use strict";
// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

const firstName = document.getElementById("first-name-input");
const lastName = document.getElementById("last-name-input");
const email = document.getElementById("email-input");
const password = document.getElementById("password-input");
const password2 = document.getElementById("password-input2");

const signupBtn = document.getElementById("signup-btn");
function generateToken() {
  let line = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  let res = "";

  for (let i = 1; i <= 16; i++) {
    res += Math.floor(Math.random() * 10);
    res += line.charAt(i);
  }
  return res;
}
// localStorage.clear();
// let curUser;

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    firstName.value == `` ||
    lastName.value == `` ||
    email.value == `` ||
    password.value == `` ||
    password2.value == ``
  ) {
    alert("All fields are mandotary!!");
  } 



  //to fill up the values
// else if(email.value){
  
//   var newData = {
//     // Add your user data properties here
//     firstName: firstName.value,
//     lastName: lastName.value,
//     email: email.value,
//     password: password.value,
//     token: generateToken(),
//   };

// let parsedData=[];
//   parsedData.push(newData);
//   console.log(parsedData);
//   localStorage.setItem("userData", JSON.stringify(parsedData));
//   localStorage.setItem("presentUser", JSON.stringify(newData));
//   window.location.assign("./profile/profile.html");}




  else if (password.value.length < 8) {
    alert("password should contain at least 8 character");
  } 
  else if (password.value != password2.value) {
    alert("password and confirm password are not same!!");
  } else {
    var existingData = localStorage.getItem("userData")|| [];
    var parsedData = JSON.parse(existingData);
    var newData = {
      // Add your user data properties here
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      token: generateToken(),
    };

    let duplicateUser = parsedData.some((item) => item.email == newData.email);

    if (duplicateUser) {
      alert("You are already a registered user, please do login!!");
      return;
    } else {
      parsedData.push(newData);
      console.log(parsedData);
      localStorage.setItem("userData", JSON.stringify(parsedData));
      localStorage.setItem("presentUser", JSON.stringify(newData));
      // window.location.assign("./profile.html");

      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href="../login/index.html";
      link.click();
      link.remove();
    }
    // if (parsedData) {
    //   parsedData.filter((x) => {
    //     console.log(parsedData.email);
    //     if (x.email == newData.email) {
    //       alert("You are already a registered user, please do login!!");
    //       return;
    //     }
    //   });
    // } else if (parsedData) {
    // }
    // Create a new data array with the new data object
    // parsedData = [newData];

    // Step 4: Store the updated data back into local storage

    // if(JSON.parse(localStorage.getItem('arr'))!==undefined){
    // localStorage.setItem('user',JSON.stringify(user));

    // localStorage.setItem('arr',JSON.stringify(arr));
    // const link = document.createElement("a");
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
  }
});
