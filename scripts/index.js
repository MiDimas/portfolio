document.addEventListener("DOMContentLoaded", function(event){
    function correctingSize(e){
        let menu = document.getElementsByClassName("head-link-list")[0]
        let bar = document.getElementsByClassName("bar")[0]
        let hiddenMenu = document.getElementsByClassName("hidden-menu")[0]
        if(isFinite(e)){
            var sizeWindow = e
        }
        else{
            var sizeWindow = e.target.innerWidth
        }
        if (sizeWindow > 600){
            menu.classList.remove("none")
            bar.classList.add("none")
            hiddenMenu.classList.add("none")
        }
        else {
            menu.classList.add("none")
            bar.classList.remove("none")
            hiddenMenu.classList.remove("none")
        }
    }
    correctingSize(window.innerWidth)
    window.addEventListener("resize", correctingSize)
    let bar = document.getElementsByClassName("bar")[0]
    bar.addEventListener("click", function(){
        let hiddenMenu = document.getElementsByClassName("hidden-menu")[0]
        hiddenMenu.classList.toggle("unvis-hidden-menu")
        hiddenMenu.classList.toggle("vis-hidden-menu")

    })
})