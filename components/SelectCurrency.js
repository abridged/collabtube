import React from 'react';
import PropTypes from 'prop-types';

const SelectCurrency = ({ currencies, onSelectCurrency }) => {

    const filteredCurrencies = currencies.filter(currency => currency.code !== 'AUD');

    return <select className="justify-center my-1 bg-white hover:bg-gray-400 text-black font-semibold w-30 py-2 px-4 border-2 border-gray-400 rounded shadow m-1"
        onChange={(e) => onSelectCurrency(e.target.value)}>
        {
            filteredCurrencies.map(currency => {
                const { code, name } = currency;
                return <option key={code} value={code}>{name}</option>
            })
        }
    </select>
}

SelectCurrency.propTypes = {
    currencies: PropTypes.array.isRequired,
    onSelectCurrency: PropTypes.func.isRequired
};

export default SelectCurrency;