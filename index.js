

const loginBtn=document.getElementById('login-btn');
const signupBtn=document.getElementById('sign-up-btn');
//navbar links
const indexHomeLink=document.getElementById('home-link');
const indexLoginLink=document.getElementById('login-link');
const indexSignupLink=document.getElementById('signup-link');
const indexMycartLink=document.getElementById('mycart-link');
const indexProfileLink=document.getElementById('profile-link');
//

loginBtn.addEventListener('click',(e)=>{
    
   const link=document.createElement('a');
   link.href='./login/index.html';
   document.body.appendChild(link);
   link.click();
   link.remove();
});
signupBtn.addEventListener('click',()=>{
   
    const link=document.createElement('a');
    link.href='./signup/index.html';
    document.body.appendChild(link);
    link.click();
    link.remove();
})
