export const todoFetching = () => {
    return {
        type: "TODO_FETCHING"
    }
}

export const todoFetched = (todoItems) => {
    return {
        type: "TODO_FETCHED",
        payload: todoItems
    }
}
export const todoFetchingError = () => {
    return {
        type: "TODO_FETCHING_ERROR"
    }
}

export const addTodoToggle = () => {
    return {
        type: "ADD_TODO_TOGGLE",
        payload: true
    }
}

export const selectBoard = (id) => {
    return {
        type: "SELECT_BOARD_NUM",
        payload: id
    }
}

export const newSelectBoard = (id) => {
    return {
        type: "NEW_SELECT_BOARD_NUM",
        payload: id
    }
}

export const changeBtnTaskToggle = () => {
    return {
        type: "CHANGE_BTN_TASK",
        payload: true
    }
}