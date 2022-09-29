const container = document.querySelector('#container')

for (let i = 0; i < 256; i++) { //creates 256 divs (styled into squares in css)
    const sqr = document.createElement('div');
    sqr.setAttribute('class', 'square'); //sets class, used in CSS for styling
    container.appendChild(sqr);
    sqr.addEventListener('mouseover', () => {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1)); 
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255); //these produce a random color for the square
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`   
        sqr.style.backgroundColor=rgb;
    });
    const btn = document.querySelector('button')
    btn.addEventListener('click', () => {     // resets color to white when button is clicked
    sqr.style.backgroundColor = 'transparent'
    });
};
