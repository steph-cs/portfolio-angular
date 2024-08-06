export interface navbarData {
  title: string;
  link: string;
}

export const navbarData = {
  EN: [
    { title: 'Home', link: 'home' },
    { title: 'Profile', link: 'profile' },
    { title: 'Portfolio', link: 'portfolio' },
    { title: 'Formation', link: 'formation' },
    { title: 'Experience', link: 'experience' },
    { title: 'Contact', link: 'contact' },
  ],
  PT: [
    { title: 'Home', link: 'home' },
    { title: 'Perfil', link: 'profile' },
    { title: 'Portfólio', link: 'portfolio' },
    { title: 'Formação', link: 'formation' },
    { title: 'Experiência', link: 'experience' },
    { title: 'Contato', link: 'contact' },
  ],
};

export interface bannerData {
  title: string;
}

export const bannerData = {
  EN: { title: "I'M STEPHANIE." },
  PT: { title: 'SOU A STEPHANIE.' },
};

