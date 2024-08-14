import React from 'react'
import InputComponent from './Baitap/Bt1'
import SelectComponent from './Baitap/Bt2'
import FormLogin from './Baitap/Bt3'
import DeleteConfirmation from './Baitap/Bt5'
import Navbar from './Baitap/Bt6'
import BaseButton from './Baitap/Bt7';

export default function page() {
  return (
    <div>
      Bài 1
      <InputComponent/><br/>
      Bài 2
      <SelectComponent/>
      Bài 3
      <FormLogin/><br/>
      Bài 5
      <DeleteConfirmation/><br/>
      Bài 6
      <Navbar/>
      Bài 7
      <div className="flex space-x-4">
      <BaseButton type="success">Success</BaseButton>
      <BaseButton type="warning">Warning</BaseButton>
      <BaseButton type="danger">Danger</BaseButton>
      <BaseButton type="primary">Primary</BaseButton>
      </div>
    </div>
  )
}
