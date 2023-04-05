export const addTodo = (todo) => {
    return {
        type:"add",
        payload:todo
    }
}

export const deleteTodo = (id) => {
    return {
        type:"delete",
        payload:id
    }
}

export const editTodo = (todo) => {
    return {
        type:"edit",
        payload:todo
    }
}

export const updateTodoStatus = (payload) => {
    return {
        type:"update",
        payload:payload
    }
}

export const filterTodo = (payload) => {
    return {
        type:"filter",
        payload:payload
    }
}

export const clearCompletedTodos = (payload) => {
    return {
        type:"clear",
        payload:payload
    }
}

export const addFormHandler = (payload) => {
    return {
        type:"addForm",
        payload:payload
    }
}

export const editFormHandler = (payload) => {
    return {
        type:"editForm",
        payload:payload
    }
}