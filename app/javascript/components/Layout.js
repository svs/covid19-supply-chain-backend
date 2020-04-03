import React from "react"
import PropTypes from "prop-types"
import { Layout, Space } from 'antd'
import Header from './Header'
import Footer from './Footer'
import './Layout.css';

const { Content } = Layout;

const LayoutComp = ({ children }) => {
    return (
        <Layout className="Layout">
            <Header />
            <Content className="Layout__content">{children}</Content>
            <Footer />
        </Layout>
    );
}

export default LayoutComp;
