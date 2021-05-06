

// Use JQuery for toogle 
  $(document).ready(function(){
    
    $(".educate__content").hide();
    $(".educate__content:first").show();
    $(".educate__item").click(function(){
      var myparent = $(this).parent();
      $(".educate__content", myparent).each(function(){
          $(this).toggle();      
      });
    });
  });

	

