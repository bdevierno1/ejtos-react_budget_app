import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        // Check if the updated budget is greater than or equal to the total expenses
        if (updatedBudget >= totalExpenses) {
            // Check if the updated budget is within the upper limit of 20,000
            if (updatedBudget <= 20000) {
                setNewBudget(updatedBudget);
            } else {
                // Display an error message or handle the upper limit exceeded case
                alert("Budget cannot exceed 20,000.");
            }
        } else {
            // Display an error message or handle the budget less than expenses case
            alert("Budget can not be lower than spending!");
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;