import { useGlobalContext } from './context';

const Modal = () => {
  const { closeModal, correct, isModalOpen, questions } = useGlobalContext();

  return (
    <div className={isModalOpen ? 'modal-container isOpen' : 'modal-container'}>
      <div className="modal-content">
        <h2>{correct > questions.length / 2 && 'congrats!'}</h2>
        <p>
          you answered {correct} question{correct > 1 && 's'} correctly
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};
export default Modal;
