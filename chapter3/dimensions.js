$(function(){
    $(window).resize(displayDimensions);
    displayDimensions();
  });

  function displayDimensions() {
    $('#display').html(
      $('#testSubject').width()+'x'+$('#testSubject').height()
    );
  }