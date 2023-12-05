import { cardCarouselModel } from "../model/cardCarouselModel";

export const portfolio: cardCarouselModel[] = [
    {
        linkImage: 'assets/img/portfolio/currency-converter.jpeg',
        title:'Currency Converter',
        description: 'An Angular application for performing currency conversion between different currencies. The application consumes the currency conversion service, exchangerate: https://exchangerate.host/. ...',
        tecnologies: ['HTML', 'CSS'],
        linkPage: 'https://github.com/steph-cs/conversor-de-moedas-residencia-iuul'
    },
    {
        linkImage: 'assets/img/portfolio/rickandmorty.jpg',
        title:'Rick and Morty Angular',
        description: 'Angular application for listing and describing characters, locations, and episodes from the TV show Rick And Morty. The application consumes the API: https://rickandmortyapi.com/. ...',
        tecnologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        linkPage: 'https://github.com/steph-cs/rick-and-morty-angular'
    },
    {
        linkImage: 'assets/img/portfolio/pokedex.jpeg',
        title:'Pokedex',
        description: 'A JavaScript application for listing Pokémon. The application consumes the PokeApi: https://pokeapi.co/. This project aims to practice JavaScript language skills and service consumption. ...',
        tecnologies: ['HTML', 'CSS', 'JavaScript'],
        linkPage: 'https://github.com/steph-cs/dio-pokedex'
    },
    {
        linkImage: 'assets/img/portfolio/buzzfeed-clone.jpeg',
        title:'BuzzFeed Clone',
        description: 'An Angular application that brings a quiz based on the BuzzFeed quiz interface. The application consumes a JSON file containing the quiz questions and answers, as well as its results. ...',
        tecnologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        linkPage: 'https://github.com/steph-cs/dio-clone-buzzfeed'
    },
    {
        linkImage: 'assets/img/portfolio/login-page.png',
        title:'Login Page',
        description: 'Responsive login/registration screen. Some layout modifications were made based on a snippet, and media queries were applied for responsiveness.',
        tecnologies: ['HTML', 'CSS', 'JavaScript'],
        linkPage: 'https://github.com/steph-cs/tela-login-responsiva'
    },
    {
        linkImage: 'assets/img/portfolio/lokacar.png',
        title:'LokaCar',
        description: 'LokaCar is a web-based vehicle rental system. It was developed for the Web Programming course, where knowledge and skills for building both the Front and Back end were developed. ...',
        tecnologies: ['HTML', 'CSS', 'Bootstrap','JavaScript', 'Java', 'SpringBoot', 'PostgreSQL'],
        linkPage: 'https://github.com/steph-cs/lokaCar-sistema-web'
    },
    {
        linkImage: 'assets/img/portfolio/instagram-login-clone.jpeg',
        title:'Instagram Login Clone',
        description: 'Instagram login page clone. Developed during the Digital Innovation One HTML Web Developer Bootcamp.',
        tecnologies: ['HTML', 'CSS'],
        linkPage: 'https://github.com/steph-cs/clone-instagram'
    }
]