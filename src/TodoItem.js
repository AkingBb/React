import React,{ Component } from 'react';
import TodoList from './TodoList';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleOnclick=this.handleOnclick.bind(this);
    }
    render(){
        const {content} =this.props;
        return (<div onClick={this.handleOnclick}>{content}</div>)
    }

    handleOnclick(){
        const {del,index} =this.props;
        del(index);
    }
}

export default TodoItem;