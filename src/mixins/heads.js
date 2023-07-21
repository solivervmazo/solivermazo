function creatMeta(
    description,
    url,
    type,
    title,
    img = 'https://solivervmazo.github.io/solivermazo/solivervmazo.png'
) {
    if(!img)  img = 'https://solivervmazo.github.io/solivermazo/solivervmazo.png'
    return [
        {
          name: 'description',
          content: description,
        },
        //OpenGraph
        {
          property: 'og:description',
          content:  description,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          property: 'og:url',
          content: 'https://solivervmazo.github.io/solivermazo/' + url,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:image',
          content: img,
        },
        //Twitter
        {
          property: 'twitter:description',
          content: description,
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image' ,
        },
        {
          property: 'https://solivervmazo.github.io/solivermazo/' + url,
          content: url,
        },
        {
          property: 'twitter:title',
          content: title,
        },
        {
          property: 'twitter:image',
          content: img,
        },
      ];
}

export { creatMeta }