import React,{ Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDel=this.handleItemDel.bind(this);
    }

    render(){
        return (
            <Fragment>
                {/*这是一个注释*/}
            <div>
              <label htmlFor='insert'>输入内容</label>
              <input
                 id='insert'
                 className='input'
                 value={this.state.inputValue}
                 onChange={this.handleInputChange}
              />
              <button onClick={this.handleBtnClick}>提交</button></div>
            <ul>
                {this.getTodoItem()}
            </ul>
            </Fragment>
        )
    }

    getTodoItem(){
       return this.state.list.map((item,index)=>{
            return (
                <div key={index}>
                <TodoItem 
                content={item} 
                index={index} 
                del={this.handleItemDel} />
                {/* <li 
                key={index} 
                onClick={this.handleItemDel.bind(this,index)}
                dangerouslySetInnerHTML={{__html:item}}
                >
                </li> */}
                </div>
            )        
        })
    }

    handleInputChange(e){
        const value=e.target.value;
        this.setState(()=>({
            inputValue:value
        }));
        //this.setState({
            //inputValue:e.target.value
        //})
    }

    handleBtnClick(){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }));
    }

    handleItemDel(index){
        const list=[...this.state.list];
        list.splice(index,1);
        this.setState((prevState)=>{
          const list=[...prevState.list];
          list.splice(index,1);
          return {
              list:list
          }
        });
    }
}

export default TodoList;