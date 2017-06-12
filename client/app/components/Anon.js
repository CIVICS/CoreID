// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Anon.css';

export default class Anon extends Component {
    render() {
        return (
            <div>
                Anon
                <Link to="/runtime/0">
                    <i className="fa fa-inbox" aria-hidden="true"></i>
                    Inbox
                    <span className={styles.bullet}>{this.props.list[0].data.length}</span>
                </Link>
            </div>
        );
    }
}
