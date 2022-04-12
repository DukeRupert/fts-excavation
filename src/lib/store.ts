import {writable} from 'svelte/store'
import {thumbsup, wrench, heart, mail} from './icons.js'

export const links = writable([
  {title: 'Projects', path: '/projects', svg: wrench},
  {title: 'About', path: '/about-us', svg: heart},
  {title: 'Contact', path: '/contact-us', svg: mail}
])

export const tel = writable({
  pretty: '253-439-8003',
  href: 'tel:2534398003',
  area: '253',
  prefix: '439',
  line: '8003'
})
