import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10, // Decrease the cost by 10
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-success custom-button"
                    onClick={() => increaseAllocation(props.name)}
                    style={{
                        borderRadius: '50%', // Make the button round
                        fontSize: '1em', // Increase font size
                        width: '40px', // Set a fixed width to maintain a round shape
                        height: '40px', // Set a fixed height to maintain a round shape
                    }}
                >
                    +
                </button>


            </td>
            <td>
            <button
                    type="button"
                    className="btn btn-danger custom-button"
                    onClick={() => decreaseAllocation(props.name)}
                    style={{
                        borderRadius: '50%', // Make the button round
                        fontSize: '1em', // Increase font size
                        width: '40px', // Set a fixed width to maintain a round shape
                        height: '40px', // Set a fixed height to maintain a round shape
                    }}
                >
                    -
                </button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;