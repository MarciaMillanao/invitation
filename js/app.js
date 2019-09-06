// const btnMenu = document.getElementById("menu");
// btnMenu.addEventListener("click", () => {
//   document.getElementById("datosmenu").style.display = 'block';
// })

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.modal').modal();
});
        