// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav scroll effect + active section
const navbar = document.getElementById('navbar');
const sections = ['home','about','research','skills','contact'];

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  const scrollY = window.scrollY + 80;
  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      document.querySelectorAll('[data-section]').forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`[data-section="${id}"]`).forEach(b => b.classList.add('active'));
      break;
    }
  }
}, {passive:true});

// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const ham = document.getElementById('hamburger');
  menu.classList.toggle('open');
  ham.classList.toggle('open');
}

// Scroll to section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({top: el.offsetTop - 64, behavior:'smooth'});
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// Typewriter
const titles = ['Data Scientist','Statistical Analysis','Aspiring Researcher','ML Enthusiast'];
let tIdx = 0, cIdx = 0, deleting = false;
const tw = document.getElementById('typewriterText');
function typeStep() {
  const cur = titles[tIdx];
  const speed = deleting ? 60 : 110;
  if (!deleting && cIdx < cur.length) {
    tw.textContent = cur.slice(0, ++cIdx);
  } else if (deleting && cIdx > 0) {
    tw.textContent = cur.slice(0, --cIdx);
  } else if (!deleting && cIdx === cur.length) {
    setTimeout(() => { deleting = true; typeStep(); }, 1800); return;
  } else if (deleting && cIdx === 0) {
    deleting = false;
    tIdx = (tIdx + 1) % titles.length;
  }
  setTimeout(typeStep, speed);
}
typeStep();

// Send email from form
function sendEmail() {
  const subject = document.getElementById('fsubject').value || 'Message from Portfolio';
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  const msg = document.getElementById('fmessage').value;
  const body = (name ? 'From: ' + name + (email ? ' <' + email + '>' : '') + '\n\n' : '') + msg;
  window.location.href = 'mailto:shimulbappi.sds49@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}
