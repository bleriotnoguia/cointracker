import React from 'react'

const Message = ({variant, children}) => {
    var style;
    switch (variant) {
        case 'info':
            style = 'bg-blue-300 text-gray-700'
            break;
        case 'danger':
            style = 'bg-red-300 text-white'
            break;
        default:
            style = 'bg-white text-gray-700'
            break;
    }
    return (
        <div className={style}>
            {children}
        </div>
    )
}

Message.defaultProps = {
    variant: 'info'
}

export default Message