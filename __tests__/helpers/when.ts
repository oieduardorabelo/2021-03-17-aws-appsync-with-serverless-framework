import * as graphql from "./graphql";

type TInput = { [key: string]: unknown };

async function anUserCallsCreateTodo(input: TInput) {
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
    variables
  });

  let res = data.createTodo;
  return res;
}

async function anUserCallsReadTodo(input: TInput) {
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
    variables
  });

  let res = data.readTodo;
  return res;
}

async function anUserCallsUpdateTodo(input: TInput) {
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
    variables
  });

  let res = data.updateTodo;
  return res;
}

async function anUserCallsDeleteTodo(input: TInput) {
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
    variables
  });

  let res = data.deleteTodo;
  return res;
}

async function anUserCallsListTodos(input: TInput) {
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
    variables
  });

  let res = data.listTodos;
  return res;
}

export {
  anUserCallsCreateTodo,
  anUserCallsReadTodo,
  anUserCallsUpdateTodo,
  anUserCallsDeleteTodo,
  anUserCallsListTodos
}
