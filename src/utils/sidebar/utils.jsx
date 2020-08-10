import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'
import Button from '../../components/button'
import { Card } from '../../components/card'
import Modal from '../../components/modal'
import { Header, SubHeader } from '../../themes/style/typeface'
import { handleDeleteTodo, handleFetchTodos } from '../../store/actions'
import { ExitDeleteWrapper } from './styles'
import '../../themes/sass/components/modals.sass'

export const DeleteModal = ({ loading, title, handleDelete, todo, ...props }) => {
  return (
    <Modal className='delete-task-modal'{...props}>
      <Card id='delete-task-container'
        width='100%'
        height='100%'
        backgroundColor='transparent'
        padding='12px 12px 24px'
        boxShadow='0px'
        flexWrap='nowrap'
        justify='center'
        align='flex-start'
      >
        <Header className='title'>
          {`"${title || 'Task'}"`} will be permanently deleted.
        </Header>
        <SubHeader className='subtitle' margin='0' >
          You won't be able to undo this action.
        </SubHeader>
        <div className='button-group w-100 d-flex justify-content-end align-items-center mt-4'>
          <Button
            className='cancel'
            margin='0'
            width='88px'
            height='32px'
            content='Cancel'
            color='black'
            onClick={props.onHide}
            backgroundColor='secondary' />
          <Button
            className='delete ml-3'
            margin='0'
            width='88px'
            height='32px'
            content={`Delete ${todo ? 'todo' : 'list'}`}
            color='white'
            onClick={handleDelete}
            backgroundColor='danger'
            loading={loading}
            size='md' />
        </div>
      </Card>
    </Modal>
  )
}

export const ExitDateDelete = props => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const todo = useSelector(state => state.Todo.selected)

  return (
    <>
      <ExitDeleteWrapper className='d-flex justify-content-between align-items-center p-2'>
        <i className='close mdi mdi-exit-to-app ' onClick={() => props.setActiveClass(false)} title='close' />
        <span className='timestamp'>
          {props.completed ? 'Completed' : 'Created'}
          <bdi className='mx-1'>on</bdi>
          {'' || 'Mon, Aug 10'}
        </span>
        <i className='trash mdi mdi-delete' title='delete' onClick={() => setShowModal(!showModal)} />
      </ExitDeleteWrapper>
      <DeleteModal show={showModal}
        onHide={() => setShowModal(!showModal)}
        loading={loading}
        title={todo.text}
        todo
        handleDelete={() => {
          setLoading(true)
          dispatch(handleDeleteTodo(todo._id))
            .then(result => {
              if (result.status !== 200) {
                setLoading(false)
                swal('', result.errMessage, '')
                return
              }
              setLoading(false)
              setShowModal(false)
              dispatch(handleFetchTodos(sessionStorage.getItem('selectedTask')))
                .then(() => {
                  props.setActiveClass(false)
                })
            })
        }}
      />
    </>
  )
}
