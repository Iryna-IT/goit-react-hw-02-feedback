// import PropTypes from 'prop-types';
// import { useStyles } from './FeedbackOptions.style';
// import shortId from 'shortid';
// // import classNames from 'classnames';

// const FeedbackOptions = ({ options, onLeaveFeedback}) => {
//     const classes = useStyles();
//     return (options.map((option) => 
//         <button key={shortId.generate()} className={classes.btn} type="button" value={option} onClick={onLeaveFeedback}>{option}</button>
// ))
// }


// FeedbackOptions.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string),
//     onLeaveFeedback: PropTypes.func.isRequired,
// };
// export default FeedbackOptions;

import PropTypes from 'prop-types';
import styles from './FeedbackOptions.css';
import shortId from 'shortid';
import classNames from 'classnames/bind';

const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    const classes = classNames.bind(styles);
    return (options.map((option) => 
        <button key={shortId.generate()} className={classes('btn', `${option}`)} type="button" value={option} onClick={onLeaveFeedback}>{option}</button>
))
}


FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;