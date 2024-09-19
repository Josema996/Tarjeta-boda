const btnOpenElement = document.querySelector('#open')

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true

  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(() => {
    coverElement.style.zIndex = -1

    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'

    // Abrir la canción en una nueva pestaña
    const audioWindow = window.open('URL_DE_TU_CANCION', '_blank');
    if (audioWindow) {
      // Asegúrate de que la canción se reproduzca automáticamente
      audioWindow.onload = function() {
        const audioElement = audioWindow.document.createElement('audio');
        audioElement.src = 'https://www.dropbox.com/scl/fi/uz52jc6r8c5ck54rrgwwy/utomp3.com-Bailando-Bachata-Chayanne-Karaoke.mp3?rlkey=xnev4owuuboxmb3o65x422h4p&st=1zn2mncf&dl=1'; // Reemplaza esto con la URL de tu canción
        audioElement.autoplay = true;
        audioElement.loop = true; // Opcional, si deseas que la canción se repita
        audioWindow.document.body.appendChild(audioElement);
      }
    }

    // Redirigir después de abrir la carta
    setTimeout(() => {
      window.location.href = 'https://sites.google.com/view/bodaceciliayjavier/home'; // Redirección al enlace proporcionado
    }, 1000); // Espera 1 segundo antes de redirigir

  }, 500)
})