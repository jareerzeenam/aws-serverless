const Responses = require('./API_Responses');

exports.handler = async (event) => {
  console.log('event', event);

  if (!event.pathParameters || !event.pathParameters.ID) {
    //Failed without an ID
    return Responses._400({ message: 'Missing the ID from the path!' });
  }

  let ID = event.pathParameters.ID;

  if (data[ID]) {
    // return the data
    return Responses._200(data[ID]);
  }

  //failed as ID was not in the data
  return Responses._400({ message: 'No ID in Data !!!' });
};

const data = {
  1234: { name: 'Jareer Zeenam', age: 25, job: 'Software Engineer' },
  5678: { name: 'Reeraj', age: 23, job: 'Architect' },
  9175: { name: 'John', age: 28, job: 'Manager' },
};
