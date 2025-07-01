
document.querySelectorAll('nav a').forEach(a => {
  if (a.href === location.href) a.classList.add('active');
});

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert(`Thank you, ${form.name.value}! We received your message.`);
    form.reset();
  });
}

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => {
    if(a.hash && document.querySelector(a.hash)){
      e.preventDefault();
      document.querySelector(a.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
