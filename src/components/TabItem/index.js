import './index.css'

const TabItem = props => {
  const {each, ChangeTab, isActive} = props
  const {id, buttonText} = each

  const ActiveTab = () => {
    ChangeTab(id)
  }

  return (
    <li className="btn-list">
      <button
        className={`${isActive ? 'active-btn' : ''} btn`}
        type="button"
        onClick={ActiveTab}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
