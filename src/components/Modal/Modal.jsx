import { X } from '@phosphor-icons/react';
import './_Modal.scss';

const Modal = ({ modalIsOpen, setModalIsOpen, currentSelectedOrder }) => {
    console.log(modalIsOpen);
    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="overlay" style={{ visibility: modalIsOpen ? 'visible' : 'hidden' }}>
            <div className="modal-box">
                <div className="modal-content">
                    <div className="close-modal-container">
                        <button onClick={handleCloseModal}>
                            <X size={23} />
                            Voltar
                        </button>
                    </div>
                    <div className="modal-details">
                        <h2>Detalhes do chamado</h2>

                        <div className="row">
                            <span>
                                Cliente:
                                <i> {currentSelectedOrder.company_name}</i>
                            </span>
                        </div>
                        <div className="row">
                            <span>
                                Assunto:
                                <i> {currentSelectedOrder.subject}</i>
                            </span>
                            <span>
                                Cadastrado em:
                                <i> {currentSelectedOrder.createdat}</i>
                            </span>
                        </div>
                        <div className="row">
                            <span>
                                Status:
                                <i> {currentSelectedOrder.status}</i>
                            </span>
                        </div>
                        <div className="row">
                            <span>
                                Complemento
                                <i className="complement">{currentSelectedOrder.content}</i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
