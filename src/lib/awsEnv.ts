// src/lib/awsEnv.ts
// AWS region/credentials for the S3 + DynamoDB clients.
// AWS Amplify rejects env var names starting with "AWS", so deployed builds set
// APP_AWS_REGION / APP_AWS_ACCESS_KEY_ID / APP_AWS_SECRET_ACCESS_KEY. The plain
// AWS_* names still work as a fallback for local .env files.

export function awsRegion(fallback = 'us-east-1'): string {
  return process.env.APP_AWS_REGION || process.env.AWS_REGION || fallback;
}

/** Explicit keys when configured; undefined lets the SDK use its default chain (e.g. an IAM role). */
export function awsCredentials(): { accessKeyId: string; secretAccessKey: string } | undefined {
  const accessKeyId = process.env.APP_AWS_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.APP_AWS_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY;
  return accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined;
}
