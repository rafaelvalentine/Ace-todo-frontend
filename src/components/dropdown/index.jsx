import React, { useState, useEffect, useRef } from 'react'
// import Task from 'Task'
import * as DropDown from './styles'

// export const TransactionDropDown = ({ handleSortBy }) => {
//   return (
//     <DropDown.SortDropDown>
//       <DropDown.SortOptions onClick={() => handleSortBy('oldest')}>
//         <span>Date ( oldest to newest)</span>
//       </DropDown.SortOptions>
//       <DropDown.SortOptions onClick={() => handleSortBy('newest')}>
//         <span>Date ( newest to oldest)</span>
//       </DropDown.SortOptions>
//       <DropDown.SortOptions onClick={() => handleSortBy('lowest')}>
//         <span>Amount (lowest to higest)</span>
//       </DropDown.SortOptions>
//       <DropDown.SortOptions onClick={() => handleSortBy('highest')}>
//         <span>Amount (higest to lowest)</span>
//       </DropDown.SortOptions>
//     </DropDown.SortDropDown>
//   )
// }

// export const NavDropDown = props => {
//   return (
//     <DropDown.NavDropDown>
//       <DropDown.NavOptions onClick={() => props.history.push('/dashboard/createadmin')}>
//         <img src={require('../../assets/images/createadmin.svg')} alt='Create new admin user' />
//         <span> Create new admin user </span>
//       </DropDown.NavOptions>
//       <DropDown.NavOptions onClick={() => props.history.push('/dashboard/adminsettings')}>
//         <img src={require('../../assets/images/settings.svg')} alt='settings' />
//         <span> Settings </span>
//       </DropDown.NavOptions>
//       <DropDown.NavOptions onClick={props.handleLogoutUser}>
//         <img src={require('../../assets/images/logout.svg')} alt='logout' />
//         <span> Logout </span>
//       </DropDown.NavOptions>
//     </DropDown.NavDropDown>
//   )
// }

// export const JobsDropDown = ({ handleFilterBy }) => {
//   return (
//     <DropDown.SortDropDown>
//       <DropDown.SortOptions onClick={() => handleFilterBy('completed')}>
//         <span>Completed Jobs</span>
//       </DropDown.SortOptions>
//       <DropDown.SortOptions onClick={() => handleFilterBy('accepted')}>
//         <span>Accepted Jobs</span>
//       </DropDown.SortOptions>
//       <DropDown.SortOptions onClick={() => handleFilterBy('unaccepted')}>
//         <span>Unaccepted Jobs</span>
//       </DropDown.SortOptions>
//     </DropDown.SortDropDown>
//   )
// }
// export const ConnectDropDown = ({ email, toggleDropDown, handleStartNewChat, ...props }) => {
//   return (
//     <DropDown.ConnectDropDown {...props}>
//       <a href={`mailto:${email}`} target='_top'>
//         <DropDown.ConnectOptions onClick={toggleDropDown} {...props}>
//           <span>Via Email</span>
//         </DropDown.ConnectOptions>
//       </a>
//       <DropDown.ConnectOptions onClick={handleStartNewChat} {...props}>
//         <span>Via Live Chat</span>
//       </DropDown.ConnectOptions>
//     </DropDown.ConnectDropDown>
//   )
// }
// export const MilestonesDropDown = ({ milestones }) => {
//   let milestone = milestones.map((milestone, index) => (
//     <DropDown.Milestones key={milestone._id}>
//       <span>{`${index + 1}.  ${milestone.milestone}`}</span>
//     </DropDown.Milestones>
//   ))
//   return (
//     <DropDown.MilestonesDropDown>
//       {milestones && milestones.length > 0 ? milestone : null }
//     </DropDown.MilestonesDropDown>
//   )
// }

// export default props => {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant='success' id='dropdown-basic'>
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
//         <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
//         <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
//       </Dropdown.Menu>
//         </Dropdown>
//   )
// }

export const TaskOptionsDropdown = ({ handleEdit, handleDelete, ...props }) => {
  // const time = props.createdAt ? Task(props.createdAt).fromNow() : Task(new Date().getTime()).fromNow()

  /**
   * here i am using useState to toggle the dropdown
   */
  const [dropDown, setDropDown] = useState(false)

  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter (ref) {
  /**
   * Alert if clicked on outside of element
   */
    function handleClickOutside (event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return setDropDown(false)
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
  const TaskOptions = (<div>
    <DropDown.TaskOptions className='edit mb-1 d-flex justify-content-start align-items-center' onClick={() => {
      handleEdit()
      setDropDown(false)
    }}>
      <i className='mdi mdi-pencil' />
      <p className='title ml-2'>Edit</p>
    </DropDown.TaskOptions>
    <DropDown.TaskOptions className='delete mb-1 d-flex justify-content-start align-items-center' onClick={() => handleDelete()}>
      <i className='mdi mdi-delete' />
      <p className='title ml-2'>Delete</p>
    </DropDown.TaskOptions>
  </div>
  )
  return (
    <DropDown.TaskDropdown id='options' className='options d-flex justify-content-center align-items-center ml-0' ref={wrapperRef}>
      <DropDown.TaskToggle onClick={() => setDropDown(!dropDown)}>
        <i className='mdi mdi-dots-horizontal options-icon' />
      </DropDown.TaskToggle>

      {dropDown
        ? <DropDown.TaskMenu className={`py-1 ${props.last ? 'last' :''}`}>
          { TaskOptions }
        </DropDown.TaskMenu>
        : null }

    </DropDown.TaskDropdown>
  )
}

// export default index
