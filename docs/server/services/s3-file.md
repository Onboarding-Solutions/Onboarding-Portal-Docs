# How to upload files to S3

## 1. Copy paste the lines into .env file.

```
S3_SECRETE_KEY= (On slack)
S3_ACCESS_KEY= (On slack)
BUCKET=onboarding-visa
```

## 2. Import the `upload` function from the `s3.js` file.

- References:
  - [Multer](https://www.npmjs.com/package/multer)
  - [MulterS3](https://www.npmjs.com/package/multer-s3)

```javascript
import { upload } from "../utils/s3.js";
```

## 3. Use `upload.single('fieldName')` to upload a single file to S3.

- `fieldName` should be the name of the input in the front-end form.
- `fieldName` will also be the folder where the file will be stored in the S3 bucket.
- Example: if `fieldName` is `'visaDoc'`, the file will be stored in the `visaDoc` folder in the S3 bucket.

```javascript
visaRouter.post('/visa-doc', upload.single('visaDoc'), uploadOptVisa);
```

## 4. To handle files in S3:

- Import `s3` from the AWS SDK.
- Write a command (e.g., `ListObjectsCommand` for retrieving all files).
- Use `s3.send()` to execute the command.

- Reference: [AWS SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/ListObjectsCommand/)

```javascript
const command = new ListObjectsCommand({
  Bucket: process.env.BUCKET,
  Prefix: 'visaDoc/',
  // Delimiter: '/'
});

let result = await s3.send(command);
```
