let status = false;

let mobMode = function() {
    let mobileMenu = document.querySelector('.mob-dropdown');
    let mobileUl = document.querySelector('.mob-ul');
    let mobileLi = document.querySelectorAll('.mob-li a');

    if(status === false) {
        mobileMenu.style.height="600px";
        mobileUl.style.display="block";
        mobileUl.style.visibility="visible";
        

        for(let i=0; i < mobileLi.length; i++) {
            mobileLi[i].style.opacity="1";
        }

        status = true;

    } else if(status === true) {
        mobileMenu.style.height="0.1px";
        mobileUl.style.visibility="hidden";

        for(let i=0; i < mobileLi.length; i++) {
            mobileLi[i].style.opacity="0";
        }

        status = false;
    }
}