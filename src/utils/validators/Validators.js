import React from 'react'

export const required = (value) => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLength = (max) => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const isUrlValid = (userInput) => 
userInput && userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) == null  ?
  `Please enter valid link` : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined



