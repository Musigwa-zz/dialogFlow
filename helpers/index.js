// const functions = require('firebase-functions');
// const { google } = require('googleapis');
// const { WebhookClient } = require('dialogflow-fulfillment');

// // Enter your calendar ID below and service account JSON below
// const calendarId =
//   'andela.com_6mjsm3l1lkb4njuujvjup0r0t8@group.calendar.google.com';
// const serviceAccount = {
//   type: 'service_account',
//   project_id: 'companionbot-swddta',
//   private_key_id: 'a3e3e56f843eede18e122d37fed035311eee0751',
//   private_key:
//     '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCs93+E2coQBybN\nJR+wju5n8URJNUO/yIVsoPoVnVjgMvrpoujPrdPi9tDj4MO6QYJ+M1GWZJTPvUw4\njhNfWejSVygS2p9LDX1/epRW+gDEA6FV0gpbYRcoJ73gJUUZlDt7DNsJKiM9SmP/\nv/qing/Hb073/Cv1wupBIUtI5Gkdq6zli/OBew4aKUYMrjpbbmZ6YR9hcNeACWcp\naWjhDzmujLBM5aJvZZvWx6nsRb6AYwWIHaUH4/bLuNfuzMuOtKU9Z7JbWL+fqlzh\nsmh10BaQtrlEHZ+96jGs/l/zzWOxxandM7Xuuk37qRIcAJXwvtm3ElL6NuSrkFZ+\n7+K6IF8tAgMBAAECggEAETfiHduAXfAYULutV+oimX5PCeqff+v6PEIaIySywD7S\n84cgHexz91gSm1y4n0X+M4nwSURh+/wgJlEeZJOStb2vY5EX4mTJZXNSaQYiJWEn\nIl/yX/5eS8UJBdMv+cfj0/AHrfXf5C4PnloCHUYW1AekmNMlnSV2JF2oHO1/+U//\nxJvyJdzRKOssRqPF1ppIos1SDYT77RxH1WbCIgET2W7CebUo9ccSrnEqbF695yYh\nOqA2QfVkf449M8DqqudTCIr65B+KtkDLWOxlWOYNiRdD2WeMZr24ejHa7fWDGk5F\n0M8a0pbS1p0PwQLdMzhXB4FxHyUguAwn+GEv/43YkQKBgQDeX7cRz5cequeUy3aG\nkOiOTkG6kApLyvBPFuH/U+KbpNkKP0agN5754/2Z20BbVer916f+ilDCDkLoU021\ncsr89404uYK6xpc2WCWqmyrCwTTsf629245p3Fu7Q5TNb8rsaXEnoPnnNdf8n455\nO+QJp77SEvli0uYnXjilWltqUwKBgQDHHzEQtis7pgWv7Y57WYHzSJzFPHv+DFvr\n5qK9zviXWN0W42naE/zsIWl/ws9N5vmpzFd6xVGoYbBzsEnwcil2rdaSx+Gt+q7y\nrGecNs3iXOVGYlyBa+2gQ8Br4GPdrmJUAwcBIZTeKX1U+SAXwkrzOYeW2sCSwHVx\n+KVU44rgfwKBgFLFedUNWgi2QKDn4uRPx+BATMLunoZ7sVse/1wUk0Kv54Gi79zv\nFyOYs2qza48TufZmcUeToF+7AziK2V/yrI/gbRZyJrDy/pHh2ZNZUl9Pny1wkPEc\najQJK7PWgeq98+BvlwjTKHHhXtXPZi7GFilp4OM84MriCX0Z2yfhLCm1AoGBALy4\nwWYXYg5cohNF0b7y7IlKDtuZIeN8jzqcEy5WlaHMJW9mBpMcUqDyYe0nFBe/jGz0\nMQ05KtWuEPD06n8rlETZKf9f1nNwnpN9941FHAkpBlyZKRe41TUKQbt8puoaNzNs\n0xytWUzegd0haNtb2HGB2xKNLeto4WctxHUaXCu9AoGANS+2X3doHNrNKpFovlzu\n75jmq55EM3owZxBHR5+MXCD21kx+cEYeY/Vu+cNFeAIHeKlBycO+eJhuNjPSth8e\nFF+j3OkxVecSh/KURzh8gh4K8GA0c8PG2iKeg3rc4beHZWC/a9D3Y4jWMXnYnv4q\nW93l76lzpvScIArQ/sSRY4w=\n-----END PRIVATE KEY-----\n',
//   client_email: 'companionbot@companionbot-swddta.iam.gserviceaccount.com',
//   client_id: '104344613269085185478',
//   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//   token_uri: 'https://oauth2.googleapis.com/token',
//   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//   client_x509_cert_url:
//     'https://www.googleapis.com/robot/v1/metadata/x509/companionbot%40companionbot-swddta.iam.gserviceaccount.com'
// };

