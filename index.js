window.addEventListener('scroll', () => {
    checkScroll()
})

function checkScroll() {
    if(screen.availWidth > 767){
        if (window.scrollY > 0) {
            document.getElementById('sidebar').style.opacity = '0.7'
        } else {
            document.getElementById('sidebar').style.opacity = '1'
        }
    } 
}