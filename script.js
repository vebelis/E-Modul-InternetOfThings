let currentIndex = 0;

function scrollToFrame(index) {
  const frames = document.getElementById('frames');
  currentIndex = index;
  frames.style.transform = `translateY(-${index * 100}vh)`;
}

function showSubFrame(name) {
  // Sembunyikan semua subframe (materi & jobsheet)
  document.querySelectorAll('.subframe').forEach(el => el.classList.remove('show'));

  // Tampilkan subframe yang dipilih (materi atau jobsheet)
  const sub = document.getElementById('subframe-' + name);
  if (sub) sub.classList.add('show');
}

function closeSubFrames() {
  // Sembunyikan semua subframe
  document.querySelectorAll('.subframe').forEach(el => el.classList.remove('show'));
}

  document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeSubFrames();
  }
});
