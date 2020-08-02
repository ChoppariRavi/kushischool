const Modal = ({
  open = false,
  onClose,
  title = "Modal Title",
}: {
  open: any;
  onClose: any;
  title: string;
}) => (
  <>
    {open ? (
      <div className="flex justify-center items-center bg-black bg-opacity-75 w-screen h-screen absolute left-0 top-0 z-10">
        <div className="border-8 border-orange-200 bg-white rounded w-11/12 sm:w-3/4">
          <div className="shadow p-2 sm:p-4 lobster">{title}</div>
          <div className="p-2 text-center max-h-3/4 min-h-1/4 overflow-y-auto">
            Modal content
          </div>
          <div>
            <div className="border-t p-2 lobster text-right">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded px-4 py-2 border-b-4 border-blue-700 hover:border-blue-500 mr-1"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : null}
  </>
);

export default Modal;
