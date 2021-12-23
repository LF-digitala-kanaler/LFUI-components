
const checkboxCardExample = () => {
  const checkboxCards = document.getElementsByClassName('checkbox-card')
  if (checkboxCards.length) {
    for (let i = 0; i < checkboxCards.length; i++) {
      checkboxCards[i].addEventListener('change', function () {
        if (!this.classList.contains('active')) {
          this.classList.add('active')
        } else {
          this.classList.remove('active')
        }
      })
    }
  }
}
export { checkboxCardExample }
