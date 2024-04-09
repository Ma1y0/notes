export default function AddModalButton() {
  return (
    <div className="w-14 h-14 rounded-full bg-neutral-700 fixed bottom-0 right-0 m-12">
      <button
        className="w-full h-full flex justify-center items-center"
        onClick={() => document.getElementById("add_modal")?.showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
