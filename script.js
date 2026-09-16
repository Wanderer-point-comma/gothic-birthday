const seal = document.getElementById('seal');
const envelope = document.querySelector('.envelope');
const envelopeScene = document.getElementById('envelopeScene');
const scrollScene = document.getElementById('scrollScene');
const scrollTeaser = document.getElementById('scrollTeaser');
const burningEnvelope = document.getElementById('burningEnvelope');
const invitation = document.getElementById('invitation');

seal.addEventListener('click', () => {
  seal.classList.add('broken');
  document.querySelector('.seal-large')?.classList.add('broken');
  envelope.classList.add('open');
  seal.animate(
    [{filter:'brightness(1)'},{filter:'brightness(1.9)',offset:.35},{filter:'brightness(.7)'}],
    {duration:2200,easing:'cubic-bezier(.16,1,.3,1)'}
  );
  setTimeout(() => {
    envelopeScene.classList.add('hidden');
    scrollScene.classList.remove('hidden');
    window.scrollTo({top:0, behavior:'instant'});
  }, 3600);
});

function openScroll(){
  if(scrollTeaser.classList.contains('activated')) return;

  // The scroll rises out of the envelope while it burns away underneath it.
  scrollTeaser.classList.add('activated');

  setTimeout(() => {
    scrollScene.classList.add('hidden');
    invitation.classList.remove('hidden');
    window.scrollTo({top:0, behavior:'instant'});
  }, 6200);
}
scrollTeaser.addEventListener('click', openScroll);
scrollTeaser.addEventListener('keydown', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openScroll();
  }
});
