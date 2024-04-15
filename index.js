console.log("Ciao da VSC");
let nome = "Pierfrancesco";
let cognome = "Calviello";

$(document).ready(function () {

    $("#btn_cod_fiscale").on("click", function(){
        alert($("#test3").val("Ciao"));
        console.log("CIAO");
        
    });
   
    $("#title1").on("click", function(){
    alert("Complimenti");
    console.log("stampa");
   });
   
    //Jquery
    $("#btn_mostra_username").on("click", function () {
        //alert("stai per visualizzare l'username");
        let username = "tuoNome";
        $("#username").text(username)
        .css("font-weight", "bold");
    }
    );
    //Javascript
    document.getElementById("btn_cambia_testo").addEventListener("click", function () {
        let nome = "Piero";
        //alert("Ciao " + nome);
        console.log("Benvenuto nella funzione 'Callback'");
        //    Utilizziamo JQUERY che dopo l'alert cambierà il contenuto del p con id="password"
        $("#password").text("its2029")
            .css("color", "blue");
        $(".bordino").css("border", "1px solid red")
            .css("background-color", "green");

    })
    console.log("ready!");

});
