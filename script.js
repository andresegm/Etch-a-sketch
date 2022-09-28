const container = document.querySelector('#container')

const squareFactoryHor = () => {
    for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    container.appendChild(div);
    }
};

squareFactoryHor();
