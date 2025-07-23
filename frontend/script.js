
// Main App Component
function App() {

  const [currentPage, setCurrentPage] = React.useState("home");
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
const [staffs, setStaffs] = React.useState([]);



React.useEffect(() => {
  if (currentPage === 'staffs') {
    fetch('https://nursing-care.onrender.com/api/staffs')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched staff:", data);
        setStaffs(data);
      })
      .catch((err) => console.error('Error fetching staff:', err));
  }
}, [currentPage]);



  // Sample data for the website
  const [services, setServices] = React.useState([
    {
      id: 1,
      title: "24/7 Nursing Care",
      description:
        "Round-the-clock professional nursing care for elderly residents with medical needs.",
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Assisted Living",
      description:
        "Help with daily activities while promoting independence and dignity.",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Memory Care",
      description:
        "Specialized care for residents with Alzheimer's and other forms of dementia.",
      image:
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Physical Therapy",
      description:
        "Customized rehabilitation programs to improve mobility and quality of life.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Social Activities",
      description:
        "Engaging social programs to keep residents active and connected.",
      image:
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      id: 6,
      title: "Nutritious Meals",
      description: "Delicious, balanced meals prepared by our in-house chef.",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const [testimonials, setTestimonials] = React.useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Son of Resident",
      text: "My father has been at Shanti Niketan for 2 years now and the care he receives is exceptional. The staff treats him like family.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Daughter of Resident",
      text: "After trying several facilities, we finally found a home that truly cares for my mother. The environment is warm and loving.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Grandson of Resident",
      text: "My grandmother is happier here than she was at home. The activities keep her engaged and she's made many friends.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ]);

  const [gallery, setGallery] = React.useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ]);

  
  // Admin state
  const [adminCurrentTab, setAdminCurrentTab] = React.useState("dashboard");
  const [editingService, setEditingService] = React.useState(null);
  const [editingTestimonial, setEditingTestimonial] = React.useState(null);
  const [newService, setNewService] = React.useState({
    title: "",
    description: "",
    image: "",
  });
  const [newTestimonial, setNewTestimonial] = React.useState({
    name: "",
    role: "",
    text: "",
    image: "",
  });
  const [newGalleryImage, setNewGalleryImage] = React.useState("");
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });

  // Handle navigation
  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Handle admin login
