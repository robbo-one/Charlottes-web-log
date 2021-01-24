import React from "react"
import footer from "../../data/footer"

function Footer() {
  return (
   <div id="footer" className="section">
     <p className="footer-info"> Author: {footer.author}</p>
     <p className="footer-info"> Copyright: {footer.copyright}</p>

   </div> 
  )
}

export default Footer