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
  plan?: Maybe<Scalars['String']>;
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

export type UserStats = {
  __typename?: 'UserStats';
  totalBalance: Scalars['Int'];
  totalEarnings: Scalars['Int'];
  totalDeposits: Scalars['Int'];
  totalWithdrawal: Scalars['Int'];
  activePlan?: Maybe<Scalars['String']>;
};

export type Register = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  email: Scalars['String'];
  phone_no: Scalars['String'];
  password: Scalars['String'];
  plan?: Maybe<Scalars['String']>;
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
  getUserPendingDeposits?: Maybe<Array<DepositAttributes>>;
  getUserDeposits?: Maybe<Array<DepositAttributes>>;
  getPendingDeposits?: Maybe<Array<DepositAttributes>>;
  getUserPendingWithdrawals?: Maybe<Array<DepositAttributes>>;
  getUserWithdrawals?: Maybe<Array<DepositAttributes>>;
  getPendingWithdrawals?: Maybe<Array<DepositAttributes>>;
  getAdminDeposits?: Maybe<Array<DepositAttributes>>;
  getAdminWithdrawals?: Maybe<Array<DepositAttributes>>;
  getUserStats: UserStats;
  getAdminStats: UserStats;
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
  cancelDeposit: Response;
  cancelWithdrawal: Response;
  deleteDepositRequest: Response;
  withdrawalRequest: Response;
  activateWithdrawal: Response;
  deleteWithdrawalRequest: Response;
  logout?: Maybe<Scalars['Boolean']>;
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


export type MutationCancelDepositArgs = {
  input?: Maybe<Id>;
};


export type MutationCancelWithdrawalArgs = {
  input?: Maybe<Id>;
};


export type MutationDeleteDepositRequestArgs = {
  input?: Maybe<Id>;
};


export type MutationWithdrawalRequestArgs = {
  input: WithdrawalRequest;
};


export type MutationActivateWithdrawalArgs = {
  input?: Maybe<Id>;
};


export type MutationDeleteWithdrawalRequestArgs = {
  input?: Maybe<Id>;
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

export type ActivateWithdrawalMutationVariables = Exact<{
  input?: Maybe<Id>;
}>;


export type ActivateWithdrawalMutation = (
  { __typename?: 'Mutation' }
  & { activateWithdrawal: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'status'>
  ) }
);

export type CancelDepositMutationVariables = Exact<{
  input?: Maybe<Id>;
}>;


export type CancelDepositMutation = (
  { __typename?: 'Mutation' }
  & { cancelDeposit: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'status'>
  ) }
);

export type CancelWithdrawalMutationVariables = Exact<{
  input?: Maybe<Id>;
}>;


export type CancelWithdrawalMutation = (
  { __typename?: 'Mutation' }
  & { cancelWithdrawal: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'status'>
  ) }
);

export type DeleteDepositRequestMutationVariables = Exact<{
  input?: Maybe<Id>;
}>;


export type DeleteDepositRequestMutation = (
  { __typename?: 'Mutation' }
  & { deleteDepositRequest: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'status'>
  ) }
);

export type DeleteWithdrawalRequestMutationVariables = Exact<{
  input?: Maybe<Id>;
}>;


export type DeleteWithdrawalRequestMutation = (
  { __typename?: 'Mutation' }
  & { deleteWithdrawalRequest: (
    { __typename?: 'Response' }
    & Pick<Response, 'message' | 'status'>
  ) }
);

export type GetAdminDepositsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminDepositsQuery = (
  { __typename?: 'Query' }
  & { getAdminDeposits?: Maybe<Array<(
    { __typename?: 'DepositAttributes' }
    & Pick<DepositAttributes, 'id' | 'userId' | 'slug' | 'status' | 'amount' | 'createdAt'>
  )>> }
);

export type GetAdminStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminStatsQuery = (
  { __typename?: 'Query' }
  & { getAdminStats: (
    { __typename?: 'UserStats' }
    & Pick<UserStats, 'totalBalance' | 'totalEarnings' | 'totalDeposits' | 'totalWithdrawal'>
  ) }
);

