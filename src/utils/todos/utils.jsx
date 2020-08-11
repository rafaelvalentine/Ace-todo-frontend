import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ScrollArea from 'react-scrollbar'
import { Main } from '../../components/input'
import { handleSetSelectedTodo, handleCreateTodo, handlePatchTodo, handleFetchTodos } from '../../store/actions'
import { Header } from '../../themes/style/typeface'
import { TodoHeaderWrapper, TodosListWrapper, TodoWrapper, BackgroundLines, CheckedIcon, ImportantIcon } from './styles'

export const TodoHeader = props => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [text, setText] = useState('')
  const Title = useSelector(state => state.List.selected.title)
  const handleSubmit = () => {
    let taskId = sessionStorage.getItem('selectedTask')

    if (!taskId) {
      swal('', 'please create/select a task', '',{
        button: false
      })
      return
    }

    setIsDisabled(true)
    dispatch(handleCreateTodo({ taskId, text }))
      .then(result => {
        if (result.status !== 200) {
          swal('', 'unable to create todo', '')
          setIsDisabled(false)
          return
        }
        dispatch(handleFetchTodos(taskId))
          .then(() => {
            setIsDisabled(false)
            setText('')
            setEditMode(false)
          })
      })
  }

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
  return (
    <TodoHeaderWrapper className='px-3 py-2'>
      <div className='top d-flex justify-content-start align-items-center w-100'>
        <Header className='title' margin='0'>
          {(Title || sessionStorage.getItem('selectedTask-title')) || 'Task' }
        </Header>
        <i className='mdi mdi-dots-horizontal option ml-3' />
        <i className='mdi mdi-sort sort ml-auto' />
      </div>
      <div ref={wrapperRef} className={`w-100 bottom d-flex justify-content-start align-items-center  ${editMode ? 'active' : ''}  ${text.trim().length > 100 && editMode ? 'deactivate' : ''}`}>
        {editMode
          ? <div className='d-flex justify-content-start align-items-center w-100'>
            <i className='mdi mdi-checkbox-blank-circle-outline task-icon edit-mode mr-2' onClick={() => {
              setEditMode(!editMode)
            }} />
            <Main autoFocus height='34px' value={text} placeholder='Add a Todo' disabled={isDisabled} onKeyDown={e => {
        
              if (text.trim().length > 100) return null
              if (e.keyCode === 13) {
                handleSubmit()
              }
            }} onChange={e => {
              e.persist()
              setText(e.target.value)
            }}
            />
            { text.trim().length > 0 && text.trim().length <= 100 ? <p className='add-task mb-0 ml-auto'
              onClick={() => {
                if (text.trim().length > 100) return null
                handleSubmit()
              }}
            >ADD </p> : null }
          </div>
          : <div className='d-flex justify-content-start align-items-center w-100'>
            <i className='mdi mdi-plus task-icon mr-2' onClick={() => {
              setEditMode(!editMode)
            }} />
            <p className=' mb-0 task-title text-truncate ' onClick={() => setEditMode(!editMode)}>{ text || 'Add a Todo'}</p>
          </div>}
      </div>
    </TodoHeaderWrapper>
  )
}

export const TodoBody = props => {
  const _Todos = useSelector(state => state.Todo.data)
  return (
    <TodosListWrapper className='mt-2 px-3'>
      <ScrollArea
        speed={1}
        className='todo-list-wrapper'
        contentClassName='todo-list-container'
        horizontal={false}
        vertical
      >
        <Todos todos={_Todos} setActiveClass={value => props.setActiveClass(value)} />
        <CompletedTodos todos={_Todos} setActiveClass={value => props.setActiveClass(value)} />
      </ScrollArea>
      <BackgroundLines className=' pt-5 ' />
    </TodosListWrapper>
  )
}

export const Todos = props => {
  const todos = props.todos || [{ completed: false, text: 'Start Right Sidebar' }, { completed: true, text: 'Finish Todo Section' }]
  return (
    <>
      {props.todos.length > 0
        ? <div className='pt-3'>
          {todos.map(todo => {
            if (todo.completed) return null
            return <Todo setActiveClass={value => props.setActiveClass(value)} key={todo._id || Math.random()} {...todo} />
          })}
        </div>
        : null}
    </>
  )
}
export const CompletedTodos = props => {
  const [show, setShow] = useState(true)
  const todos = props.todos || [{ completed: false, text: 'Start Right Sidebar' }, { completed: true, text: 'Finish Todo Section' }]
  return (
    <>
      {props.todos.length > 0
        ? <div className='pt-3'>
          <div className={`completed-toggle-wrapper d-flex justify-content-start align-items-center ${show ? '' : 'mb-3'} `} onClick={() => setShow(!show)}>
            <i className={`mdi mdi-chevron-down toggle-arrow ${show ? '' : 'toggle'} mr-2`} />
            <Header className='toggle-text' margin='0'>
              Completed
            </Header>
          </div>
          {show ? todos.map(todo => {
            if (!todo.completed) return null
            return <Todo setActiveClass={value => props.setActiveClass(value)} key={todo._id || Math.random()} {...todo} />
          }) : null }
        </div>
        : null}
    </>

  )
}

