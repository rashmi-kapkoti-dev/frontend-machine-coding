import type { AccordionProps } from './type';
import { ChevronDown, ChevronUp } from 'lucide-react';
import style from './Accordion.module.css';
import { Fragment } from 'react';

const Accordion = ({
  data,
  selectedAccordion,
  handleAccordion,
}: AccordionProps) => {
  return (
    <div className={style.accordionContainer}>
      {data.map((item) => (
        <Fragment key={item.id}>
          <div
            className={style.accordionItems}
            onClick={() =>
              handleAccordion(selectedAccordion === item.id ? null : item.id)
            }
          >
            <div className={style.titleText}> {item.title}</div>
            <div>
              {selectedAccordion == item.id ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </div>
          </div>
          {selectedAccordion == item.id && (
            <div className={style.contentText}>{item.content}</div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Accordion;
