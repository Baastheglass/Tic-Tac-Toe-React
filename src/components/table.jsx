import React, { Component } from 'react';
import Block from './block'
class Table extends Component {
    constructor(props)
    {
        super(props);
    } 
    render() { 
        return (<table>
            <tr>
                <Block value = {this.props.blocks[0]} handleClick = {this.props.handleClick} index = {0}/><Block value = {this.props.blocks[1]} handleClick = {this.props.handleClick} index = {1}/><Block value = {this.props.blocks[2]} handleClick = {this.props.handleClick} index = {2}/>
            </tr>
            <tr>
                <Block value = {this.props.blocks[3]} handleClick = {this.props.handleClick} index = {3}/><Block value = {this.props.blocks[4]} handleClick = {this.props.handleClick} index = {4}/><Block value = {this.props.blocks[5]} handleClick = {this.props.handleClick} index = {5}/>
            </tr>
            <tr>
                <Block value = {this.props.blocks[6]} handleClick = {this.props.handleClick} index = {6}/><Block value = {this.props.blocks[7]} handleClick = {this.props.handleClick} index = {7}/><Block value = {this.props.blocks[8]} handleClick = {this.props.handleClick} index = {8}/>
            </tr>
        </table>);
    }
}
 
export default Table;