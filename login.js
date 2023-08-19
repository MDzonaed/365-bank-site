document.getElementById('btn-submit').addEventListener('click', function(){
  const userEmail = document.getElementById('user-email');
  const emailField = userEmail.value;


  const userPassword = document.getElementById('user-password');
  const passwordField = userPassword.value;

  if(emailField === 'sukhardin@kobeasbe.com' && passwordField === '365365'){
    window.location.href = 'bank.html'
  }else{
    alert('invalid user, please copy past given below mail & password')
  }
})