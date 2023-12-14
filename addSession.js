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
