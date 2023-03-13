import { useState } from 'react'

const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    console.log("clicked")
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  return (
    <>
      <nav className="z-10 w-20 max-w-[4rem] h-screen fixed flex flex-col justify-between">
        <div className="p-4">
          <div className="flex items-center justify-center mb-7">
            <a className="hidden" href="#">
              <i className="fas fa-shield-dog"></i>
            </a>
            <button
              onClick={ToggleSidebar}
              className="navbar-toggler">
              <i className='fas fa-solid fa-bars'></i>
            </button>
          </div>

          <input type="search" name="search" placeholder="Search..."
            className="w-full mx-auto p-4 rounded-lg mb-5" />

          <i id='icon-search' className="fas fa-regular fa-magnifying-glass absolute text-xl top-16 left-6"></i>

          <ul className="flex flex-col items-center gap-6 w-full">
            <li className="w-full">
              <a className="flex items-center justify-center gap-3 font-medium" href="#">
                <i className="fas fa-solid fa-table"></i>
                <span className="hidden">Dashboard</span>
              </a>
            </li>
            <li className="w-full">
              <a className="flex items-center justify-center gap-3 font-medium" href="#">
                <i className="fas fa-solid fa-paw"></i>
                <span className="hidden">Pets</span>
              </a>
            </li>
            <li className="w-full">
              <a className="flex items-center justify-center gap-3 font-medium" href="#">
                <i className="fas fa-solid fa-user"></i>
                <span className="hidden">Customers</span>
              </a>
            </li>
            <li className="w-full">
              <a className="flex items-center justify-center gap-3 font-medium" href="#">
                <i className="fas fa-regular fa-stethoscope"></i>
                <span className="hidden">Vets</span>
              </a>
            </li>
            <li className="w-full">
              <a className="flex items-center justify-center gap-3 font-medium" href="#">
                <i className="fas fa-duotone fa-gear"></i>
                <span className="hidden">Settings</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center py-2 px-4">
          <div className="flex items-center gap-2">
            <i className="fas fa-solid fa-user-secret"></i>
            <div className="user-details">
              <h3 className="user-name">Eleanor Pena</h3>
              <p className="user-occupation">Veterinary</p>
            </div>
          </div>
          <a className="logout-btn" href="#">
            <i className="fas fa-sharp fa-regular fa-arrow-right-from-bracket"></i>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Sidebar;