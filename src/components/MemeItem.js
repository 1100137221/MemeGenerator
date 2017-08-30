import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createMeme} from '../actions';

class MemeItem extends Component {

    constructor() {
        super();
        this.state = {
            horved: false
        };
    }

    _postName() {
        const { text0, text1 } = this.props;
        const memeObj = {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj);
    }

    render() {
        return (
            <div className="meme-item"
                onMouseEnter={()=>{  this.setState({ horved: true }) }}    
                onMouseLeave={()=>{  this.setState({ horved: false }) }}    
                onClick={()=>{ this._postName()  }}
            >
                <img className={this.state.horved ? "meme-img darken-img" : "meme-img" } 
                    src={this.props.meme.url}
                    alt={this.props.meme.name}
                ></img>
                <p className={this.state.horved ? "meme-txt" : "no-txt" }>
                    {this.props.meme.name}
                </p>
            </div>
        );
    }
}

export default connect(null,{ createMeme })(MemeItem);