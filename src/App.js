import ImageSlider from './components/image-slider/image-slider';
import LoadMore from './components/load-more-products/LoadMoreProducts';
import TreeView from './components/TreeView/TreeView';
import menuData from './components/TreeView/data.js';
import QrCodeGen from './components/QRCodeGen/QrCodeGen.js';
import ThemeChange from './components/ThemeChange/ThemeChange';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import './App.css';
import Accordion from './components/accordian/index.js';
import GenerateRandomColor from './components/generate-random-color/index.js';
// import TabsView from './components/tabs-view/TabsView';

function App() {
  return (
    <div className="App">
      <Accordion />
      <br />
      <hr />
      <br />
      <GenerateRandomColor />
      <br />
      <hr />
      <br />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
      <br />
      <hr />
      <br />
      <LoadMore />
      <br />
      <hr />
      <br />
      <TreeView menus={menuData} />
      <br />
      <hr />
      <br />
      <QrCodeGen />
      <br />
      <hr />
      <br />
      <ThemeChange />
      <br />
      <hr />
      <br />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      <br />
      <hr />
      <br />
      {/* <TabsView /> */}
      <br />
      <hr />
      <br />
    </div>
  );
}

export default App;
