// JavaScript Interaktif
function showLogin() {
    document.getElementById('frame-home').style.display = 'none';
    document.getElementById('frame-login').style.display = 'block';
    document.getElementById('frame-menu').style.display = 'none';
    document.getElementById('frame-konten').style.display = 'none';
  }
  
  function showHome() {
    document.getElementById('frame-home').style.display = 'block';
    document.getElementById('frame-login').style.display = 'none';
    document.getElementById('frame-menu').style.display = 'none';
    document.getElementById('frame-konten').style.display = 'none';
  }
  
  function showMenu() {
    document.getElementById('frame-home').style.display = 'none';
    document.getElementById('frame-login').style.display = 'none';
    document.getElementById('frame-menu').style.display = 'block';
    document.getElementById('frame-konten').style.display = 'none';
  }
  
function showFrame(id) {
  document.getElementById('frame-home').style.display = 'none';
  document.getElementById('frame-login').style.display = 'none';
  document.getElementById('frame-menu').style.display = 'none';
  document.getElementById('frame-konten').style.display = 'block';

  document.querySelectorAll('.content-frame').forEach(f => f.style.display = 'none');
  document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
  document.getElementById(id).style.display = 'block';
  const menuMap = {
    'frame-petunjuk': 0,
    'frame-kompetensi': 1,
    'frame-materi': 2,
    'frame-jobsheet': 3,
    'frame-referensi': 4,
    'frame-profil': 5
  };
  const idx = menuMap[id];
  if (typeof idx !== 'undefined') {
    document.querySelectorAll('.menu-item')[idx].classList.add('active');
  }
}

function showContent(id, sectionClass = 'content-section') {
  const sections = document.querySelectorAll(`.${sectionClass}`);
  sections.forEach(section => {
    section.classList.remove('active');
    section.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.style.display = 'block';
  }
}

  // Login hanya jika ID dan Password = Admin
function handleLogin(event) {
    event.preventDefault(); // Mencegah form melakukan reload
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Ganti dengan logika yang sesuai untuk login
    if (email === "admin" && password === "admin") {
        showMenu(); // Tampilkan menu jika login benar
    } else {
        alert("Email atau Password salah. Silakan coba lagi.");
    }
}
