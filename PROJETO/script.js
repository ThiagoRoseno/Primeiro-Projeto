function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    //pega a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./Assets/Avatar-light.png")
    }
    else {
        // set tiver sem light mode, manter a imagem padrao
        img.setAttribute("src", "./Assets/Avatar.png")

    }
}