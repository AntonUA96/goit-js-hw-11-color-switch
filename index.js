  const body = document.querySelector('body');
  const buttonStart = document.querySelector('button[data-action = "start"]');
  const buttonStop = document.querySelector('button[data-action = "stop"]');

  const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

  const setBodyColor = () => {
    const bgColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    console.log(bgColor)
    document.body.style.backgroundColor = bgColor
  };

let interval = null;

buttonStart.addEventListener('click', e => interval = 
  setInterval(() => setBodyColor(), 1000));

buttonStop.addEventListener('click', e => clearInterval(interval));