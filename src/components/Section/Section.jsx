import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ heading, children }) => {
    return (
        <section>
            <h1 className='section-title'>{heading}</h1>
            {children}
        </section>
    );
};

Section.defaultProps = {
    heading: '',
};
Section.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Section;