$(document).ready(function() {
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.star').click(function(event) {
      $(this).toggleClass('bi-star-fill');
      $(this).toggleClass('bi-star');
   });



   function loadMore(button, element) {
      $(`${button}`).on('click', function (e) {
      e.preventDefault()
      $(`${element}`).slice(0, 3).slideDown().addClass('opacity')
      if ($(`${element}`).length == 0) {
         $(`${button}`).text('No Content').addClass('noContent')
      }
      })
   }

   loadMore('#loadMore', '.produckt__box:hidden')
   loadMore('#loadMore-2', '.load__more-item-2:hidden')

});



   // $(".produckt__box").slice(0, 3).show();
   // $("#loadMore").on("click", function(e){
   //    e.preventDefault();
   //    $(".produckt__box:hidden").slice(0, 3).slideDown().addClass('opacity');
   //    if($(".produckt__box:hidden").length == 0) {
   //       $("#loadMore").text("No Content").addClass("noContent");
   //    }
   // });

   // $(".load__more-item-2").slice(0, 3).show();
   // $("#loadMore-2").on("click", function(e){
   //    e.preventDefault();
   //    $(".load__more-item-2:hidden").slice(0, 3).slideDown();
   //    if($(".load__more-item-2:hidden").length == 0) {
   //       $("#loadMore-2").text("No Content").addClass("noContent");
   //    }
   // });
