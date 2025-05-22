function FAQ() {
  return (
    <div className="container section">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <div className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded="true"
              aria-controls="faq1"
            >
              Clinic Hours?
            </button>
          </div>
          <div
            id="faq1"
            className="accordion-collapse collapse show"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">Mon-Fri: 9 AM - 5 PM</div>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              aria-expanded="false"
              aria-controls="faq2"
            >
              Insurance?
            </button>
          </div>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">Most plans accepted.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;