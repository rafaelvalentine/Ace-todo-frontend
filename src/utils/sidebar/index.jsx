import React, { useState, useEffect, useRef } from 'react'
import ScrollArea from 'react-scrollbar'
import { TaskOptionsDropdown } from '../../components/dropdown'
import { Main } from '../../components/input'
import { Completed, CompletedCheckMark, ImportantCheckMark } from '../todos/utils'
import { DeleteTaskModal } from './utils'
import { TaskList, TaskWrapper, TodoDetailHeadWrapper } from './styles'

export const Tasks = props => {
  const tasks = props.tasks.map((task, index) => {
    if (props.tasks.length - 1 === index) {
      return <Task last key={task._id || Math.random()} {...task} />
    }
    return (
      <Task key={task._id || Math.random()} {...task} />
    )
  })
  return (
    <TaskList className='tasks-list mt-3' id='tasks-list'>
      <ScrollArea
        speed={1}
        className='tasks-list-wrapper'
        contentClassName='tasks-list-container'
        horizontal={false}
        vertical
      >
        {props.tasks && props.tasks.length > 0 ? tasks : null}
        <div className='buffer'>{''}</div>
      </ScrollArea>
    </TaskList>
  )
}
const Task = props => {
  const [editMode, setEditMode] = useState(false)
  const [text, setText] = useState('')
  const [activeClass, setActiveClass] = useState(false)
  const [loading, setLoading] = useState(false)
  /**
   * here i am using useState to toggle the modal
   */
  const [showModal, setShowModal] = useState(false)

  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter (ref) {
  /**
   * Alert if clicked on outside of element
   */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActiveClass(false)
        if (editMode) {
          return setEditMode(!editMode)
        }
      } else {
        setActiveClass(true)
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
  }, [props.title])
  const handleSubmit = () => {

  }
  return (
    <TaskWrapper className={`task d-flex justify-content-start align-items-center px-3  ${props.default ? 'default' : ''} ${activeClass ? 'active' : ''}`} id='task' ref={wrapperRef}>
      {editMode ? <Main autoFocus className={`${text.trim().length > 100 ? 'deactivate' : ''}`} height='34px' value={text} append
        onKeyDown={e => {
          if (text.trim().length > 100) return null
          if (e.keyCode === 13) {
            handleSubmit()
          }
        }}
        onChange={e => {
          e.persist()
          setText(e.target.value)
        }}
      >
        <div className='d-flex justify-content-around align-items-center'>
          <i className='confirm mdi mdi-check text-success' onClick={() => {
            if (text.trim().length > 100) return null
          }} />
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
            last={props.last}
            handleEdit={() => setEditMode(!editMode)}
            handleDelete={() => setShowModal(!showModal)}
          />
        }
        {/* <i className='mdi mdi-dots-horizontal' /> */}
      </div> : null}
      <DeleteTaskModal
        show={showModal}
        onHide={() => setShowModal(!showModal)}
        title={text}
        loading={loading}
      />
    </TaskWrapper>
  )
}

export const CreateTask = props => {
  const [editMode, setEditMode] = useState(false)
  const [text, setText] = useState('')
  const [activeClass, setActiveClass] = useState(false)
  const [loading, setLoading] = useState(false)
  /**
   * here i am using useState to toggle the modal
   */
  // const [showModal, setShowModal] = useState(false)

  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter (ref) {
  /**
   * Alert if clicked on outside of element
   */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActiveClass(false)
        if (editMode) {
          return setEditMode(!editMode)
        }
      } else {
        setActiveClass(true)
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

  const handleSubmit = () => {

  }
  return (
    <TaskWrapper className={`create-task task d-flex justify-content-start align-items-center px-3 mt-2 ${activeClass ? 'active' : ''}`} id='task' ref={wrapperRef}>
      {editMode
        ? <div className='d-flex justify-content-center align-items-center'>
          <i className='mdi mdi-plus task-icon edit-mode' />
          <Main autoFocus className={`${text.trim().length > 100 ? 'deactivate' : ''}`} height='34px' value={text} placeholder='New List' onKeyDown={e => {
            if (text.trim().length > 100) return null
            if (e.keyCode === 13) {
              handleSubmit()
            }
          }} onChange={e => {
            e.persist()
            setText(e.target.value)
          }}
          />
        </div>
        : <span className='d-flex justify-content-center align-items-center'>
          <i className='mdi mdi-plus task-icon' onClick={() => {
            props.openSidebar()
            setEditMode(!editMode)
          }} />
          <p className='ml-2 mb-0 task-title text-truncate' onClick={() => setEditMode(!editMode)}>{ text || 'New List'}</p>
        </span>}
      <div className='intereaction ml-auto mr-4 d-flex justify-content-start align-items-center'>
        <i className='mdi mdi-playlist-plus' title='add-group' />
      </div>
    </TaskWrapper>
  )
}

export const TodoDetailsHead = props => {
  const [completed, setCompleted] = useState(null)
  const [isImportant, setIsImportant] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [text, setText] = useState('')
  const handleSubmit = () => {

  }
  /**
   * here i am using useState to toggle the modal
   */
  const [activeClass, setActiveClass] = useState(false)

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
    setText(props.text)
    setCompleted(props.completed)
    setIsImportant(props.isImportant)
  }, [props])
  let sample = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ullam at consequatur sit dolore fuga iure eligendi ipsam corrupti nihil. Voluptatum fuga porro distinctio facilis nisi provident, possimus modi doloremque.'
  return (
    <TodoDetailHeadWrapper className='d-flex justify-content-around align-items-center p-2' ref={wrapperRef}>
      <CompletedCheckMark
        setCompleted={value => setCompleted(value)}
        completed={completed} />
      {editMode
        ? <div className='d-flex justify-content-start align-items-center w-100'>
        
          {/* <i className='mdi mdi-checkbox-blank-circle-outline task-icon edit-mode mr-2' onClick={() => {
            setEditMode(!editMode)
          }} /> */}
          <Main autoFocus className={`${text.trim().length > 100 ? 'deactivate' : ''}`} height='34px' value={text} placeholder='New Task' onKeyDown={e => {
            if (text.trim().length > 100) return null
            if (e.keyCode === 13) {
              handleSubmit()
            }
          }} onChange={e => {
            e.persist()
            setText(e.target.value)
          }}
          />
          {/* text.trim().length > 0 && text.trim().length <= 100 ? <p className='add-task mb-0 ml-auto'>ADD </p> : null */}
        </div>
        : <span className='d-flex justify-content-start align-items-center w-100'>
          {/* <i className='mdi mdi-plus task-icon mr-2' onClick={() => {
            setEditMode(!editMode)
          }} /> */}
          <p className={`${completed ? 'text-strikethrough ' : ''} ml-2 mb-0 p-2 task-title text-break`} onClick={() => setEditMode(!editMode)} title={ text || 'New Task'}>{ text || 'New Task' }</p>
        </span>}
      <ImportantCheckMark isImportant={isImportant} setIsImportant={value => setIsImportant(value)} />
    </TodoDetailHeadWrapper>

  )
}
