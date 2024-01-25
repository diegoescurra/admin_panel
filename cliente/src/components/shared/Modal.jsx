

const Modal = ({ children }) => {

  return (
    <div className='flex items-center fixed inset-0 bg-gray-200 bg-opacity-70'>
        <div className='p-4 mx-auto'>
          {children}
        </div>
    </div>
  )
}

export default Modal;
