import axios from 'axios';

export const getTodos = (getUrl) => {
    return axios.get(getUrl, {
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => response.data)
      .catch(err => {
        throw err;
      });
}

export const getFilteredTodos = (getUrl, searchString) => {
    return axios.get(getUrl + '?q=' + searchString, {
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => response.data)
    .catch(err => {
      throw err;
    });
}

export const updateDb = (todoData) => {
  return axios.post('http://localhost:3001/todos',todoData).then(response => response.data)
  .catch(err => {
    throw err;
  });
}

export const changeTodoStatus = (id,status) => {
  return axios({
    url: `http://localhost:3001/todos/${id}`,
    method: 'PATCH',
    data: {
      status: status
    }
  }).then()
  .catch(err => {
    throw err;
  });
}

export const updateTimeSince = ({id, duration}) => {
  return axios({
    url: `http://localhost:3001/todos/${id}`,
    method: 'PATCH',
    data: {
      duration: duration
    }
  }).then()
  .catch(err => {
    throw err;
  });
}