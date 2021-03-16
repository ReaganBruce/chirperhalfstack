import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export interface AdminComponent extends RouteComponentProps<{ id: string }> { }





const Admin: React.FC<AdminComponent> = ({ match: { params: { id } } }) => {
    const [editUser, setEditUser] = useState('')
    const [editChirp, setEditChirp] = useState('')

    const history = useHistory();
    
    //Wasn't able to get prefilled form data when editting the tweet.
    const handleEditButton = async () => {

        try{
            history.goBack()
            await fetch(`/api/chirps/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: editUser,
                    chirp: editChirp,
                })
            })
        }
        catch (err) {
            console.log(`Error getting PUT request`)
        }

    }
    
        const handleDeleteClick = async () => {
            try {
                history.goBack()
                await fetch(`/api/chirps/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            catch (err) {
                console.log(`Error getting DELETE request`);
            }
        }
        
        return (
            <>
                <div className="container">
                    <main className="col-md-12">
                        <section className="row justify-content-center mt-5">
                            <div className="card col-md-6 text-center shadow my-3">
                                <div className="card-body">
                                    <form className="d-flex justify-content-between mt-3">
                                        <input
                                            type="text"
                                            value={editUser}
                                            onChange={(e) => setEditUser(e.target.value)}
                                            placeholder="Edit User"
                                        />
                                        <input
                                            type="text"
                                            value={editChirp}
                                            onChange={(e) => setEditChirp(e.target.value)}
                                            placeholder="Edit Chirp"
                                        />
                                        <button className="btn btn-warning" onClick={handleEditButton}>
                                            Save & Edit</button>
                                    </form>
    
                                    <button className="btn btn-danger" onClick={handleDeleteClick}>
                                        Delete Chirp</button>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </>
        )
    };

    export default Admin;