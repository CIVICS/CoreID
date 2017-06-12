// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopBar.css';

export default class TopBar extends Component {
    render() {
        return (
            <div className={styles.topbar}>
                <Link to="/documents">
                    <i className="fa fa-file-text-o"></i>
                    Documents
                </Link>
                <Link to="/attestations">
                    <i className="fa fa-quote-right"></i>
                    Attestations
                </Link>
            </div>
        );
    }
}
