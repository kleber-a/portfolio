
//------Variables------

//--ScrollReveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

scrollReveal.reveal('.main-name', { delay: 200 });
scrollReveal.reveal(".main_skills_item", { interval: 200 });
scrollReveal.reveal(".about", { interval: 200 });
scrollReveal.reveal(".main_skills_item", { interval: 200 });
scrollReveal.reveal('.language', { interval: 400 });
scrollReveal.reveal('.card_project', { interval: 400 });
scrollReveal.reveal('.main_contact', { interval: 400 });
//--------------


//---Ativação do menu
const menuLink = document.querySelectorAll(".menu__link");

function linkAction() {
  menuLink.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
menuLink.forEach((item) => item.addEventListener("click", linkAction));


window.addEventListener('scroll', function(item) {
  const scrollHeight = parseInt(window.scrollY);
    if(scrollHeight>= 0 && scrollHeight <=727){
      changeClass(0)
    } else if(scrollHeight>= 727 && scrollHeight <= 1313) {
      changeClass(1)
    } else if(scrollHeight>= 1313 && scrollHeight <= 2000){
      changeClass(2)
    } else if(scrollHeight>= 2000 && scrollHeight <= 2664){
      changeClass(3)
    } else {
      changeClass(4)
    }
});

function changeClass(index){
  menuLink.forEach((item) => item.classList.remove("active"));
  menuLink[index]?.classList.add("active");
}
//----------------



//--Filtrar Projetos
function filter(type) {

  let angular = document.getElementById('angular');
  let react = document.getElementById('react');
  let reactNative = document.getElementById('reactNative');

  switch (type) {
    case 'all':
      angular.style.display = 'grid';
      react.style.display = 'grid';
      reactNative.style.display = 'grid';
      break;
    case 'angular':
      angular.style.display = 'grid';
      react.style.display = 'none';
      reactNative.style.display = 'none';
      break;
    case 'react':
      angular.style.display = 'none';
      react.style.display = 'grid';
      reactNative.style.display = 'none';
      break;
    case 'reactNative':
      angular.style.display = 'none';
      react.style.display = 'none';
      reactNative.style.display = 'grid';
      break;
    default: 
      angular.style.display = 'none';
      react.style.display = 'none';
      reactNative.style.display = 'none';
      break;
  }
}

//----------------


//------Validação input-------

let inputName = document.getElementById('name')
let inputEmail = document.getElementById('email')
let inputMessage = document.getElementById('message')
let buttonEnviar = document.getElementById('enviar')
let buttonLimpar = document.getElementById('limpar')

function checkInput() {

  if (inputName.value.trim() !== '' || inputEmail.value.trim() !== '' || inputMessage.value.trim() !== '') {
    buttonEnviar.disabled = false;
    buttonLimpar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
    buttonLimpar.disabled = true;
  }
}

function clearInputs() {
  buttonEnviar.disabled = true;
  buttonLimpar.disabled = true;
  inputName.value = ''
  inputEmail.value = ''
  inputMessage.value = ''
}

inputName.addEventListener('input', checkInput);
inputEmail.addEventListener('input', checkInput);
inputMessage.addEventListener('input', checkInput);

buttonLimpar.addEventListener('click', clearInputs)
//--------------------------------


//---Chart js---

const ctxx = document.getElementById('myChart').getContext('2d');
let gridColor = '#CCC'


const data = {
  labels: [
    'JavaScript ES6',
    'Angular 2+',
    'React',
    'TypeScript',
    'Teste Unitário',
    'Java',
    'Python'
  ],
  datasets: [
    {
      label: '',
      data: [90, 90, 80, 80, 90, 70, 70],
      fill: true,
      backgroundColor: 'rgba(64, 112, 244, 0.2)',
      borderColor: '#000080',
      pointBackgroundColor: '#000080',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#000080'
    },
    {
      label: '',
      data: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      fill: true,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      pointHoverBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointHoverBorderColor: 'rgba(0, 0, 0, 0)'
    }
  ]
};

new Chart(ctxx, {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 2
      }
    },
    scale: {
      ticks: {
        max: 100,
        min: 0,
        stepSize: 10
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      r: {
        angleLines: {
          color: gridColor
        },
        grid: {
          color: gridColor
        },
        pointLabels: {
          color: '#4070f4'
        }
      }
    }
  },
});
//-----------------------


//--------Mudar Tema------
let theme = document.getElementById('theme');
let iconTheme = document.getElementById('theme-icon');
let body = document.getElementById('body')
let header = document.getElementById('header')
let isTheme = false;

function changeTheme() {
  const root = document.querySelector("body");
  isTheme = !isTheme;
  if (isTheme) {
    theme.style.backgroundColor = '#1C1D20'
    iconTheme.src = './assets/icons/sun-.png';
    body.style.backgroundColor = '#1C1D20'
    header.style.backgroundColor = '#1C1D20'
    gridColor = '#FFF'
    root.classList.remove("light");
    root.classList.toggle("dark");
  } else {
    theme.style.backgroundColor = '#FFF'
    iconTheme.src = './assets/icons/moon.png';
    body.style.backgroundColor = '#FFF'
    header.style.backgroundColor = '#FFF'
    gridColor = '#CCC'
    root.classList.remove("dark");
    root.classList.toggle("light");

  }
}

//-------------------------
