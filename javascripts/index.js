const wecomeContainer = () => document.getElementById('welcome-container');
const myWorkoutsButton = () => document.getElementById('my-workouts-button');
const newWorkoutButton = () => document.getElementById('new-workout-button');
const myWorkoutsContainer = () => document.getElementById('my-workouts-container');
const myWorkoutsList = () => document.getElementById('my-workouts-list');

document.addEventListener('DOMContentLoaded', () => {
  myWorkoutsButton().addEventListener('click', myWorkoutsClick);
})

const myWorkoutsClick = () => {
  if (myWorkoutsList().children.length < 1) {
    fetch('http://localhost:3000/workouts')
    .then(resp => resp.json())
    .then(json => renderWorkouts(json))
    .catch(handleError)
  } else {
    myWorkoutsList().innerHTML = ''
  }
}

const renderWorkouts = (workouts) => {
  workouts.forEach(workout => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h2 class='workout-name'>${workout.day}</h2>
      <h4 class='workout-date'>${workout.length}</h4>
      <h4 class='workout-date'>${workout.where}</h4>
    `;
    myWorkoutsList().appendChild(li);
  })
}

const handleError = error => {
  console.log(error)
}