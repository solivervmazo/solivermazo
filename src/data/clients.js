// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const clients = [
	{
        id: 1,
        title: 'Amazon',
        img:  new URL('../assets/images/brands/amazon_gray.png', import.meta.url).href,
    },
    {
        id: 2,
        title: 'Sony',
        img:  new URL('../assets/images/brands/sony_gray.png', import.meta.url).href,
    },
    {
        id: 3,
        title: 'Adidas',
        img:  new URL('../assets/images/brands/adidas_gray.png', import.meta.url).href,
    },
    {
        id: 4,
        title: 'FILA',
        img:  new URL('../assets/images/brands/fila_gray.png', import.meta.url).href,
    },
    {
        id: 5,
        title: 'NB',
        img:  new URL('../assets/images/brands/nb_gray.png', import.meta.url).href,
    },
    {
        id: 6,
        title: 'SAMSUNG',
        img:  new URL('../assets/images/brands/samsung_gray.png', import.meta.url).href,
    },
    {
        id: 7,
        title: 'CANON',
        img:  new URL('../assets/images/brands/canon_gray.png', import.meta.url).href,
    },
    {
        id: 7,
        title: 'PUMA',
        img:  new URL('../assets/images/brands/puma_gray.png', import.meta.url).href,
    },
];

export default clients;
