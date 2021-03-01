import React from 'react';
import PropTypes from 'prop-types';



// import {useStyles} from './TransactionHistory.style';

const Section = ({ heading, children }) => {
//   const classes = useStyles();
    return (
        <section>
            <h1 className=''>{heading}</h1>
            {children}
        </section>
    );
};

// Section.propTypes = {
//   heading: PropTypes.string.isRequired,
// };

export default Section;