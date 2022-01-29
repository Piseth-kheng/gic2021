//hide both pages
document.getElementById('home-wrapper').style.display = 'none';
document.getElementById('login-wrapper').style.display = 'none';
//on click sumbit
checkCookie();
function onClickLogin(){
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    login(email,pwd);
    checkCookie();
}
//check cookie
function checkCookie(){
    const storedCookie = getCookie('email');
    console.log("storedCookie", storedCookie);
    if(storedCookie){
        document.getElementById('home-wrapper').style.display = 'block';
    }else{
        document.getElementById('login-wrapper').style.display = 'block';
    }
}
  //logout
  function logout(){
    document.cookie = "email=";
    document.getElementById('home-wrapper').style.display = 'none';
    checkCookie();
  }

  //login
  function login(email, password){
      if(email=="gic@gmail.com" && password=="Gic123"){
        const currDate = new Date();
        currDate.setHours(currDate.getHours()+2);
        const expireDate = currDate;//expireDate is 2h;
        document.cookie = `email=${email}; expires=${expireDate}`;
      }else{
          alert('Invalid input!');
      }
  }
  //get cookie
  function getCookie(cname){
    let name  = cname + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let ca = decodeCookie.split(";");
    for(let i=0; i<ca.length; i++){
      let c = ca[i];
      while (c.charAt(0) == ' '){
        c = c.substring(1);
      }
      if (c.indexOf(name)==0){
        return c.substring(name.length,c.length);
      }
    }
    return "";
  }
