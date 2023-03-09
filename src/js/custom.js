(function ($) {
  "use strict";

  /* ----------------------------------------------------------- */
  /*  FUNCTION TO STOP LOCAL AND YOUTUBE VIDEOS IN SLIDESHOW
    /* ----------------------------------------------------------- */

  function stop_videos() {
    var video = document.getElementById("video");
    if (video.paused !== true && video.ended !== true) {
      video.pause();
    }
    $(".youtube-video")[0].contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  }

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  STOP VIDEOS
        /* ----------------------------------------------------------- */

    $(".slideshow nav span").on("click", function () {
      stop_videos();
    });

    /* ----------------------------------------------------------- */
    /*  FIX REVEALATOR ISSUE AFTER PAGE LOADED
        /* ----------------------------------------------------------- */

    $(".revealator-delay1").addClass("no-transform");

    /* ----------------------------------------------------------- */
    /*  PORTFOLIO GALLERY
        /* ----------------------------------------------------------- */

    if ($(".grid").length) {
      new CBPGridGallery(document.getElementById("grid-gallery"));
    }

    /* ----------------------------------------------------------- */
    /*  BUTTONS ANIMATION
        /* ----------------------------------------------------------- */
    function checkSize() {
      if ($(document).width() > 992) {
        var btn_hover = "";
        $(".btn").each(function () {
          var btn_text = $(this).text();
          $(this)
            .addClass(btn_hover)
            .empty()
            .append(
              "<span data-hover='" + btn_text + "'>" + btn_text + "</span>"
            );
        });
      }
    }
    checkSize();
    window.addEventListener("resize", function () {
      checkSize();
    });

    /* ----------------------------------------------------------- */
    /*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
        /* ----------------------------------------------------------- */

    $(".grid figure").on("click", function () {
      $("#navbar-collapse-toggle").addClass("hide-header");
    });

    /* ----------------------------------------------------------- */
    /*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
        /* ----------------------------------------------------------- */

    $(".nav-close").on("click", function () {
      $("#navbar-collapse-toggle").removeClass("hide-header");
    });
    $(".nav-prev").on("click", function () {
      if ($(".slideshow ul li:first-child").hasClass("current")) {
        $("#navbar-collapse-toggle").removeClass("hide-header");
      }
    });
    $(".nav-next").on("click", function () {
      if ($(".slideshow ul li:last-child").hasClass("current")) {
        $("#navbar-collapse-toggle").removeClass("hide-header");
      }
    });

    /* ----------------------------------------------------------- */
    /*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
        /* ----------------------------------------------------------- */

    var item = $(".grid li figure");
    var elementsLength = item.length;
    for (var i = 0; i < elementsLength; i++) {
      $(item[i]).hoverdir();
    }

    /* ----------------------------------------------------------- */
    /*  AJAX CONTACT FORM
        /* ----------------------------------------------------------- */

    var form = document.getElementById("my-form");

    async function handleSubmit(event) {
      $(".output_message").text("Sending...");
      document.getElementById("submit-button").disabled = true;
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            $(".output_message").text("Thanks for your submission!");
            form.reset();
            document.getElementById("submit-button").disabled = false;
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, "errors")) {
                $(".output_message").text(`${data.error}`);
                document.getElementById("submit-button").disabled = false;
              } else {
                $(".output_message").text(
                  "Oops! There was a problem submitting your form"
                );
              }
            });
          }
        })
        .catch((error) => {
          $(".output_message").text(
            "Oops! There was a problem submitting your form"
          );
          document.getElementById("submit-button").disabled = false;
        });
    }
    form.addEventListener("submit", handleSubmit);
  });

  $(document).keyup(function (e) {
    /* ----------------------------------------------------------- */
    /*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
        /* ----------------------------------------------------------- */
    if (e.keyCode === 27) {
      stop_videos();
      $(".close-content").click();
      $("#navbar-collapse-toggle").removeClass("hide-header");
    }
    if (e.keyCode === 37 || e.keyCode === 39) {
      stop_videos();
    }
  });
})(jQuery);
