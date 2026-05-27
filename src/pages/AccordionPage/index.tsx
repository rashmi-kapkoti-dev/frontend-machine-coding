import { useState } from 'react';
import Accordion from '../../components/Accordion';
import style from './AccordionPage.module.css';
import { accordionData } from './data';

const AccordionPage = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(
    null
  );
  const handleAccordion = (id: number | null) => {
    setSelectedAccordion(id);
  };
  return (
    <div className={style.container}>
      <div className={style.accordionContainer}>
        <Accordion
          data={accordionData}
          selectedAccordion={selectedAccordion}
          handleAccordion={handleAccordion}
        />
      </div>
    </div>
  );
};

export default AccordionPage;
