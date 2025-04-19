/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close'),
      signup = document.getElementById('signup'),
      showSignup = document.getElementById('show-signup'),
      signupClose = document.getElementById('signup-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})

/* Show signup */
showSignup.addEventListener('click', () => {
   login.classList.remove('show-login')
   signup.classList.add('show-login')
})

/* Signup hidden */
signupClose.addEventListener('click', () => {
   signup.classList.remove('show-login')
})

/* Show login from signup */
const showLogin = document.getElementById('show-login')
showLogin.addEventListener('click', () => {
   signup.classList.remove('show-login')
   login.classList.add('show-login')
})