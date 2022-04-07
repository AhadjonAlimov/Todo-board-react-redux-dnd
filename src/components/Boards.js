import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";
import { useSelector, useDispatch } from "react-redux";
import {
  todoFetching,
  todoFetched,
  todoFetchingError,
  addTodoToggle,
  selectBoard,
  newSelectBoard,
  changeBtnTaskToggle,
} from "../redux/action";
import { Droppable } from "react-beautiful-dnd";
import { usePrevious } from "../hooks/usePrevious";
import Todo from "./Todo";
import Spinner from "./Spinner";
import Error from "./error/error";

function Board() {
  const {
    todoLists,
    todoLoadingStatus,
    addTodoStatus,
    selectBoardNum,
    changeBtnTaskStatus,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();
  const [fakeTodo, setFakeTodo] = useState("");
  const prevSelectBoardNum = usePrevious(selectBoardNum);

  useEffect(() => {
    dispatch(todoFetching());
    request(
      "https://my-json-server.typicode.com/AhadjonAlimov/mock-todo-json/todoLists"
    )
      .then((data) => dispatch(todoFetched(data)))
      .catch(() => dispatch(todoFetchingError()));
    // eslint-disable-next-line
  }, []);

  if (todoLoadingStatus === "loading") {
    return <Spinner />;
  } else if (todoLoadingStatus === "error") {
    return <Error />;
  }
  // button functions
  const addTodo = () => {
    if (addTodoStatus === true && selectBoardNum !== prevSelectBoardNum) {
      setFakeTodo("");
    } else if (addTodoStatus === true) {
      if (fakeTodo !== "" && selectBoardNum === prevSelectBoardNum) {
        const randomId = Math.floor(Math.random() * 1000);
        const item = {
          id: randomId,
          tIndex: randomId,
          priority: "LOW",
          todo: fakeTodo,
        };
        let newTodoLists = todoLists;
        newTodoLists[selectBoardNum - 1].items.push(item);
        dispatch(todoFetched(newTodoLists));
        dispatch(addTodoToggle());
        dispatch(selectBoard(0));
        setFakeTodo("");
      } else {
      }
    } else {
      dispatch(changeBtnTaskToggle());
      dispatch(addTodoToggle());
    }
  };
  const handleChange = (e) => {
    const val = e.target.value;
    const dataId = parseInt(e.target.attributes["data-id"].value);
    setFakeTodo(val);
    dispatch(newSelectBoard(dataId));
    if (changeBtnTaskStatus === true && val.length >= 0) {
      dispatch(changeBtnTaskToggle(false));
    } else if (addTodoStatus === true && (val.length === 0 || val === "")) {
      dispatch(changeBtnTaskToggle(true));
      setFakeTodo("");
    }
  };
  const cancelHandle = () => {
    dispatch(selectBoard(0));
    dispatch(changeBtnTaskToggle());
    dispatch(addTodoToggle());
  };
  ////////////////

  return (
    <>
      <div className="boardPage mx-auto">
      <h1 className="justMessage mx-auto">DRAG and DROP TODO</h1>
        <div className="flex flex-wrap justify-center">
          {todoLists.map(({ items, name, bIndex }) => {
            return (
              <Droppable droppableId={bIndex.toString()} key={bIndex}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="w-full smCard mdCard xlCard p-4 maxW"
                    >
                      <div
                        className={`boardCard p-2 rounded-xl drop-shadow-md bg-white self-start`}
                      >
                        <div className="boardHero font-medium text-gray-500 flex justify-between py-2">
                          <h6>{name}</h6>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="overflow-y-auto overflow-x-hidden h-auto">
                          {items.map((item, iIndex) => {
                            return (
                              <Todo key={item.id} data={item} index={iIndex} />
                            );
                          })}
                          {provided.placeholder}
                        </div>

                        <div
                          className={
                            addTodoStatus && selectBoardNum === bIndex
                              ? "block"
                              : "hidden"
                          }
                        >
                          <textarea
                            name="todo"
                            id={bIndex}
                            placeholder="Write your todo here"
                            data-id={bIndex}
                            rows="4"
                            value={fakeTodo}
                            onChange={(e) => handleChange(e)}
                            className="taskCard rounded-xl p-2 my-1"
                          ></textarea>
                        </div>
                        <div className="boardFooter flex justify-center items-center my-2">
                          {changeBtnTaskStatus && selectBoardNum === bIndex ? (
                            <button
                              onClick={() => cancelHandle()}
                              className="flex space-x-2 items-center text-red-300 showUp"
                            >
                              <div className="p-px border border-dashed rounded customCancel border-red-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </div>
                              <span>Cancel</span>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                dispatch(selectBoard(bIndex));
                                addTodo();
                              }}
                              className="flex space-x-2 items-center text-blue-400 showUp"
                            >
                              <div className="p-px border border-dashed rounded border-blue-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  />
                                </svg>
                              </div>
                              <span>Add task</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }}
              </Droppable>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Board;
