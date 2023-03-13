import Button from '../Button/Button'

const Navbar = () => {
  return (
    <header className="bg-white h-16">
      <nav className='flex p-6'>
        <h1 className="font-bold text-3xl">LOGO</h1>
        <ul className='flex ml-auto'>
          <li className="mx-2"><a>link 1</a></li>
          <li className="mx-2"><a>link 2</a></li>
          <li className="mx-2"><a>link 3</a></li>
        </ul>
        <Button buttonText={"button"} />
      </nav>
    </header>
  )
}

export default Navbar;