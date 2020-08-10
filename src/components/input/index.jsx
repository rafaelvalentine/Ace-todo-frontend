import React, { useState, useEffect } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import * as Type from '../../themes/style/typeface'
import * as Form from '../../themes/style/Form'
import { Logo } from '../picture'

export const Main = ({ append, children, name, label, placeholder, type, value, onChange, onKeyDown, ...props }) => {
  const [_type, setType] = useState(null)
  useEffect(() => {
    if (type === 'password') {
      setType(type)
    }
  }, [])
  return (
    <Form.MainLabelContainer {...props}>
      {label ? <Form.MainLabel>
        <Type.BoldLabel> { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
        : null}

      <InputGroup className='align-items-center'>
        <Form.MainInput
          name={name}
          type={_type || 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          {...props} />
        {append && value.trim().length > 0
          ? <InputGroup.Append>
            { children || <span>
              {_type === 'password' ? <i className='mdi mdi-eye ml-2 cursor-pointer' onClick={() => setType('text')} /> : null}
              {_type === 'text' ? <i className='mdi mdi-eye-off ml-2 cursor-pointer' onClick={() => setType('password')} /> : null}
            </span> }
          </InputGroup.Append>
          : null}
      </InputGroup>

    </Form.MainLabelContainer>
  )
}

export const MainAttachment = ({ name, ...props }) => {
  return (
    <Form.MainLabelContainer for='chat-attachment' {...props}>
      <Logo width='24px' height='24px' src={require('../../themes/images/attachment.svg')} style={{ cursor: 'pointer' }} />
      <Form.MainInput type='file' id='chat-attachment' name={name} style={{ display: 'none' }} {...props} />
    </Form.MainLabelContainer>
  )
}
export const Select = ({ name, label, children, value, onChange, ...props }) => {
  return (
    <Form.MainLabelContainer {...props}>
      {label ? <Form.MainLabel>
        <Type.BoldLabel> { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
        : null}
      <Form.Select name={name} value={value} onChange={onChange} {...props}> { children } </Form.Select>
    </Form.MainLabelContainer>
  )
}

export const SelectAlt = ({ name, children, value, onChange, ...props }) => {
  return (
    <Form.MainLabelContainerAlt {...props}>
      <Form.Select name={name} value={value} onChange={onChange} {...props}> { children } </Form.Select>
    </Form.MainLabelContainerAlt>
  )
}
export const SelectNoLabel = ({ name, children, value, onChange, ...props }) => {
  return (
    <Form.MainLabelContainerAlt {...props}>
      <Form.Select name={name} value={value} onChange={onChange} {...props}> { children } </Form.Select>
    </Form.MainLabelContainerAlt>
  )
}

export const TextArea = ({ label, name, value, onChange, ...props }) => {
  return (
    <Form.MainLabelContainer >
      {label ? <Form.MainLabel>
        <Type.BoldLabel> { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
        : null}
      <Form.TxtArea name={name} value={value} onChange={onChange} {...props} />
    </Form.MainLabelContainer>
  )
}
export const CheckBox = ({ label, name, type, ...props }) => {
  return (
    <Form.CheckBoxLabel className={props.labelClass}>
      {label ? <Form.MainLabel>
        <Type.BoldLabel> { label } </Type.BoldLabel> <br />
      </Form.MainLabel>
        : null}
      <Form.CheckBox name={name} type={type} {...props} />
      <span className='checkmark' />
    </Form.CheckBoxLabel>
  )
}

export const SearchInput = ({ name, type, placeholder, value, onChange, ...props }) => {
  return (
    <Form.AltBox>
      <Form.SearchInputContainer>
        <Logo src={require('../../themes/images/user-search.svg')}
          width='12px'
          height='12px'
        />
        <Form.SearchInput
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      </Form.SearchInputContainer>
    </Form.AltBox>
  )
}