export const Todo = props => {
  const sample = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum, consequatur sit illum corporis neque, hic ab, minus id magni tenetur laborum. Quae, dignissimos officia. Doloremque eaque esse mollitia in?'
  const [completed, setCompleted] = useState(false)
  const [isImportant, setIsImportant] = useState(false)
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
        setActiveClass(false)
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
    setCompleted(props.completed)
    setIsImportant(props.isImportant)
  }, [props])
  const dispatch = useDispatch()
  const handleSelection = (props) => {
    document.title = `${props.text || sample} - Ace App`
    dispatch(handleSetSelectedTodo(props))
  }

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
    <TodoWrapper
      className={`d-flex justify-content-between align-items-center p-2 ${activeClass ? 'active' : ''}`}
      ref={wrapperRef}>
      <CompletedCheckMark
        setCompleted={handleCompleted}
        completed={completed} />
      <div className='details d-flex flex-column justify-content-start align-items-start px-2 py-1' onClick={() => {
        handleSelection(props)
        props.setActiveClass(true)
      }}>
        <p className={`title ${completed ? 'text-strikethrough done' : ''} mb-0`} onClick={() => {}}>
          { props.text || sample}
        </p>
        <div className='info d-flex justify-content-start align-items-start mt-1'>
          <span>
            <bdi className='front mx-2'>&#x2022;</bdi>
            <i className='my-day mdi mdi-weather-sunny'>My Day</i>
          </span>
          <span>
            <bdi className='front mx-2'>&#x2022;</bdi>
            <i className='note mdi mdi-sticker-outline mr-2' />
            <i className='bell mdi mdi-bell-outline mr-2' title={'' || 'Mon, Aug 10'} />
          </span>
        </div>
      </div>
      <ImportantCheckMark isImportant={isImportant} setIsImportant={handleIsImportant} />
    </TodoWrapper>
  )
}

export const CompletedCheckMark = ({ completed, placement, setCompleted, ...props }) => {
  const [show, setShow] = useState(false)
  return (
    <CheckedIcon className='check' onMouseOut={() => setShow(false)} onMouseOver={() => setShow(true)}>
      {completed
        ? <OverlayTrigger
          placement={placement || 'top'}
          overlay={
            <Tooltip id={`tooltip-${placement || 'top'}`}>
                Mark as not completed
            </Tooltip>
          }
        >
          <i className='mdi mdi-checkbox-marked-circle checked cursor-pointer' onClick={() => {
            setCompleted(false)
          }} />
        </OverlayTrigger>

        : <OverlayTrigger
          placement={placement || 'top'}
          overlay={
            <Tooltip id={`tooltip-${placement || 'top'}`}>
                Mark as completed
            </Tooltip>
          }
        >
          {show
            ? <i className='mdi mdi-check-circle-outline unchecked cursor-pointer' onClick={() => {
              setCompleted(true)
            }} />
            : <i className='mdi mdi-checkbox-blank-circle-outline unchecked' onClick={() => {
              setCompleted(true)
            }} />
          }

        </OverlayTrigger>
      }
    </CheckedIcon>
  )
}

export const ImportantCheckMark = ({ isImportant, placement, setIsImportant, ...props }) => {
  return (
    <ImportantIcon className='check'>
      {isImportant
        ? <OverlayTrigger
          placement={placement || 'top'}
          overlay={
            <Tooltip id={`tooltip-${placement || 'top'}`}>
                Remove importance
            </Tooltip>
          }
        >
          <i className='mdi mdi-star checked cursor-pointer' onClick={() => {
            setIsImportant(false)
          }} />
        </OverlayTrigger>

        : <OverlayTrigger
          placement={placement || 'top'}
          overlay={
            <Tooltip id={`tooltip-${placement || 'top'}`}>
                Mark task as important
            </Tooltip>
          }
        >
          <i className='mdi mdi-star-outline unchecked cursor-pointer' onClick={() => {
            setIsImportant(true)
          }} />
        </OverlayTrigger>
      }
    </ImportantIcon>
  )
}
