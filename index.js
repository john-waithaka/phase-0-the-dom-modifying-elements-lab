// Write your code here!

//test 1
const mainElement = document.querySelector('main');

if (mainElement) {
  mainElement.remove();
}

//test 2 and part 3
const newHeader = document.createElement('h1');

newHeader.innerHTML = '<h1>This is a new header</h1>';
newHeader.id = "victory";
document.body.appendChild(newHeader);

//final test
// const newHeader = document.getElementById('victory');
// newHeader.textContent = 'MYSELF is the champion';
// const victoryHeader = document.createElement('h1');
// victoryHeader.textContent = 'ASU is the champion';
// victoryHeader.id = 'victory';
// document.body.appendChild(victoryHeader);

const yourName = "John Doe"; // Replace "John Doe" with your actual name
newHeader.textContent = `${yourName} is the champion`;