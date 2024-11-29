import { useEffect, useState } from 'react'
import { getAllUsers } from '../../services/userService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalCreateUser from './ModalCreateUser';

const UserManage = () => {

    const [listUsers, setListUsers] = useState([]);
    const [showModalCreate, setShowModalCreate] = useState(false);


    useEffect(() => {

        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            let res = await getAllUsers('ALL');
            if (res && res?.data?.EC === 0) {
                setListUsers(res?.data?.users);
            }
            console.log(res?.data?.users)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='users-container container mt-5'>
            <ModalCreateUser
                show={showModalCreate}
                setShow={setShowModalCreate}
                fetchUsers={fetchUsers}
            />

            <h2 className='title text-center mb-4'>Manage users</h2>
            <div className="">
                <button
                    className='btn btn-primary'
                    onClick={() => setShowModalCreate(!showModalCreate)}
                ><FontAwesomeIcon icon={faPlus} /> Add new user</button>
            </div>
            <div className="container mt-5">
                <table className="table table-hover">
                    <thead className="table-light text-center align-middle">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Actions</th>
                        </tr>

                    </thead>
                    <tbody className='text-center'>
                        {listUsers && listUsers.length > 0 ? (
                            listUsers.map((user, index) => (
                                <tr key={user.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.firstName}</td>
                                    <td>{user?.lastName}</td>
                                    <td>{user?.roleId}</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <button className="btn btn-primary btn-sm">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button className="btn btn-danger btn-sm">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserManage