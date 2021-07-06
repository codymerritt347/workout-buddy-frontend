class Workout {
  constructor(data) {
    this.id = data.id
    this.day = data.day
    this.length = data.length
    this.where = data.where
  }
}

function getWorkouts() {
  fetch("http://localhost:3000/workouts")
  .then(resp => resp.json())
  .then(data => {
      renderWorkouts(data);
  })
}

function renderWorkouts(data) {
  const showWorkoutsDiv = document.getElementById('show-workouts-div');
  data.forEach(workout => {
    let newWorkoutDiv = document.createElement('div');
    let newWorkout = new Workout(workout);
    newWorkoutDiv.innerHTML = `<h3>${newWorkout.day}</h3>`
    + `<p>${newWorkout.length}</p>` + `<p>${newWorkout.where}</p>`
    showWorkoutsDiv.appendChild(newWorkoutDiv)
  })
}

function renderWorkoutsForm() {
  
}

function createWorkout(data) {
  
}

function updateWorkout() {

}

function deleteWorkout() {
  
}