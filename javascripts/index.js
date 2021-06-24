const buttonDiv = () => document.getElementById('button-control');
const button = () => document.getElementById('button');
const ulDiv = () => document.getElementById('list');
const ul = () => document.getElementById('workouts-list');

document.addEventListener('DOMContentLoaded', () => {
  button.addEventListener('click', handleClick)
})

const handleClick = () => {
  fetch('http://localhost:3000/workouts')
  .then()
  .catch(handleError)
}

const handleError = (error) => {
  console.log(error)
}