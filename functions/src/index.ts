import {logger} from "firebase-functions";

import {
  CloudEvent, alerts, pubsub, storage, eventarc,
} from "firebase-functions/v2";

const handler = (functionName: string) => {
  return (cloudEvent: CloudEvent) => {
    logger.log(`Cloud Event ${functionName}`, cloudEvent);
  };
};

const topic = "tystark-testing-v2-functions-topic";
const bucket = "tystark-testing-v2-functions";
const eventType = "eventType";

/* eslint-disable max-len */
export const onalertpublished = alerts.onAlertPublished("alertType", handler("onAlertPublished"));
export const onnewanrissuepublished = alerts.crashlytics.onNewAnrIssuePublished(handler("onNewAnrIssuePublished"));
export const onnewfatalissuepublished = alerts.crashlytics.onNewFatalIssuePublished(handler("onNewFatalIssuePublished"));
export const onnewnonfatalissuepublished = alerts.crashlytics.onNewNonfatalIssuePublished(handler("onNewNonfatalIssuePublished"));
export const onregressionalertpublished = alerts.crashlytics.onRegressionAlertPublished(handler("onRegressionAlertPublished"));
export const onstabilitydigestpublished = alerts.crashlytics.onStabilityDigestPublished(handler("onStabilityDigestPublished"));
export const onvelocityalertpublished = alerts.crashlytics.onVelocityAlertPublished(handler("onVelocityAlertPublished"));
export const onnewtesteriosdevicepublished = alerts.appDistribution.onNewTesterIosDevicePublished(handler("onNewTesterIosDevicePublished"));
export const onplanautomatedupdatepublished = alerts.billing.onPlanAutomatedUpdatePublished(handler("onPlanAutomatedUpdatePublished"));
export const onplanupdatepublished = alerts.billing.onPlanUpdatePublished(handler("onPlanUpdatePublished"));
export const oncustomeventpublished = eventarc.onCustomEventPublished(eventType, handler("onCustomEventPublished"));
export const onobjectarchived = storage.onObjectArchived(bucket, handler("onObjectArchived"));
export const onobjectdeleted = storage.onObjectDeleted(bucket, handler("onObjectDeleted"));
export const onobjectfinalized = storage.onObjectFinalized(bucket, handler("onObjectFinalized"));
export const onobjectmetadataupdated = storage.onObjectMetadataUpdated(bucket, handler("onObjectMetadataUpdated"));
export const onmessagepublished = pubsub.onMessagePublished(topic, handler("onMessagePublished"));
