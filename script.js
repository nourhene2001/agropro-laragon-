function masquer(){
    var w = window.innerWidth;
    if( w<768){
        document.getElementById('menu').style.display='none';
         
}
}
function afficher(){
    var i = window.innerWidth;
    if( i<768){
        document.getElementById('menu').style.display='block'; 
    }function masquer(){
    var w = window.innerWidth;
    if( w<768){
        document.getElementById('menu').style.display='none';
         
}
}
function afficher(){
    var i = window.innerWidth;
    if( i<768){
        document.getElementById('menu').style.display='block'; 
    }
    }
    /* on définit un array pour définir les src d'images à afficher dans le 
slider */
var slide = new Array("images/banner.jpg", "images/banner2.jpg", "images/banner3.jpg");
// on part de l'image d'index 0
var numero = 0;
function ChangeSlide(sens) {
/*Si sens = 1, alors on avance dans la galerie jusqu'à arriver à la 
dernière image */

numero = numero + sens;


/* Si numéro > (slide.length - 1) alors on a déjà arrivé à la 
dernière image, donc normalement on doit se pointer à la première image 
(d'index 0) de la galerie:*/
if (numero > slide.length - 1)
    

numero = 0;
/*Maintenant, si sens = -1, alors on doit faire des retours arrières, 
jusqu'à arriver à la première image, donc normalement on doit se pointer 
sur la dernière image (d'index slide.length -1) dans la galerie*/
if (numero < 0)
numero = slide.length - 1;
document.getElementById('slide').src = slide[numero];
}
    }
    /* on définit un array pour définir les src d'images à afficher dans le 
slider */
var slide = new Array("images/banner.jpg", "images/banner2.jpg", "images/banner3.jpg");
// on part de l'image d'index 0
var numero = 0;
function ChangeSlide(sens) {
/*Si sens = 1, alors on avance dans la galerie jusqu'à arriver à la 
dernière image */

numero = numero + sens;


/* Si numéro > (slide.length - 1) alors on a déjà arrivé à la 
dernière image, donc normalement on doit se pointer à la première image 
(d'index 0) de la galerie:*/
if (numero > slide.length - 1)
    

numero = 0;
/*Maintenant, si sens = -1, alors on doit faire des retours arrières, 
jusqu'à arriver à la première image, donc normalement on doit se pointer 
sur la dernière image (d'index slide.length -1) dans la galerie*/
if (numero < 0)
numero = slide.length - 1;
document.getElementById('slide').src = slide[numero];
}








function verifContact(){
    /* Sélectionner toutes les balises p qui sont enfants de la balise 
    form, en fait, on va les utiliser pour afficher les erreurs de saisies, 
    mais tout d'abord on doit vérifier qu'elles ne contiennent pas déjà des 
    erreurs affichées*/
   let p= document.getElementsByTagName("p");
    // Effacer les anciennes erreurs s'ils existent
    for(val of p){
    val.innerHTML="";
    }
    //Définir une variable booléenne errors=false
    var errors=false;
    // Définir le pattern des emails
    var pattern=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
    // Récupérer les valeurs saisies dans les zones de textes
    var nom=document.forms["myForm"]["nom"];
    var email=document.forms["myForm"]["email"];
    var sujet=document.forms["myForm"]["sujet"];
    var msg=document.forms["myForm"]["msg"];
    /* Si le nom est vide: afficher l'erreur dans la balise p ayant 
    l'id=ErrorName et mettre la variable errors à true */
    if(nom.value == ""){
    document.getElementById('ErrorName').innerHTML="le nom est vide!";
   
    errors=true;
}
    /* Si l'email est vide ou invalide: afficher l'erreur dans la balise 
    p ayant l'id=ErrorEmail et mettre la variable errors à true */
    if(!pattern.test(email.value) || email.value == ""){
        document.getElementById('ErrorEmail').innerHTML="email est vide ou invalide!";
        errors=true;

    }
    /* Si le sujet est vide: afficher l'erreur dans la balise p ayant 
    l'id=ErrorSujet et mettre la variable errors à true */
     if (sujet.value == ""){
        document.getElementById('ErrorSujet').innerHTML='sujet est vide!';
       
         errors=true;
    }
    /* Si le message est vide ou inva(lide: afficher l)'erreur dans la 
    balise p ayant l'id=ErrorMsg et mettre la variable errors à true */
 if(msg.value == ""){
    document.getElementById('ErrorMsg').innerHTML='le message est vide!';
    
}
    
    // S'il n'existe aucune erreur, alors soumettre le formulaire
   if(errors==false){
    document.getElementById('myForm').submit()
        
    }
    
    }













    function loadDoc(url) {
        //On crée une nouvelle Requête de type XMLHttpRequest
        var invocation = new XMLHttpRequest();
        
        /*On définit la fonction de rappel (onload) qui doit contenir le code 
        à exécuter lorsque la réponse HTTP est prête */
        invocation.onload = function() {
        /*on sélectionne de la page index.html, la balise HTML dans laquelle 
        on va afficher le formulaire de contact */
        var emplacement= document.getElementsByTagName("main")[0];
        /* On replace l'ancien contenu de la balise par le contenu de la 
        réponse HTTP */
        emplacement.innerHTML = this.responseText;
        }
        /* On définit la méthode d'envoie et l'url demandé par la requête 
        HTTP */
        invocation.open("GET", url, true);
        // On envoie la requête au serveur
        invocation.send();
        }
        