const handleAdminLogin = (e) => {
  e.preventDefault();

  const { username, password } = loginData;

  // ✅ Hardcoded admin credentials check
  if (username === "admin" && password === "admin123") {
    // ✅ Redirect to admin.html (keep this file in `public/js/admin.html`)
    window.location.href = "admin.html";
  } else {
    alert("Invalid admin credentials");
  }
};

  // Handle logout
  const handleLogout = () => {
    setIsAdmin(false);
    setIsLoggedIn(false);
    setCurrentPage("home");
  };

  // Handle form submission
  const handleContactSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const submission = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  console.log("📨 Submitting contact form:", submission); // Debug log

  fetch("https://nursing-care.onrender.com/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  })
    .then((res) => {
      if (!res.ok) throw new Error("❌ Failed to send");
      return res.json();
    })
    .then(() => {
      alert("✅ Message sent!");
      e.target.reset();
    })
    .catch((err) => {
      console.error("❌ Contact form error:", err);
      alert("Something went wrong.");
    });
};


  // Admin functions
  const addService = () => {
    const newId =
      services.length > 0 ? Math.max(...services.map((s) => s.id)) + 1 : 1;
    setServices([...services, { ...newService, id: newId }]);
    setNewService({ title: "", description: "", image: "" });
  };

  const updateService = () => {
    setServices(
      services.map((s) => (s.id === editingService.id ? editingService : s))
    );
    setEditingService(null);
  };

  const deleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  const addTestimonial = () => {
    const newId =
      testimonials.length > 0
        ? Math.max(...testimonials.map((t) => t.id)) + 1
        : 1;
    setTestimonials([...testimonials, { ...newTestimonial, id: newId }]);
    setNewTestimonial({ name: "", role: "", text: "", image: "" });
  };

  const updateTestimonial = () => {
    setTestimonials(
      testimonials.map((t) =>
        t.id === editingTestimonial.id ? editingTestimonial : t
      )
    );
    setEditingTestimonial(null);
  };

  const deleteTestimonial = (id) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
  };

  const addGalleryImage = () => {
    const newId =
      gallery.length > 0 ? Math.max(...gallery.map((g) => g.id)) + 1 : 1;
    setGallery([...gallery, { id: newId, image: newGalleryImage }]);
    setNewGalleryImage("");
  };

  const deleteGalleryImage = (id) => {
    setGallery(gallery.filter((g) => g.id !== id));
  };

  // Render the current page
  const renderPage = () => {
    if (isAdmin && isLoggedIn) {
      return renderAdminPanel();
    }

    switch (currentPage) {
      case "home":
        return renderHomePage();
      case "about":
        return renderAboutPage();
      case "services":
        return renderServicesPage();
      case "gallery":
        return renderGalleryPage();
      case "contact":
        return renderContactPage();
      case "admin-login":
        return renderAdminLogin();
        case "staffs":
            return renderStaffsPage();
      default:
        return renderHomePage();
    }
  };

  // Render Home Page
  const renderHomePage = () => (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Compassionate Care for Your Loved Ones</h1>
          <p>
            At Shanti Niketan, we provide a warm, homely environment with
            professional medical care for seniors who need assistance with daily
            living.
          </p>
          <div>
            <button className="btn" style={{
      marginRight: "10px",
      backgroundColor: "#25D366", // WhatsApp green
      color: "white", // text white
      border: "none", // optional: remove border
    }} onClick={() => navigate("contact")}>
              Contact Us
            </button>
            <button
              className="btn btn-secondary"
              style={{ marginLeft: "15px" }}
              onClick={() => navigate("services")}
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

      <section className="about section-padding">
        <div className="container">
          <h2 className="section-title text-center">About Shanti Niketan</h2>
          <div className="about-content">
            <div className="about-img">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Our Facility"
              />
            </div>
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                To provide exceptional, personalized care that enhances the
                quality of life for our residents while giving peace of mind to
                their families.
              </p>
              <h3>Our Values</h3>
              <p>
                <strong>Compassion:</strong> Treating each resident with
                dignity, respect, and kindness.
              </p>
              <p>
                <strong>Excellence:</strong> Delivering the highest standard of
                care through trained professionals.
              </p>
              <p>
                <strong>Family:</strong> Creating a warm, supportive community
                for residents and their loved ones.
              </p>
              <button
                className="btn btn-accent"
                onClick={() => navigate("about")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-padding">
        <div className="container">
          <h2 className="section-title text-center">Our Services</h2>
          <p
            className="text-center"
            style={{ maxWidth: "800px", margin: "0 auto 40px" }}
          >
            We offer a comprehensive range of services designed to meet the
            physical, emotional, and social needs of our residents.
          </p>
          <div className="services-grid">
            {services.slice(0, 3).map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-img">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="btn" onClick={() => navigate("services")}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "40px" }}>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("services")}
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="testimonials section-padding">
        <div className="container">
          <h2 className="section-title text-center">What Families Say</h2>
          <div className="testimonial-slider">
            {testimonials.map((testimonial) => (
              <div className="testimonial" key={testimonial.id}>
                <img src={testimonial.image} alt={testimonial.name} />
                <p>"{testimonial.text}"</p>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

  // Render About Page
  const renderAboutPage = () => (
    <section className="about section-padding" style={{ paddingTop: "100px" }}>
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Founded in 2010, Shanti Niketan Elder Care began with a simple
              mission: to provide a better alternative to traditional nursing
              homes. Our founder, Dr. Anil Kapoor, saw the need for facilities
              that combine medical expertise with genuine compassion and a
              homelike atmosphere.
            </p>
            <h3>Our Facility</h3>
            <p>
              Located in a peaceful neighborhood with lush gardens, our facility
              is designed to feel like home. We have private and semi-private
              rooms, common areas for socializing, and secure outdoor spaces for
              residents to enjoy fresh air and sunshine.
            </p>
            <h3>Our Team</h3>
            <p>
              Our staff includes registered nurses, certified nursing
              assistants, physical therapists, and activity coordinators - all
              dedicated to providing personalized care. We maintain a high
              staff-to-resident ratio to ensure each resident receives the
              attention they deserve.
            </p>
          </div>
          <div className="about-img">
            <img
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Our Team"
            />
          </div>
        </div>
      </div>
    </section>
  );

  // Render Services Page
  const renderServicesPage = () => (
    <section
      className="services section-padding"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p>
          We offer a comprehensive range of services designed to meet the
          physical, emotional, and social needs of our residents.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-img">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Render Gallery Page
  const renderGalleryPage = () => (
    <section
      className="gallery section-padding"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <p>
          Take a look at our facility, activities, and the warm environment we
          provide for our residents.
        </p>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-item" key={item.id}>
              <img src={item.image} alt="Gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Render Contact Page
  const renderContactPage = () => (
    <section
      className="contact section-padding"
      style={{ paddingTop: "100px" }}
    >
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              We understand that choosing a care facility is an important
              decision. Our team is here to answer your questions and provide
              guidance.
            </p>
            <div className="contact-method">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>Sector 58 ,Dwarka city ,Greater Noida</p>
              </div>
            </div>
            <div className="contact-method">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 82790 15857 </p>
              </div>
            </div>
            <div className="contact-method">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@KrishnaBestcare.com</p>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <a
                href="https://wa.me/918279015857"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn" style={{
      marginRight: "10px",
      backgroundColor: "#25D366", // WhatsApp green
      color: "white", // text white
      border: "none", // optional: remove border
    }}>
                  <i
                    className="fab fa-whatsapp"
                    style={{ marginRight: "5px" }}
                  ></i>
                  WhatsApp Us
                </button>
              </a>

              <a href="tel:+918279015857">
  <button className="btn btn-accent">
    <i className="fas fa-phone" style={{ marginRight: "5px" }}></i>
    Call Now
  </button>
</a>

            </div>
          </div>
          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleContactSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
 <div className="contact-location" style={{ marginTop: "50px" }}>
  <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
    📍 Our Location
  </h3>
  <p style={{ fontSize: "16px", marginBottom: "20px" }}>
    159/2, 3rd Floor, Durga Park Colony, Dashrathpuri, New Delhi, 110045
  </p>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.715252487388!2d77.0704882!3d28.6182879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051f1b36a79d%3A0xb2c8ff0324969fc7!2sDashrathpuri%2C%20New%20Delhi%2C%20Delhi%20110045%2C%20India!5e0!3m2!1sen!2sin!4v1721722463722!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: "0", borderRadius: "10px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


      </div>
    </section>
  );
 
const renderStaffsPage = () => (
  <section className="staffs section-padding" style={{ paddingTop: "100px" }}>
    <div className="container">
      <h2 className="section-title">Our Staff</h2>
      {staffs.length === 0 ? (
        <p>No staff found.</p>
      ) : (
        <div className="staff-grid">
          {staffs.map((staff) => (
            <div className="staff-card" key={staff._id}>
              <img src={staff.photo} alt={staff.name} style={{ width: "150px" }} />
              <h3>{staff.name}</h3>
              <p>{staff.role}</p>
              <p>{staff.email}</p>
              <p>{staff.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
);


  // Render Admin Login
  const renderAdminLogin = () => (
    <section
      className="section-padding"
      style={{ paddingTop: "150px", minHeight: "80vh" }}
    >
      <div className="container" style={{ maxWidth: "500px" }}>
        <h2 className="section-title text-center">Admin Login</h2>
        <div className="admin-card">
          <form onSubmit={handleAdminLogin}>
            <div className="admin-form-group">
              <label>Username</label>
              <input
                type="text"
                className="admin-form-control"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
                required
              />
            </div>
            <div className="admin-form-group">
              <label>Password</label>
              <input
                type="password"
                className="admin-form-control"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>
            <button type="submit" className="btn" style={{ width: "100%" }}>
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );

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

  // Render Header
  const renderHeader = () => {
    if (isAdmin && isLoggedIn) return null;

    return (
      <header>
        <div className="container header-container">
          <div className="logo">
            KrishnaBest <span>NursingHomeCare</span>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <li>
              <a
                href="#"
                className={currentPage === "home" ? "active" : ""}
                onClick={() => navigate("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={currentPage === "about" ? "active" : ""}
                onClick={() => navigate("about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className={currentPage === "services" ? "active" : ""}
                onClick={() => navigate("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={currentPage === "gallery" ? "active" : ""}
                onClick={() => navigate("gallery")}
              >
                Gallery
              </a>
            </li>
           <li>
              <a
                href="#"
                className={currentPage === "contact" ? "active" : ""}
                onClick={() => navigate("contact")}
              >
                ContactUs
              </a>
            </li>
 <li>
  <a
    href="#"
    className={currentPage === "staffs" ? "active" : ""}
    onClick={() => setCurrentPage("staffs")}
  >
    Staffs
  </a>
</li>




            <li>
              <a href="#" onClick={() => navigate("admin-login")}>
                Admin
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  };

  // Render Footer
  const renderFooter = () => {
    if (isAdmin && isLoggedIn) return null;

    return (
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Shanti Niketan</h3>
              <p>
                Providing compassionate, professional care for seniors in a
                warm, homelike environment since 2010.
              </p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" onClick={() => navigate("home")}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => navigate("about")}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => navigate("services")}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => navigate("gallery")}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => navigate("contact")}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Our Services</h3>
              <ul className="footer-links">
                {services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <a href="#" onClick={() => navigate("services")}>
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Info</h3>
              <p>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ marginRight: "10px" }}
                ></i>{" "}
                123 Peaceful Lane, Mumbai, Maharashtra 400001
              </p>
              <p>
                <i className="fas fa-phone" style={{ marginRight: "10px" }}></i>{" "}
                +91 98765 43210
              </p>
              <p>
                <i
                  className="fas fa-envelope"
                  style={{ marginRight: "10px" }}
                ></i>{" "}
                info@shantiniketaneldercare.com
              </p>
            </div>
          </div>
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} Shanti Niketan Elder Care. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <>
      {renderHeader()}
      {renderPage()}
      {renderFooter()}
      
    </>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
