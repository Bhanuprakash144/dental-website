import FAQ from '../components/FAQ';
import { services } from '../data/data';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1>Today's Dental</h1>
          <p>Healthy smiles start here!</p>
          <Link className="btn btn-light" to="/contact" aria-label="Book an appointment">
            Book Now
          </Link>
        </div>
      </div>
      <div className="container section">
        <h2>About Us</h2>
        <p>Quality dental care since 2010.</p>
        <h2>Our Services</h2>
        <div className="row">
          {services.slice(0, 3).map(service => (
            <div key={service.id} className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5>{service.icon} {service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <FAQ />
      </div>
    </div>
  );
}

export default Home;