// // Set up Google Calendar Service account credentials
// const serviceAccountAuth = new google.auth.JWT({
//   email: serviceAccount.client_email,
//   key: serviceAccount.private_key,
//   scopes: 'https://www.googleapis.com/auth/calendar'
// });

// const calendar = google.calendar('v3');
// process.env.DEBUG = 'dialogflow:*'; // enables lib debugging statements

// const timeZone = 'Kigali/Rwanda';
// const timeZoneOffset = '+2:00';

// exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
//   (request, response) => {
//     const agent = new WebhookClient({ request, response });
//     console.log('Parameters', agent.parameters);
//     const appointment_type = agent.parameters.AppointmentType;
//     function makeAppointment(agent) {
//       // Calculate appointment start and end datetimes (end = +1hr from start)
//       //console.log("Parameters", agent.parameters.date);
//       const dateTimeStart = new Date(
//         Date.parse(
//           agent.parameters.date.split('T')[0] +
//             'T' +
//             agent.parameters.time.split('T')[1].split('-')[0] +
//             timeZoneOffset
//         )
//       );
//       const dateTimeEnd = new Date(
//         new Date(dateTimeStart).setHours(dateTimeStart.getHours() + 1)
//       );
//       const appointmentTimeString = dateTimeStart.toLocaleString('en-US', {
//         month: 'long',
//         day: 'numeric',
//         hour: 'numeric',
//         timeZone: timeZone
//       });

//       // Check the availibility of the time, and make an appointment if there is time on the calendar
//       return createCalendarEvent(dateTimeStart, dateTimeEnd, appointment_type)
//         .then(() => {
//           agent.add(
//             `Ok, let me see if we can fit you in. ${appointmentTimeString} is fine!.`
//           );
//         })
//         .catch(() => {
//           agent.add(
//             `I'm sorry, there are no slots available for ${appointmentTimeString}.`
//           );
//         });
//     }

//     let intentMap = new Map();
//     intentMap.set('Schedule Appointment', makeAppointment);
//     agent.handleRequest(intentMap);
//   }
// );

// function createCalendarEvent(dateTimeStart, dateTimeEnd, appointment_type) {
//   return new Promise((resolve, reject) => {
//     calendar.events.list(
//       {
//         auth: serviceAccountAuth, // List events for time period
//         calendarId: calendarId,
//         timeMin: dateTimeStart.toISOString(),
//         timeMax: dateTimeEnd.toISOString()
//       },
//       (err, calendarResponse) => {
//         // Check if there is a event already on the Calendar
//         if (err || calendarResponse.data.items.length > 0) {
//           reject(
//             err ||
//               new Error('Requested time conflicts with another appointment')
//           );
//         } else {
//           // Create event for the requested time period
//           calendar.events.insert(
//             {
//               auth: serviceAccountAuth,
//               calendarId: calendarId,
//               resource: {
//                 summary: appointment_type + ' Appointment',
//                 description: appointment_type,
//                 start: { dateTime: dateTimeStart },
//                 end: { dateTime: dateTimeEnd }
//               }
//             },
//             (err, event) => {
//               err ? reject(err) : resolve(event);
//             }
//           );
//         }
//       }
//     );
//   });
// }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const functions = require('firebase-functions');
const { google } = require('googleapis');
const { WebhookClient } = require('dialogflow-fulfillment');

