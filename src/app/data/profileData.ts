import { profileDataModel } from '../model/profileModel';

interface profileData {
  EN: profileDataModel;
  PT: profileDataModel;
}

export const profileData: profileData = {
  EN: {
    sectionTitle: 'profile',
    sectionId: 'profile',
    profileData: [
      "Hey! I'm Stephanie, a Web Developer and Information Systems undergraduate student at UFSC. My journey is marked by a strong adaptation to new challenges, resilience, and a continuous passion for learning.",
      'During my academic journey, I developed skills in technologies such as TypeScript, Angular, React, Node, and others. I participated in extension programs and practical projects that consolidated my technical knowledge and teamwork skills. Currently, I am seeking opportunities to grow in the web development field, focusing on enhancing the skills I already master in both Front-end and Back-end.',
      'My commitment is to excellence and continuous learning, always seeking new challenges and opportunities to innovate.',
    ],
  },
  PT: {
    sectionTitle: 'perfil',
    sectionId: 'profile',
    profileData: [
      'Hey! Sou a Stephanie, Desenvolvedora Web, graduanda de Sistemas de Informação na UFSC. Minha trajetória é marcada por uma forte adaptação a novos desafios, resiliência e uma paixão contínua pelo aprendizado.',
      'Durante minha jornada acadêmica, desenvolvi competências em tecnologias como TypeScript, Angular, React, NodeJs, e outras. Participei de programas de extensão e projetos práticos que consolidaram meu conhecimento técnico e habilidades de trabalho em equipe. Atualmente, busco oportunidades para crescer na área de desenvolvimento web, focando em aprimorar as habilidades que já domino tanto em Front-end quanto em Back-end.',
      'Meu compromisso é com a excelência e o aprendizado contínuo, sempre buscando novos desafios e oportunidades para inovar.',
    ],
  },
};
