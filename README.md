# Description

Pokedex React app that uses Apollo client and Material UI to fetch data from a public pokemon graphQL API.
Pagination is completely handled by Apollo-GraphQL (i.e. partial data retrieved for each page, total pages computed from returned data)

[Live demo](https://my-pokedex-graphql.netlify.app/)

![Pokedex](https://i.ibb.co/QPP7xn8/graph-QL-pokedex.png)

Header bar automatically hides on scroll down (returns on scroll up)

![Pokedex end](https://i.ibb.co/mcTqZPb/graph-QL-pokedex-2.png)

Clicking on a grid opens a modal that displays the full stats of the Pokemon.
This is a separate GraphQL API call.

![](https://i.ibb.co/P1xhXrZ/graph-QL-selected.png)
