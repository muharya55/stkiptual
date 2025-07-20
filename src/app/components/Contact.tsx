'use client';

import { useRef } from "react";

const Contact = () => {
      const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    // if (!form) return;

    const formData = new FormData(e.currentTarget);

    const data = {
      nama: formData.get("nama") as string,
      nim: formData.get("nim") as string,
      jurusan: formData.get("jurusan") as string,
      pesan: formData.get("pesan") as string,
    };

    try {
        console.log(data);
        
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
      alert("Berhasil dikirim!");
    //   form.reset(); // aman karena sudah ada .current
    } else {
      alert("Gagal mengirim!");
    }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Terjadi kesalahan saat mengirim pesan.");
    }
  };
  return (
    <>
       <div className="contact-box_right">
              <h5 className="fw-semibold text-white mb-20px">
                Didnt Find The Answer?
              </h5>
              <form className="contact-box_right_form" id="contactForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="nama"
                  placeholder="Nama "
                />
                <input
                  type="text"
                  id="nim"
                  name="nim"
                  placeholder="Nim "
                />
                <input
                  type="text"
                  id="jurusan"
                  placeholder="Jurusan"
                  name="jurusan"
                />
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={5}
                  placeholder="Pesan "
                   
                />
                <button
                  type="submit"
                  className="button text-white button-type-02 fw-medium text-uppercase transition-all"
                >
                  Submit Now
                </button>
              </form>
            </div>
    </>
  )
}

export default Contact
