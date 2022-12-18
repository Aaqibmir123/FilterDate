import ExpenseItem from './ExpenseItem';

import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {
  // console.log(props.items);

  const [filterYear,setFilterYear]=useState('2020');

  const onchageFilter=(selectYear)=>{
    setFilterYear(selectYear);
  }
  const FilterYear=props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filterYear;
  })

  return (
    <div className="expenses">
      <ExpensesFilter 
        selected={filterYear}
        onchageFilter={onchageFilter}

      
      />
       {FilterYear.map((expenses) => (
          <ExpenseItem
          key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
    </div>
  );
}

export default Expenses;