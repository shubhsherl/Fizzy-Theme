// header: navbar Burgers 2019.04.08
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

  });

// =================================================
// post archive: add year and month break 2019.05.28
// =================================================
// Year & Month Break
var yearArray = new Array();
var monthObj = new Object();
$(".post-archive-item").each(function() {
    var archivesYear = $(this).attr("year");
    var archivesMonth = $(this).attr("month");
    yearArray.push(archivesYear);
    if (archivesYear in monthObj) {
        monthObj[archivesYear].push(archivesMonth);
    }
    else {
        monthObj[archivesYear] = new Array();
        monthObj[archivesYear].push(archivesMonth);
    }
});
var uniqueYear = $.unique(yearArray);
for (var i = 0; i < uniqueYear.length; i++) {
    var html = "<hr><h2>" + uniqueYear[i] + "</h2>";
    $("[year='" + uniqueYear[i] + "']:first").before(html);
    var uniqueMonth = $.unique(monthObj[uniqueYear[i]]);
    for (var m = 0; m < uniqueMonth.length; m++) {
        var html = "<h4>" + uniqueMonth[m] + "</h4>";
        $("[year='" + uniqueYear[i] + "'][month='" + uniqueMonth[m] + "']:first").before(html);
    }
}
// =================================================
// search 2019.05.30
// function: open and close search form
// =================================================
if (typeof show_search == 'undefined') {
  var show_search = false;
}
if (!show_search) {
  $("#search-btn").hide();
}
$("#search-btn").click(function(event) {
    // $("#search-input").val("");
    $("#seach-form").fadeIn();
    $("#search-btn").hide()
    $('#search-input').focus();
    $("#search-results").show();
    event.stopPropagation();
});
$("#close-btn").click(function(event) {
  $("#seach-form").hide();
  $("#search-results").hide(); 
  $("#search-btn").fadeIn(); 
  // $("#search-input").val(""); //clear search field text  
  event.stopPropagation();
});
$(document).click(function(){
  $("#seach-form").hide(); 
  $("#search-results").hide(); 
  $("#search-btn").fadeIn();
});
$(window).scroll(function(){
  $("#seach-form").hide(); 
  $("#search-results").hide(); 
  $("#search-btn").show();
});

/*----------------------------------------------------*/
/*  Hide / Show Credit Button | 2019.06.25
/*----------------------------------------------------*/
$(window).scroll(function(){
  var pxCreditBtn = 400;
  if($(window).scrollTop() < pxCreditBtn){
    $("#fizzy-credit").show();
  }
  if($(window).scrollTop() >= pxCreditBtn){
    $("#fizzy-credit").hide();
  }
});
/*----------------------------------------------------*/
/*  Prismjs Line-numbers | 2019.07.05
/*----------------------------------------------------*/
if (typeof line_numbers == 'undefined') {
  var line_numbers = false;
}
if (line_numbers) {
  $("pre").addClass("line-numbers");
}
