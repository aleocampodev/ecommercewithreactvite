/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-center mt-20">
      {children}
    </div>
  )
}

Layout.PropTypes = {
    children: PropTypes.node.isRequired
}



export default Layout
