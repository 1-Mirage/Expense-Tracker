import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) /* props is object which gets data from App.js from custom element.The data is key value pair.*/
{
    
    return (
       <Card className="expense-item">
           <ExpenseDate date={props.date}/>                                { /*We just can't put anything between custom compenent*/ }
           <div className="expense-item__description">
               <h2>
                   {props.title}
               </h2>
               <div className="expense-item__price">
                {props.amount}
               </div>
           </div>
       </Card>
    );
}
export default ExpenseItem;