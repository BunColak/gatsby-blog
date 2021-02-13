import "normalize.css"
import 'github-markdown-css';
import "./src/styles/global.css"

const setTheme = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    import('highlight.js/styles/atom-one-dark.css').then(() => {
      document.documentElement.classList.add('dark')
    })
  } else {
    import('highlight.js/styles/github.css').then(() => {
      document.documentElement.classList.remove('dark')
    })
  }
}

window.setTheme = setTheme
window.onload = () => {
  setTheme()
}