$(function(){
    $('<img>',
      {
        src: 'images/little.bear.png',
        alt: 'Little Bear',
        title:'I woof in your general direction',
        click: function(){
          alert($(this).attr('title'));
        }
      })
      .css({
        cursor: 'pointer',
        border: '1px solid black',
        padding: '12px 12px 20px 12px',
        backgroundColor: 'white'
      })
      .appendTo('body');
  });