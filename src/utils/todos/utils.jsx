import React, { useState, useEffect, useRef } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ScrollArea from 'react-scrollbar'
import { Main } from '../../components/input'
import { TodoHeaderWrapper, TodosListWrapper, TodoWrapper, BackgroundLines, CheckedIcon, ImportantIcon } from './styles'
import { Header } from '../../themes/style/typeface'

export const TodoHeader = props => {
  const [editMode, setEditMode] = useState(false)
  const [text, setText] = useState('')
  const handleSubmit = () => {

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
          {props.title || 'Task' }
        </Header>
        <i className='mdi mdi-dots-horizontal option ml-3' />
        <i className='mdi mdi-sort sort ml-auto' />
      </div>
      <div ref={wrapperRef} className={`bottom d-flex justify-content-start align-items-center w-100 ${editMode ? 'active' : ''} ${text.trim().length > 100 ? 'deactivate' : ''}`}>
        {editMode
          ? <div className='d-flex justify-content-start align-items-center w-100'>
            <i className='mdi mdi-checkbox-blank-circle-outline task-icon edit-mode mr-2' onClick={() => {
              setEditMode(!editMode)
            }} />
            <Main autoFocus className={``} height='34px' value={text} placeholder='New Task' onKeyDown={e => {
              if (text.trim().length > 100) return null
              if (e.keyCode === 13) {
                handleSubmit()
              }
            }} onChange={e => {
              e.persist()
              setText(e.target.value)
            }}
            />
            { text.trim().length > 0 && text.trim().length <= 100 ? <p className='add-task mb-0 ml-auto'>ADD </p> : null }
          </div>
          : <span className='d-flex justify-content-start align-items-center w-100'>
            <i className='mdi mdi-plus task-icon mr-2' onClick={() => {
              setEditMode(!editMode)
            }} />
            <p className='ml-2 mb-0 task-title text-truncate' onClick={() => setEditMode(!editMode)}>{ text || 'New Task'}</p>
          </span>}
      </div>
    </TodoHeaderWrapper>
  )
}

export const TodoBody = props => {
  return (
    <TodosListWrapper className='mt-2 px-3'>
      <ScrollArea
        speed={1}
        className='todo-list-wrapper'
        contentClassName='todo-list-container'
        horizontal={false}
        vertical
      >
        <Todos />
        <CompletedTodos />
      </ScrollArea>
      <BackgroundLines className=' pt-5 ' />
    </TodosListWrapper>
  )
}

export const Todos = props => {
  const todos = props.todos || [{ completed: false, text: 'Start Right Sidebar' }, { completed: true, text: 'Finish Todo Section' }]
  return (
    <div className='pt-3'>
      {todos.map(todo => {
        if (todo.completed) return null
        return <Todo key={todo._id || Math.random()} {...todo} />
      })}
    </div>
  )
}
export const CompletedTodos = props => {
  const [show, setShow] = useState(true)
  const todos = props.todos || [{ completed: false, text: 'Start Right Sidebar' }, { completed: true, text: 'Finish Todo Section' }]
  return (
    <>
      {true
        ? <div className='pt-3'>
          <div className={`completed-toggle-wrapper d-flex justify-content-start align-items-center ${show ? '' : 'mb-3'} `} onClick={()=> setShow(!show)}>
            <i className={`mdi mdi-chevron-down toggle-arrow ${show ? '' : 'toggle'} mr-2`} />
            <Header className='toggle-text' margin='0'>
              Completed
            </Header>
          </div>
          {show ? todos.map(todo => {
            if (!todo.completed) return null
            return <Todo key={todo._id || Math.random()} {...todo} />
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
  const handleSelection = (props) => {
    document.title = `${props.text || sample} - Ace App`
  }
  return (
    <TodoWrapper className={`d-flex justify-content-between align-items-center p-2 ${activeClass ? 'active' : ''}`} ref={wrapperRef}>
      <CompletedCheckMark
        setCompleted={value => setCompleted(value)}
        completed={completed} />
      <div className='details d-flex flex-column justify-content-start align-items-start px-2 py-1'>
        <p className={`title ${completed ? 'text-strikethrough done' : ''} mb-0`} onClick={() => handleSelection(props)}>
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
      <ImportantCheckMark isImportant={isImportant} setIsImportant={value => setIsImportant(value)} />
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
          <i className='mdi mdi-checkbox-marked-circle checked' onClick={() => {
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
            ? <i className='mdi mdi-check-circle-outline unchecked' onClick={() => {
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
          <i className='mdi mdi-star checked' onClick={() => {
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
          <i className='mdi mdi-star-outline unchecked' onClick={() => {
            setIsImportant(true)
          }} />
        </OverlayTrigger>
      }
    </ImportantIcon>
  )
}
