const express = require('express');
const { request } = require('graphql-request');

const query = `{
allLocations{
    rooms{
      name,
      calendarId
    }
  }
}`;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/', async (req, res) => {
  const answer = await request(
    'https://converge-api-test.andela.com/mrm',
    query
  );

  console.log('request', answer);
  return res.json({
    fulfillmentText: `hello world ${answer.allLocations[0].rooms.length}`,
    payload: {
      google: {
        expectUserResponse: false,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: 'Goodbye!'
              }
            }
          ]
        }
      }
    },
    answer
  });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening to port ${server.address().port}`);
});
