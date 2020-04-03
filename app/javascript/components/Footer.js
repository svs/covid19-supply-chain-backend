import React from "react"
import PropTypes from "prop-types"
import { Layout } from 'antd'
import './Footer.css'

const { Footer } = Layout

const FooterComp = ({ children }) => {
    return (
        <Footer className="Footer">
            Made with clean hands 🙌 working from home 🏠
        </Footer>
    );
}

export default FooterComp;
