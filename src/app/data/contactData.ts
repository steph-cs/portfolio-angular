export interface contactDataModel {
  sectionTitle: string;
  sectionId: string;
  contactData: {
    subtitle: string;
    inputs: { label: string; value: string, type: string }[];
    button: string,
  };
}

export const contactData = {
  EN: {
    sectionTitle: 'contact',
    sectionId: 'contact',
    contactData: {
      subtitle: "Let's work together!",
      inputs: [
        { label: 'Name', value: 'name', type: 'text' },
        { label: 'Phone', value: 'phone', type: 'tel' },
        { label: 'E-mail', value: 'email', type: 'email' },
        { label: 'Message', value: 'message', type: 'textarea' },
      ],
      button: 'Send',
    },
  },
  PT: {
    sectionTitle: 'contato',
    sectionId: 'contact',
    contactData: {
      subtitle: 'Vamos trabalhar juntos!',
      inputs: [
        { label: 'Nome', value: 'name', type: 'text' },
        { label: 'Celular', value: 'phone', type: 'tel' },
        { label: 'E-mail', value: 'email', type: 'email' },
        { label: 'Mensagem', value: 'message', type: 'textarea' },
      ],
      button: 'Enviar',
    },
  },
};

