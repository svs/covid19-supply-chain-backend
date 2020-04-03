import React from "react"
import PropTypes from "prop-types"
import { Layout } from 'antd'
import Header from './Header'
import './Layout.css';

const { Footer, Content } = Layout;

const LayoutComp = ({ children }) => {
    return (
        <Layout className="Layout">
            <Header />
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default LayoutComp;
