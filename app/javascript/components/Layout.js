import React from "react"
import PropTypes from "prop-types"
import { Layout } from 'antd'
import Header from './Header'

const { Footer, Content } = Layout;

const LayoutComp = ({ children }) => {
    return (
        <Layout>
            <Header />
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default LayoutComp;
