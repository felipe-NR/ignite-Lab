import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qh00dc458501w7ebn784gb/master',
    cache: new InMemoryCache()
});