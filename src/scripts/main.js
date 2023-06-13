const buttonsGroupSelector =
  'div.overlay.style-scope.ytd-reel-video-renderer > ytd-reel-player-overlay-renderer > #actions'

const observer = new MutationObserver(mutations => {
  if (document.querySelector(buttonsGroupSelector)) {
    const buttonsGroup = document.querySelectorAll(buttonsGroupSelector)

    buttonsGroup.forEach(buttonGroup => {
      if (buttonGroup.firstElementChild.id === 'watchFully')
        return;

      const addedButton = buttonGroup.insertBefore(
        document.createElement('button'),
        buttonGroup.firstChild
      )

      addedButton.className =
        'yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-l yt-spec-button-shape-next--icon-button'
      addedButton.id = 'watchFully'
      addedButton.addEventListener('click', () => {
        const videoId = window.location.href.split('/')[4]
        window.location.href = `https://youtube.com/watch?v=${videoId}`
      })
      addedButton.innerHTML =
        '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>'
    })
  }
})

observer.observe(document.body, {
  childList: true,
  subtree: true
})

