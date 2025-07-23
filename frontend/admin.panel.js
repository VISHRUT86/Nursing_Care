 // Render Admin Panel
  const renderAdminPanel = () => (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>KrishnaBestNursingHomeCare</h2>
          <p>Admin Panel</p>
        </div>
        <ul className="admin-nav">
          <li>
            <a
              href="admin.html"
              className={adminCurrentTab === "dashboard" ? "active" : ""}
              onClick={() => setAdminCurrentTab("dashboard")}
            >
              <i
                className="fas fa-tachometer-alt"
                style={{ marginRight: "10px" }}
              ></i>{" "}
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className={adminCurrentTab === "services" ? "active" : ""}
              onClick={() => setAdminCurrentTab("services")}
            >
              <i
                className="fas fa-concierge-bell"
                style={{ marginRight: "10px" }}
              ></i>{" "}
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className={adminCurrentTab === "testimonials" ? "active" : ""}
              onClick={() => setAdminCurrentTab("testimonials")}
            >
              <i
                className="fas fa-quote-left"
                style={{ marginRight: "10px" }}
              ></i>{" "}
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#"
              className={adminCurrentTab === "gallery" ? "active" : ""}
              onClick={() => setAdminCurrentTab("gallery")}
            >
              <i className="fas fa-images" style={{ marginRight: "10px" }}></i>{" "}
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#"
              className={adminCurrentTab === "contacts" ? "active" : ""}
              onClick={() => setAdminCurrentTab("contacts")}
            >
              <i
                className="fas fa-envelope"
                style={{ marginRight: "10px" }}
              ></i>{" "}
              Contact Messages
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLogout}>
              <i
                className="fas fa-sign-out-alt"
                style={{ marginRight: "10px" }}
              ></i>{" "}
              Logout
            </a>
          </li>
        </ul>
      </div>
      <div className="admin-main">
        <div className="admin-header">
          <h2>
            {adminCurrentTab.charAt(0).toUpperCase() + adminCurrentTab.slice(1)}
          </h2>
          <p>Welcome, Admin</p>
        </div>

        {adminCurrentTab === "dashboard" && (
          <div className="admin-card">
            <h3>Quick Stats</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  background: "#e3f2fd",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <h4>Services</h4>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {services.length}
                </p>
              </div>
              <div
                style={{
                  background: "#e8f5e9",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <h4>Testimonials</h4>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {testimonials.length}
                </p>
              </div>
              <div
                style={{
                  background: "#fff8e1",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <h4>Gallery Images</h4>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {gallery.length}
                </p>
              </div>
              <div
                style={{
                  background: "#ffebee",
                  padding: "20px",
                  borderRadius: "5px",
                }}
              >
                <h4>Messages</h4>
                <p style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  {contactSubmissions.length}
                </p>
              </div>
            </div>
          </div>
        )}

        {adminCurrentTab === "services" && (
          <>
            <div className="admin-card">
              <h3>{editingService ? "Edit Service" : "Add New Service"}</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  editingService ? updateService() : addService();
                }}
              >
                <div className="admin-form-group">
                  <label>Service Title</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={
                      editingService ? editingService.title : newService.title
                    }
                    onChange={(e) =>
                      editingService
                        ? setEditingService({
                            ...editingService,
                            title: e.target.value,
                          })
                        : setNewService({
                            ...newService,
                            title: e.target.value,
                          })
                    }
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Description</label>
                  <textarea
                    className="admin-form-control"
                    value={
                      editingService
                        ? editingService.description
                        : newService.description
                    }
                    onChange={(e) =>
                      editingService
                        ? setEditingService({
                            ...editingService,
                            description: e.target.value,
                          })
                        : setNewService({
                            ...newService,
                            description: e.target.value,
                          })
                    }
                    required
                  ></textarea>
                </div>
                <div className="admin-form-group">
                  <label>Image URL</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={
                      editingService ? editingService.image : newService.image
                    }
                    onChange={(e) =>
                      editingService
                        ? setEditingService({
                            ...editingService,
                            image: e.target.value,
                          })
                        : setNewService({
                            ...newService,
                            image: e.target.value,
                          })
                    }
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  {editingService ? "Update Service" : "Add Service"}
                </button>
                {editingService && (
                  <button
                    type="button"
                    className="btn btn-accent"
                    style={{ marginLeft: "10px" }}
                    onClick={() => setEditingService(null)}
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>

            <div className="admin-card">
              <h3>All Services</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id}>
                      <td>{service.id}</td>
                      <td>{service.title}</td>
                      <td>{service.description.substring(0, 50)}...</td>
                      <td>
                        <button
                          className="action-btn edit-btn"
                          onClick={() => setEditingService(service)}
                        >
                          Edit
                        </button>
                        <button
                          className="action-btn delete-btn"
                          onClick={() => deleteService(service.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {adminCurrentTab === "testimonials" && (
          <>
            <div className="admin-card">
              <h3>
                {editingTestimonial
                  ? "Edit Testimonial"
                  : "Add New Testimonial"}
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  editingTestimonial ? updateTestimonial() : addTestimonial();
                }}
              >
                <div className="admin-form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={
                      editingTestimonial
                        ? editingTestimonial.name
                        : newTestimonial.name
                    }
                    onChange={(e) =>
                      editingTestimonial
                        ? setEditingTestimonial({
                            ...editingTestimonial,
                            name: e.target.value,
                          })
                        : setNewTestimonial({
                            ...newTestimonial,
                            name: e.target.value,
                          })
                    }
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={
                      editingTestimonial
                        ? editingTestimonial.role
                        : newTestimonial.role
                    }
                    onChange={(e) =>
                      editingTestimonial
                        ? setEditingTestimonial({
                            ...editingTestimonial,
                            role: e.target.value,
                          })
                        : setNewTestimonial({
                            ...newTestimonial,
                            role: e.target.value,
                          })
                    }
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Testimonial Text</label>
                  <textarea
                    className="admin-form-control"
                    value={
                      editingTestimonial
                        ? editingTestimonial.text
                        : newTestimonial.text
                    }
                    onChange={(e) =>
                      editingTestimonial
                        ? setEditingTestimonial({
                            ...editingTestimonial,
                            text: e.target.value,
                          })
                        : setNewTestimonial({
                            ...newTestimonial,
                            text: e.target.value,
                          })
                    }
                    required
                  ></textarea>
                </div>
                <div className="admin-form-group">
                  <label>Image URL</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={
                      editingTestimonial
                        ? editingTestimonial.image
                        : newTestimonial.image
                    }
                    onChange={(e) =>
                      editingTestimonial
                        ? setEditingTestimonial({
                            ...editingTestimonial,
                            image: e.target.value,
                          })
                        : setNewTestimonial({
                            ...newTestimonial,
                            image: e.target.value,
                          })
                    }
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  {editingTestimonial
                    ? "Update Testimonial"
                    : "Add Testimonial"}
                </button>
                {editingTestimonial && (
                  <button
                    type="button"
                    className="btn btn-accent"
                    style={{ marginLeft: "10px" }}
                    onClick={() => setEditingTestimonial(null)}
                  >
                    Cancel
                  </button>
                )}
              </form>
            </div>

            <div className="admin-card">
              <h3>All Testimonials</h3>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Text</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial.id}>
                      <td>{testimonial.id}</td>
                      <td>{testimonial.name}</td>
                      <td>{testimonial.role}</td>
                      <td>{testimonial.text.substring(0, 50)}...</td>
                      <td>
                        <button
                          className="action-btn edit-btn"
                          onClick={() => setEditingTestimonial(testimonial)}
                        >
                          Edit
                        </button>
                        <button
                          className="action-btn delete-btn"
                          onClick={() => deleteTestimonial(testimonial.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {adminCurrentTab === "gallery" && (
          <>
            <div className="admin-card">
              <h3>Add Gallery Image</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addGalleryImage();
                }}
              >
                <div className="admin-form-group">
                  <label>Image URL</label>
                  <input
                    type="text"
                    className="admin-form-control"
                    value={newGalleryImage}
                    onChange={(e) => setNewGalleryImage(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  Add Image
                </button>
              </form>
            </div>

            <div className="admin-card">
              <h3>Gallery Images</h3>
              <div
                className="gallery-grid"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                }}
              >
                {gallery.map((item) => (
                  <div key={item.id} style={{ position: "relative" }}>
                    <img
                      src={item.image}
                      alt="Gallery"
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                    <button
                      className="action-btn delete-btn"
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        padding: "3px 6px",
                      }}
                      onClick={() => deleteGalleryImage(item.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {adminCurrentTab === "contacts" && (
          <div className="admin-card">
            <h3>Contact Messages</h3>
            <button
              className="btn add-btn"
              onClick={() => {
                const data = JSON.stringify(contactSubmissions, null, 2);
                const blob = new Blob([data], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "contact-submissions.json";
                a.click();
              }}
            >
              Export Messages
            </button>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {contactSubmissions.map((submission) => (
                  <tr key={submission.id}>
                    <td>{submission.id}</td>
                    <td>{submission.name}</td>
                    <td>{submission.email}</td>
                    <td>{submission.phone}</td>
                    <td>{submission.message.substring(0, 50)}...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );