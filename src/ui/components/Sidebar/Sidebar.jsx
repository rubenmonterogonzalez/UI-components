import { useState, useRef } from 'react'
import { Menu } from 'react-daisyui'

const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
    // setIsopen(!isOpen)
  }

  const closeSidebar = () => {
    setIsopen(false);
  };

  return (
    <>
      <div className={`sidebar ${isOpen == true ? 'active backdrop-blur-md component-preview z-10 w-full h-screen fixed flex translate-x-0 transition-opacity ease-in-out top-0 delay-150 duration-300 peer-focus:left-0' : 'translate-x-0 bg-black flex w-20 h-screen component-preview'}`}>
        <Menu className='bg-[#2a303c] p-4'>
          <Menu.Item className="flex mb-7">
            <button
              onClick={ToggleSidebar}
              className="navbar-toggler">
              <i className='fas fa-solid fa-bars'></i>
            </button>
          </Menu.Item>
          <Menu.Item>
            <a className="flex gap-4 font-medium h-12" href="#">
              <i className="fas fa-solid fa-table"></i>
              <span className={`${isOpen == true ? '' : 'hidden'}`}>Dashboard</span>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a className="flex gap-4 font-medium h-12" href="#">
              <i className="fas fa-solid fa-paw"></i>
              <span className={`${isOpen == true ? '' : 'hidden'}`}>Pets</span>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a className="flex gap-4 font-medium h-12" href="#">
              <i className="fas fa-solid fa-user"></i>
              <span className={`${isOpen == true ? '' : 'hidden'}`}>Customers</span>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a className="flex gap-4 font-medium h-12" href="#">
              <i className="fas fa-regular fa-stethoscope"></i>
              <span className={`${isOpen == true ? '' : 'hidden'}`}>Vets</span>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a className="flex gap-4 font-medium h-12" href="#">
              <i className="fas fa-duotone fa-gear"></i>
              <span className={`${isOpen == true ? '' : 'hidden'}`}>Settings</span>
            </a>
          </Menu.Item>
          <Menu.Item className='mt-auto'>
            <a className="flex gap-4 font-medium h-12" href="#">
              <i className="fas fa-sharp fa-regular fa-arrow-right-from-bracket"></i>
              <span className={`${isOpen == true ? '' : 'hidden'}`}>Logout</span>
            </a>
          </Menu.Item>
        </Menu>
      </div>

      {/* 
      <button class="bg-hamburger peer absolute top-0 m-[14px] ml-5 h-[28px] w-[28px] bg-center bg-no-repeat text-4xl">≡</button>
      <aside class="fixed top-0 -left-[233px] grid h-full w-[233px] z-10 bg-[#fff] delay-150 duration-300 ease-out peer-focus:left-0">
        <h1 class="mt-8 text-center text-[13px] font-bold text-[#6164E8]">CHAT CHANNELS</h1>
      </aside>
      */}
    </>
  )
}

export default Sidebar;