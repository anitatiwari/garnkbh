

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal)
   {
    modal.style.display = "none";}
    }
=======
// function openTheForm() {
//     document.getElementById("popupForm").style.display = "block";
//   }
  
//   function closeTheForm() {
//     document.getElementById("popupForm").style.display = "none";
//   }
document.querySelector(".popupform").addEventListener("click",function(){
    document.querySelector(".popupform").classList.add("active");
})
document.querySelector(".popupform.close_botton").addEventListener("click",function(){
    document.querySelector(".popupform").classList.add("active");
})
