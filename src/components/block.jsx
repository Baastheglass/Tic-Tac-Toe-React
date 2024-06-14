import React, { Component } from 'react';

class Block extends Component {
    styles = {border: 'solid 1px black'}; 
    render() { 
        return (
            <td style = {this.styles} onClick = {() => this.props.handleClick(this.props.index)}>
                {this.props.value}
            </td>
        );
    }
}
 
export default Block;