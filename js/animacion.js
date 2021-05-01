//agregamos un parrafo con jquery
$("header").prepend('<h1 class="titulo" "text-align","center">JessanDetailin</h1>');
// modificamos  las reglas css desde jquery
$(".titulo").css({ "color": "white",
                    "background-color":"green",
                    "font-size": "40px",
                    "border-left": "10px solid #black",
                    "opacity":"0.8",
                    "width":"500px"}); 
$("h2").css({"background-color":"blue",
                    "color": "white",
                    "font-size": "40px",
                    "border-left": "10px solid #black",
                    "opacity":"0.8",
                    "width":"300px"})
                    .slideUp(000)
                    .slideDown(3500)
                    .delay(2000);
$("h3").css({"background-color":"blue",
                    "color": "white",
                    "font-size": "40px",
                    "border-left": "10px solid #black",
                    "opacity":"0.8",
                    "width":"600px"})
                    .slideUp(000)
                    .slideDown(3500)
                    .delay(2000);
$("p").css("background-color","blue")
                    .slideUp(000)
                    .slideDown(3500)
                    .delay(2000);
$("p1").css({"color":"white","text-align":"center"});
$("p1").css({"background-color":"green",
            "font-size": "40px","border-left": "10px solid #black",
            "opacity":"0.8","width":"600px"})
                    .slideUp(000)
                    .slideDown(3500)
                    .delay(2000);
$("p1").css({"color":"white","text-align":"center"});


