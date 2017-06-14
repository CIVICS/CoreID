import React, { Component } from 'react';
import styles from './List.css';

class ListItem extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {

        const getSuffix = () => {

            if (this.props.item.signatures) {
                return (<span className="float-right">
                    <i className="fa fa-key"></i>
                    {this.props.item.signatures.length}
                </span>)
            }
        };

        const getPrefix = () => {
            if (this.props.item.malformed === true) {
                return (<span className="mr-2"><i className="fa fa-exclamation-triangle"
                                                  title="malformed"
                                                  style={{color: 'rgba(200,0,0,1)'}}></i></span>)
            } else {
                return (<span className="mr-2"><i className="fa fa-file-text-o"
                                                  title="malformed"></i></span>)
            }
        };

        return (<div className={styles.item}>

            {getPrefix()}
            {this.props.item.atr.name}
            {getSuffix()}

        </div>)
    }
}

export default ListItem;