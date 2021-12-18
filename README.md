## Walk through: 
- Run `npm i -g aws-cdk` to install aws-cdk CLI
- Run `cdk init app --language typescript` in a folder, to initialise a new project with the folder's name
- Run `cdk synth`, it will creat a folder *cdk.out*, containing CloudFormation files
- Run `cdk bootstrap`, create cloudformation stack `CDKToolkit` on AWS
- Delete folder *cdk.out*, it will be added back when running `cdk deploy`
- Run `cdk deploy`, create cloudformation stack `CdkServerlessStack` (*CdkServerless* is project name) on AWS
- Add a new s3 bucket in the constructor of `cdk-serverless-stack.ts`
- Run `cdk deploy` again , this will create a new s3 bucket on AWS CloudFormation > Stacks > ...Stack > Resources
- Add life cycle rules to the s3 bucket, set objects to expire after 5 days
- Add a new stack in `cdk-serverless.ts` called *SecondCdkStack*
- Once there are 2 stacks, run `cdk deploy` will fail, need to add flag `--all`
- Run `cdk deploy --all`, this will deploy both stacks, each containing a s3 bucket with shared option (life cycle rule)
- `cdk list`: list the stacks on AWS
- Change the S3 expiration to 2 days and run `cdk synth`
- Run `cdk diff`, this will show the difference between local and remote
- Run `cdk destroy SecondCdkStack`, to delete the second stack from AWS 
- The code `new CdkServerlessStack(app, 'SecondCdkStack', {});` is still in ts file, manually remove this line from ts file
- Run `cdk doctor` to see environment variables
- CloudFormation Output: add new `CfnOutput` instance in stack "SecondCdkStack" and run `cdk deploy`
- This will add item in Outputs tab in AWS > CloudFormation > Stacks > CdkServerlessStack

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
