import * as cdk from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { CfnOutput, Duration } from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';

export class CdkServerlessStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // "this" refers to the current stack "CdkServerlessStack"
    const myBucket = new Bucket(this, 'someBucket', {
      lifecycleRules: [
        {
          expiration: Duration.days(2),
        }
      ]
    })

    // cloud formation output, deployed here: AWS > CloudFormation > Stacks > CdkServerlessStack > Outputs
    new CfnOutput(this, 'mybucket', {
      value: myBucket.bucketName
    })
  }
}
