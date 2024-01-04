const myEmail = document.getElementById('myEmail');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById('submit').onclick = () => {
    if(!emailPattern.test(myEmail.value)){
        document.getElementById('error').style.display = "block";
    }else{
        document.getElementById('error').style.display = "none";
    }
};