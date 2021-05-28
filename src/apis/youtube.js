import axios from 'axios';

const KEY = 'AIzaSyCt5x93fbsd6opskMsyaGCkKcTOBt-QJXU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    type: 'video',
    key: KEY,
  },
});
