import gql from 'graphql-tag';

export const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon (name: $name) {
            name
            id
            types {
              type {
                name
              }
            }
            height
            weight
            stats {
              stat {
                name
              }
              base_stat
            }
            moves {
              move {
                name
              }
            }
            abilities {
              ability {
                name
              }
            }
          }
    }
`;