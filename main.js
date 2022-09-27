var zenek = []

class Szam {
    constructor(zenecim, zenehossz) {
      this.zenecim = zenecim
      this.zenehossz = zenehossz
    }
   static sum(lista){
    var hosszusag = 0
        for (let index = 0; index < lista.length; index++) {
            hosszusag = hosszusag + parseInt(lista[index].zenehossz)
        }
        return hosszusag
    }
  }

$( document ).ready(function() {
    $("#submit").click(function(){
        zenecim = $("#zenecim").val()
        zenehossz = $("#zenehossz").val()
        if($.isNumeric(zenecim) == true){
            alert("Hibás adat, adjon meg egy címet")
        }
        else if($.isNumeric(zenehossz) == false){
            alert("Hibás adat, másodpercet adjon meg")
        }
        else{
            try {
            var ujZene = new Szam(zenecim, zenehossz);
            zenek.push(ujZene);
            console.log("Uj szam added");}
        catch (e) {
            console.log(e)
        }
        }
    });

    $("#szamol").click(function(){
        $( "#output" ).append( Szam.sum(zenek) );
    })
});


  