const btnOpenElement = document.querySelector('#open')

btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true

  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    coverElement.style.zIndex = -1

    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'

    // Redirigir después de abrir la carta
    setTimeout(() => {
      window.location.href = 'https://sites.google.com/view/bodaceciliayjavier/home'; // Redirección al enlace proporcionado
    }, 1000); // Espera 1 segundo antes de redirigir

  }, 500)
})
