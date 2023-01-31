document.getElementById("plan1").addEventListener("click", box1);
document.getElementById("plan2").addEventListener("click", box2);
document.getElementById("plan3").addEventListener("click", box3);

function box1() {
  
  document.getElementById("plan1").style.border = "medium solid #2563eb";
  document.getElementById("check").style.fill = '#2563eb';
  document.getElementById("plan1").style.boxShadow="none";
}

function box2() {
  document.getElementById("plan2").style.border = "medium solid #2563eb";
  document.getElementById("check-2").style.fill = "#2563eb";
  document.getElementById("plan2").style.boxShadow="none";
  
  document.getElementById("plan2").style.border = "medium solid #2563eb";
  document.getElementById("check-2").style.fill = "#2563eb";
  document.getElementById("plan2").style.boxShadow="none";
  
  document.getElementById("plan2").style.border = "medium solid #2563eb";
  document.getElementById("check-2").style.fill = "#2563eb";
  document.getElementById("plan2").style.boxShadow="none";
}

function box3() {
  document.getElementById("plan3").style.border = "medium solid #2563eb";
  document.getElementById("check-3").style.fill = "#2563eb";
  document.getElementById("plan3").style.boxShadow="none";
}