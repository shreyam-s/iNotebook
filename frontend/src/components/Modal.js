import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function ModalExample() {
  useEffect(() => {
    // When modal is shown, focus first button
    const modalEl = document.getElementById("exampleModal");
    if (modalEl) {
      modalEl.addEventListener("shown.bs.modal", () => {
        const firstBtn = modalEl.querySelector("button");
        if (firstBtn) firstBtn.focus();
      });
    }
  }, []);

  return <div className="container mt-5"></div>;
}
