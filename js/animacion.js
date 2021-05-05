//agregamos un parrafo con jquery
$("header").prepend('<h1 class="titulo" href="index.html">JessanDetailin</h1>');

// modificamos  las reglas css desde jquery
$(".titulo").css({
    "color": "orange",
    "background-color":"grid",
    "font-size": "40px",
    "border-left": "10px solid #black",
    "opacity":"0.8",
    // "width":"500px",
    "text-align":"center"
}); 

$("h2").css({"background-color":"white",
                    "color": "black",
                    "font-size": "40px",
                    "border-left": "10px solid #black",
                    "opacity":"0.8",
                    "text-align":"center",})
                    .slideUp(000)
                    .slideDown(3500)
                    .delay(2000);

$("h3_loco").css({
    "background-color":"blue",
    "color": "white",
    "font-size": "40px",
    "border-left": "10px solid #black",
    "opacity":"0.8",
    "width":"600px"
}).slideUp(000).slideDown(3500).delay(2000);

$("h4").css({
    "color": "white",
    "font-size": "30px",
    "border-left": "10px solid #black",
    "opacity":"0.8","text-align":"center",
}).slideUp(000).slideDown(3500).delay(2000);

$("h5").css({"background-color":"blue",
    "color": "black ",
    "font-size": "20px",
    "border-left": "10px solid #black",
    "opacity":"0.8",
    "width":"300px"
}).slideUp(000).slideDown(3500).delay(2000);

$("p").css({"color":"black","text-align":"center"
}).slideUp(000).slideDown(3500).delay(2000);

$("p1").css({"color":"black","text-align":"center"});
$("p1").css({"background-color":"green",
    "font-size": "40px","border-left": "10px solid #black",
    "opacity":"0.8","width":"600px"
}).slideUp(000).slideDown(3500).delay(2000);

$("p2").css({"color":"white","text-align":"center",
    "background-color":"blue",
    "font-size": "20px","border-left": "10px solid #black",
    "opacity":"0.8","width":"600px"
}).slideUp(000).slideDown(3500).delay(2000);

$("p3").css({"color":"white","text-align":"rigth",
    "background-color":"blue",
    "font-size": "20px","border-left": "10px solid #black",
    "opacity":"0.8"
}).slideUp(000).slideDown(3500).delay(2000);


