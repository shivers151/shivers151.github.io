let user = JSON.parse(window.localStorage.getItem("userAuth"));

let idx = 0;

//lift_name_idx


const inputs = [{

}];


const rerenderPage = () =>{

};




const appendExercise = () => {
  document.body.innerHTML += `

<div>
    <input id="lift_name_${idx}"></input>
</div>

    `;
  idx += 1;
};

const submitSession = () =>{
  for(i = 0;i<idx;i++){
    console.log(document.getElementById(`lift_name_${i}`).value);
  }
};

appendExercise();

//const dropArea = document.getElementById('dropArea');



document.addEventListener('DOMContentLoaded', (event) => {
  const dropArea = document.getElementById('dropArea');
  console.log("run")
  dropArea.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
    console.log("DRAG OVER")
  });


  dropArea.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      readSpreadsheet(file);
    }
    console.log("DROP");
  });

});

function readSpreadsheet(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    // Assuming data is in the first sheet
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    populateForm(jsonData);
  };
  reader.readAsArrayBuffer(file);
}

function populateForm(data) {
  // Assuming the data follows the structure: [name, sets, reps]
  data.forEach(row => {
    if (row.length >= 3) {
      addExerciseRow(row[0], row[1], row[2]); // You need to define this function
    }
  });
}
