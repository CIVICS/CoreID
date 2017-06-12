import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './List.css';

export default class List extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        const getData = () => {
            let group = this.props.match.params.id || 0;
            if (this.props.list && this.props.list[group].data) {
                return this.props.list[group].data;
            } else {
                return [];
            }
        };

        const getSuffixFor = (item) => {

        };

        const getPrefixIndicator = (item) => {
            if (item.malformed === true) {
                return (<span className="mr-2"><i className="fa fa-exclamation-triangle"
                       title="malformed"
                       style={{color: 'rgba(200,0,0,1)'}}></i></span>)
            } else {
                return (<span className="mr-2"><i className="fa fa-file-text-o"
                                 title="malformed"></i></span>)
            }
        };

        return (
            <div className={styles.container} data-tid="container">
                <div className={styles.group}>
                    {getData().map((item, index) => {
                        return (<div key={index} className={styles.item}>
                            {getPrefixIndicator(item)}
                            {item.name}
                            <div className={styles.pullRight}>
                                {getSuffixFor(item)}
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}
