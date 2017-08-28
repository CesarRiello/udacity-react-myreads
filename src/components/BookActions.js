import React from 'react'

const option = [
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

const BookActions = (book) => {
  return (<select name="{book.id}">
    options.maps(option => {
      return (<option value="{{option.value}}"
      {option.disable ?  'disable' : false}
      {option.value === book.shelf ? 'selected' : false}>
        {option.label}
      </option>)
    })
  </select>);
};

export default BookActions;
