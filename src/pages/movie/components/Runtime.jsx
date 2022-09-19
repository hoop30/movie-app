import React from 'react'

export function Runtime({ runtime }) {

    const run = runtime.split(' ')
    const time = (Number(run[0]) / 60)
   
    if (isNaN(run[0])) {
        return null
    } else {
        const hour = Math.trunc(time)
        const min = Math.trunc(((time - hour) * 60))
        if (hour !== 0) {
            return <p>{hour}h {min}m</p>
        } else {
            return <p>{min}m</p>
        }
    }
}
console.log('ok');
        