import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteUser } from '../../services/userService';

const ModalDeleteUser = ({ show, setShow, dataDelete, fetchUsers }) => {
    const handleClose = () => setShow(false);

    console.log("check res", dataDelete)
    const handleSubmitDeleteUser = async () => {
        let res = await deleteUser(dataDelete.id);
        console.log("check res", res, dataDelete)
        if (res?.data && res?.data?.EC === 0) {
            toast.success(res?.data?.message);
            fetchUsers()
            handleClose();
        }

        if (res?.data && res?.data?.EC !== 0) {
            toast.error(res?.data?.message)
        }

    }
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop='static'>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete the user ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete this user email =<b> {dataDelete && dataDelete?.email ? dataDelete.email : ""} </b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser; 