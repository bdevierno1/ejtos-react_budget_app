import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const currencyOptions = [
        { value: '$', label: '$ Dollar' },
        { value: '£', label: '£ Pound' },
        { value: '€', label: '€ Euro' },
        { value: '₹', label: '₹ Rupee' },
    ];

    // Initialize state using useState
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    // Handle currency change
    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setNewCurrency(newCurrency); // Update the local state

        // Dispatch the action to update the global state
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div id="darker-success" className='alert alert-success darker-success'>
            <span>Currency(</span>
            <select
                id="currency"
                value={newCurrency} // Use the local state for the value
                onChange={handleCurrencyChange}
            >
                {currencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <span>)</span>
        </div>
    );
};

export default Currency;