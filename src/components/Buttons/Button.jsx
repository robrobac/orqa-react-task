/* eslint-disable react/prop-types */
import './button.scss';

export default function Button({children, variant, action}) {

    if (variant === "iconButton") {
        return (
            <button className='iconButton' onClick={action}>
                {children}
            </button>
        )
    }

    if (variant === "exportButton") {
        return (
            <button className='exportButton' onClick={action}>
                Export CSV
            </button>
        )
    }
}
