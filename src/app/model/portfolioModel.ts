export interface portfolioModel {
  status: string;
  linkImage: string;
  title: string;
  description: string;
  tecnologies: string[];
  linkPage: string;
  linkRepo: string;
}

export interface portfolioDataModel {
  sectionTitle: string;
  sectionId: string;
  portfolioData: portfolioModel[];
  buttons: { project: string; portfolio: string };
}
