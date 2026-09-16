const seal = document.getElementById('seal');
const envelope = document.querySelector('.envelope');
const envelopeScene = document.getElementById('envelopeScene');
const scrollScene = document.getElementById('scrollScene');
const scrollTeaser = document.getElementById('scrollTeaser');
const burningEnvelope = document.getElementById('burningEnvelope');
const invitation = document.getElementById('invitation');

// Small cinematic utilities. They only orchestrate the existing scenes.
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const flash = () => {
  document.body.classList.remove('cinema-flash-on');
  void document.body.offsetWidth;
  document.body.classList.add('cinema-flash-on');
  setTimeout(() => document.body.classList.remove('cinema-flash-on'), 720);
};

seal.addEventListener('click', async () => {
  if (envelope.classList.contains('open')) return;

  envelope.classList.add('open');
  envelopeScene.classList.add('cinematic-opening');
  flash();

  // A short, almost imperceptible pause makes the seal feel like the trigger,
  // rather than making the scene jump immediately to the next screen.
  await wait(1080);
  envelopeScene.classList.add('hidden');
  scrollScene.classList.remove('hidden');
  scrollScene.classList.add('cinematic-reveal');
  window.scrollTo({top:0, behavior:'instant'});

  // Smoke starts just after the scroll enters the frame.
  await wait(420);
  document.body.classList.add('cinema-smoke-on');
  setTimeout(() => document.body.classList.remove('cinema-smoke-on'), 2200);
});

async function openScroll(){
  if(scrollTeaser.classList.contains('activated')) return;

  scrollTeaser.classList.add('activated');
  scrollScene.classList.add('cinematic-burning');

  const glow = document.createElement('div');
  glow.className = 'cinematic-burn-glow';
  scrollScene.appendChild(glow);

  // The fire has a visible ignition beat before the envelope starts collapsing.
  await wait(160);
  flash();
  document.body.classList.add('cinema-ash-on');
  setTimeout(() => document.body.classList.remove('cinema-ash-on'), 1850);

  await wait(1690);
  scrollScene.classList.add('hidden');
  invitation.classList.remove('hidden');
  window.scrollTo({top:0, behavior:'instant'});
  glow.remove();
}

scrollTeaser.addEventListener('click', openScroll);
scrollTeaser.addEventListener('keydown', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openScroll();
  }
});
