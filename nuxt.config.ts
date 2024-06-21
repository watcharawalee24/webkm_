// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/styles/styleAll.css',
    '~/assets/styles/styleG.css',

  ],
  modules: [
    '@pinia/nuxt',
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/image/iii.png' },
        { rel: 'stylesheet', href: '/css/stindex.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css',
          integrity: 'sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer'
        },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://getbootstrap.com/docs/5.3/assets/css/docs.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Crimson+Pro' },
        // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://getbootstrap.com/docs/5.3/assets/css/docs.css' }
      
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js' },
        { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' },
        { src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"},
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' },
    
      ],
    }
  }
}) 
