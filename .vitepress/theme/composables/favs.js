import { useStorage } from '@vueuse/core'
import { useData, useRoute } from 'vitepress'

export const favs = useStorage('stars', {})

export function removeFav(link) {
  if (favs.value[link]) {
    delete favs.value[link]
  }
}

export function useFav() {
  const { frontmatter } = useData()
  const route = useRoute()
  onMounted(() => {
    watch(
      [route, favs.value],
      (r) => {
        mount()
      },
      { immediate: true },
    )
  })

  function mount() {
    nextTick(() => {
      let hash = document.location.hash
      let block = document.getElementById(hash.slice(1))
      if (block) block.scrollIntoView()
      let nums = [...document.getElementsByClassName('num')]
      nums.forEach((num) => {
        let link = route.path + '#' + num.id
        if (favs.value[link]) {
          num.classList.add('fav')
        } else {
          num.classList.remove('fav')
        }
        num.addEventListener('click', setFav)
      })
    })
  }

  function setFav(event) {
    let parent = event.target.parentNode
    let content = parent ? parent.innerHTML : ''
    let fav = {
      title: frontmatter.value.title,
      subtitle: frontmatter.value.subtitle,
      stanza: event.target.innerText,
      link: route.path + '#' + event.target.id,
      content,
    }
    if (favs.value[fav.link]) {
      delete favs.value[fav.link]
    } else {
      favs.value[fav.link] = fav
    }
  }

  return { favs, mount, setFav, removeFav }
}
