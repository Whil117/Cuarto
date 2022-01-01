export type Event = {
  event: {
    target: {
      name: string;
      value: string;
    };
  };
};

export type State = {
  username: string;
  password: string;
  show: boolean;
  error: boolean;
};

export default State;
