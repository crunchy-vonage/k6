import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '10m', target: 1000 },
  ],
 };

export default function () {

  const res = http.get('http://contact.churcher.me');

  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1)

}
