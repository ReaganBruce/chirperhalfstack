import * as React from 'React';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface AddProps { }

const Add: React.FC<AddProps> = props => {
    const [user, setUser] = useState('');
    const [chirp, setChirp] = useState('');
    const history = useHistory();
    
    const handleClick: React.ReactEventHandler = async () => {

        history.push('/');
        await fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: user,
                chirp: chirp,
            })
        })
    }

    return (
        <>
            <form className="d-flex justify-content-center mt-3">
                <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="User"
                />
                <input
                    type="text"
                    value={chirp}
                    onChange={(e) => setChirp(e.target.value)}
                    placeholder="What's on your mind?"
                />
                <button className="btn btn-primary" onClick={handleClick}>Chirp It!</button>
            </form>
        </>
    )
};
    
export default Add;