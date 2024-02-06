import './index.css'

const TabItem = props => {
  const {eachTab, onClickTabItem, isActiveTab} = props
  const {displayText, tabId} = eachTab

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  const activeClass = isActiveTab ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
