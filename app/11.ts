const delay = (ms: number): Promise<void> =>
  new Promise<void>((resolve, reject) => setTimeout(resolve, ms));

export async function getAsycnData() {
  await getDataFromServer();
  console.log('I am done');
}

async function getDataFromServer(ms: number = 2000): Promise<string[]> {
  await delay(ms);
  return ['Pratik', 'Dashore'];
}
