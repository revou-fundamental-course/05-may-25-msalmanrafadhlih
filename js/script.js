// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("contactForm");

//     form.addEventListener("submit", function(event) {
//         const name = document.getElementById("name").value.trim();
//         const email = document.getElementById("email").value.trim();
//         const destination = document.getElementById("destination").value;

//         if (name === "" || email === "" || destination === "") {
//             alert("Please fill in all fields.");
//             event.preventDefault();
//         } else if (!/^[a-zA-Z\s]+$/.test(name)) {
//             alert("Name must contain only letters.");
//             event.preventDefault();
//         }
//     });
// });


  const popup = document.getElementById('popup');
  const openBtn = document.querySelector('.button-action');
  const exitBtn = document.querySelector('.exit-btn');

  openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  exitBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });


  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      e.stopPropagation(); 
    }
  });