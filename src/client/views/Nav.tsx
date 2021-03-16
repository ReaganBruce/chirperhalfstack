import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INavProps {}

const Nav: React.FC<INavProps> = props => {
    
    return (
        <>
        <main className="container col-md-6">
        <section className="row">
          <div className="card col-md-12 shadow">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Link to={`/`} className="btn btn-info m-2">
                  Chirper
                </Link>
                <Link to={`/chirp/add`} className="btn btn-info m-2">
                  Add Chirp
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

        </>
    )
}




export default Nav;