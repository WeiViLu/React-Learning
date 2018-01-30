import React from 'react'
import { render } from 'react-dom'

// 通用样式
import './static/css/common.less'

import Todo from './containers/Todo/';

import Perf from 'react-addons-perf';

render(
    <Todo/>,
    document.getElementById('root')
)
