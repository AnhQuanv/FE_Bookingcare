import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';

const ModalCreteUser = (props) => {
    const { show, setShow } = props;

    const handleClose = () => {
        setShow(false)
        setEmail("");
        setPassword("");
        setUsername("");
    };


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    return (
        <>
            <Modal className='modal-add-user' backdrop='static' show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton className=" text-dark" style={{ background: "#E3F2FD" }}>
                    <Modal.Title className="fs-4 fw-bold">Add new user</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">First name</label>
                            <input type="text" className="form-control" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control" value={lastName} onChange={(event) => { setLastName(event.target.value) }} />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" value={address} onChange={(event) => { setAddress(event.target.value) }} />
                        </div>
                        {/* <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select">
                                <option value="USER">USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div> */}
                    </form>
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose} className='px-3'>Close</Button>
                    <Button variant="primary" className='px-3'>Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreteUser;
