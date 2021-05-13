import {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) /* props is object which gets data from App.js from custom element.The data is key value pair.*/
{
    const [title,setTitle]=useState(props.title); /*Updating the component, setTitle is an function, title is the value which stores the updated value*/
    const clickHandler=() =>{
        setTitle("updated!");  /* Assigning value*/
        console.log("Clicked");
    }
    
    return (
       <Card className="expense-item">
           <ExpenseDate date={props.date}/>                                { /*We just can't put anything between custom compenent*/ }
           <div className="expense-item__description">
               <h2>
                   {title}
               </h2>
               <div className="expense-item__price">
                {props.amount}
               </div>
           </div>
           <button onClick={clickHandler}>Button</button>             {/*adding eventlistner and adding state(react hook)*/}
       </Card>
    );
}
export default ExpenseItem;