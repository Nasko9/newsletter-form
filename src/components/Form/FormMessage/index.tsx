import ListItem from './ListItem'
import './index.css'

export default function FormMessage() {
  return (
    <div className='content'>
        <h1 className='content-header'>Stay updated!</h1>
        <p className='content-paragraph'>Join 60,00+ product managers receiving monthly updates on:</p>
        <ListItem text='Product discovery and building what matters'/>
        <ListItem text='Measuring to ensure updates are a success'/>
        <ListItem text='And much more!'/>
    </div>
  )
}
