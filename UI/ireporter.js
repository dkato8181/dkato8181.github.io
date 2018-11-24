
let addredflagbtn = document.getElementById("btnAddRedFlag");
let addinterventionbtn = document.getElementById("btnAddIntervention");
let recordmodal = document.getElementById("recordModal");

let recordmodalimagebtn = document.getElementById("btnAddImage");
let recordmodalvideobtn = document.getElementById("btnAddVideo");
let recordmodallocationbtn = document.getElementById("btnAddLocation");
let recordmodalokbtn = document.getElementById("btnOk");
let recordmodalcancelbtn = document.getElementById("btnCancel");

addredflagbtn.onclick = function(){
  recordmodallocationbtn.style.color="#fff4e0";
  recordmodal.style.display = "block";
}
addinterventionbtn.onclick = function(){
  recordmodallocationbtn.style.color="#fff4e0";
  recordmodal.style.display = "block";
}
recordmodalimagebtn.onclick = function(){
  document.getElementById('inputImage').click();
}
recordmodalvideobtn.onclick = function(){
  document.getElementById('inputVideo').click();
}
recordmodallocationbtn.onclick = function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      recordmodallocationbtn.style.color="darkgreen"
    });
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}
recordmodalokbtn.onclick = function(){
  recordmodal.style.display = "none";
}
recordmodalcancelbtn.onclick = function(){
  recordmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == recordmodal) {
      recordmodal.style.display = "none";
    }
}