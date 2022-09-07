import {logger} from "firebase-functions";
import {initializeApp} from "firebase-admin/app";

import {
  CloudEvent, alerts, pubsub, storage, database,
  // eventarc,
} from "firebase-functions/v2";

initializeApp();


const handler = (functionName: string) => {
  return (cloudEvent: CloudEvent<any>) => {
    logger.log(cloudEvent.type);
    return cloudEvent;
  };
};

const topic = "theirondev-work-testing-topic";
const bucket = "theirondev-work-testing.appspot.com";
const ref = "/ref/{users}";

/* eslint-disable max-len */
// export const onalertpublished = alerts.onAlertPublished("alertType", handler("onAlertPublished"));
export const onnewanrissuepublished = alerts.crashlytics.onNewAnrIssuePublished(handler("onNewAnrIssuePublished"));
// export const onnewfatalissuepublished = alerts.crashlytics.onNewFatalIssuePublished(handler("onNewFatalIssuePublished"));
export const onnewnonfatalissuepublished = alerts.crashlytics.onNewNonfatalIssuePublished(handler("onNewNonfatalIssuePublished"));
export const onregressionalertpublished = alerts.crashlytics.onRegressionAlertPublished(handler("onRegressionAlertPublished"));
export const onstabilitydigestpublished = alerts.crashlytics.onStabilityDigestPublished(handler("onStabilityDigestPublished"));
export const onvelocityalertpublished = alerts.crashlytics.onVelocityAlertPublished(handler("onVelocityAlertPublished"));
export const onnewtesteriosdevicepublished = alerts.appDistribution.onNewTesterIosDevicePublished(handler("onNewTesterIosDevicePublished"));
export const onplanautomatedupdatepublished = alerts.billing.onPlanAutomatedUpdatePublished(handler("onPlanAutomatedUpdatePublished"));
export const onplanupdatepublished = alerts.billing.onPlanUpdatePublished(handler("onPlanUpdatePublished"));
// export const oncustomeventpublished = eventarc.onCustomEventPublished(eventType, handler("onCustomEventPublished"));
export const onobjectarchived = storage.onObjectArchived(bucket, handler("onObjectArchived"));
export const onobjectdeleted = storage.onObjectDeleted(bucket, handler("onObjectDeleted"));
export const onobjectfinalized = storage.onObjectFinalized(bucket, handler("onObjectFinalized"));
export const onobjectmetadataupdated = storage.onObjectMetadataUpdated(bucket, handler("onObjectMetadataUpdated"));
export const onmessagepublished = pubsub.onMessagePublished(topic, handler("onMessagePublished"));

export const onvaluedeleted = database.onValueDeleted(ref, handler("onValueDeleted"));
export const onvaluecreated = database.onValueCreated(ref, handler("onValueCreated"));
export const onvalueupdated = database.onValueUpdated(ref, handler("onValueUpdated"));
export const onvaluewritten = database.onValueWritten(ref, handler("onValueWritten"));
