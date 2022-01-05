function timeConversion(s) {
  const period = s.slice(-2, -1);
  const time = s.slice(0, 8);
  let [hh, mm, ss] = time.split(':');

  if (hh === '12') hh = '00';

  if (period === 'P') {
    hh = parseInt(hh, 10) + 12;
  }
  console.log(`${hh}:${mm}:${ss}`);
  return `${hh}:${mm}:${ss}`;
}

const s = '07:05:45PM'; // output 19:05:45
const s1 = '12:01:00PM'; // output 12:01:00
const s2 = '12:01:00AM'; // output 00:01:00

timeConversion(s);
timeConversion(s1);
timeConversion(s2);
