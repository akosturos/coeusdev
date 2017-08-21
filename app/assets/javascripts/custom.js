$(document).ready(function(){
   var images1 = [];
   images1[0] = "/assets/1.png";
   images1[1] = "/assets/2.png";
   images1[2] = "/assets/3.png";

   var images2 = [];
   images2[0] = "/assets/4.png";
   images2[1] = "/assets/5.png";
   images2[2] = "/assets/6.png";

   var images3 = [];
   images3[0] = "/assets/7.png";
   images3[1] = "/assets/8.png";
   images3[2] = "/assets/9.png";


   var i = 0, speed = 600;

   window.setInterval(function() {
      $("#img-j1").fadeOut(speed, function() {
         $("#img-j1").attr("src", images1[(++i % 2)]);
         $("#img-j1").fadeIn(speed);
         });
      }, 9000);
   window.setTimeout(function(){ window.setInterval(function() {
      $("#img-j2").fadeOut(speed, function() {
         $("#img-j2").attr("src", images2[(++i % 2)]);
         $("#img-j2").fadeIn(speed);
         });
      }, 9000);
}, 1000);

   window.setTimeout(function(){ window.setInterval(function() {
      $("#img-j3").fadeOut(speed, function() {
         $("#img-j3").attr("src", images2[(++i % 2)]);
         $("#img-j3").fadeIn(speed);
         });
      }, 9000);
}, 2000);

   $(window).on('scroll', function () {

      if ($(this).scrollTop() > 500) {
         $('#appear-nav').fadeIn(200);
      } else {
            $('#appear-nav').fadeOut(40);
      }

      if ($(window).scrollTop() > 1100) {
         $('#appear-about').css('color','#b0eb00');
      } else {
         $('#appear-about').css('color','#ffffff');
      }
      if ($(window).scrollTop() > 1900) {
         $('#appear-about').css('color','#ffffff');
      }
      if ($(window).scrollTop() > 2150) {
            $('#appear-tech').css('color','#b0eb00');
      } else {
         $('#appear-tech').css('color','#ffffff');
      }
   });



   $('#appear-about', '#nav-about').on('click', function() {
      $('#appear-about').css('color','#b0eb00');
      $('#appear-nav').fadeIn(100);
   });

   $('#appear-tech').on('click', function() {
      $('#appear-nav').fadeIn(100);
      $(this).css('color','#b0eb00');
   });
   $('#appear-home').on('click', function() {
      $('#appear-nav').fadeOut(100);
   });


   var hawaii_project_click = 0;
   var california_project_click = 0;

    $("#hawaii-project-div").on('click', function() {
      hawaii_project_click += 1;
      if(hawaii_project_click % 2 == 1) {
         $("#hawaii-project-img").addClass("blur");
         $("#hawaii-project-header").addClass("no-show");
         $("#hawaii-project-text").removeClass("no-show");
      } else {
         $("#hawaii-project-img").removeClass("blur");
         $("#hawaii-project-text").addClass("no-show");
         $("#hawaii-project-header").removeClass("no-show");
      }
    });

    $("#california-project-div").on('click', function() {
      california_project_click += 1;
      if(california_project_click % 2 == 1) {
         $("#california-project-img").addClass("blur");
         $("#california-project-header").addClass("no-show");
         $("#california-project-text").removeClass("no-show");
      } else {
         $("#california-project").removeClass("blur");
         $("#california-project-text").addClass("no-show");
         $("#california-project-header").removeClass("no-show");
      }
    });

});
