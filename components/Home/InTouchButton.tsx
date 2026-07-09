   
   export default function InTouchButton() {
  return (
   <section>
        <div className="modal fade hm-contact-pop" id="hm-contact-pop" tabIndex={-1} role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       {/* HomePage Contact Modal 1  */}
                        <form id="hm-contact-modal1" name="contact_form" method="post">
                            <div className="mb-3">
                                <label htmlFor="email_addr">Email address</label>
                                <input type="email" required maxLength={50} className="form-control" id="email_addr"
                                    name="email" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name_input">Name</label>
                                <input type="text" required maxLength={50} className="form-control" id="name_input"
                                    name="name" placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone_input">Phone</label>
                                <input type="tel" required maxLength={50} className="form-control" id="phone_input"
                                    name="Phone" placeholder="Phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" name="message" rows={3}></textarea>
                            </div>
                            <div className="my-4">
                                <div className="g-recaptcha" data-sitekey="6LchOyEUAAAAAPo9l0WmIgFkGu5D6Gyq-MjsIHS1"></div>
                            </div>
                            <button type="submit" className="btn btn-primary px-4">Send</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>);
   }