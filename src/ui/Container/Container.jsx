import Accordion from "../components/Accordion/Accordion"

const Container = ({ children }) => {
  return (
    <>
      <section className="absolute top-16 left-20 p-4">
        {children}
      </section>
    </>
  )
}

export default Container