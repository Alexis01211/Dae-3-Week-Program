function handleSignup() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      if (!name || !email) {
        alert('Please enter both your name and email!');
        return;
      }
      const btn = document.querySelector('.signup-btn');
      btn.textContent = '✓ YOU\'RE IN!';
      btn.style.background = '#00ffe0';
      btn.style.color = '#0a0010';
      btn.disabled = true;
    }
const timelineSection = document.querySelector('.timeline-section');
const allPacmen = document.querySelectorAll('.pacman');
const allGhosts = document.querySelectorAll('.ghost');

timelineSection.addEventListener('mouseenter', () => {
  allPacmen.forEach(p => p.style.animationDuration = '1.5s');
  allGhosts.forEach(g => g.style.animationDuration = '1.5s');
});

timelineSection.addEventListener('mouseleave', () => {
  allPacmen.forEach(p => p.style.animationDuration = '4s');
  allGhosts.forEach(g => g.style.animationDuration = '4s');
});