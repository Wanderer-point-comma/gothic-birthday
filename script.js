const seal = document.getElementById('seal');
const envelope = document.querySelector('.envelope');
const envelopeScene = document.getElementById('envelopeScene');
const scrollScene = document.getElementById('scrollScene');
const scrollTeaser = document.getElementById('scrollTeaser');
const burningEnvelope = document.getElementById('burningEnvelope');
const invitation = document.getElementById('invitation');

seal.addEventListener('click', () => {
  envelope.classList.add('open');
  seal.animate([{filter:'brightness(1)'},{filter:'brightness(1.9)',offset:.35},{filter:'brightness(.7)'}],{duration:900,easing:'ease-out'});
  setTimeout(() => {
    envelopeScene.classList.add('hidden');
    scrollScene.classList.remove('hidden');
    window.scrollTo({top:0, behavior:'instant'});
  }, 1050);
});

function openScroll(){
  if(scrollTeaser.classList.contains('activated')) return;
  scrollTeaser.classList.add('activated');
  burningEnvelope.classList.add('burn');
  setTimeout(() => {
    scrollScene.classList.add('hidden');
    invitation.classList.remove('hidden');
    window.scrollTo({top:0, behavior:'instant'});
  }, 1450);
}
scrollTeaser.addEventListener('click', openScroll);
scrollTeaser.addEventListener('keydown', e => {
  if(e.key === 'Enter' || e.key === ' ') openScroll();
});
