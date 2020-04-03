import React from "react"
import PropTypes from "prop-types"
import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout;

const LayoutComp = ({ children }) => {
    return (
        <Layout>
            <Header>Header</Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default LayoutComp;
