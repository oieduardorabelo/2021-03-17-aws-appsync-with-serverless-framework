let Chance = require("chance");

let when = require("../../helpers/when");

let ChanceClient = new Chance();

describe("given an user, they can", () => {
  let userId = ChanceClient.string({ length: 8 });
  let name = ChanceClient.sentence({ words: 8 });
  let points = ChanceClient.integer({ min: 0, max: 10000 });
  let todo;

  test("create a todo", async () => {
    todo = await when.anUserCallsCreateTodo({
      userId,
      name,
      points,
    });

    expect(todo).toMatchObject({
      id: expect.any(String),
      name,
      points,
    });
  });

  test("read a todo", async () => {
    await expect(
      when.anUserCallsReadTodo({
        id: todo.id,
      })
    ).resolves.toMatchObject({
      id: expect.any(String),
      name,
      points,
    });
  });

  test("update a todo", async () => {
    let nextName = ChanceClient.sentence({ words: 8 });
    let nextPoints = ChanceClient.integer({ min: 0, max: 10000 });
    await expect(
      when.anUserCallsUpdateTodo({
        id: todo.id,
        name: nextName,
        points: nextPoints,
      })
    ).resolves.toMatchObject({
      id: expect.any(String),
      name: nextName,
      points: nextPoints,
    });

    name = nextName;
    points = nextPoints;
  });

  test("delete a todo", async () => {
    await expect(
      when.anUserCallsDeleteTodo({
        id: todo.id,
      })
    ).resolves.toMatchObject({
      id: expect.any(String),
      name,
      points,
    });
  });
});
