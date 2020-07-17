import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Journey.css';

export default function Journey(props) {
    console.log(props)
    const { from, to } = props;
    return (
       
    )
}

Journey.propTypes = {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}