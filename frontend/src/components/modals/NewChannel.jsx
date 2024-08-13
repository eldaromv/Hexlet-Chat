import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import { useAddChannelMutation } from '../../api/channels';

const NewChannel = (props) => {
  const {
    handleCloseModal, showModal, channelNameSchema,
  } = props;
  const [addChannel] = useAddChannelMutation();
  const handleFormSubmit = async (values) => {
    const { channelName } = values;
    const data = {
      name: channelName,
      removable: true,
    };
    await addChannel(data);
    handleCloseModal();
  };
  return (
    <Modal show={showModal === 'adding'} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>titleAddChannel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ channelName: '' }}
          onSubmit={handleFormSubmit}
          validationSchema={channelNameSchema}
        >
          {({
            values, handleChange, handleSubmit, errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Label htmlFor="channelName">channelName</Form.Label>
              <Form.Control value={values.channelName} name="channelName" onChange={handleChange} id="channelName" isInvalid={!!errors.channelName} autoFocus />
              <Form.Control.Feedback type="invalid">{errors.channelName}</Form.Control.Feedback>
              <div className="d-flex justify-content-end mt-2">
                <Button type="button" variant="secondary" onClick={handleCloseModal} className="me-2">Cancel</Button>
                <Button type="submit" variant="primary">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default NewChannel;