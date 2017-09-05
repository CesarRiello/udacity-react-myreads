import React from 'react'

const options = [
  {
    label: 'Move to...',
    value: '',
    disabled: true
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
];

let BookOptions = options.map(option => {
  return (<option key={option.value} value={option.value} disabled={option.disabled}>
    {option.label}
    </option>);
});

const BookActions = (props) => {
  return (<select name="selectShelf" value={props.shelf}
    onChange={event => {
      props.updateShelves(props.book, event.target.value)
    }}>
    {BookOptions}
  </select>);
};

export default BookActions;
