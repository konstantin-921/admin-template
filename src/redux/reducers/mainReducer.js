const initial = {}

const reducerTasks = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case 'RECEIVE_TASKS':
      return {
        ...state,
        tasksTodo: data.filter(elem => elem.status === 'TO_DO'),
        tasksDoing: data.filter(elem => elem.status === 'DOING'),
        tasksDone: data.filter(elem => elem.status === 'DONE'),
      };
    default:
      return state;
  }
};

export default reducerTasks;