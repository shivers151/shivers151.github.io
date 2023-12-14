const urlParams = new URLSearchParams(window.location.search);
const workoutId = urlParams.get('id'); // Get the workout ID from the URL

const db = firebase.firestore();

function fetchWorkoutDetails() {
    db.collection("workouts").doc(workoutId).get()
        .then(doc => {
            if (doc.exists) {
                renderWorkoutDetails(doc.data());
            } else {
                console.log("No such document!");
            }
        })
        .catch(error => {
            console.error("Error fetching document: ", error);
        });
}

function renderWorkoutDetails(data) {
    const container = document.getElementById('workoutDetails');
    container.innerHTML = `
        <h2>Workout Details</h2>
        <p><strong>Date:</strong> ${data.date}</p>
        <ul>
            ${data.exercises.map(ex => `<li>${ex.name}: ${ex.sets} sets of ${ex.reps} reps</li>`).join('')}
        </ul>
        <p><strong>Notes:</strong> ${data.notes}</p>
    `;
}

if (workoutId) {
    fetchWorkoutDetails();
} else {
    console.log("Workout ID not provided in the URL");
}
