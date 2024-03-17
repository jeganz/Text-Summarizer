let darkMode=false

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    darkMode=true
  } else {
    document.documentElement.classList.remove('dark');
    darkMode=false
  }
function toggleDarkmode() {
    document.documentElement.classList.toggle('dark');
  }


function erase() {
    document.getElementById("message").value = "";
  }