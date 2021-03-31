$(function(){
    $("table tr:nth-child(even)").addClass("striped");
    $("table").mouseover(swapThem).mouseout(swapThem);
  });

  function swapThem() {
    $('tr').toggleClass('striped');
  }