
const popup = document.getElementById('popup');
const openBtn = document.querySelector('.button-action');
const exitBtn = document.querySelector('.exit-btn');
const form = document.getElementById("contactForm");


openBtn.addEventListener('click', () => {
  popup.classList.add('show');
});

exitBtn.addEventListener('click', () => {
  popup.classList.remove('show');

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("destination").value = "";
});

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form submit langsung

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const destination = document.getElementById("destination").value;

    if (name === "" || email === "" || destination === "") {
      alert("Please fill in all fields.");
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert("Name must contain only letters.");
    } else {
      const confirmed = confirm("Apakah anda yakin dengan data ini?");
      if (confirmed) {
        console.log("Form yang diisi dengan value:");
        console.log("Nama:", name);
        console.log("Email:", email);
        console.log("Tujuan:", destination);
      
        form.reset();
        popup.classList.remove('show');
        alert("Data anda berhasil tersimpan! hehehe..")
      }
    }
  });

});

