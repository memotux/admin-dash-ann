import { Amplify } from 'aws-amplify';
import awsExports from '~/aws-exports';
import '@aws-amplify/ui-vue/styles.css';

export default defineNuxtPlugin(() => {
  Amplify.configure(awsExports);
})