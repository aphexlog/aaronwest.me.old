import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HostedSite } from '@elevator-robot/cdk-s3-site'

interface Props extends cdk.StackProps{
  zoneName: string;
  subDomain?: string;
  outPath: string;
}

export class AaronwestMeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    const site = new HostedSite(this, 'Site', {
      zoneName: props.zoneName,
      webAssetPath: '../out',

      // Optional
      subDomain: props.subDomain
    });


  }
}