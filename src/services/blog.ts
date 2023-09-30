import type { Blog } from '../utilities/types';

const posts: Array<Blog> = [{
    id: "1",
    category: "inyección de plástico",
    title: "distribución de productos",
    date: "17 agosto 2023",
    timeRead: 5,
    titleBodyBlue: "Cómo las Canastas de Plástico ",
    titleBodyGreen: "están transformando la distribución de productos agrícolas",
    intro: "En la dinámica y cambiante industria agrícola, la eficiencia en la distribución de productos frescos es esencial. Una innovación que ha estado desempeñando un papel crucial en esta transformación es el uso creciente de canastas de plástico. Estas simples pero ingeniosas soluciones están revolucionando la forma en que las frutas y verduras llegan a nuestros supermercados y hogares. En este blog, explicaremos cómo las canastas de plástico están cambiando el juego en la distribución de productos agrícolas.",
    image: "https://a.storyblok.com/f/228332/1500x1000/b3ccd8a422/1.webp",
    outro: "Las canastas de plástico están desempeñando un papel vital en la modernización de la distribución de productos agrícolas. Su capacidad para preservar la frescura, proteger los productos, optimizar la logística y mantener altos estándares de higiene las convierte en una herramienta invaluable en la industria alimentaria. A medida que la tecnología y la innovación continúan avanzando, es emocionante pensar en cómo las canastas de plástico seguirán transformando la forma en que disfrutamos de frutas y verduras frescas en nuestro día a día."
}, {
    id: "1",
    category: "innovación",
    title: "distribución de productos",
    date: "17 agosto 2023",
    timeRead: 5,
    titleBodyBlue: "Cómo las Canastas de Plástico ",
    titleBodyGreen: "están transformando la distribución de productos agrícolas",
    intro: "En la dinámica y cambiante industria agrícola, la eficiencia en la distribución de productos frescos es esencial. Una innovación que ha estado desempeñando un papel crucial en esta transformación es el uso creciente de canastas de plástico. Estas simples pero ingeniosas soluciones están revolucionando la forma en que las frutas y verduras llegan a nuestros supermercados y hogares. En este blog, explicaremos cómo las canastas de plástico están cambiando el juego en la distribución de productos agrícolas.",
    image: "https://a.storyblok.com/f/228332/1500x1000/b3ccd8a422/1.webp",
    outro: "Las canastas de plástico están desempeñando un papel vital en la modernización de la distribución de productos agrícolas. Su capacidad para preservar la frescura, proteger los productos, optimizar la logística y mantener altos estándares de higiene las convierte en una herramienta invaluable en la industria alimentaria. A medida que la tecnología y la innovación continúan avanzando, es emocionante pensar en cómo las canastas de plástico seguirán transformando la forma en que disfrutamos de frutas y verduras frescas en nuestro día a día."
}, {
    id: "1",
    category: "innovación",
    title: "distribución de productos",
    date: "17 agosto 2023",
    timeRead: 5,
    titleBodyBlue: "Cómo las Canastas de Plástico ",
    titleBodyGreen: "están transformando la distribución de productos agrícolas",
    intro: "En la dinámica y cambiante industria agrícola, la eficiencia en la distribución de productos frescos es esencial. Una innovación que ha estado desempeñando un papel crucial en esta transformación es el uso creciente de canastas de plástico. Estas simples pero ingeniosas soluciones están revolucionando la forma en que las frutas y verduras llegan a nuestros supermercados y hogares. En este blog, explicaremos cómo las canastas de plástico están cambiando el juego en la distribución de productos agrícolas.",
    image: "https://a.storyblok.com/f/228332/1500x1000/b3ccd8a422/1.webp",
    outro: "Las canastas de plástico están desempeñando un papel vital en la modernización de la distribución de productos agrícolas. Su capacidad para preservar la frescura, proteger los productos, optimizar la logística y mantener altos estándares de higiene las convierte en una herramienta invaluable en la industria alimentaria. A medida que la tecnología y la innovación continúan avanzando, es emocionante pensar en cómo las canastas de plástico seguirán transformando la forma en que disfrutamos de frutas y verduras frescas en nuestro día a día."
}]

const getLastThreePosts: Function = ():Array<Blog> => {
    return posts.slice(0, 3)
}

export {
    getLastThreePosts
}