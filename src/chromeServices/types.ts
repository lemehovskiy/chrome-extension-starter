export enum MessageTypes {
  SET_PAGE_TITLE = "set_page_title",
  GET_PAGE_TITLE = "get_page_title",
}

export interface ActionType {
  type: MessageTypes;
  payload?: { [index: string]: any };
  response?: any;
}

export interface SetPageTitle extends ActionType {
  type: MessageTypes.SET_PAGE_TITLE;
  payload: { title: string };
}

export interface GetPageTitle extends ActionType {
  type: MessageTypes.GET_PAGE_TITLE;
  response: string;
}
