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
