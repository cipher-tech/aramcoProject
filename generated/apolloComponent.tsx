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

export type DepositAttributes = {
  __typename?: 'DepositAttributes';
  id: Scalars['ID'];
  userId: Scalars['Int'];
  plan?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  status?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  users: User;
  wallet_balance: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

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
  deposits?: Maybe<Array<Maybe<DepositAttributes>>>;
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

export type UserToken = {
  __typename?: 'UserToken';
  auth_token?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type Response = {
  __typename?: 'Response';
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  referenceId: Scalars['String'];
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

export type Id = {
  id: Scalars['ID'];
};

export type DepositRequest = {
  userId: Scalars['ID'];
  amount: Scalars['Int'];
  plan: Scalars['String'];
};

export type WithdrawalRequest = {
  userId: Scalars['ID'];
  amount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  getUser: User;
  getUsers: Array<User>;
  getPendingDeposits?: Maybe<Array<DepositAttributes>>;
};


export type QueryHelloWorldArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login: User;
  depositRequest: Response;
  activateDeposit: Response;
  deleteDepositRequest: Response;
  withdrawalRequest: Response;
};


export type MutationRegisterArgs = {
  input: Register;
};


export type MutationLoginArgs = {
  input: Login;
};


export type MutationDepositRequestArgs = {
  input: DepositRequest;
};


export type MutationActivateDepositArgs = {
  input?: Maybe<Id>;
};


export type MutationDeleteDepositRequestArgs = {
  input?: Maybe<Id>;
};


export type MutationWithdrawalRequestArgs = {
  input: WithdrawalRequest;
};

export type ActivateDepositMutationVariables = Exact<{
  input?: Maybe<Id>;
}>;


export type ActivateDepositMutation = (
  { __typename?: 'Mutation' }
  & { activateDeposit: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'status'>
  ) }
);

export type GetPendingDepositsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPendingDepositsQuery = (
  { __typename?: 'Query' }
  & { getPendingDeposits?: Maybe<Array<(
    { __typename?: 'DepositAttributes' }
    & Pick<DepositAttributes, 'id' | 'userId' | 'slug' | 'status' | 'amount' | 'plan' | 'createdAt'>
    & { users: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'first_name'>
    ) }
  )>> }
);

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

export type DepositRequestMutationVariables = Exact<{
  input: DepositRequest;
}>;


export type DepositRequestMutation = (
  { __typename?: 'Mutation' }
  & { depositRequest: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'status' | 'referenceId'>
  ) }
);

export type WithdrawalRequestMutationVariables = Exact<{
  input: WithdrawalRequest;
}>;


export type WithdrawalRequestMutation = (
  { __typename?: 'Mutation' }
  & { withdrawalRequest: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'status' | 'referenceId'>
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


export const ActivateDepositDocument = gql`
    mutation activateDeposit($input: Id) {
  activateDeposit(input: $input) {
    message
    status
  }
}
    `;
export type ActivateDepositMutationFn = Apollo.MutationFunction<ActivateDepositMutation, ActivateDepositMutationVariables>;

/**
 * __useActivateDepositMutation__
 *
 * To run a mutation, you first call `useActivateDepositMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateDepositMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateDepositMutation, { data, loading, error }] = useActivateDepositMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActivateDepositMutation(baseOptions?: Apollo.MutationHookOptions<ActivateDepositMutation, ActivateDepositMutationVariables>) {
        return Apollo.useMutation<ActivateDepositMutation, ActivateDepositMutationVariables>(ActivateDepositDocument, baseOptions);
      }
export type ActivateDepositMutationHookResult = ReturnType<typeof useActivateDepositMutation>;
export type ActivateDepositMutationResult = Apollo.MutationResult<ActivateDepositMutation>;
export type ActivateDepositMutationOptions = Apollo.BaseMutationOptions<ActivateDepositMutation, ActivateDepositMutationVariables>;
export const GetPendingDepositsDocument = gql`
    query getPendingDeposits {
  getPendingDeposits {
    id
    userId
    slug
    status
    amount
    plan
    createdAt
    users {
      id
      email
      first_name
    }
  }
}
    `;

/**
 * __useGetPendingDepositsQuery__
 *
 * To run a query within a React component, call `useGetPendingDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPendingDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPendingDepositsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPendingDepositsQuery(baseOptions?: Apollo.QueryHookOptions<GetPendingDepositsQuery, GetPendingDepositsQueryVariables>) {
        return Apollo.useQuery<GetPendingDepositsQuery, GetPendingDepositsQueryVariables>(GetPendingDepositsDocument, baseOptions);
      }
export function useGetPendingDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPendingDepositsQuery, GetPendingDepositsQueryVariables>) {
          return Apollo.useLazyQuery<GetPendingDepositsQuery, GetPendingDepositsQueryVariables>(GetPendingDepositsDocument, baseOptions);
        }
export type GetPendingDepositsQueryHookResult = ReturnType<typeof useGetPendingDepositsQuery>;
export type GetPendingDepositsLazyQueryHookResult = ReturnType<typeof useGetPendingDepositsLazyQuery>;
export type GetPendingDepositsQueryResult = Apollo.QueryResult<GetPendingDepositsQuery, GetPendingDepositsQueryVariables>;
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
export const DepositRequestDocument = gql`
    mutation depositRequest($input: DepositRequest!) {
  depositRequest(input: $input) {
    message
    status
    referenceId
  }
}
    `;
export type DepositRequestMutationFn = Apollo.MutationFunction<DepositRequestMutation, DepositRequestMutationVariables>;

/**
 * __useDepositRequestMutation__
 *
 * To run a mutation, you first call `useDepositRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDepositRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [depositRequestMutation, { data, loading, error }] = useDepositRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDepositRequestMutation(baseOptions?: Apollo.MutationHookOptions<DepositRequestMutation, DepositRequestMutationVariables>) {
        return Apollo.useMutation<DepositRequestMutation, DepositRequestMutationVariables>(DepositRequestDocument, baseOptions);
      }
export type DepositRequestMutationHookResult = ReturnType<typeof useDepositRequestMutation>;
export type DepositRequestMutationResult = Apollo.MutationResult<DepositRequestMutation>;
export type DepositRequestMutationOptions = Apollo.BaseMutationOptions<DepositRequestMutation, DepositRequestMutationVariables>;
export const WithdrawalRequestDocument = gql`
    mutation withdrawalRequest($input: WithdrawalRequest!) {
  withdrawalRequest(input: $input) {
    message
    status
    referenceId
  }
}
    `;
export type WithdrawalRequestMutationFn = Apollo.MutationFunction<WithdrawalRequestMutation, WithdrawalRequestMutationVariables>;

/**
 * __useWithdrawalRequestMutation__
 *
 * To run a mutation, you first call `useWithdrawalRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWithdrawalRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [withdrawalRequestMutation, { data, loading, error }] = useWithdrawalRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useWithdrawalRequestMutation(baseOptions?: Apollo.MutationHookOptions<WithdrawalRequestMutation, WithdrawalRequestMutationVariables>) {
        return Apollo.useMutation<WithdrawalRequestMutation, WithdrawalRequestMutationVariables>(WithdrawalRequestDocument, baseOptions);
      }
export type WithdrawalRequestMutationHookResult = ReturnType<typeof useWithdrawalRequestMutation>;
export type WithdrawalRequestMutationResult = Apollo.MutationResult<WithdrawalRequestMutation>;
export type WithdrawalRequestMutationOptions = Apollo.BaseMutationOptions<WithdrawalRequestMutation, WithdrawalRequestMutationVariables>;
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