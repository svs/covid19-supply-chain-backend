import React from "react"
import PropTypes from "prop-types"
import { Carousel, Space, Typography } from 'antd'
import { PanicIcon } from './Icons'
import './Intro.css';

const { Text, Paragraph } = Typography;

const iconStyles = {
    width: '128px',
    height: '128px',
}

const Intro = () => {
    return (
        <section className="Intro">
            <Text>
                We will get through COVID-19 but an essential part of that is having a working supply chain for essentials. 
                And if we can't visualise the supply chain and build tools to manage demand and supply it is quite likely 
                that we find out about breakages too late with the attendant risks of hunger, 
                lack of medical supplies and social unrest.
            </Text>
            <Carousel className="Intro__carousel" autoplay dotPosition='bottom'>
                <div class="Intro__item">
                    <PanicIcon style={iconStyles} /><br />
                    <Text strong>Reduce Panic</Text>
                    <Paragraph>By giving public information about supply chain health</Paragraph>
                </div>
                <div class="Intro__item">
                    <PanicIcon style={iconStyles} /><br />
                    <Text strong>Crowdsource Essential Availability</Text>
                    <Paragraph>Make it easier to acquire essentials for the entire community because the only way we get through this is together.</Paragraph>
                </div>
                <div class="Intro__item">
                    <PanicIcon style={iconStyles} /><br />
                    <Text strong>Identity Disruptions Early</Text>
                    <Paragraph>Early before they cascade into larger problems</Paragraph>
                </div>
                <div class="Intro__item">
                    <PanicIcon style={iconStyles} /><br />
                    <Text strong>Provide Visibility</Text>
                    <Paragraph>For governments and agencies to better identify and address supply chain disruptions</Paragraph>
                </div>
            </Carousel>
        </section>
        );
    }
    
    export default Intro;
    