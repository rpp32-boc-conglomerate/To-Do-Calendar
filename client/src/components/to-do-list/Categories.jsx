//state array passed down as props
//maps through array to render individual category component
import React from 'react';
import Category from './Category.jsx';

function Categories ({addTask, openModal, isMobile, categorizedTasks, deleteTask, handleModalOpen, isOpen, clickedTask}) {
  return (
    categorizedTasks.map((category, i) => {
      return <Category key={i} tasks={category}
        addTask={addTask} openModal={openModal}
        isMobile={isMobile} deleteTask={deleteTask}
        handleModalOpen={handleModalOpen} isOpen={isOpen} clickedTask={clickedTask}
        />
      })
  )
}
export default Categories;