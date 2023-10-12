
// Style
import './index.css'
// Component
import CheckMarkIcon from "components/SvgComponents/CheckMarkIcon";


interface IListItem {
    text: string;
}

export default function ListItem({text}:IListItem) {
  return (
    <div className='listItem-container' >
      <CheckMarkIcon />
      <p>{text}</p>
    </div>
  )
}
