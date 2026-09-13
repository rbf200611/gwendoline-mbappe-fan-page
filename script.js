const reveals=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.14});
reveals.forEach(el=>io.observe(el));

const counters=[...document.querySelectorAll('[data-target]')];
const counterIO=new IntersectionObserver(entries=>{entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;const target=Number(el.dataset.target);const duration=1200;const start=performance.now();function step(t){const p=Math.min((t-start)/duration,1);const eased=1-Math.pow(1-p,3);el.textContent=Math.floor(target*eased).toLocaleString();if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step);counterIO.unobserve(el)})},{threshold:.6});
counters.forEach(el=>counterIO.observe(el));

const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?scrollY/h*100:0)+'%'});

const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
