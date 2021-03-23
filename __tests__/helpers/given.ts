import * as Chance from "chance";

import * as when from './when';

let ChanceClient = new Chance.default();

type TAnUserWithMultipleTodosInput = {
  count: number
}
type TAnUserWithMultipleTodosReturn = {
  id: string;
  teardown: () => Promise<void>;
}
async function anUserWithMultipleTodos({ count }: TAnUserWithMultipleTodosInput): Promise<TAnUserWithMultipleTodosReturn> {
  let userId = ChanceClient.string({ length: 8 });
  let todosId: string[] = [];

  for (let todo = 0; todo <= count; todo += 1) {
    let name = ChanceClient.sentence({ words: 8 });
    let points = ChanceClient.integer({ min: 0, max: 10000 });
    let todo = await when.anUserCallsCreateTodo({
      userId,
      name,
      points,
    });
    todosId.push(todo.id)
  }

  return {
    id: userId,
    teardown: async () => {
      while(todosId.length) {
        let todoId = todosId.pop();
        await when.anUserCallsDeleteTodo({
          id: todoId,
        })
      }
    }
  }
}

export { anUserWithMultipleTodos }
