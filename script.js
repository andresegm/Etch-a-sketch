const container = document.querySelector('.container')


const createGrid = (n) => {
  if (n < 10 || n > 100) {
    alert('Please, make a valid selection');  //this block just checks to make sure number entered is more than 10 and less than 100
    return;
  }; 

  for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');     // this block creates rows
        container.appendChild(row);

    for (let j = 0; j < n; j++) {
        const sqr = document.createElement('div');
        sqr.classList.add('column'); // this block creates "columns" (more appropriately, squares)
        sqr.addEventListener('mouseover', changeColor);
        row.appendChild(sqr)
        };
    };
}; 

//this function removes all children elements, used for newGrid function
function removeAllChildNodes(parent) {
  while (parent.firstChild) {               
      parent.removeChild(parent.firstChild);
  }
};   

//creates new Grid (prompts user to input size)
const newGrid = document.querySelector('.newGrid')
newGrid.addEventListener('click', () => {   
  removeAllChildNodes(container);
  createGrid(prompt('Please input number of rows; must be a number between 10 and 100', 0));
});

//resets grid to white
const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    const containerDivs = container.querySelectorAll('div');
    containerDivs.forEach(containerDivs => {
        containerDivs.style.backgroundColor = "white";
    });
})

//toggles border style around squares between white and black
const borderStyle = document.querySelector('.borderStyle')
borderStyle.addEventListener('click', () => {   
    const containerDivs = container.querySelectorAll('div');
    containerDivs.forEach(containerDivs => {
        containerDivs.classList.toggle('noBorder');
    });
});

//Change color function
const changeColor = (e) => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1)); 
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255); //these produce a random color for the square
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`   
    e.target.style.backgroundColor = rgb;
    return;
}; 
