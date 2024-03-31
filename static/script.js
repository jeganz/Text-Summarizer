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

document.getElementById('upload-btn').addEventListener('change',async function(e) {

  const image=e.target.files[0]
  console.log(image);
  const formData = new FormData();
  formData.append("image", image);
  try {
    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
    const responseData = await response.json();
    console.log(responseData.response)
    document.getElementById('message').value=responseData.response
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});