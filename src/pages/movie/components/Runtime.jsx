import React from 'react'

export function Runtime({ runtime }) {

    // extract time from runtime string
    const run = runtime.split(' ')
    // convert time into hours
    const time = (Number(run[0]) / 60)

    // If time is not specified so run[0] is not a numbers, no display
    // Else format time into hours and minutes
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