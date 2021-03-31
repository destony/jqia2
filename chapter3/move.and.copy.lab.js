$(function() {

    $('#restoreButton').click(function(){
      window.location = 'move.and.copy.lab.html';
    });

    $('#executeButton').click(function(){
      $('body').addClass('done');
      $('.done #controls :radio').attr('disabled',true);
      var sources$ = $('#sourcePane input:checked~img');
      if ($('[name=clone]:checked').val()=='yes') sources$ = sources$.clone();
      var targets$ = $('#targetPane input:checkbox:checked').parents('.target');
      var operation = $('[name=operations]:checked').val();
      targets$[operation](sources$);
    });

  });