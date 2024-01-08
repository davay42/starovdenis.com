import { useItem } from "./directus"


export default {
  async load() {
    const meta = await useItem('meta', 1)
    return meta
  }

}