const posts = [
    {
        titulo: 'COMO FUNCIONAN LOS ARBOLES DE REPRODUCCIÓN',
        descripcion: 'Si quieres reproducir o criar 3 axies de manera infinita, en esta guía te muestro como se hace de la manera más fácil y económica posible. De esta forma aparearemos los axies 2 veces (para gastar solo 900 SLP).',
        img: "/img/posts/arbol.jpg",
        url: "/posts/arbol-de-reproduccion",
        id: 1,
    },
    {
        titulo: 'PASO A PASO COMO CONFIGURAR TODO PARA COBRAR TU DINERO DE AXIE INFINITY',
        descripcion: '',
        img: "/img/posts/binance.jpg",
        url: "/posts/configuracion-correcta-para-cobrar",
        id: 2,
    },
    {
        titulo: 'PASO A PASO COMO SE CREAN LAS BECAS',
        descripcion: '',
        img: "/img/posts/becas.jpg",
        url: "/posts/como-crear-becas",
        id: 3,
    },
    {
        titulo: 'COMO CREAR TU EQUIPO DE AXIE INFINITY MAS ECONOMICO',
        descripcion: '',
        img: "/img/posts/economico.png",
        url: "/posts/cuenta-mas-economica",
        id: 4,
    },
    {
        titulo: 'CUANTO DINERO GANAN NUESTROS BECADOS',
        descripcion: '',
        img: "/img/posts/becas1.jpeg",
        url: "/posts/ganancia-de-nuestros-becados",
        id: 5,
    },
    {
        titulo: 'COMO REPRODUCIR TUS AXIES DE MANERA CORRECTA',
        descripcion: '',
        img: "/img/posts/crianza.jpg",
        url: "/posts/reproduccion-axies",
        id: 6,
    },
    {
        titulo: 'LA MANERA MAS RAPIDA DE GANAR SLP Y EXP EN AXIE INFINITY',
        descripcion: '',
        img: "/img/posts/slp.png",
        url: "/posts/como-ganar-slp-y-exp",
        id: 7,
    },
    {
        titulo: '¿QUE ES UN TERMINATOR?',
        descripcion: '',
        img: "/img/posts/terminator.png",
        url: "/posts/que-es-un-terminator",
        id: 8,
    },

]


module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    about: (req, res) => {
        res.render('acerca-de')
    },
    contacto: (req, res) => {
        res.render('contacto')
    },
    posts: (req, res) => {
        res.render('posts', { posts: posts })
    }

}