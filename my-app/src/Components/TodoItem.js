import React, { Component } from 'react'
import propTypes from 'prop-types';

export class TodoItem extends Component {
 getStyle = () => {
   return {
       background : '#f4f4f4',
       padding : '10px',
       boderBottom : '1px #cc dotted',
       textDecoration : this.props.todo.comppleted ? 'line-through' : 'none'
   }
 }

     
    render() {
        const {id , title } = this.props.todo;      
        return (
            <div style = {this.getStyle()}>
                <p>
                <input type="checkbox" onChange = {this.props.markComplete.bind(this , id)}  /> {' '}
                {title}

                <button style = {btnStyle} onClick = {this.props.delTodo.bind(this , id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo : propTypes.object.isRequired
}

const itemStyle = {

    backgroundColor : '#f4f4f4'
}

const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 10px',
    borderRadius : '50%',
    curosr : 'pointer',
    float : 'right'
}

export default TodoItem
