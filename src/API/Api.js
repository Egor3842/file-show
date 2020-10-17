import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import data from '../data/data.json';

const mock = new MockAdapter(axios, { delayResponse: 2000 });
mock.onGet("/files").reply(200, { data });

export const MainApi = {
  getFileData() {
    return axios.get('/files')
      .then(response => {
        return response.data;
      });
  }
}