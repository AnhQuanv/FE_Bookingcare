import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { createNewUser } from '../../services/userService';

const ModalCreateUser = ({ show, setShow, fetchUsers }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');

    const handleClose = () => {
        setShow(false);
        resetForm();
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setAddress('');
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const checkValidInput = () => {
        let isValid = true;

        if (!email || email.trim() === '') {
            isValid = false;
            toast.error('Missing input: email');
        } else if (!validateEmail(email)) {
            isValid = false;
            toast.error('Invalid email format!');
        }

        if (!password || password.trim() === '') {
            isValid = false;
            toast.error('Missing input: password');
        }

        if (!firstName || firstName.trim() === '') {
            isValid = false;
            toast.error('Missing input: first name');
        }

        if (!lastName || lastName.trim() === '') {
            isValid = false;
            toast.error('Missing input: last name');
        }

        if (!address || address.trim() === '') {
            isValid = false;
            toast.error('Missing input: address');
        }

        return isValid;
    };

    const handleAddNewUser = async () => {
        console.log("aaa")
        if (!checkValidInput()) {
            return;
        }
        let res = await createNewUser(email, password, firstName, lastName, address);
        console.log(">>>>>>>> check res", res);
        if (res?.data && res?.data?.EC === 0) {
            toast.success(res.data.message);
            fetchUsers();
            handleClose();
        }
        if (res?.data && res?.data?.EC !== 0) {
            toast.error(res.data.message)
        }


    };

    return (
        <Modal
            className="modal-add-user"
            backdrop="static"
            show={show}
            onHide={handleClose}
            size="xl"
        >
            <Modal.Header
                closeButton
                className="text-dark"
                style={{ background: '#E3F2FD' }}
            >
                <Modal.Title className="fs-4 fw-bold">Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className="px-3">
                    Close
                </Button>
                <Button
                    variant="primary"
                    onClick={() => handleAddNewUser()}
                    className="px-3"
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCreateUser;
