import React from 'react'
import Calendar from '~/shared/assets/icon/calendar.svg'
import Ulbi from '~/shared/assets/icon/ulbi.svg'

const PageTwo = () => {
    return (
        <div>
            page2
            <Calendar fill='blue' width={50} height={50} />
            <Ulbi fill='green ' width={50} height={50} />
            <div>{__PLATFORM__ === 'desktop' ? <span>IsDesktop</span> : <span>IsMobile</span>}</div>
        </div>
    )
}

export default PageTwo
