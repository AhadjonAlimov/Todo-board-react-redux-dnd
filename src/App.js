import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { todoFetched } from './redux/action';
import Nav from './constants/Nav';
import Board from './components/Boards';
import Footer from './constants/Footer';
import "./App.scss"


function App() {
  const { todoLists } = useSelector(state => state);
  const dispatch = useDispatch();

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = todoLists;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)-1].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)-1].items.splice(
      re.source.index,
      1
    );
    
    newBoardData[parseInt(re.destination.droppableId)-1].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    dispatch(todoFetched(newBoardData));
  };
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Nav />
        <div className="content antialiased p-6">
          <Board />
        </div>
        <Footer />
      </DragDropContext>
    </>
  );
}
export default App;
