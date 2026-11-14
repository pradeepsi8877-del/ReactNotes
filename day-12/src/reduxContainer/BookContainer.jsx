import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { buyBook, saleBook } from './BookAction';

function BookContainer() {
const noOfBooks =useSelector((state)=> state.NumberOfBooks )
const dispatch = useDispatch();

  return (
    <>
      <div>BookContainer</div>
      <h2>No of Books  - {noOfBooks}</h2>

      <button onClick={()=> dispatch(buyBook())}>Buy Book</button>
      <button onClick={()=> dispatch(saleBook())}>Sale Book</button>
    </>
  )
}

export default BookContainer

// store  - state hold 
// useSelector  - value get from the store 
// useDispatch - actions