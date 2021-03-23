export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: string;
  AWSTime: string;
  AWSDateTime: string;
  AWSTimestamp: number;
  AWSEmail: string;
  AWSJSON: string;
  AWSURL: string;
  AWSPhone: string;
  AWSIPAddress: string;
};










export type InputCreateTodo = {
  userId: Scalars['String'];
  name: Scalars['String'];
  points?: Maybe<Scalars['Int']>;
};

export type InputDeleteTodo = {
  id: Scalars['ID'];
};

export type InputListTodos = {
  userId: Scalars['ID'];
  limit: Scalars['Int'];
  nextToken?: Maybe<Scalars['String']>;
};

export type InputReadTodo = {
  id: Scalars['ID'];
};

export type InputUpdateTodo = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
};

export type ListTodosPage = {
  __typename?: 'ListTodosPage';
  todos?: Maybe<Array<Todo>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  updateTodo: Todo;
  deleteTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input?: Maybe<InputCreateTodo>;
};


export type MutationUpdateTodoArgs = {
  input?: Maybe<InputUpdateTodo>;
};


export type MutationDeleteTodoArgs = {
  input?: Maybe<InputDeleteTodo>;
};

export type Query = {
  __typename?: 'Query';
  readTodo?: Maybe<Todo>;
  listTodos: ListTodosPage;
};


export type QueryReadTodoArgs = {
  input?: Maybe<InputReadTodo>;
};


export type QueryListTodosArgs = {
  input?: Maybe<InputListTodos>;
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  name: Scalars['String'];
  points?: Maybe<Scalars['Int']>;
};
