const jsConfetti = new JSConfetti()

const button = document.querySelectorAll('.letter-buttons')

button.forEach(btn =>{
    btn.addEventListener('click', () => jsConfetti.addConfetti())
})

