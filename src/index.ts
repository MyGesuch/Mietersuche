import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});

var test = document.eventListener();


const trigger = document.document.getElementById('cta');

trigger.addEventListener('click', function() {
    const popup = document.getElementById('testpopup');
    popup.style.display = 'flex'; // Display the pop-up
});
