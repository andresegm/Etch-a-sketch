const container = document.querySelector('#container')

for (let i = 0; i < 256; i++) {
    const sqr = document.createElement('div');
    sqr.setAttribute('class', 'square'); //sets class, used in CSS for styling
    container.appendChild(sqr);
    sqr.addEventListener('mouseover', () => {
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`   
        sqr.style.backgroundColor=rgb;
        const btn = document.querySelector('button')
            btn.addEventListener('click', () => {
            sqr.style.backgroundColor = 'transparent'
        });
  });
};
