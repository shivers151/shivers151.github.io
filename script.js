function addExerciseRow() {
  const container = document.getElementById("exerciseRows");

  const row = document.createElement("div");
  row.classList.add("exerciseRow");

  const exerciseName = document.createElement("input");
  exerciseName.type = "text";
  exerciseName.placeholder = "Exercise Name";
  row.appendChild(exerciseName);

  const sets = document.createElement("input");
  sets.type = "number";
  sets.min = 1;
  sets.max = 10;
  sets.placeholder = "Sets";
  row.appendChild(sets);

  const reps = document.createElement("input");
  reps.type = "number";
  reps.min = 1;
  reps.max = 20;
  reps.placeholder = "Reps";
  row.appendChild(reps);

  container.appendChild(row);
}

document.getElementById("exerciseForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the default form submission action

  const formData = {
    date: document.getElementById("date").value,
    exercises: [],
    notes: document.getElementById("notes").value
  };

  const exerciseRows = document.querySelectorAll(".exerciseRow");
  exerciseRows.forEach(function(row) {
    const name = row.querySelector('input[type="text"]').value;
    const sets = row.querySelector('input[type="number"]:nth-child(2)').value;
    const reps = row.querySelector('input[type="number"]:nth-child(3)').value;

    // Check if the row is filled out
    if (name && sets && reps) {
      const exercise = {
        name: name,
        sets: parseInt(sets, 10),
        reps: parseInt(reps, 10)
      };
      formData.exercises.push(exercise);
    }
  });

  const db = firebase.firestore();
  db.collection("workouts").add(formData)
    .then(() => 
      {
        console.log("Data successfully uploaded to Firestore.")
        window.location.href = '/homepage.html'; // Replace with your homepage URL

      }
    )
    .catch(error => console.error("Error writing document to Firestore: ", error));

  console.log(JSON.stringify(formData)); // Output the JSON to the console
  // You can also handle the JSON data here as needed
});

