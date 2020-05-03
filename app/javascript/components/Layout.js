import React from "react"
import PropTypes from "prop-types"
import { Layout, Space } from 'antd'
import Header from './Header'
import Footer from './Footer'
import './Layout.css';

const { Content } = Layout;

const LayoutComp = ({ children }) => {
    return (
        <Layout>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Layout>
    );
}

export default LayoutComp;
