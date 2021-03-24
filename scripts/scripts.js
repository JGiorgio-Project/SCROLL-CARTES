/*============ Récupération des dimensions ============*/
let hauteurVisible = document.body.clientHeight;
let hauteurSection1 = section1.clientHeight;
let hauteurSection2 = section2.clientHeight;
let hauteurSection3 = section3.clientHeight;
let hauteurSection4 = section4.clientHeight;

/*============ EventListener sur le document ============*/
document.addEventListener('scroll', (event) =>{
    if (window.scrollY >= hauteurVisible){
        section2.classList.remove('fixed')
    }
    if (window.scrollY < hauteurVisible){
        section2.classList.add('fixed')
    }

    if (window.scrollY >= (hauteurVisible+hauteurSection2)){
        section3.classList.remove('fixed')
    }
    if (window.scrollY < (hauteurVisible+hauteurSection2)){
        section3.classList.add('fixed')
    }

    if (window.scrollY >= hauteurSection2 ){
        section2.classList.add('backgroundScroll');
    }
    if (window.scrollY < hauteurSection2 ){
        section2.classList.remove('backgroundScroll');
    }

    if (window.scrollY >= (hauteurSection2 + hauteurSection3)){
        section3.classList.add('backgroundScroll');
    }
    if (window.scrollY < (hauteurSection2 + hauteurSection3)){
        section3.classList.remove('backgroundScroll');
    }

    blackSection2.style.opacity = opacity((hauteurSection1*0.35), hauteurVisible,0,0.7);
    blackSection3.style.opacity = opacity((hauteurSection2), (hauteurSection1+hauteurSection2),0,0.7);
    blackSection4.style.opacity = opacity((hauteurSection2+hauteurSection3), (hauteurSection1+hauteurSection2+hauteurSection3),0,0.7);

});


/*============ Fonctions utiles ============*/
/**
 * Fonction permet de calculer l'opacité en fonction du scroll.
 * Elle retourne une valeur d'opcité.
 * @param debut
 * @param fin
 * @param valMin
 * @param valMax
 * @param log
 * @returns {number}
 */
function opacity(debut, fin, valMin = 0, valMax = 1, log = 0){
    if ( window.scrollY > debut && window.scrollY < fin){
        let opacity = (100 - (((window.scrollY-debut)*100)/(fin - debut)))*0.01;
        if (opacity < valMin){
            opacity = valMin;
        }
        if (opacity > valMax){
            opacity = valMax;
        }
        if (opacity < 0.05){
            opacity = 0;
        }
        if (opacity > 0.98){
            opacity = 1;
        }
        if (log === 1){
            console.log('opacity = '+opacity+' | debut = '+debut+' | fin = '+fin+' | scroll = '+ window.scrollY)
        }
        return opacity;
    }
}