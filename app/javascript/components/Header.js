import React from "react"
import PropTypes from "prop-types"
import { PageHeader } from 'antd';


const HeaderComp = ({ children }) => {
    return ( 
        <PageHeader 
            // avatar={{ src: 'https://svgshare.com/i/Jht.svg'}} 
            title="C19 Supply Chain Tracker"
        />
    );
}

export default HeaderComp;
