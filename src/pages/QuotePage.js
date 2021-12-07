import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Logo from '../resources/logo.png';
import ScriptTag from 'react-script-tag';
import { ExpressConnectionExample } from '../connection';
import jsforce from 'jsforce';

class QuotePage extends React.Component {
    constructor() {
        super();
        const self = this;
        document.addEventListener('omnioutcomponentready', evt => {
            document.querySelectorAll('vlocityomniscript-i-s-p--card-purchase4-test-italian')[0].connection = new ExpressConnectionExample();
            // document.querySelectorAll('vlocityomniscript-contract--test-english')[0].connection = new ExpressConnectionExample();
        });
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="/slds/assets/styles/salesforce-lightning-design-system.css" />
                <link rel="stylesheet" type="text/css" href="/vlocityresources/slds/styles/OmniLwcUtilsCss.css" />
                <link rel="stylesheet" type="text/css" href="/newport/assets/styles/vlocity-newport-design-system.min.css" />

                <vlocityomniscript-i-s-p--card-purchase4-test-italian ></vlocityomniscript-i-s-p--card-purchase4-test-italian>
                {/* <vlocityomniscript-contract--test-english ></vlocityomniscript-contract--test-english> */}
            </div>
        );
    }
}

export default QuotePage;
