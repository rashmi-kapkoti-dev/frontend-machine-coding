export type AccordionProps = {
  data: {
    id: number;
    title: string;
    content: string;
  }[];
  selectedAccordion: number | null;
  handleAccordion: (id: number | null) => void;
};
