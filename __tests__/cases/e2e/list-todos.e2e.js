let given = require("../../helpers/given");
let when = require("../../helpers/when");

describe("given an user, they can", () => {
  let user;
  beforeAll(async () => {
    user = await given.anUserWithMultipleTodos({ count: 4 });
  });
  afterAll(async () => {
    await user.teardown();
  });

  test("read a paginated list of todos", async () => {
    let list = await when.anUserCallsListTodos({
      userId: user.id,
      limit: 25,
    });
    expect(list.todos).toHaveLength(5);
    expect(list.nextToken).toBe(null);
  });

  test("receive a token for next page", async () => {
    let list = await when.anUserCallsListTodos({
      userId: user.id,
      limit: 1,
    });
    expect(list.todos).toHaveLength(1);
    expect(typeof list.nextToken).toBe("string");
  });

  test("can query for next page of todos", async () => {
    let list1 = await when.anUserCallsListTodos({
      userId: user.id,
      limit: 1,
    });
    expect(list1.todos).toHaveLength(1);
    expect(typeof list1.nextToken).toBe("string");

    let list2 = await when.anUserCallsListTodos({
      userId: user.id,
      limit: 1,
      nextToken: list1.nextToken,
    });
    expect(list2.todos).toHaveLength(1);
    expect(typeof list2.nextToken).toBe("string");
    expect(list2.todos[0].name).not.toBe(list1.todos[0].name);

    let list3 = await when.anUserCallsListTodos({
      userId: user.id,
      limit: 5,
      nextToken: list2.nextToken,
    });
    expect(list3.todos).toHaveLength(3);
    expect(list3.nextToken).toBe(null);
    expect(list3.todos[0].name).not.toBe(list2.todos[0].name);
  });
});
