import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ heading, children }) => {
  return (
    <section>
      <h1 className="section-title">{heading}</h1>
      {children}
    </section>
  );
};

Section.defaultProps = {
  children: React.createElement('div'),
  heading: '',
};
Section.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
};

export default Section;
