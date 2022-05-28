const CoffeShop = document.querySelector('.CoffeShop')
const menu = document.querySelector('.menu-navegacion')

console.log (menu)
console.log (CoffeShop)

CoffeShop.addEventListener('click', ()=>{
menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target !=CoffeShop){
        menu.classList.toggle("spread")

    }

})

