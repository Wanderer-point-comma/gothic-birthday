const seal = document.getElementById('seal');
const envelope = document.querySelector('.envelope');
const envelopeScene = document.getElementById('envelopeScene');
const scrollScene = document.getElementById('scrollScene');
const scrollTeaser = document.getElementById('scrollTeaser');
const burningEnvelope = document.getElementById('burningEnvelope');
const invitation = document.getElementById('invitation');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const SEAL_DELAY = reduceMotion ? 150 : 650;
const SCROLL_DELAY = reduceMotion ? 150 : 1250;

seal.addEventListener('click', () => {
  seal.classList.add('broken');
  document.querySelector('.seal-large')?.classList.add('broken');
  envelope.classList.add('open');
  if(!reduceMotion){
    seal.animate(
      [{filter:'brightness(1)'},{filter:'brightness(1.9)',offset:.4},{filter:'brightness(.7)'}],
      {duration:450,easing:'cubic-bezier(.34,1.56,.64,1)'}
    );
  }
  setTimeout(() => {
    envelopeScene.classList.add('hidden');
    scrollScene.classList.remove('hidden');
    window.scrollTo({top:0, behavior:'instant'});
  }, SEAL_DELAY);
});

function openScroll(){
  if(scrollTeaser.classList.contains('activated')) return;

  // The scroll rises out of the envelope while it burns away underneath it.
  scrollTeaser.classList.add('activated');

  setTimeout(() => {
    scrollScene.classList.add('hidden');
    invitation.classList.remove('hidden');
    window.scrollTo({top:0, behavior:'instant'});
  }, SCROLL_DELAY);
}
scrollTeaser.addEventListener('click', openScroll);
scrollTeaser.addEventListener('keydown', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openScroll();
  }
});
