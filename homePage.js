let user = JSON.parse(window.localStorage.getItem("userAuth"));
    
const container = document.getElementById('greetingContainer');
    
container.innerHTML = ''; // Clear existing content
container.innerHTML = `<h1 class="pink">Hello ${user.displayName}</h1>`;


function fetchWorkouts() {
    const db = firebase.firestore();

    let workouts = []

    db.collection("workouts")
      .orderBy("date", "desc") // Order by timestamp in descending order
      .get()
      .then(querySnapshot => {

          querySnapshot.forEach(doc => {
            workouts.push({...doc.data(),id:doc.id})
              console.log(`${doc.id} => `, doc.data());
              // Process and display each workout
          });
        displayWorkouts(workouts);
      })
      .catch(error => {
          console.error("Error fetching workouts: ", error);
      });


}

fetchWorkouts(); // Call the function to fetch workouts

/*
const renderWeightInput = (n) =>{
  document.body.innerHTML += `<p>${n}</p>`;
}*/

function displayWorkouts(workouts) {
    const container = document.getElementById('workoutListContainer');
    container.innerHTML = ''; // Clear existing content

    workouts.forEach(workout => {
        // Create link element for each workout
        const link = document.createElement('a');
        link.href = '/workout?id='+workout.id; // Set href to the workout's URL or identifier
        link.textContent = workout.date; // Assuming each workout has a 'name' property
        link.classList.add('workout-link'); // Add class for styling

        // Append the link to the container
        container.appendChild(link);
    });
}

/*
const ns = ['one','two','three'];

ns.forEach(n=>{
  renderWeightInput(n);
}); */



