import "./link.css"

export const Link = (props) => {
  return (
    <a className="link">
      {props.children}
    </a>
  )
}
