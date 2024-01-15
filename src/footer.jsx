import React from "react";

function footer(){
    const year = new Date().getFullYear();
    const footer = <div className="footer">
        <p className="footer-text">Copyright {year}</p>
    </div>
    return footer
}

export default footer;