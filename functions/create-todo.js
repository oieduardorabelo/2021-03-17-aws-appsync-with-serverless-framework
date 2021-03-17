let DynamoDB = require("aws-sdk/clients/dynamodb");
let ulid = require("ulid");

let DocumentClient = new DynamoDB.DocumentClient();

let { TODOS_TABLE } = process.env;

async function handler(event) {
  let { userId, name, points } = event.arguments.input;
  let id = ulid.ulid();
  let createdAt = new Date().toJSON();

  let todo = {
    id,
    userId,
    name,
    points,
    createdAt,
    updatedAt: createdAt
  };

  let putTodosTable = {
    Put: {
      TableName: TODOS_TABLE,
      Item: todo,
    },
  };
  await DocumentClient.transactWrite({
    TransactItems: [putTodosTable],
  }).promise();

  return todo;
}

module.exports = { handler };
