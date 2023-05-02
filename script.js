const changeThemeBtn = document.querySelector("#change-theme");
const labelDarkMode = document.querySelector("#labelDarkMode")
const textDarkMode = document.querySelector("#textDarkMode")
const leftColumn = document.querySelector("#leftColumn")
const sobreCard = document.querySelector("#sobreCard")
const sobreCardTitle = document.querySelector("#sobreCardTitle")
const experienciaCard = document.querySelector("#experienciaCard")
const experienciaCardTitle = document.querySelector("#experienciaCardTitle")
const educacaoCard = document.querySelector("#educacaoCard")
const educacaoCardTitle = document.querySelector("#educacaoCardTitle")
const projetosCard = document.querySelector("#projetosCard")
const projetosCardTitle = document.querySelector("#projetosCardTitle")
const subtitleExperiencias = document.querySelector("#subtitleExperiencias")
const subtitleEducacao1 = document.querySelector("#subtitleEducacao1")
const subtitleEducacao2 = document.querySelector("#subtitleEducacao2")


changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("w3-light-grey")
    document.body.classList.toggle("dark")

    labelDarkMode.classList.toggle("w3-light-grey")
    labelDarkMode.classList.toggle("dark")
    textDarkMode.classList.toggle("w3-text-black")


    leftColumn.classList.toggle("w3-white")
    leftColumn.classList.toggle("w3-grey")
    leftColumn.classList.toggle("w3-text-grey")
    leftColumn.classList.toggle("w3-text-black")

    sobreCard.classList.toggle("w3-white")
    sobreCard.classList.toggle("w3-grey")
    sobreCardTitle.classList.toggle("w3-text-grey")
    sobreCardTitle.classList.toggle("w3-text-black")
    
    experienciaCard.classList.toggle("w3-white")
    experienciaCard.classList.toggle("w3-grey")
    experienciaCardTitle.classList.toggle("w3-text-grey")
    experienciaCardTitle.classList.toggle("w3-text-black")

    educacaoCard.classList.toggle("w3-white")
    educacaoCard.classList.toggle("w3-grey")
    educacaoCardTitle.classList.toggle("w3-text-grey")
    educacaoCardTitle.classList.toggle("w3-text-black")

    projetosCard.classList.toggle("w3-white")
    projetosCard.classList.toggle("w3-grey")
    projetosCardTitle.classList.toggle("w3-text-grey")
    projetosCardTitle.classList.toggle("w3-text-black")
    
    subtitleExperiencias.classList.toggle("w3-opacity")
    subtitleEducacao1.classList.toggle("w3-opacity")
    subtitleEducacao2.classList.toggle("w3-opacity")
});