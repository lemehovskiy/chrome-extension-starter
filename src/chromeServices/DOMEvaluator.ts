import getPageTitle from "./actionHandlers/getPageTitle";
import setPageTitle from "./actionHandlers/setPageTitle";
import { ActionType, MessageTypes } from "./types";

const messagesFromReactAppListener = (
  msg: ActionType,
  _sender: chrome.runtime.MessageSender,
  sendResponse: (response: ActionType["response"]) => void,
) => {
  if (msg.type === MessageTypes.SET_PAGE_TITLE) {
    setPageTitle(msg?.payload?.title);
    sendResponse(true);
  } else if (msg.type === MessageTypes.GET_PAGE_TITLE) {
    sendResponse(getPageTitle());
  }
};

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
