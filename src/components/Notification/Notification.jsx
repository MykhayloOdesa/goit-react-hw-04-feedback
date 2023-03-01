import React from 'react';
import PropTypes from 'prop-types';
import { Notes } from './Notification.styled';

export default function Notification({ message }) {
  return <Notes>{message}</Notes>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
