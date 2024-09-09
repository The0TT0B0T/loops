let i = 500;
const para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}


// Add your code here
para.textContent = 'Prime numbers are: '
for (let i = 500; i >= 2; i--) {
  if (!isPrime(i)) {
    continue;
  }
  else {
    para.textContent += ` ${i}, `;
  }
  console.log(i);
}
// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);