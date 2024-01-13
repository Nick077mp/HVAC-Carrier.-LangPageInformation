window.onload = () => {

    const containerSplide = document.querySelector('.splide')

    new Splide(containerSplide, {
        type: 'loop',
        autoplay: true,
        interval: '5000'
    }).mount();

    const findingButton = document.querySelector('.hamburgerButton_JS')
    const findingMenu = document.querySelector('.hamburgerMenu_JS')
    const findingTitle = document.querySelector('.titleSection1_JS')
    const findingSection3 = document.querySelector('.section-3')

    findingButton.addEventListener('click', () => {
        findingMenu.classList.toggle('activate_hamburgermenu_JS')
        findingTitle.classList.toggle('activate_titleSection1_JS')
        findingSection3.classList.toggle('activate_section3_JS')
    })

    const footer = document.querySelectorAll('.scroll-animation')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('mostrar', entry.isIntersecting);
        })
    })

    footer.forEach((seccion) => observer.observe(seccion));
  
}
