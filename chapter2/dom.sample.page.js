$(function(){
    $.get(
      'dom.sample.html',
      function(data){
        $('#sampleDOM').html(data);
      });
  });

  function perform(operation) {
    $('*').removeClass('wrappedElement');
    eval('var wrappedSet='+operation+';');
    wrappedSet.addClass('wrappedElement');
    return wrappedSet;
  }