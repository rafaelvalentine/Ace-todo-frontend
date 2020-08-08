import React, { useState, useEffect, useRef } from 'react'
import { TaskOptionsDropdown } from '../../components/dropdown'
import { Main } from '../../components/input'
import { TaskList, TaskWrapper } from './styles'

export const Tasks = props => {
  const tasks = props.tasks.map(task => {
    return (
      <Task key={task._id || Math.random()} {...task} />
    )
  })
  return (
    <TaskList className='tasks-list mt-3' id='tasks-list'>
      {props.tasks && props.tasks.length > 0 ? tasks : null}
    </TaskList>
  )
}
const Task = props => {
  const [editMode, setEditMode] = useState(false)
  const [text, setText] = useState('')
  /**
   * here i am using useState to toggle the dropdown
   */
  // const [dropDown, setDropDown] = useState(false)

  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter (ref) {
  /**
   * Alert if clicked on outside of element
   */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (editMode) {
          return setEditMode(!editMode)
        }
      }
    }

    useEffect(() => {
    // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
      // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  useEffect(() => {
    setText(props.title)
  }, [])
  return (
    <TaskWrapper className={`task d-flex justify-content-start align-items-center px-2 ${props.default ? 'default' : ''}`} id='task'  ref={wrapperRef}>
      {editMode ? <Main width='160px' height='34px' value={text} append onChange={e => {
        e.persist()
        setText(e.target.value)
      }}
      >
        <div className='d-flex justify-content-around align-items-center'>
          <i className='confirm mdi mdi-check text-success' onClick={() => {}} />
          <i className='close mdi mdi-close text-danger' onClick={() => setEditMode(!editMode)} />
        </div>
      </Main> : <span className='d-flex justify-content-center align-items-center'>
        <i className={`${props.icon || 'mdi mdi-format-list-checks'} default-icon task-icon`} />
        <p className='ml-2 mb-0 task-title text-truncate'>{props.title}</p>
      </span>}
      {!editMode ? <div className='intereaction ml-auto d-flex justify-content-start align-items-center'>
        <bdi className=''>{props.completed || ''}</bdi>

        {props.default ? null
          : <TaskOptionsDropdown
            handleEdit={() => setEditMode(!editMode)}
            handleDelete={() => {}}
          />
        }
        {/* <i className='mdi mdi-dots-horizontal' /> */}
      </div> : null}
    </TaskWrapper>
  )
}
