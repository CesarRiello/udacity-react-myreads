import React from 'react'

const options = [
  {
    label: 'Move to...',
    value: '',
    disable: true
  },
  {
    label: 'Currently Reading',
    value: 'currentlyReading'
  },
  {
    label: 'Want to Read',
    value: 'wantToRead'
  },
  {
    label: 'Read',
    value: 'read'
  }
]

const BookActions = (props) => {
  return (<select name="x">
    {options.map(option => {
      return (<option key={option.value} value={option.value}>
        {option.label}
      </option>)
    })}
  </select>);
};

export default BookActions;
