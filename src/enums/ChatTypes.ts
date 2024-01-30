export type ChatsType = {
  userId: string;
  name: string;
  recentMessage: string;
  recentMessageCount: number;
  newMessage: boolean;
  lastMessageTime: Date;
};

export type UserData = {
  email: string;
  fullName: string;
  userId: string;
  phoneNumber: string;
  password: string;
};
