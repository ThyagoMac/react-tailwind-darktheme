import { Message } from '@/types/Message';

type AddAction = {
  type: 'add';
  payload: {
    user: string,
    text: string,
  }
}
type RemoveAction = {
  type: 'remove';
  payload: {
    id: number;
  }
}

export type ChatActions = AddAction | RemoveAction;

export const chatReducer = (state: Message[], action: ChatActions) => {
  switch (action.type) {
    case 'add':
      return [...state, {
        id: state.length,
        user: action.payload.user,
        text: action.payload.text
      }];
    case 'remove':
      return state.filter(p => p.id !== action.payload.id);
    default:
      return state;
  }
}