// Enter your calendar ID and service account JSON below.
const calendarId = '<INSERT CALENDAR ID HERE>'; // Example: 6ujc6j6rgfk02cp02vg6h38cs0@group.calendar.google.com
const serviceAccount = {}; // The JSON object looks like: { "type": "service_account", ... }

// Set up Google Calendar service account credentials
const serviceAccountAuth = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: 'https://www.googleapis.com/auth/calendar'
});

const calendar = google.calendar('v3');
process.env.DEBUG = 'dialogflow:*'; // It enables lib debugging statements

const timeZone = 'America/Los_Angeles'; // Change it to your time zone
const timeZoneOffset = '-07:00'; // Change it to your time zone offset

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });

    function makeAppointment(agent) {
      // Use the Dialogflow's date and time parameters to create Javascript Date instances, 'dateTimeStart' and 'dateTimeEnd',
      // which are used to specify the appointment's time.
      const appointmentDuration = 1; // Define the length of the appointment to be one hour.
      const dateTimeStart = convertParametersDate(
        agent.parameters.date,
        agent.parameters.time
      );
      const dateTimeEnd = addHours(dateTimeStart, appointmentDuration);
      const appointmentTimeString = getLocaleTimeString(dateTimeStart);
      const appointmentDateString = getLocaleDateString(dateTimeStart);
      // Check the availability of the time slot and set up an appointment if the time slot is available on the calendar
      return createCalendarEvent(dateTimeStart, dateTimeEnd)
        .then(() => {
          agent.add(
            `Got it. I have your appointment scheduled on ${appointmentDateString} at ${appointmentTimeString}. See you soon. Good-bye.`
          );
        })
        .catch(() => {
          agent.add(
            `Sorry, we're booked on ${appointmentDateString} at ${appointmentTimeString}. Is there anything else I can do for you?`
          );
        });
    }
    let intentMap = new Map();
    intentMap.set('Make Appointment', makeAppointment); // It maps the intent 'Make Appointment' to the function 'makeAppointment()'
    agent.handleRequest(intentMap);
  }
);

function createCalendarEvent(dateTimeStart, dateTimeEnd) {
  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        // List all events in the specified time period
        auth: serviceAccountAuth,
        calendarId: calendarId,
        timeMin: dateTimeStart.toISOString(),
        timeMax: dateTimeEnd.toISOString()
      },
      (err, calendarResponse) => {
        // Check if there exists any event on the calendar given the specified the time period
        if (err || calendarResponse.data.items.length > 0) {
          reject(
            err ||
              new Error('Requested time conflicts with another appointment')
          );
        } else {
          // Create an event for the requested time period
          calendar.events.insert(
            {
              auth: serviceAccountAuth,
              calendarId: calendarId,
              resource: {
                summary: 'Bike Appointment',
                start: { dateTime: dateTimeStart },
                end: { dateTime: dateTimeEnd }
              }
            },
            (err, event) => {
              err ? reject(err) : resolve(event);
            }
          );
        }
      }
    );
  });
}

// A helper function that receives Dialogflow's 'date' and 'time' parameters and creates a Date instance.
function convertParametersDate(date, time) {
  return new Date(
    Date.parse(
      date.split('T')[0] +
        'T' +
        time.split('T')[1].split('-')[0] +
        timeZoneOffset
    )
  );
}

// A helper function that adds the integer value of 'hoursToAdd' to the Date instance 'dateObj' and returns a new Data instance.
function addHours(dateObj, hoursToAdd) {
  return new Date(new Date(dateObj).setHours(dateObj.getHours() + hoursToAdd));
}

// A helper function that converts the Date instance 'dateObj' into a string that represents this time in English.
function getLocaleTimeString(dateObj) {
  return dateObj.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
    timeZone: timeZone
  });
}

// A helper function that converts the Date instance 'dateObj' into a string that represents this date in English.
function getLocaleDateString(dateObj) {
  return dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: timeZone
  });
}
