import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollArea from 'react-scrollbar'
import { TaskOptionsDropdown } from '../../components/dropdown'
import { Main } from '../../components/input'
import {
  handleFetchTasks,
  handleCreateTask,
  handlePatchTask,
  handleDeleteTask,
  handleSetSelectedTask,
  handleFetchTodos,
  handlePatchTodo,
  handleSetSelectedTodo
} from '../../store/actions'
import { ResolveAll } from '../../tools/Helpers/HTTP'
import { Completed, CompletedCheckMark, ImportantCheckMark } from '../todos/utils'
import { DeleteModal } from './utils'
import { TaskList, TaskWrapper, TodoDetailHeadWrapper } from './styles'
import swal from 'sweetalert'

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
  const dispatch = useDispatch()

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
  useEffect(() => {
    if (sessionStorage.getItem('selectedTask') === props._id) setActiveClass(true)
  }, [])
  const handleSubmit = () => {
    setLoading(true)
    dispatch(handlePatchTask({ id: props._id, title: text }))
      .then(result => {
        if (result.status !== 200) {
          setLoading(false)
          swal('', `${result.errMessage || 'Error occurred'}`, '')
          return
        }
        setLoading(false)
        ResolveAll([dispatch(handleFetchTasks())])
          .then(result => {
            setEditMode(false)
          })
      })
  }

  const handleDelete = () => {
    dispatch(handleDeleteTask(props._id))
      .then(result => {
        if (result.status !== 200) {
          setLoading(false)
          swal('', `${result.errMessage || 'Error occurred'}`, '')
          return
        }
        setLoading(false)
        setShowModal(false)
        ResolveAll([dispatch(handleFetchTasks())])
      })
  }
  const handleSelected = () => {
    dispatch(handleFetchTodos(props._id))
      .then(result => {
        if (result.status !== 200) {
          swal('', result.errMessage, '')
          return
        }
        sessionStorage.setItem('selectedTask', props._id)
        sessionStorage.setItem('selectedTask-title', props.title)
        dispatch(handleSetSelectedTask({ id: props._id, title: props.title }))
      })
  }
  return (
    <TaskWrapper className={`task d-flex justify-content-start align-items-center px-3 cursor-pointer ${props.default ? 'default' : ''} ${activeClass ? 'active' : ''}`} id='task' ref={wrapperRef}>
      {editMode ? <Main autoFocus className={`${text.trim().length > 100 ? 'deactivate' : ''}`} height='34px' value={text} disabled={loading} append
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
          <i className='confirm mdi mdi-check text-success' disabled={loading} onClick={() => {
            if (text.trim().length > 100) return null
            handleSubmit()
          }} />
          <i className='close mdi mdi-close text-danger' onClick={() => setEditMode(!editMode)} />
        </div>
      </Main> : <span className='d-flex justify-content-center align-items-center' onClick={handleSelected}>
        <i className={`${props.icon || 'mdi mdi-format-list-checks'} default-icon task-icon`} />
        <p className='ml-2 mb-0 task-title text-truncate'>{text}</p>
      </span>}
      {!editMode ? <div className='intereaction ml-auto d-flex justify-content-start align-items-center'>
        <bdi className=''>{props.completed || '' }</bdi>

        {props.default ? null
          : <TaskOptionsDropdown
            last={props.last}
            handleEdit={() => setEditMode(!editMode)}
            handleDelete={() => setShowModal(!showModal)}
          />
        }
        {/* <i className='mdi mdi-dots-horizontal' /> */}
      </div> : null}
      <DeleteModal
        show={showModal}
        handleDelete={handleDelete}
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
  const dispatch = useDispatch()
  const User = useSelector(state => state.User.data)
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
    setLoading(false)
    dispatch(handleCreateTask({ title: text, _creator: User._id }))
      .then(result => {
        if (result.status !== 200) {
          setLoading(false)
          swal('', `${result.errMessage || 'Error occurred'}`, '')
          return
        }
        setLoading(false)
        setEditMode(false)
        setText('')
        ResolveAll([dispatch(handleFetchTasks())], result.message)
      })
  }
  return (
    <TaskWrapper className={`create-task task d-flex justify-content-start align-items-center mt-2 ${activeClass ? 'active' : ''}`} id='task' ref={wrapperRef}>
      {editMode
        ? <div className='d-flex justify-content-center align-items-center px-3'>
          <i className='mdi mdi-plus task-icon edit-mode' />
          <Main autoFocus
            disabled={loading}
            className={`${text.trim().length > 100 ? 'deactivate' : ''}`}
            height='34px'
            value={text} placeholder='New List' onKeyDown={e => {
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
        : <span className='d-flex justify-content-center align-items-center px-3'>
          <i className='mdi mdi-plus task-icon' onClick={() => {
            props.openSidebar()
            setEditMode(!editMode)
          }} />
          <p className='ml-2 mb-0 task-title text-truncate' onClick={() => setEditMode(!editMode)}>{ text || 'New List'}</p>
        </span>}
      <div className='intereaction ml-auto d-flex justify-content-center align-items-center cursor-pointer'>
        <i className='mdi mdi-playlist-plus' title='add-group' />
      </div>
    </TaskWrapper>
  )
}

export const TodoDetailsHead = props => {
  const dispatch = useDispatch()
  const [completed, setCompleted] = useState(null)
  const [isImportant, setIsImportant] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [text, setText] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const handleSubmit = () => {
    setIsDisabled(true)
    dispatch(handlePatchTodo({ completed, text, isImportant, id: props._id }))
      .then(result => {
        if (result.status !== 200) {
          setIsDisabled(false)
          swal('', result.errMessage, '')
          return
        }
        dispatch(handleSetSelectedTodo(result.data))
        dispatch(handleFetchTodos(props.taskId))
          .then(() => {
            setEditMode(false)
          })
      })
    // handleFetchTodos
  }
  /**
   * here i am using useState to toggle the modal
   */
  // const [activeClass, setActiveClass] = useState(false)

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
  const handleCompleted = value => {
    dispatch(handlePatchTodo({ completed: value, isImportant, text: props.text, id: props._id }))
      .then(result => {
        if (result.status !== 200) {
          swal('', `couldn't complete update ${props.text}`, '')
          return
        }

        dispatch(handleFetchTodos(props.taskId))
          .then(() => {
            setCompleted(value)
            dispatch(handleSetSelectedTodo(result.data))
          })
      })
  }
  const handleIsImportant = value => {
    dispatch(handlePatchTodo({ isImportant: value, completed, text: props.text, id: props._id }))
      .then(result => {
        if (result.status !== 200) {
          swal('', `couldn't complete update ${props.text}`, '')
          return
        }

        dispatch(handleFetchTodos(props.taskId))
          .then(() => {
            setIsImportant(value)
            dispatch(handleSetSelectedTodo(result.data))
          })
      })
  }
  return (
    <TodoDetailHeadWrapper className='d-flex justify-content-around align-items-center p-2' ref={wrapperRef}>
      <CompletedCheckMark
        setCompleted={handleCompleted}
        completed={completed} />
      {editMode
        ? <div className='d-flex justify-content-start align-items-center w-100'>

          <Main autoFocus className={`${text.trim().length > 100 ? 'deactivate' : ''}`} height='34px'
            disabled={isDisabled}
            value={text} placeholder='New Task' onKeyDown={e => {
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
        : <span className='d-flex justify-content-start align-items-center w-100'>
          <p className={`${completed ? 'text-strikethrough ' : ''} ml-2 mb-0 p-2 task-title text-break`} onClick={() => setEditMode(!editMode)} title={text || 'New Task'}>{ text || 'New Task' }</p>
        </span>}
      <ImportantCheckMark isImportant={isImportant} setIsImportant={handleIsImportant} />
    </TodoDetailHeadWrapper>

  )
}
