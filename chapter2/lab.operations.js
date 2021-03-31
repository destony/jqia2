$(function() {

    $.get(
      'dom.sample.html',
      function(data){
        $('#sampleDOMCode pre').html(data.replace(/</g,'&lt;').replace(/>/g,'&gt;'));
      });

    $('form#selectorForm').submit(function() {
      $('#resultingElements').html('');
      var operation = $.trim($('#operationField').val());
      if (operation.length == 0) return false;
      var wrappedSet = sampleFrame.perform(operation);
      var elements = wrappedSet.elementsForDisplay();
      var labelText = elements.length + ' matching element' + (elements.length == 1 ? '' : 's') + ':';
      $('label[for=resultingElements]').html(labelText);
      $.each(elements,function(){
        $('#resultingElements').append($('<div>'+this+'</div>'));
      });
      $('#resultsPane').fadeIn('slow');
      return false;
    });

    $('#restoreButton').click(function(){
      $('#sampleFrame').attr('src','dom.sample.page.html');
      $('#resultsPane').hide();
    });

  });