## CLI Commands: 
- `npm i -g aws-cdk`
- `cdk init app --language typescript`
- `cdk synth`, creat folder *cdk.out*
- `cdk bootstrap`, create cloudformation stack `CDKToolkit` on AWS
- delete folder *cdk.out*
- `cdk deploy`, create cloudformation stack `CdkServerlessStack` (*CdkServerless* is project name) on AWS

# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
