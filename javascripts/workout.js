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
    renderWorkoutsHtml(data);
    renderWorkoutsForm()
  })
}

function renderWorkoutsHtml(data) {
  let 
}

function renderWorkoutsForm() {
  
}

function createWorkout() {

}

function updateWorkout() {

}

function deleteWorkout() {
  
}