import * as cdk from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { Duration } from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';

export class CdkServerlessStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, 'someBucket', {
      lifecycleRules: [
        {
          expiration: Duration.days(5),
        }
      ]
    })
  }
}
