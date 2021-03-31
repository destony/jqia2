$(function() {

    $.get(
      'dom.sample.html?v='+Date.now(),
      function(data){
        $('#sampleDOM').html(data);
        $('#sampleDOMCode pre').html(data.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
      });

    $('form#selectorForm').submit(function(){
      $('.wrappedElement','#sampleDOM').removeClass('wrappedElement');
      $('#resultingElements').html('');
      var selector = $.trim($('#selectorField').val());
      if (selector.length == 0) return false;
      var wrappedSet = $(selector,'#sampleDOM');
      wrappedSet.addClass('wrappedElement');
      $('#jqueryStatement').html('$("'+selector+'").addClass("wrappedElement");');
      var elements = wrappedSet.elementsForDisplay();
      var labelText = elements.length + ' matching element' + (elements.length == 1 ? '' : 's') + ':';
      $('label[for=resultingElements]').html(labelText);
      $.each(elements,function(){
        $('#resultingElements').append($('<div>'+this+'</div>'));
      });
      $('#resultsPane').fadeIn('slow');
      return false;
    });

  });