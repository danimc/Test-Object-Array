// Import stylesheets
import './style.css';
import { start } from './jsonStart';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const allNumbers = [
  { id: 1, name: 'luis' },
  { id: 2, name: 'jose' },
  { id: 3, name: 'Pedrp' },
  { id: 4, name: 'Jan' },
  { id: 5, name: 'salomon' },
];

const gridNubers = [1, 2, 3, 4];
const deleteNumber = (number) => {
  const fakeResult = [
    {
      id: Math.round(Math.random() * (1000000 - 900000)) + 900000,
      name: 'Ramona',
    },
  ];

  const index = allNumbers.map(({ id }) => id).indexOf(number);
  const reemplazo = allNumbers.at(4) ? allNumbers.splice(4) : fakeResult;
  const cutNumber = allNumbers.splice(index, 1, ...reemplazo);

  console.table(allNumbers);
};

const getNearCamerasToResponse = () => {
  const {
    area: { poles },
  } = start;
};

getNearCamerasToResponse();
