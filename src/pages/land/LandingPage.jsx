import React, { useState, useEffect, useRef } from "react";
import CutNavbar from "../../components/Nav"
import "./LandingPage.css";

function LandingPage() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));

    setSuccessMessage("✅ تم إرسال الفورم بنجاح! 🎉");
    localStorage.removeItem("formData");

    setFormData({ name: "", email: "", phone: "", message: "" });

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <>
      <CutNavbar scrollToForm={scrollToForm} />
      
      <div className="container text-center mt-5">
        <h1>مرحبًا بك في نادي القرن</h1>
        <p>يرجى ملء النموذج أدناه للحصول على مزيد من المعلومات.</p>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        <div className="row">
          <div className="col-md-4">
            <img src="https://img.btolat.com/news/large/120654.jpg" alt="صورة طبيعة" className="img-fluid rounded img-fixed-size" />
          </div>
          <div className="col-md-4">
            <img src="https://new.almogaz.com/sites/default/files/feed_images/20/12/20/127220365_2762028247343729_457655893314981887_o-780x470.jpg" alt="صورة تقنية" className="img-fluid rounded img-fixed-size" />
          </div>
          <div className="col-md-4">
            <img src="https://koraapedia.com/wp-content/uploads/2023/01/320520333_1215605229045938_5984469680173758483_n.jpg" alt="صورة مدينة" className="img-fluid rounded img-fixed-size" />
          </div>
        </div>

        <form ref={formRef}  onSubmit={handleSubmit} className="custom-form">
          <div className="mb-3">
            <label className="form-label">الاسم</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="أدخل اسمك"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">البريد الإلكتروني</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="أدخل بريدك الإلكتروني"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">رقم الهاتف</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="أدخل رقم هاتفك"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">الرسالة</label>
            <textarea
              className="form-control"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="اكتب رسالتك هنا"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            إرسال
          </button>
        </form>

      </div>
    </>
  );
}

export default LandingPage;
