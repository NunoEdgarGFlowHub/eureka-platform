/**
 * Different state a review on an article can have
 */
const REVIEW_STATE = Object.freeze({
  NOT_EXISTING: 'NOT_EXISTING',
  INVITED: 'INVITED',
  SIGNED_UP_FOR_REVIEWING: 'SIGNED_UP_FOR_REVIEWING',
  HANDED_IN_DB: 'HANDED_IN_DB',
  HANDED_IN_SC: 'HANDED_IN_SC',
  DECLINED: 'DECLINED',
  ACCEPTED: 'ACCEPTED'
});

export default REVIEW_STATE;