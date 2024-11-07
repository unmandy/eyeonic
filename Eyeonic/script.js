const buttons = document.querySelectorAll("[data-carousel-nav]");

buttons.forEach(button =>{
    button.addEventListener("click",()=>{
        const offset = button.dataset.carouselNav === "next" ? 1 : -1
        const items = button.closest("[data-carousel]")
        .querySelector("[data-items]")
        const activeItem = items.querySelector("[data-active]")
        let newIndex = [...items.children].indexOf(activeItem) + offset
        if(newIndex < 0) newIndex = items.children.length - 1
        if(newIndex >= items.children.length) newIndex = 0

        items.children[newIndex].dataset.active = true
        delete activeItem.dataset.active
    })
})

// (function (){
//     const filterbtn = document.querySelectorAll('.buttons');
//     const productItems = document.querySelectorAll('.products');

//     filterbtn.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault()
//             const filter = e.target.dataset.filter;

//             productItems.forEach((item) => {
//                 if(filter === 'all'){
//                     item.style.display = 'block';
//                 }
//                 else{
//                     if(item.classList.contains(filter)){
//                         item.style.display = 'block';
//                     }else{
//                         item.style.display = 'none';
//                     }
//                 }
//             })
//         })
//     })
// })();