export type GetAdminWithdrawalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdminWithdrawalsQuery = (
  { __typename?: 'Query' }
  & { getAdminWithdrawals?: Maybe<Array<(
    { __typename?: 'DepositAttributes' }
    & Pick<DepositAttributes, 'id' | 'userId' | 'slug' | 'status' | 'amount' | 'createdAt'>
  )>> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'first_name' | 'email' | 'phone_no' | 'plan' | 'coin_address' | 'wallet_balance' | 'createdAt' | 'updatedAt'>
  )> }
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

export type GetPendingWithdrawalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPendingWithdrawalsQuery = (
  { __typename?: 'Query' }
  & { getPendingWithdrawals?: Maybe<Array<(
    { __typename?: 'DepositAttributes' }
    & Pick<DepositAttributes, 'id' | 'userId' | 'slug' | 'status' | 'amount' | 'createdAt'>
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

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
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

export type GetUserDepositsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserDepositsQuery = (
  { __typename?: 'Query' }
  & { getUserDeposits?: Maybe<Array<(
    { __typename?: 'DepositAttributes' }
    & Pick<DepositAttributes, 'id' | 'userId' | 'slug' | 'status' | 'amount' | 'plan' | 'createdAt'>
  )>> }
);

export type GetUserPendingDepositsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserPendingDepositsQuery = (
  { __typename?: 'Query' }
  & { getUserPendingDeposits?: Maybe<Array<(
    { __typename?: 'DepositAttributes' }
    & Pick<DepositAttributes, 'id' | 'userId' | 'slug' | 'status' | 'amount' | 'plan' | 'createdAt'>
  )>> }
);

export type GetUserPendingWithdrawalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserPendingWithdrawalsQuery = (
  { __typename?: 'Query' }
  & { getUserPendingWithdrawals?: Maybe<Array<(
    { __typename?: 'DepositAttributes' }
    & Pick<DepositAttributes, 'id' | 'userId' | 'slug' | 'status' | 'amount' | 'plan' | 'createdAt'>
  )>> }
);

export type GetUserStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserStatsQuery = (
  { __typename?: 'Query' }
  & { getUserStats: (
    { __typename?: 'UserStats' }
    & Pick<UserStats, 'totalBalance' | 'totalEarnings' | 'totalDeposits' | 'activePlan' | 'totalWithdrawal'>
  ) }
);

export type GetUserWithdrawalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserWithdrawalsQuery = (
  { __typename?: 'Query' }
  & { getUserWithdrawals?: Maybe<Array<(
    { __typename?: 'DepositAttributes' }
    & Pick<DepositAttributes, 'id' | 'userId' | 'slug' | 'status' | 'amount' | 'plan' | 'createdAt'>
  )>> }
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
export const ActivateWithdrawalDocument = gql`
    mutation activateWithdrawal($input: Id) {
  activateWithdrawal(input: $input) {
    message
    status
  }
}
    `;
export type ActivateWithdrawalMutationFn = Apollo.MutationFunction<ActivateWithdrawalMutation, ActivateWithdrawalMutationVariables>;

/**
 * __useActivateWithdrawalMutation__
 *
 * To run a mutation, you first call `useActivateWithdrawalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateWithdrawalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateWithdrawalMutation, { data, loading, error }] = useActivateWithdrawalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActivateWithdrawalMutation(baseOptions?: Apollo.MutationHookOptions<ActivateWithdrawalMutation, ActivateWithdrawalMutationVariables>) {
        return Apollo.useMutation<ActivateWithdrawalMutation, ActivateWithdrawalMutationVariables>(ActivateWithdrawalDocument, baseOptions);
      }
export type ActivateWithdrawalMutationHookResult = ReturnType<typeof useActivateWithdrawalMutation>;
export type ActivateWithdrawalMutationResult = Apollo.MutationResult<ActivateWithdrawalMutation>;
export type ActivateWithdrawalMutationOptions = Apollo.BaseMutationOptions<ActivateWithdrawalMutation, ActivateWithdrawalMutationVariables>;
export const CancelDepositDocument = gql`
    mutation cancelDeposit($input: Id) {
  cancelDeposit(input: $input) {
    message
    status
  }
}
    `;
export type CancelDepositMutationFn = Apollo.MutationFunction<CancelDepositMutation, CancelDepositMutationVariables>;

/**
 * __useCancelDepositMutation__
 *
 * To run a mutation, you first call `useCancelDepositMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelDepositMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelDepositMutation, { data, loading, error }] = useCancelDepositMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelDepositMutation(baseOptions?: Apollo.MutationHookOptions<CancelDepositMutation, CancelDepositMutationVariables>) {
        return Apollo.useMutation<CancelDepositMutation, CancelDepositMutationVariables>(CancelDepositDocument, baseOptions);
      }
export type CancelDepositMutationHookResult = ReturnType<typeof useCancelDepositMutation>;
export type CancelDepositMutationResult = Apollo.MutationResult<CancelDepositMutation>;
export type CancelDepositMutationOptions = Apollo.BaseMutationOptions<CancelDepositMutation, CancelDepositMutationVariables>;
export const CancelWithdrawalDocument = gql`
    mutation cancelWithdrawal($input: Id) {
  cancelWithdrawal(input: $input) {
    message
    status
  }
}
    `;
export type CancelWithdrawalMutationFn = Apollo.MutationFunction<CancelWithdrawalMutation, CancelWithdrawalMutationVariables>;

/**
 * __useCancelWithdrawalMutation__
 *
 * To run a mutation, you first call `useCancelWithdrawalMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelWithdrawalMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelWithdrawalMutation, { data, loading, error }] = useCancelWithdrawalMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCancelWithdrawalMutation(baseOptions?: Apollo.MutationHookOptions<CancelWithdrawalMutation, CancelWithdrawalMutationVariables>) {
        return Apollo.useMutation<CancelWithdrawalMutation, CancelWithdrawalMutationVariables>(CancelWithdrawalDocument, baseOptions);
      }
export type CancelWithdrawalMutationHookResult = ReturnType<typeof useCancelWithdrawalMutation>;
export type CancelWithdrawalMutationResult = Apollo.MutationResult<CancelWithdrawalMutation>;
export type CancelWithdrawalMutationOptions = Apollo.BaseMutationOptions<CancelWithdrawalMutation, CancelWithdrawalMutationVariables>;
export const DeleteDepositRequestDocument = gql`
    mutation deleteDepositRequest($input: Id) {
  deleteDepositRequest(input: $input) {
    message
    status
  }
}
    `;
export type DeleteDepositRequestMutationFn = Apollo.MutationFunction<DeleteDepositRequestMutation, DeleteDepositRequestMutationVariables>;

/**
 * __useDeleteDepositRequestMutation__
 *
 * To run a mutation, you first call `useDeleteDepositRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDepositRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDepositRequestMutation, { data, loading, error }] = useDeleteDepositRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDepositRequestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDepositRequestMutation, DeleteDepositRequestMutationVariables>) {
        return Apollo.useMutation<DeleteDepositRequestMutation, DeleteDepositRequestMutationVariables>(DeleteDepositRequestDocument, baseOptions);
      }
export type DeleteDepositRequestMutationHookResult = ReturnType<typeof useDeleteDepositRequestMutation>;
export type DeleteDepositRequestMutationResult = Apollo.MutationResult<DeleteDepositRequestMutation>;
export type DeleteDepositRequestMutationOptions = Apollo.BaseMutationOptions<DeleteDepositRequestMutation, DeleteDepositRequestMutationVariables>;
export const DeleteWithdrawalRequestDocument = gql`
    mutation DeleteWithdrawalRequest($input: Id) {
  deleteWithdrawalRequest(input: $input) {
    message
    status
  }
}
    `;
export type DeleteWithdrawalRequestMutationFn = Apollo.MutationFunction<DeleteWithdrawalRequestMutation, DeleteWithdrawalRequestMutationVariables>;

/**
 * __useDeleteWithdrawalRequestMutation__
 *
 * To run a mutation, you first call `useDeleteWithdrawalRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWithdrawalRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWithdrawalRequestMutation, { data, loading, error }] = useDeleteWithdrawalRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteWithdrawalRequestMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWithdrawalRequestMutation, DeleteWithdrawalRequestMutationVariables>) {
        return Apollo.useMutation<DeleteWithdrawalRequestMutation, DeleteWithdrawalRequestMutationVariables>(DeleteWithdrawalRequestDocument, baseOptions);
      }
export type DeleteWithdrawalRequestMutationHookResult = ReturnType<typeof useDeleteWithdrawalRequestMutation>;
export type DeleteWithdrawalRequestMutationResult = Apollo.MutationResult<DeleteWithdrawalRequestMutation>;
export type DeleteWithdrawalRequestMutationOptions = Apollo.BaseMutationOptions<DeleteWithdrawalRequestMutation, DeleteWithdrawalRequestMutationVariables>;
export const GetAdminDepositsDocument = gql`
    query getAdminDeposits {
  getAdminDeposits {
    id
    userId
    slug
    status
    amount
    createdAt
  }
}
    `;

/**
 * __useGetAdminDepositsQuery__
 *
 * To run a query within a React component, call `useGetAdminDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminDepositsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminDepositsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminDepositsQuery, GetAdminDepositsQueryVariables>) {
        return Apollo.useQuery<GetAdminDepositsQuery, GetAdminDepositsQueryVariables>(GetAdminDepositsDocument, baseOptions);
      }
export function useGetAdminDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminDepositsQuery, GetAdminDepositsQueryVariables>) {
          return Apollo.useLazyQuery<GetAdminDepositsQuery, GetAdminDepositsQueryVariables>(GetAdminDepositsDocument, baseOptions);
        }
export type GetAdminDepositsQueryHookResult = ReturnType<typeof useGetAdminDepositsQuery>;
export type GetAdminDepositsLazyQueryHookResult = ReturnType<typeof useGetAdminDepositsLazyQuery>;
export type GetAdminDepositsQueryResult = Apollo.QueryResult<GetAdminDepositsQuery, GetAdminDepositsQueryVariables>;
export const GetAdminStatsDocument = gql`
    query getAdminStats {
  getAdminStats {
    totalBalance
    totalEarnings
    totalDeposits
    totalWithdrawal
  }
}
    `;

/**
 * __useGetAdminStatsQuery__
 *
 * To run a query within a React component, call `useGetAdminStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminStatsQuery, GetAdminStatsQueryVariables>) {
        return Apollo.useQuery<GetAdminStatsQuery, GetAdminStatsQueryVariables>(GetAdminStatsDocument, baseOptions);
      }
export function useGetAdminStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminStatsQuery, GetAdminStatsQueryVariables>) {
          return Apollo.useLazyQuery<GetAdminStatsQuery, GetAdminStatsQueryVariables>(GetAdminStatsDocument, baseOptions);
        }
export type GetAdminStatsQueryHookResult = ReturnType<typeof useGetAdminStatsQuery>;
export type GetAdminStatsLazyQueryHookResult = ReturnType<typeof useGetAdminStatsLazyQuery>;
export type GetAdminStatsQueryResult = Apollo.QueryResult<GetAdminStatsQuery, GetAdminStatsQueryVariables>;
export const GetAdminWithdrawalsDocument = gql`
    query getAdminWithdrawals {
  getAdminWithdrawals {
    id
    userId
    slug
    status
    amount
    createdAt
  }
}
    `;

/**
 * __useGetAdminWithdrawalsQuery__
 *
 * To run a query within a React component, call `useGetAdminWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminWithdrawalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminWithdrawalsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdminWithdrawalsQuery, GetAdminWithdrawalsQueryVariables>) {
        return Apollo.useQuery<GetAdminWithdrawalsQuery, GetAdminWithdrawalsQueryVariables>(GetAdminWithdrawalsDocument, baseOptions);
      }
export function useGetAdminWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdminWithdrawalsQuery, GetAdminWithdrawalsQueryVariables>) {
          return Apollo.useLazyQuery<GetAdminWithdrawalsQuery, GetAdminWithdrawalsQueryVariables>(GetAdminWithdrawalsDocument, baseOptions);
        }
export type GetAdminWithdrawalsQueryHookResult = ReturnType<typeof useGetAdminWithdrawalsQuery>;
export type GetAdminWithdrawalsLazyQueryHookResult = ReturnType<typeof useGetAdminWithdrawalsLazyQuery>;
export type GetAdminWithdrawalsQueryResult = Apollo.QueryResult<GetAdminWithdrawalsQuery, GetAdminWithdrawalsQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    id
    first_name
    email
    phone_no
    plan
    coin_address
    wallet_balance
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
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
export const GetPendingWithdrawalsDocument = gql`
    query getPendingWithdrawals {
  getPendingWithdrawals {
    id
    userId
    slug
    status
    amount
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
 * __useGetPendingWithdrawalsQuery__
 *
 * To run a query within a React component, call `useGetPendingWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPendingWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPendingWithdrawalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPendingWithdrawalsQuery(baseOptions?: Apollo.QueryHookOptions<GetPendingWithdrawalsQuery, GetPendingWithdrawalsQueryVariables>) {
        return Apollo.useQuery<GetPendingWithdrawalsQuery, GetPendingWithdrawalsQueryVariables>(GetPendingWithdrawalsDocument, baseOptions);
      }
export function useGetPendingWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPendingWithdrawalsQuery, GetPendingWithdrawalsQueryVariables>) {
          return Apollo.useLazyQuery<GetPendingWithdrawalsQuery, GetPendingWithdrawalsQueryVariables>(GetPendingWithdrawalsDocument, baseOptions);
        }
export type GetPendingWithdrawalsQueryHookResult = ReturnType<typeof useGetPendingWithdrawalsQuery>;
export type GetPendingWithdrawalsLazyQueryHookResult = ReturnType<typeof useGetPendingWithdrawalsLazyQuery>;
export type GetPendingWithdrawalsQueryResult = Apollo.QueryResult<GetPendingWithdrawalsQuery, GetPendingWithdrawalsQueryVariables>;
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
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
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
export const GetUserDepositsDocument = gql`
    query getUserDeposits {
  getUserDeposits {
    id
    userId
    slug
    status
    amount
    plan
    createdAt
  }
}
    `;

/**
 * __useGetUserDepositsQuery__
 *
 * To run a query within a React component, call `useGetUserDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDepositsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserDepositsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserDepositsQuery, GetUserDepositsQueryVariables>) {
        return Apollo.useQuery<GetUserDepositsQuery, GetUserDepositsQueryVariables>(GetUserDepositsDocument, baseOptions);
      }
export function useGetUserDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDepositsQuery, GetUserDepositsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserDepositsQuery, GetUserDepositsQueryVariables>(GetUserDepositsDocument, baseOptions);
        }
export type GetUserDepositsQueryHookResult = ReturnType<typeof useGetUserDepositsQuery>;
export type GetUserDepositsLazyQueryHookResult = ReturnType<typeof useGetUserDepositsLazyQuery>;
export type GetUserDepositsQueryResult = Apollo.QueryResult<GetUserDepositsQuery, GetUserDepositsQueryVariables>;
export const GetUserPendingDepositsDocument = gql`
    query getUserPendingDeposits {
  getUserPendingDeposits {
    id
    userId
    slug
    status
    amount
    plan
    createdAt
  }
}
    `;

/**
 * __useGetUserPendingDepositsQuery__
 *
 * To run a query within a React component, call `useGetUserPendingDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPendingDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPendingDepositsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserPendingDepositsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserPendingDepositsQuery, GetUserPendingDepositsQueryVariables>) {
        return Apollo.useQuery<GetUserPendingDepositsQuery, GetUserPendingDepositsQueryVariables>(GetUserPendingDepositsDocument, baseOptions);
      }
export function useGetUserPendingDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPendingDepositsQuery, GetUserPendingDepositsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserPendingDepositsQuery, GetUserPendingDepositsQueryVariables>(GetUserPendingDepositsDocument, baseOptions);
        }
export type GetUserPendingDepositsQueryHookResult = ReturnType<typeof useGetUserPendingDepositsQuery>;
export type GetUserPendingDepositsLazyQueryHookResult = ReturnType<typeof useGetUserPendingDepositsLazyQuery>;
export type GetUserPendingDepositsQueryResult = Apollo.QueryResult<GetUserPendingDepositsQuery, GetUserPendingDepositsQueryVariables>;
export const GetUserPendingWithdrawalsDocument = gql`
    query getUserPendingWithdrawals {
  getUserPendingWithdrawals {
    id
    userId
    slug
    status
    amount
    plan
    createdAt
  }
}
    `;

/**
 * __useGetUserPendingWithdrawalsQuery__
 *
 * To run a query within a React component, call `useGetUserPendingWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPendingWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPendingWithdrawalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserPendingWithdrawalsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserPendingWithdrawalsQuery, GetUserPendingWithdrawalsQueryVariables>) {
        return Apollo.useQuery<GetUserPendingWithdrawalsQuery, GetUserPendingWithdrawalsQueryVariables>(GetUserPendingWithdrawalsDocument, baseOptions);
      }
export function useGetUserPendingWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPendingWithdrawalsQuery, GetUserPendingWithdrawalsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserPendingWithdrawalsQuery, GetUserPendingWithdrawalsQueryVariables>(GetUserPendingWithdrawalsDocument, baseOptions);
        }
export type GetUserPendingWithdrawalsQueryHookResult = ReturnType<typeof useGetUserPendingWithdrawalsQuery>;
export type GetUserPendingWithdrawalsLazyQueryHookResult = ReturnType<typeof useGetUserPendingWithdrawalsLazyQuery>;
export type GetUserPendingWithdrawalsQueryResult = Apollo.QueryResult<GetUserPendingWithdrawalsQuery, GetUserPendingWithdrawalsQueryVariables>;
export const GetUserStatsDocument = gql`
    query getUserStats {
  getUserStats {
    totalBalance
    totalEarnings
    totalDeposits
    activePlan
    totalWithdrawal
  }
}
    `;

/**
 * __useGetUserStatsQuery__
 *
 * To run a query within a React component, call `useGetUserStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserStatsQuery, GetUserStatsQueryVariables>) {
        return Apollo.useQuery<GetUserStatsQuery, GetUserStatsQueryVariables>(GetUserStatsDocument, baseOptions);
      }
export function useGetUserStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserStatsQuery, GetUserStatsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserStatsQuery, GetUserStatsQueryVariables>(GetUserStatsDocument, baseOptions);
        }
export type GetUserStatsQueryHookResult = ReturnType<typeof useGetUserStatsQuery>;
export type GetUserStatsLazyQueryHookResult = ReturnType<typeof useGetUserStatsLazyQuery>;
export type GetUserStatsQueryResult = Apollo.QueryResult<GetUserStatsQuery, GetUserStatsQueryVariables>;
export const GetUserWithdrawalsDocument = gql`
    query getUserWithdrawals {
  getUserWithdrawals {
    id
    userId
    slug
    status
    amount
    plan
    createdAt
  }
}
    `;

/**
 * __useGetUserWithdrawalsQuery__
 *
 * To run a query within a React component, call `useGetUserWithdrawalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWithdrawalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWithdrawalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserWithdrawalsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserWithdrawalsQuery, GetUserWithdrawalsQueryVariables>) {
        return Apollo.useQuery<GetUserWithdrawalsQuery, GetUserWithdrawalsQueryVariables>(GetUserWithdrawalsDocument, baseOptions);
      }
export function useGetUserWithdrawalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWithdrawalsQuery, GetUserWithdrawalsQueryVariables>) {
          return Apollo.useLazyQuery<GetUserWithdrawalsQuery, GetUserWithdrawalsQueryVariables>(GetUserWithdrawalsDocument, baseOptions);
        }
export type GetUserWithdrawalsQueryHookResult = ReturnType<typeof useGetUserWithdrawalsQuery>;
export type GetUserWithdrawalsLazyQueryHookResult = ReturnType<typeof useGetUserWithdrawalsLazyQuery>;
export type GetUserWithdrawalsQueryResult = Apollo.QueryResult<GetUserWithdrawalsQuery, GetUserWithdrawalsQueryVariables>;