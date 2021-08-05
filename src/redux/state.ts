let rerenderEntireTree = (state: any) => {
  console.log("state was changed");
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

let state: RootStateType = {
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
};

export const addPost = () => {
  let newPost: PostType = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer: any) => {
  rerenderEntireTree = observer;
};

export default state;
