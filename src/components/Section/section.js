import React from "react";

const Section = ({ title, children}) => 
(
<div className="section">
    <h2 className="section-title">{title}</h2>
    {children}
</div>
)

export default Section

