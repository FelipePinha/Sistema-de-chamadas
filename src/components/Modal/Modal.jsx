import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';
import { X } from '@phosphor-icons/react';
import './_Modal.scss';

const Modal = ({ modalIsOpen, setModalIsOpen }) => {
    const { selectedOrder } = useContext(OrderContext);

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
                                <i> {selectedOrder.company_name}</i>
                            </span>
                        </div>
                        <div className="row">
                            <span>
                                Assunto:
                                <i> {selectedOrder.subject}</i>
                            </span>
                            <span>
                                Cadastrado em:
                                <i> {selectedOrder.createdat}</i>
                            </span>
                        </div>
                        <div className="row">
                            <span>
                                Status:
                                <i> {selectedOrder.status}</i>
                            </span>
                        </div>
                        <div className="row">
                            <span>
                                Complemento
                                <i className="complement">{selectedOrder.content}</i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
