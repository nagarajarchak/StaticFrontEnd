$(document).ready(function(){
   setBindings();               
});


function setBindings(){
    $("ul li a.Menu1").click(function(e){
      e.preventDefault();
      var sectionID=e.currentTarget.id + "Section1";
      
        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
}

var ypos, Section1;
function parallax (){
    ypos=window.pageYOffset;
    Section1=document.getElementById('Section1');
    Section1.style.top=ypos*0.4+'px';
}
window.addEventListener('scroll',parallax);