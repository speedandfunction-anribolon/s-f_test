import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Earthquake = {
  __typename?: 'Earthquake';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  magnitude: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEarthquake: Earthquake;
  deleteEarthquake?: Maybe<Scalars['Boolean']['output']>;
  updateEarthquake: Earthquake;
};


export type MutationCreateEarthquakeArgs = {
  date: Scalars['String']['input'];
  location: Scalars['String']['input'];
  magnitude: Scalars['Float']['input'];
};


export type MutationDeleteEarthquakeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateEarthquakeArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  magnitude?: InputMaybe<Scalars['Float']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getEarthquakes?: Maybe<Array<Earthquake>>;
};

export type GetEarthquakesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEarthquakesQuery = { __typename?: 'Query', getEarthquakes?: Array<{ __typename?: 'Earthquake', id: string, location: string, magnitude: number, date: string }> | null };

export type CreateEarthquakeMutationVariables = Exact<{
  location: Scalars['String']['input'];
  magnitude: Scalars['Float']['input'];
  date: Scalars['String']['input'];
}>;


export type CreateEarthquakeMutation = { __typename?: 'Mutation', createEarthquake: { __typename?: 'Earthquake', id: string, location: string, magnitude: number, date: string } };


export const GetEarthquakesDocument = gql`
    query GetEarthquakes {
  getEarthquakes {
    id
    location
    magnitude
    date
  }
}
    `;

/**
 * __useGetEarthquakesQuery__
 *
 * To run a query within a React component, call `useGetEarthquakesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEarthquakesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEarthquakesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEarthquakesQuery(baseOptions?: Apollo.QueryHookOptions<GetEarthquakesQuery, GetEarthquakesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEarthquakesQuery, GetEarthquakesQueryVariables>(GetEarthquakesDocument, options);
      }
export function useGetEarthquakesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEarthquakesQuery, GetEarthquakesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEarthquakesQuery, GetEarthquakesQueryVariables>(GetEarthquakesDocument, options);
        }
export function useGetEarthquakesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEarthquakesQuery, GetEarthquakesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEarthquakesQuery, GetEarthquakesQueryVariables>(GetEarthquakesDocument, options);
        }
export type GetEarthquakesQueryHookResult = ReturnType<typeof useGetEarthquakesQuery>;
export type GetEarthquakesLazyQueryHookResult = ReturnType<typeof useGetEarthquakesLazyQuery>;
export type GetEarthquakesSuspenseQueryHookResult = ReturnType<typeof useGetEarthquakesSuspenseQuery>;
export type GetEarthquakesQueryResult = Apollo.QueryResult<GetEarthquakesQuery, GetEarthquakesQueryVariables>;
export const CreateEarthquakeDocument = gql`
    mutation CreateEarthquake($location: String!, $magnitude: Float!, $date: String!) {
  createEarthquake(location: $location, magnitude: $magnitude, date: $date) {
    id
    location
    magnitude
    date
  }
}
    `;
export type CreateEarthquakeMutationFn = Apollo.MutationFunction<CreateEarthquakeMutation, CreateEarthquakeMutationVariables>;

/**
 * __useCreateEarthquakeMutation__
 *
 * To run a mutation, you first call `useCreateEarthquakeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEarthquakeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEarthquakeMutation, { data, loading, error }] = useCreateEarthquakeMutation({
 *   variables: {
 *      location: // value for 'location'
 *      magnitude: // value for 'magnitude'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useCreateEarthquakeMutation(baseOptions?: Apollo.MutationHookOptions<CreateEarthquakeMutation, CreateEarthquakeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEarthquakeMutation, CreateEarthquakeMutationVariables>(CreateEarthquakeDocument, options);
      }
export type CreateEarthquakeMutationHookResult = ReturnType<typeof useCreateEarthquakeMutation>;
export type CreateEarthquakeMutationResult = Apollo.MutationResult<CreateEarthquakeMutation>;
export type CreateEarthquakeMutationOptions = Apollo.BaseMutationOptions<CreateEarthquakeMutation, CreateEarthquakeMutationVariables>;