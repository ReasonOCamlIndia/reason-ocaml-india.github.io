# Website

This website is built using [Docusaurus](https://docusaurus.io/).

## Adding a blog post
1. New posts are created in [./blog/](./blog) folder. For reference see [this post](/blog/2024-05-12-meetup-3-and-ann-next-meetup.md)
2. Feel free to add yourself [here](/blog/authors.yml) as an author
3. Add yourself as an author (or co-author if you're collaborating) in the post's headers.


## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

We use Github Actions to deploy the website. See [./.github/workflows](./.github/workflows). For the domain, contact [ManasJayanth](https://github.com/ManasJayanth).
