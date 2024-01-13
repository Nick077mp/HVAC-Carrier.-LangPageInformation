//camelCase variables

export const gettingButton = () => {
    const findingButton = document.querySelector('.hamburgerButton')
    const findingMenu = document.querySelector('.hamburgerMenu')

    findingButton.addEventListener('click', () => {
        findingMenu.classList.toggle('activate_hamburgermenu_JS')
    })
}

gettingButton()