import * as graphql from './graphql';

import * as codegen from '../../__codegen__/appsync';

async function anUserCallsCreateTodo(input: codegen.MutationCreateTodoArgs['input']) {
  let query = `mutation createTodo($input: InputCreateTodo!) {
    createTodo(input: $input) {
      id
      name
      points
    }
  }`;
  let variables = { input };

  let data = await graphql.request({
    query,
    variables,
  });

  let res = data.createTodo;
  return res;
}

async function anUserCallsReadTodo(input: codegen.QueryReadTodoArgs['input']) {
  let query = `query readTodo($input: InputReadTodo!) {
    readTodo(input: $input) {
      id
      name
      points
    }
  }`;
  let variables = { input };

  let data = await graphql.request({
    query,
    variables,
  });

  let res = data.readTodo;
  return res;
}

async function anUserCallsUpdateTodo(input: codegen.MutationUpdateTodoArgs['input']) {
  let query = `mutation updateTodo($input: InputUpdateTodo!) {
    updateTodo(input: $input) {
      id
      name
      points
    }
  }`;
  let variables = { input };

  let data = await graphql.request({
    query,
    variables,
  });

  let res = data.updateTodo;
  return res;
}

async function anUserCallsDeleteTodo(input: codegen.MutationDeleteTodoArgs['input']) {
  let query = `mutation deleteTodo($input: InputDeleteTodo!) {
    deleteTodo(input: $input) {
      id
      name
      points
    }
  }`;
  let variables = { input };

  let data = await graphql.request({
    query,
    variables,
  });

  let res = data.deleteTodo;
  return res;
}

async function anUserCallsListTodos(input: codegen.QueryListTodosArgs['input']) {
  let query = `query listTodos($input: InputListTodos!) {
    listTodos(input: $input) {
      todos {
        id
        name
        points
      }
      nextToken
    }
  }`;
  let variables = { input };

  let data = await graphql.request({
    query,
    variables,
  });

  let res = data.listTodos;
  return res;
}

export {
  anUserCallsCreateTodo,
  anUserCallsReadTodo,
  anUserCallsUpdateTodo,
  anUserCallsDeleteTodo,
  anUserCallsListTodos,
};
