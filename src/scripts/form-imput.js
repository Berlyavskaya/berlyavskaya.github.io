// работает только с первым полем

;var input = document.querySelector('.form__input');
var label = document.querySelector('.form__block');
var iconForm = document.querySelector('.icon__form');


input.addEventListener('input', function(evt){
    label.style.borderBottom="2px solid #5500f2";
    iconForm.style.fill="#5500f2";
    iconForm.style.opacity="1";

})
input.addEventListener('change', function(evt2){
    label.style.borderBottom="2px solid #fff";
    iconForm.style.fill="#fff";
    iconForm.style.opacity="0.3";

})

