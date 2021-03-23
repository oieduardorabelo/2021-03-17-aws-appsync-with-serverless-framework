## Build a Serverless GraphQL API with AWS AppSync and Serverless Framework

- `serverless@2.30.3`
- `serverless-appsync-plugin@1.8.0`
- `serverless-esbuild@1.9.0`
- `serverless-export-env@1.4.1`
- `serverless-iam-roles-per-function@3.1.0`
- `serverless-manifest-plugin@1.0.7`


### Getting Started

Install dependencies:

```bash
npm install
```

Deploy it to your AWS account:

```bash
# aws profiles are defined in "~/.aws/credentials"
AWS_PROFILE=<your-aws-profile> npm run sls:deploy
```

Export AWS/CloudFormation Stack variables to a local `.env` file:

```bash
AWS_PROFILE=<your-aws-profile> npm run sls:export-env
```

Run E2E tests from `./__tests__/cases/e2e`:

```bash
npm run test:e2e
```
