import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Body = ({ children, className, ...rest }) => {
  return (
    <div className={classnames('c-drawer__body', className)} {...rest}>
      {children}
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Body;
