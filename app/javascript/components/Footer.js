import React from "react"
import PropTypes from "prop-types"
import { Layout, Typography, Button } from 'antd'
import { DiscordIcon } from './Icons'
import './Footer.css'

const { Footer } = Layout
const { Text } = Typography

const FooterComp = ({ children }) => {
    return (
        <Footer className="Footer">
            <Button type="link" href="https://discord.gg/j7Wjg7c">
                <DiscordIcon style={{ width: '16px', height: '16px' }} />Join Discord Chat
            </Button>
            <Text>Made with clean hands 🙌 working from home 🏠</Text>
        </Footer>
    );
}

export default FooterComp;
