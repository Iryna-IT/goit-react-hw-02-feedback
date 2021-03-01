import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';
// import {useStyles} from './TransactionHistory.style';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    //   const classes = useStyles();
    return (
        // <div className={classes.tr}>
        total !== 0  ?
            < div >
                <p> Good: <span> {good}</span></p>
                <p> Neutral: <span>{neutral}</span> </p>
                <p> Bad: <span>{bad}</span></p>
                <p> Total: <span>{total}</span></p>
                <p> Positive feddback: <span>{positivePercentage}%</span></p>
            </div >
            : <Notification message = "No feedback given" ></Notification>
  );
};

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  
};
export default Statistics;