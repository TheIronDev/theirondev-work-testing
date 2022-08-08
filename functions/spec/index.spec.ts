import firebaseFunctionsTest from "firebase-functions-test";
import {onvaluecreated} from "../src";
import {logger} from "firebase-functions";

const {wrap} = firebaseFunctionsTest();

test('wrapper should invoke handler, logger should be logging', () => {
  const mockLog = jest.spyOn(logger, "log");
  const wrappedCloudFunction = wrap(onvaluecreated);

  // CloudEvent is only returned because handler returns a CloudEvent
  const cloudEvent = wrappedCloudFunction();

  expect(mockLog).toBeCalledTimes(1);
  expect(cloudEvent.type).toEqual("google.firebase.database.ref.v1.created");
});
