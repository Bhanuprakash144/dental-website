import { services } from "../data/data";

function Services() {
  return (
    <div className="container section">
      <h1>Services</h1>
      <div className="row">
        {services.map(service => (
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
    </div>
  );
}

export default Services;