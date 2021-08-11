let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 20 },
        { id: 2, message: "I's my first post", likesCount: 15 },
      ],
      newPostText: "it-kamasutra.com",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Artur" },
        { id: 2, name: "Maks" },
        { id: 3, name: "Yuriy" },
        { id: 4, name: "Anastasiya" },
        { id: 5, name: "Dmitriy" },
        { id: 6, name: "Vanda" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
      ],
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber(state: any) {
    console.log("state was changed");
  },
  addPost() {
    let newPost: PostType = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    //@ts-ignore
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    //@ts-ignore
    this._callSubscriber(this._state);
  },
  subscribe(observer: any) {
    //@ts-ignore
    this._callSubscriber = observer;
  },
};

type MessagType = {
  id: number;
  message: string;
};

type DialogType = {
  id: number;
  name: string;
};

type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

type DialogPageType = {
  dialogs: Array<DialogType>;
  messages: Array<MessagType>;
};

type ProfilePageType = {
  posts: Array<PostType>;
  newPostText: string;
};

type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogPageType;
  sidebar: SidebarType;
};

export default store;
