import './styles.css'
import Tab from './Tab.js'

function TabsView() {

    const tabsData = [
        {
            id: '1',
            label: "Tab 1",
            Cotent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, incidunt!",
        },{
            id: '2',
            label: "Tab 2",
            Content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, ab.",
        },{
            id: '3',
            label: "Tab 3",
            Content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga numquam soluta inventore sint?",
        }
    ]

  return <div className='tabs-view'>
    {
        tabsData && tabsData.length > 0
        ? tabsData.map((tabItem, index)=>{
            return <Tab key={tabItem.id} head={tabItem.label} body={tabItem.Content} currentIndex={index}/>
        })
        : <h4>Problem in tabs-Data!!!</h4>
    }
  </div>

}

export default TabsView