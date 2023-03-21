import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Components from '../pages/Components'
import Layout from '../ui/layout/Layout'

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter