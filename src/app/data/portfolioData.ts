import { portfolioModel } from "../model/portfolioModel";

export const portfolio: portfolioModel[] = [
    {
        status: '',
        linkImage: 'assets/img/portfolio/todolist.png',
        title:'To-Do List',
        description: 'A React application for a to-do list. The application allows the user to add, mark tasks as done, and delete tasks from the list.',
        tecnologies: ['React', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'],
        linkPage: 'https://to-do-list-steph-cs.vercel.app/',
        linkRepo: 'https://github.com/steph-cs/to-do-list-react'
    },
    {
        status: 'API indisponível',
        linkImage: 'assets/img/portfolio/currency-converter.png',
        title:'Currency Converter',
        description: 'An Angular application for performing currency conversion between different currencies. The application consumes the currency conversion service, exchangerate: https://exchangerate.host/. ...',
        tecnologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'AngularMaterial', 'Bootstrap'],
        linkPage: 'https://conversor-de-moedas-residencia-iuul.vercel.app/',
        linkRepo: 'https://github.com/steph-cs/conversor-de-moedas-residencia-iuul'
    },
    {
        status: '',
        linkImage: 'assets/img/portfolio/rickandmorty.png',
        title:'Rick and Morty Angular',
        description: 'Angular application for listing and describing characters, locations, and episodes from the TV show Rick And Morty. The application consumes the API: https://rickandmortyapi.com/. ...',
        tecnologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        linkPage: 'https://rick-and-morty-angular-scs.vercel.app/',
        linkRepo: 'https://github.com/steph-cs/rick-and-morty-angular'
    },
    {
        status: '',
        linkImage: 'assets/img/portfolio/pokedex.png',
        title:'Pokedex',
        description: 'A JavaScript application for listing Pokémon. The application consumes the PokeApi: https://pokeapi.co/. This project aims to practice JavaScript language skills and service consumption. ...',
        tecnologies: ['HTML', 'CSS', 'JavaScript'],
        linkPage: 'https://pokedex-scs.vercel.app/',
        linkRepo: 'https://github.com/steph-cs/dio-pokedex'
    },
    {
        status: '',
        linkImage: 'assets/img/portfolio/buzzfeed-clone.png',
        title:'BuzzFeed Clone',
        description: 'An Angular application that brings a quiz based on the BuzzFeed quiz interface. The application consumes a JSON file containing the quiz questions and answers, as well as its results. ...',
        tecnologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        linkPage: 'https://dio-clone-buzzfeed.vercel.app/',
        linkRepo: 'https://github.com/steph-cs/dio-clone-buzzfeed'
    },
    {
        status: '',
        linkImage: 'assets/img/portfolio/login-page.png',
        title:'Login Page',
        description: 'Responsive login/registration screen. Some layout modifications were made based on a snippet, and media queries were applied for responsiveness.',
        tecnologies: ['HTML', 'CSS', 'JavaScript'],
        linkPage: 'https://tela-login-responsiva.vercel.app/',
        linkRepo: 'https://github.com/steph-cs/tela-login-responsiva'
    }
]