
const radioButtonsExample = () => {
  const radioCards = document.getElementsByClassName('radio-card')
  for (let i = 0; i < radioCards.length; i++) {
    radioCards[i].addEventListener('change', function () {
      for (let i = 0; i < radioCards.length; i++) {
        radioCards[i].classList.remove('active')
      }

      if (!this.classList.contains('active')) {
        this.classList.add('active')
      }
    })
  }
}

export { radioButtonsExample }
