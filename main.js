var zenek = []
var zenecime
var zenehossza
class Szam {
    constructor(zenecim, zenehossz) {
      this.zenecim = zenecim
      this.zenehossz = zenehossz
    }
  }

$( document ).ready(function() {
    $("#submit").click(function(){
        console.log("clicked")
        zenecime = $("#zenecime").val()
        zenehossza = $("#zenehossza").val()
        try {var ujZene = new Szam(zenecime, zenehossza);
            zenek.push(ujZene);
            console.log("Uj szam added");}
        catch (e) {
            console.log(e)
        }
    });
});
  