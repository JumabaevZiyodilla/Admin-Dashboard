import "../card.css"
import "./button.css"

export const Button = (props) => {
    return <button {...props}>{props.children}</button>
}