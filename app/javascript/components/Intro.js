import React from "react"
import PropTypes from "prop-types"
import { Carousel, Space, Typography } from 'antd'
import { PanicIcon, CrowdsourceIcon, DisruptionIcon, VisibilityIcon } from './Icons'
import './Intro.css';

const { Text, Paragraph } = Typography;

const iconStyles = {
    minWidth: '128px',
    height: '128px',
    maxWidth: '360px',
    overflow: 'hidden'
}

const Intro = () => {
    return (
        <section className="Intro">
            <Text>
                We will get through COVID-19 but an essential part of that is having a working supply chain for essentials. 
                And if we can't visualise the supply chain and build tools to manage demand and supply it is quite likely 
                that we find out about breakages too late with the attendant risks of hunger, 
                lack of medical supplies and social unrest. This app tries to achieve this by
            </Text>
            <Carousel 
                className="Intro__carousel" 
                autoplay 
                // initialSlide={2}
                autoplaySpeed={8000} 
                dotsClass="Intro__dot" 
                dotPosition='bottom'
            >
                <div class="Intro__item">
                    <PanicIcon style={iconStyles} /><br />
                    <Text strong>Reduce Panic Buying</Text>
                    <Paragraph>By giving public information about supply chain health</Paragraph>
                </div>
                <div class="Intro__item">
                    <CrowdsourceIcon style={iconStyles} /><br />
                    <Text strong>Crowdsource Essential Item Availability</Text>
                    <Paragraph>Make it easier to acquire essentials for the entire community because the only way we get through this is together.</Paragraph>
                </div>
                <div class="Intro__item">
                    <DisruptionIcon style={iconStyles} /><br />
                    <Text strong>Avoid Disruptions Early</Text>
                    <Paragraph>before they cascade into larger problems</Paragraph>
                </div>
                <div class="Intro__item">
                    <VisibilityIcon style={iconStyles} /><br />
                    <Text strong>Provide Visibility for governments & agencies</Text>
                    <Paragraph>To better identify and address supply chain disruptions</Paragraph>
                </div>
            </Carousel>
        </section>
        );
    }
    
    export default Intro;
    