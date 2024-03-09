/* const plus = document.querySelectorAll('.plus'); */
const btn =document.querySelectorAll('.button');

for(let i of btn){
    i.addEventListener('click',function(e){
        const plus = this.querySelector('.plus');
        const p = this.querySelector('p');
        if(plus.getAttribute('src') === "images/icon-plus.svg"){
            plus.src = "images/icon-minus.svg";
            p.classList.toggle('open');
        } else{
            plus.src = "images/icon-plus.svg";
            p.classList.toggle('open');
        }
    });
}
