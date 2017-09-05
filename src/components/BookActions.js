import React from 'react'

const options = [
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
  return (<option key={option.value} value={option.value}>
    {option.label}
    </option>);
});
BookOptions.unshift(<option key="none" value="" disabled> Move to... </option>);

const BookActions = (props) => {
  return (<select name="selectShelf" value={props.shelf}
    onChange={event => {
      props.updateShelves(props.bookId, event.target.value)
    }}>
    {BookOptions}
  </select>);
};

export default BookActions;
