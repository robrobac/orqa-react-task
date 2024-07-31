import './button.scss';

export default function Button({children, variant, action}) {

    if (variant === "iconButton") {
        return (
            <button className='iconButton' onClick={action}>
                {children}
            </button>
        )
    }
}
