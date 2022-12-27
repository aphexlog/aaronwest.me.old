#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AaronwestMeStack } from './lib/s3bucket';

const app = new cdk.App();

const env = app.node.tryGetContext('env');

new AaronwestMeStack(app, 'AaronwestMeStack', {
  env,
  domainName: 'aaronwest.me',
});