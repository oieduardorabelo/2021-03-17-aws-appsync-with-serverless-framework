import { AppSyncResolverHandler } from 'aws-lambda';
import * as DynamoDB from 'aws-sdk/clients/dynamodb';
import * as ulid from 'ulid';

import * as codegen from '../__codegen__/appsync';
import { safeEnv } from './helpers/safe-env';

let DocumentClient = new DynamoDB.DocumentClient();

async function handler(event: AppSyncResolverHandler<codegen.InputCreateTodo, codegen.Todo>) {
  let { userId, name, points } = event.arguments.input;
  let id = ulid.ulid();
  let createdAt = new Date().toJSON();

  let todo = {
    id,
    userId,
    name,
    points,
    createdAt,
    updatedAt: createdAt,
  };

  let putTodosTable = {
    Put: {
      TableName: safeEnv('TODOS_TABLE'),
      Item: todo,
    },
  };
  await DocumentClient.transactWrite({
    TransactItems: [putTodosTable],
  }).promise();

  return todo;
}

export { handler };
