import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';

const octokit = new Octokit({});
type listUsersParameters = Endpoints['GET /search/users']['parameters'];
type listUsersResponse = Endpoints['GET /search/users']['response'];

export async function getUsers({
    q,
    sort = 'repositories',
    order,
    per_page = 30,
    page = 1
}: listUsersParameters) {

    const response = await octokit.request(`GET /search/users`, {
        q,
        sort,
        order,
        per_page,
        page
    });
    
    const data: listUsersResponse['data'] = response.data;

    return data;
}
