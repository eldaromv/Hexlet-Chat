import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useRemoveChannelMutation } from '../../api/channels';
import { changeChannel } from '../../store/slices/appSlice';

const DeleteChannel = (props) => {
  const {
    handleCloseModal, showModal, currentChannelId, modalChannelId, dispatch, t,
  } = props;
  const [removeChannel] = useRemoveChannelMutation();
  const deleteChannel = async (id) => {
    try {
      await removeChannel(id).unwrap();
      handleCloseModal();
      if (id === currentChannelId) {
        dispatch(changeChannel({ id: '1', name: 'general' }));
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Modal show={showModal === 'removing'} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.titleDeleteChannel')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('modals.textDeleteChannel')}</p>
        <div className="d-flex justify-content-end mt-2">
          <Button
            type="button"
            variant="secondary"
            onClick={handleCloseModal}
            className="me-2"
          >
            {t('form.buttons.cancel')}
          </Button>
          <Button
            type="button"
            variant="danger"
            onClick={() => deleteChannel(modalChannelId)}
          >
            {t('form.buttons.delete')}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteChannel;