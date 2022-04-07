const initialState = {
    todoLists: [],
    todoLoadingStatus: "loaded",
    addTodoStatus: false,
    selectBoardNum: 0,
    newSelectBoardNum: 0,
    changeBtnTaskStatus: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "TODO_FETCHING":
            return {
                ...state,
                todoLoadingStatus: "loading"
            }
        case "TODO_FETCHED":
            return {
                ...state,
                todoLists: action.payload,
                todoLoadingStatus: "loaded"
            }
        case "TODO_FETCHING_ERROR":
            return {
                ...state,
                todoLoadingStatus: "error"
            }
        case "ADD_TODO_TOGGLE":
            return {
                ...state,
                addTodoStatus: !state.addTodoStatus
            }
        case "SELECT_BOARD_NUM":
            return {
                ...state,
                selectBoardNum: action.payload
            }
        case "NEW_SELECT_BOARD_NUM":
            return {
                ...state,
                newSelectBoardNum: action.payload
            }
        case "CHANGE_BTN_TASK":
            return {
                ...state,
                changeBtnTaskStatus: !state.changeBtnTaskStatus
            }
        default:
            return state
    }
}

export default reducer