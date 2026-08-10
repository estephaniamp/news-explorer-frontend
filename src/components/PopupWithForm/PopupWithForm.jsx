import { useEffect } from "react";
import "./PopupWithForm.css";

function PopupWithForm({ isOpen, onClose, title, name, children, buttonText }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onMouseDown={handleOverlayClick}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Cerrar ventana"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="popup__title">{title}</h2>

        <form className="popup__form" name={name}>
          {children}

          <button className="popup__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
