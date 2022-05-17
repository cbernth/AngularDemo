# AngularDemo
An Angular 13 / .NET 6 demo application created with VS 2022 using the Standalone Typescript Angular Project template

![001-1](https://user-images.githubusercontent.com/32438452/167611092-0d04b185-9748-49fd-b7e1-e7b4038d570e.png)

## Getting started

### Prerequisites
- VS 2022 (for .NET 6 support)
- Yarn Classic latest LTS build: https://classic.yarnpkg.com/lang/en/
- Node.js latest LTS build: https://nodejs.org/en/download/

### Running
- Build and run the Angular.Demo.API project VS
- Run `yarn run dev:ssr` from the command line in the **Angular.Demo.UI** folder


## Technical details

### Server Side vs Client Side urls
URLs must be absolute on the server side on the Client Side they must be relative to be avoid environment specifics like site names/subsite names.

This is how the URLs should look - and it's all handled by the `AppConfigService` via the `environment.ts` / `environment.prod.ts` configuration files:

Context          | Type   | Development                   | Production
---------------- | ------ | ----------------------------- | ------------------------------
Server (SSR)     | Assets | http://localhost:nnnn/assets/ | http://localhost:nnnn/assets/
Server (SSR)     | API    | http://localhost:nnnn/api/    | http://localhost:nnnn/api/
Client (Browser) | Assets | /assets/                      | /assets/
Client (Browser) | API    | /api/                         | /api/
