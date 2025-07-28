export function gitNav() {
    let block = document.querySelector(".git-nav-box");
    if(!block){return null}
    
    block.addEventListener("click", function() {
        block.classList.toggle("show");
    })
    };
    gitNav();