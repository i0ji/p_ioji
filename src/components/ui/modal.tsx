export default function Modal({ isOpen, handleClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center px-4">
        <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
          <button
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-900"
            onClick={handleClose}
            aria-label="Закрыть"
          >
            ✕
          </button>

          {children}
        </div>
      </div>
    </>
  );
}
