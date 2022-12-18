#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AaronwestMeStack } from './lib/aaronwest.me-stack';

const app = new cdk.App();

// get env from context
const env = app.node.tryGetContext('env');

new AaronwestMeStack(app, 'AaronwestMeStack', {
  env
});