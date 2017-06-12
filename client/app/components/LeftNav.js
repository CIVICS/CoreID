// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './LeftNav.css';

export default class LeftNav extends Component {
    render() {
        return (
            <div className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <Link to="/runtime/0">
                            <i className="fa fa-inbox" aria-hidden="true"></i>
                            Inbox
                            <span className={styles.bullet}>{this.props.list[0].data.length}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/runtime/1">
                            <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
                            Drafts
                            <span className={styles.bullet}>{this.props.list[1].data.length}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/runtime/2">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            Pending
                            <span className={styles.bullet}>{this.props.list[2].data.length}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/runtime/3">
                            <i className="fa fa-check"
                               style={{color: 'rgba(0,200,0,1)'}}
                               aria-hidden="true"></i>
                            Signed
                            <span className={styles.bullet}>{this.props.list[3].data.length}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/runtime/4">
                            <i className="fa fa-exclamation-circle fa-red"
                               style={{color: 'rgba(200,0,0,1)'}}
                               aria-hidden="true"></i>
                            Declined
                            <span className={styles.bullet}>{this.props.list[4].data.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}
