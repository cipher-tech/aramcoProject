import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Project Schema */
  DateTime: any;
};


export enum UserRole {
  User = 'user',
  Admin = 'admin'
}

export enum Status {
  Verified = 'verified',
  Unverified = 'unverified'
}

export enum Plans {
  Beginners = 'beginners',
  Standard = 'standard',
  Advance = 'advance',
  Business = 'business',
  None = 'none'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  phone_no: Scalars['String'];
  password: Scalars['String'];
  status: Scalars['String'];
  coin_address?: Maybe<Scalars['String']>;
  wallet_balance?: Maybe<Scalars['Int']>;
  plan?: Maybe<Plans>;
  role: UserRole;
  slug: Scalars['String'];
  auth_token?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  rate: Scalars['Int'];
  from: Scalars['Int'];
  to: Scalars['Int'];
  duration: Scalars['Int'];
  user_id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Register = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  phone_no: Scalars['String'];
  password: Scalars['String'];
  plan: Plans;
  coin_address?: Maybe<Scalars['String']>;
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserToken = {
  __typename?: 'UserToken';
  auth_token?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  getUser: User;
  getUsers: Array<User>;
};


export type QueryHelloWorldArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login: User;
};


export type MutationRegisterArgs = {
  input: Register;
};


export type MutationLoginArgs = {
  input: Login;
};

export type LoginMutationVariables = Exact<{
  input: Login;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'first_name' | 'last_name' | 'email' | 'phone_no' | 'password' | 'status' | 'coin_address' | 'wallet_balance' | 'plan' | 'role' | 'slug' | 'auth_token' | 'createdAt' | 'updatedAt'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  input: Register;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'first_name' | 'last_name' | 'email' | 'phone_no' | 'password' | 'status' | 'coin_address' | 'wallet_balance' | 'plan' | 'role' | 'slug' | 'auth_token' | 'createdAt' | 'updatedAt'>
  ) }
);

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'first_name' | 'last_name' | 'email' | 'phone_no' | 'password' | 'status' | 'coin_address' | 'wallet_balance' | 'plan' | 'role' | 'slug' | 'auth_token' | 'createdAt' | 'updatedAt'>
  ) }
);


export const LoginDocument = gql`
    mutation login($input: Login!) {
  login(input: $input) {
    id
    first_name
    last_name
    email
    phone_no
    password
    status
    coin_address
    wallet_balance
    plan
    role
    slug
    auth_token
    createdAt
    updatedAt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($input: Register!) {
  register(input: $input) {
    id
    first_name
    last_name
    email
    phone_no
    password
    status
    coin_address
    wallet_balance
    plan
    role
    slug
    auth_token
    createdAt
    updatedAt
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetUserDocument = gql`
    query getUser {
  getUser {
    id
    first_name
    last_name
    email
    phone_no
    password
    status
    coin_address
    wallet_balance
    plan
    role
    slug
    auth_token
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;