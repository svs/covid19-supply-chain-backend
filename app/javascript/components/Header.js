import React from "react"
import PropTypes from "prop-types"
import { PageHeader } from 'antd';
import './Header.css'

const HeaderComp = ({ children }) => {
    return (
        <PageHeader
            className="Header"
            // avatar={{ src: 'https://svgshare.com/i/Jht.svg'}} 
            title="Covid19 Supply Chain Tracker"
        />
    );
}

export default HeaderComp;
