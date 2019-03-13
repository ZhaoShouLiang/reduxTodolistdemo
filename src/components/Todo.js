import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, tex }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {tex}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  tex: PropTypes.string.isRequired
}

export default Todo
