
let email = document.getElementById('login-email-input');
let password = document.getElementById('login-password-input')
let loginBtn = document.getElementById('login-btn');



loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // console.log(email.value);
    // console.log(password.value)
  
    if (email.value == ""|| password.value == "") {
        alert("All Feilds are mandotary!!");
        

    } 
    // else if (password.value.length < 8) 
    //     alert("Password must contain at least 8 characters!!");
// else if(localStorage.getItem.length===0){
//     alert('You are not registered user,please do signup first!!');
//     return;
// }
     else {
        // let arr=JSON.parse(localStorage.getItem('user'));
        const z=(JSON.parse(localStorage.getItem('userData')));
       if(!z){
        alert('You are not a registered user! please do, Signup first');
        return;
       }
        let localData = z;
        if (
            localData.find((itm) => itm.email == email.value) &&
            localData.find((itm) => itm.password == password.value)
          ) //
          {
            curUser = localData.find(
              (itm) => itm.email == email.value && itm.password == password.value
            );
            localStorage.setItem("presentUser", JSON.stringify(curUser));
            const link = document.createElement('a');
            link.href = '../shop/index.html';
            document.body.appendChild(link);
            link.click();
            link.remove();
            // window.location.href="..shop/index.html";
        }
        else{
            alert('You are not a registered user! please do, Signup first!!')
        }
    }
}
)