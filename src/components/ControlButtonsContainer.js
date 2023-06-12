import ControlButton from 'components/ControlButton'
import { useStyles } from 'styles/ControlButtonsStyle'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory } from 'redux/notesReducer'
import notesCategories from 'util/NotesCategories'

export default function ControlButtons() {
  const classes = useStyles()
  const categories = Object.keys(notesCategories)
  const activeCategory = useSelector((state) => state.notes.activeCategory)
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <ControlButton
        name="All"
        type="primary"
        active={activeCategory === 'All'}
        onClick={() => dispatch(setActiveCategory('All'))}
        displayIndicator={false}
      ></ControlButton>

      {categories.map((category, index) => (
        <ControlButton
          name={category}
          type={notesCategories[category]}
          active={activeCategory === category}
          onClick={() => dispatch(setActiveCategory(category))}
          key={index}
        ></ControlButton>
      ))}
    </div>
  )
}
