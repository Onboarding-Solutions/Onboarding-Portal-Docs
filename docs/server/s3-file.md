# How to upload files to S3

## 1. Copy paste the lines into .env file.
S3_SECRETE_KEY= (On slack)
S3_ACCESS_KEY= (On slack)
BUCKET=onboarding-visa

## 2. import {upload} from s3.js file.
  -> References:
    [Multer] (https://www.npmjs.com/package/multer)
    [MulterS3] (https://www.npmjs.com/package/multer-s3)
###`import {upload} from "../utils/s3.js";`

## 3. Use upload.single('fieldName') to upload a single file to S3.
  -> fieldName should be the name of input in front end form.
  -> fieldName will also be the folder where the file will be store in S3 bucket
  -> E.g.  if fieldName is 'visaDoc', the file will be stored in visaDoc foler in S3.
###`visaRouter.post('/visa-doc',upload.single('visaDoc'),uploadOptVisa)`

## 4. To handle files in S3:
  -> import s3
  -> Write a command (ListObjectsCommand is for retrieving all files).
  -> use s3.send()
  ->  Reference: [AWS SDK] (https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListObjectsCommand/)
###`const command = new ListObjectsCommand({
  Bucket:process.env.BUCKET,
  Prefix:'visaDocs/',
  //Delimiter:'/'
})
let result = await s3.send(command);`
