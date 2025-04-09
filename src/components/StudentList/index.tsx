

import React from 'react'

const StudentList = ({ data }: { data: any[] }) => {
    return (
        <div>
            {
                data.map((student) => {
                    return (<p> {student}</p>)
                })
            }
        </div>
    )
}

export default StudentList