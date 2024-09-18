---
title: Denis Starov CV
description: Digital designer, web developer and multimedia artist
date: 2024-01-29
experience:
  - position: Interactive experience developer
    company: Playtronica
    company_url: https://playtronica.com
    title: Freelance
    start: 2022
    end: 2024
    description: I developed a number of web-apps complementary to the hardware synths collection
    skills:
      - Remote team work experience
      - MIDI enabled Tone.js music synthesizer and custom SVG visualization for TouchMe Experience
      - A Tone.js synthesizer and visualizer of musical notes played on a MIDI controller or a computer keyboard
      - Interactive user experience with multiple scenes and usage statistics
      - SVG animations, full-screen mode and other modern web tech
      - Lightweight UI and reactive database for the Web Synth Collection
      
  - position: Education course author and narrator
    company: SkillBox
    company_url: https://skillbox.ru
    title: Visual Music Theory video-course
    start: 2022
    end: 2023
    skills:
      - Online course presenter experience with a complete video production team
      - Deep research verified and mapped with a professional methodologist
      - Work with remote students and educational materials production

  - position: Product designer
    company: SkillPad
    title: Self-employed
    start: 2018
    end: 2021
    skills:
      - Adobe Illustrator vector design for print and packaging
      - Print shop communication and comprehensive print material research
      - Customer relations and product quality control
  - position: Chief System Administator
    company: OGCC Ltd.
    title: IT support
    start: 2010
    end: 2023
    skills: 
      - Server setup and maintenance
      - Software and IT services management
      - Purchase and servicing of computers, components and peripherials
      - Consulting on IT strategy and selection of tools
      - User access and passwords management
      - Domain names and web hosting management
      - Web-site development 
      - Email, VPN and RDP services configuration
      - Technical education for staff
      - Backups and network security

skillset:
  Frontend Development:
    - HTML5
    - CSS3
    - JavaScript (ES6+)
    - Vue 3
    - Vite 5
    - Vitepress static site build
    - VueUse composables
    - UnoCSS (Tailwind CSS)
    - Markdown
    - PUG
    - GUN
  
  Web browser APIs:
    - SVG, Canvas 2D and GLSL shader graphics and animation
    - Web Audio API (Tone.js and Elementary.audio)
    - Web MIDI API (WebMIDI.js)
    - Fullscreen API and Intersection Observer API
    - File Reader API, Clipboard API, Web Share API
    - Local Storage API and IndexedDB for client-side data storage
    - Web Bluetooth API (Chromium browsers)
    - Installable PWAs and desktop/mobile apps build with Tauri
 
  Backend Development:
    - Node
    - FileSystem API, Fetch API, ES6 data parsing
    - Nuxt SSR, SSG, Server API routes
    - Directus PostgreSQL schema, REST API design and Flow Server Actions
    - Self-hosted Docker deployments with Coolify and Portainer
  
  Auxiliary development:
    - Git
    - NPM package releases and versioning
    - GitHub actions CI/CD
    - GitHub pages static hosting
    - ESP32 prototype firmware build and upload
    - Basic cryptographic literacy (DH, RSA, content-addressing) 

  Design:
    - Adobe Illustrator vector design
    - Package design
    - Logo and brand identity design
    - Pre-press layout preparation

  Multimedia:
    - Music production in Logic Pro and Ableton
    - Live music performance with portable synth setup
    - Field and studio sound recording and editing
    - Reportage and studio photography
    - Cinema drone flight and filming

projects:

  - position: Researcher and Developer
    company: chromatone.center
    company_url: https://chromatone.center
    title: Visual Music Theory 
    start: 2014
    end: Present
    skills:
      - Visual Music Theory research from the very basics to profound composition knowledge
      - Knowledge packed in Theory articles and learning experience packed in Practice web-apps for everyone
      - Real life tested and refined Vue + Vitepress web-app build process
      - Working print shop and custom LMS in development

  - position: Musician, composer and live music performer
    company: tsoop.com
    company_url: https://tsoop.com
    title: Independent artist
    start: 2017
    end: Present
    skills:
      - Live multimedia generation - both music and visuals in sync
      - Full portable electronic music performance and recording setup
      - 5 albums and 2 singles published on all major platforms

  - position: Journalist, designer, video producer, craftsman and administrator
    company: ooley.ru
    company_url: https://tsoop.com
    title: Independent artist
    start: 2012
    end: 2022
    skills:
      - Makerspace catalog and up-to-date map
      - Interviews and video reviews recording, editing and publishing
      - Educational events planning and conducting
      - Full brand design and media package

---

<script setup>
import MyExperience from '../../components/MyExperience.vue'
import SkillSet from '../../components/SkillSet.vue'
</script>

## Profile

I am a digital designer and frontend developer with very wide skillset. I have more than 12 years of experience in web technologies. I build UI with Vue and many other amazing open source libraries. I can build an interactive experience or a digital product from ground up by myself or or in collaboration with a remote team.

I am passionate about working on impactful projects. I'm open for participation in creative industry and art projects, involving experiments with audio synthesis, vector graphics, web animations, interfaces and intermedia. Macing code open source is very welcomed but optional. Let's build something together!

[GitHub Profile](https://github.com/davay42) | [Personal Website](http://starovdenis.com) | [LinkedIn profile](https://www.linkedin.com/in/denis-starov/)

----------

## Skillset

<SkillSet :skillset="$frontmatter.skillset" />

## Education

### Bachelor of Engineering - BE

#### **2004–2008**

#### High School of Composite Materials

#### Mendeleev University of Chemical Technology of Russia

- Chemical Engineering (Glass Ceramics)
- Technical English Translation

## Languages

- **Russian** - Native speaker
- **English** - Upper intermediate - B2
- **Thai** - Elementary

---

## Work experience

<MyExperience :list="$frontmatter?.experience" />

## Projects

<MyExperience :list="$frontmatter?.projects" />

---

## NPM Packages Maintainer

- [use-chromatone](https://www.npmjs.com/package/use-chromatone) - Interactive visual music toolkit
  ![badge](https://img.shields.io/npm/v/use-chromatone)

- [Gun-Avatar](https://gun-avatar.js.org) - Simple JS avatar generator for use with SEA Cryptographic keypairs
  ![badge](https://img.shields.io/npm/v/gun-avatar)

- [Gun-Vue](https://gun-vue.js.org) - Toolset for easy p2p app development with Gun database and Vue 3 reactive components system
  ![badge](https://img.shields.io/npm/v/@gun-vue/app)

---

## Let's build something together

I create purposeful web-sites and internal tools for any business and personal use. It may be anything from the list:

- Portfolio or Catalog static site built with Vitepress,
- Blog with Comments and Reactions, served by Nuxt,
- Internal CRM with analytics based on Directus,
- Online Shop with payments API from Stripe or other provider,
- Resource Management system with e-mail or other notifications system,
- Internal Knowledge Base with certain fields available as public APIs and in your employee/customer web-app,
- a discussion and rating platform for any goods and services...
- and any of [100 Tools, Apps, and Platforms I Can Build With My Stack](/web-dev/all)

I can provide custom databases, logic and interfaces need for your business. Let's talk!

## I'm available for freelance projects and part/fulltime hire

My [project based workflow page](/projects/workflow) is here to clarify the process of our mutually beneficial cooperation.

---

## Contact me

- **Email:** [me@starovdenis.com](mailto:me@starovdenis.com)
- **Telegram:** [@starov](https://t.me/starov)
- **LinkedIn:** [Denis Starov](https://www.linkedin.com/in/denis-starov/)
