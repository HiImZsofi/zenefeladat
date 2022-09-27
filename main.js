var zenek = []
var zenecime
var zenehossza
var intRegex = /^\d+$/;
var floatRegex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/;

class Szam {
    constructor(zenecim, zenehossz) {
      this.zenecim = zenecim
      this.zenehossz = zenehossz
    }
  }

$( document ).ready(function() {
    $("#submit").click(function(){
        zenecime = $("#zenecim").val()
        zenehossza = $("#zenehossz").val()
        if($.isNumeric(zenecime) == true){
            alert("Hibás adat, adjon meg egy címet")
        }
        else if($.isNumeric(zenehossza) == false){
            alert("Hibás adat, másodpercet adjon meg")
        }
        else{
            try {
            var ujZene = new Szam(zenecime, zenehossza);
            zenek.push(ujZene);
            console.log("Uj szam added");}
        catch (e) {
            console.log(e)
        }
        }
    });
});
  