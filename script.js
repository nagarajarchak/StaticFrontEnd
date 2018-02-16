$(document).ready(function(){
   setBindings();               
});


function setBindings(){
    $("ul li a.Menu").click(function(e){
      e.preventDefault();
      var sectionID=e.currentTarget.id + "Section";
      
        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
}












