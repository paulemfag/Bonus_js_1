document.getElementById('but').addEventListener('click', addition)
function addition(){
  var valeur = parseInt(document.getElementById('nmbr1').value);
  var valeur2 = parseInt(document.getElementById('nmbr2').value);
  var total = (valeur) + (valeur2);
  // if(document.getElementById('but').clicked === true)
  alert(total);
}
