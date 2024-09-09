const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for (const item of myArray) {
    console.log(item);
    const li = document.createElement('li');
    li.textContent = item; 
    list.appendChild(li);
}
const label = document.createElement('label');
label.textContent = 'Grocery List:';
// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(label);
section.appendChild(list);