var dotsHtml = "";
                var numberOfSlides = document.getElementsByClassName("ProjSlides").length;
                for (var i = 1; i <= numberOfSlides; i++) {
                    dotsHtml += '<span class="dot" onclick="currentSlide(' + i + ')"></span>';
                }
                document.write(dotsHtml);