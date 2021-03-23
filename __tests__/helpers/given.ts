import * as Chance from 'chance';

import * as when from './when';

let ChanceClient = new Chance.default();

type TAnUserWithMultipleTodosInput = {
  count: number;
};
export type TAnUserWithMultipleTodosReturn = {
  id: string;
  teardown: () => Promise<void>;
};
async function anUserWithMultipleTodos({
  count,
}: TAnUserWithMultipleTodosInput): Promise<TAnUserWithMultipleTodosReturn> {
  let userId = ChanceClient.string({ length: 8 });
  let todoIds: string[] = [];

  for (let todo = 0; todo <= count; todo += 1) {
    let name = ChanceClient.sentence({ words: 8 });
    let points = ChanceClient.integer({ min: 0, max: 10000 });
    let todo = await when.anUserCallsCreateTodo({
      userId,
      name,
      points,
    });
    todoIds.push(todo.id);
  }

  return {
    id: userId,
    teardown: async () => {
      let pTodoIds = todoIds.map(async (todoId) => {
        await when.anUserCallsDeleteTodo({
          id: todoId,
        });
      });
      await Promise.all(pTodoIds);
    },
  };
}

export { anUserWithMultipleTodos };
