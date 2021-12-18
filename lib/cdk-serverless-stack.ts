import * as cdk from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
import { CfnOutput, Duration, CfnParameter } from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';

export class CdkServerlessStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // "this" refers to the current stack "CdkServerlessStack"
    const duration = new CfnParameter(this, 'duration', {
      // becareful with title case types: 'Number', 'String'. Run `cdk synth` to test it locally
      type: 'Number',
      default: 6,
      minValue: 1,
      maxValue: 10
    })
    
    const myBucket = new Bucket(this, 'someBucket', {
      lifecycleRules: [
        {
          // CfnParameter "duration" is considered as cloudformation "Input"
          expiration: Duration.days(duration.valueAsNumber),
        }
      ]
    })

    // cloud formation output, deployed here: AWS > CloudFormation > Stacks > CdkServerlessStack > Outputs
    new CfnOutput(this, 'mybucket', {
      value: myBucket.bucketName
    })
  }
}
