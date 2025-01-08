

import { createClient } from 'next-sanity';

import {apiVersion,dataset,projectId} from '../env';

export const client = createClient({
  projectId,
  dataset, // Replace with your dataset name
  apiVersion, // Replace with your API version
  useCdn: false, // Set to true for faster read-only queries
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Ensure this token has "Write" permissions
});


