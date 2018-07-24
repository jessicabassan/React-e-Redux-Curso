import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <div>
        <Family lastName='Prado'>
            <Member name='Jéssica' />
            <Member name='Andy' />
            <Member name='Lara' />
        </Family>

        <Family lastName='Silva'>
            <Member name='Jéssica' />
            <Member name='Tiago' />
            <Member name='Diego' />
        </Family>
    </div>,
    document.getElementById('app'))