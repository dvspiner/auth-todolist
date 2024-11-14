import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Todolist from '../views/todolist'


const HomePage: React.FC = () => {

  return (

    <MainLayout>
      <Todolist />
    </MainLayout>)
}

export default HomePage