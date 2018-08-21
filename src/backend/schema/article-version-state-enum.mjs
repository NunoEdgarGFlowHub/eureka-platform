/**
 * Different Articel versions a article version within an article submission can have
 */
const ARTICLE_VERSION_STATE = Object.freeze({
  NOT_EXISTING: 'NOT_EXISTING',
  DRAFT: 'DRAFT',
  FINISHED_DRAFT: 'FINISHED_DRAFT',
  SUBMITTED: 'SUBMITTED',
  EDITOR_CHECKED: 'EDITOR_CHECKED',
  REVIEWERS_INVITED: 'REVIEWERS_INVITED',
  NOT_ENOUGH_REVIEWERS: 'NOT_ENOUGH_REVIEWERS',
  DECLINED_SANITY_NOTOK: 'DECLINED_SANITY_NOTOK',
  DECLINED:'DECLINED',
  ACCEPTED: 'ACCEPTED'
});

export default ARTICLE_VERSION_STATE;