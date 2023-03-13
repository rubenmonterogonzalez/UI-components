import Accordion from "../components/Accordion/Accordion"

const Container = ({ children }) => {
  return (
    <>
      <div className='p-[3%]'>
        {children}
      </div>
    </>
  )
}

export default Container