var topo = document.body

function toTop() {
    topo.scrollIntoView({behavior:"smooth"})
}
function scrollTo(element) {
    document.querySelector(element).scrollIntoView({behavior:"smooth"})
}
document.querySelector("#animes").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo("#fav-animes")
})
document.querySelector("#filmes").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo("#fav-filmes")
})
document.querySelector("#redes").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo("#fav-redes")
})
document.querySelector("#livros").addEventListener("click" , function(event) {
    event.preventDefault()
    scrollTo("#fav-livros")
})
