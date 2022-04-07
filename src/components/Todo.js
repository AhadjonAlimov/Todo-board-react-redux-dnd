import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDraggableInPortal } from "../hooks/useFixDrag";
import Image1 from "../assets/images/user-default-img.jpg";

function Todo({ data, index }) {
  const renderDraggable = useDraggableInPortal();

  let priorityClassName;
  switch (data.priority) {
    case "HIGH":
      priorityClassName = "bg-red-100 text-red-500";
      break;
    case "MED":
      priorityClassName = "bg-blue-100 text-blue-500";
      break;
    default:
      priorityClassName = "bg-green-100 text-green-500";
  }

  return (
    <Draggable draggableId={data.id.toString()} index={index}>
      {renderDraggable((provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: "none",
              ...provided.draggableProps.style,
            }}
          >
            <div className="taskCard rounded-xl p-2 my-1">
              <div className="task-hero flex justify-between">
                <p
                  className={`text-xs tracking-wider p-1 font-bold rounded-md ${priorityClassName}`}
                >
                  {data.priority} PRIORITY
                </p>
                <img className="w-5 h-5 rounded-full" src={Image1} alt="" />
              </div>
              <div className="taskBody mt-2 mb-2">
                <h6 className="text-base font-medium">{data.todo}</h6>
              </div>
              <div className="taskFooter flex justify-between">
                <div className="flex space-x-3">
                  <div className="comment flex space-x-2  text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span className="commentCounter">123</span>
                  </div>
                  <div className="chatFile flex space-x-2 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="fileCounter">123</span>
                  </div>
                </div>
                {/* <button className="delBtn flex text-red-300 text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button> */}
              </div>
            </div>
          </div>
        );
      })}
    </Draggable>
  );
}

export default Todo;
