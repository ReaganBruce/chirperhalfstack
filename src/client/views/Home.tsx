import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
export interface Chirp {
    id: number,
    user: string,
    chirp: string
}

const Home: React.FC<IHomeProps> = props => {
    const [getChirps, setGetChirps] = useState<Chirp[]>([]);
    
    
    useEffect(() => {
        (async () => {
            try {
                const response: Response = await fetch('http://localhost:3000/api/chirps');
                const getChirps = await response.json();
                setGetChirps(getChirps);
            } catch (error) {
                console.log(`Didn't get all chirps`);
            }
            
        })();
        
    }, [])
    
    return (
        <>
            {getChirps.map(chirp => (
                <div className="container">
                    <div key={`chirps-chirp-${chirp.id}`} className="col-">
                        <div className="card shadow my-2">
                            <div className="card-body p-5">
                                <h5 className="card-title">@{chirp.user}:</h5>
                                <hr className="border border-primary"></hr>
                                <hr></hr>
                                <p className="card-text">{chirp.chirp}</p>
                                <Link to={`/chirp/${chirp.id}/admin`} className="btn btn-primary">
                                 Admin Options
                                 </Link>
                            </div>
                        </div>
                    </div>
                 </div>
                 ))}

        </>
    );
}

export interface IHomeProps { }

export default Home;