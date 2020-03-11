const priceBoxExample = () => {
  const priceBoxBottom = document.getElementsByClassName("price-box-bottom")[0];
  priceBoxBottom.addEventListener("click", function() {
    priceBoxBottom.classList.toggle('active');
  })
}

export {priceBoxExample}
