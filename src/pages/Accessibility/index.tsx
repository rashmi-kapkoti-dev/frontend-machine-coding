import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqItems } from './data';
import style from './Accessibility.module.css';

const Accessibility = () => {
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [status, setStatus] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteTriggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setShowDeleteModal(false);
    deleteTriggerRef.current?.focus();
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (smsAlerts && phone.trim().length < 10) {
      setPhoneError('Add a valid phone number for SMS alerts');
      setStatus('');
      return;
    }
    setPhoneError('');
    setStatus('Settings saved');
  };

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    if (!showDeleteModal) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (e.key !== 'Tab' || focusable.length === 0) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showDeleteModal]);

  return (
    <>
      <a href="#main-content" className={style.skipLink}>
        Skip to main content
      </a>

      <div className={style.container}>
        <main id="main-content" className={style.card}>
          <h1 className={style.title}>Notification settings</h1>

          <form className={style.section} onSubmit={handleSave}>
            <h2 className={style.sectionTitle}>Alerts</h2>

            <div className={style.field}>
              <input
                id="sms-alerts"
                type="checkbox"
                checked={smsAlerts}
                onChange={(e) => setSmsAlerts(e.target.checked)}
              />
              <label htmlFor="sms-alerts">SMS alerts</label>
            </div>

            <div className={style.field}>
              <label htmlFor="phone" className={style.label}>
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                className={`${style.input} ${phoneError ? style.inputError : ''}`}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError('');
                }}
                aria-invalid={phoneError ? true : undefined}
                aria-describedby={phoneError ? 'phone-error' : undefined}
              />
              {phoneError && (
                <span id="phone-error" className={style.error} role="alert">
                  {phoneError}
                </span>
              )}
            </div>

            <p className={style.status} aria-live="polite">
              {status}
            </p>

            <button type="submit" className={style.btn}>
              Save
            </button>
          </form>

          <section className={style.section} aria-labelledby="faq-title">
            <h2 id="faq-title" className={style.sectionTitle}>
              FAQ
            </h2>
            <div className={style.faqList}>
              {faqItems.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div key={item.id}>
                    <button
                      type="button"
                      className={style.faqButton}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${item.id}`}
                      onClick={() => toggleFaq(item.id)}
                    >
                      <span>{item.question}</span>
                      {isOpen ? (
                        <ChevronUp size={18} aria-hidden="true" />
                      ) : (
                        <ChevronDown size={18} aria-hidden="true" />
                      )}
                    </button>
                    {isOpen && (
                      <div id={`faq-${item.id}`} className={style.faqAnswer}>
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <button
            ref={deleteTriggerRef}
            type="button"
            className={`${style.btn} ${style.btnDanger}`}
            onClick={() => setShowDeleteModal(true)}
          >
            Delete account
          </button>
        </main>
      </div>

      {showDeleteModal && (
        <div
          ref={modalRef}
          className={style.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-title"
          aria-describedby="delete-desc"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className={style.modalBox}>
            <h2 id="delete-title">Delete account?</h2>
            <p id="delete-desc">This cannot be undone.</p>
            <div className={style.modalActions}>
              <button
                type="button"
                className={`${style.btn} ${style.btnDanger}`}
                onClick={closeModal}
              >
                Delete
              </button>
              <button type="button" className={style.btn} onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accessibility;
