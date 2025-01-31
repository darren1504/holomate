export const posts = [
  {
    id: 1,
    username: "古参35P🌸",
    profileImage: "/pfp1.jpeg",
    time: "1時間前",
    content:
      "miComet最高すぎる！一生コラボして欲しいな〜 新春のゲーム祭り別のチームであっても一緒に雑談してよかった",
    comments: [
      {
        id: 1,
        username: "すいちゃん好き☄️",
        profileImage: "/pfp2.jpeg",
        time: "33分前",
        content: "それな！二人てぇてぇすぎるんだけど^^ miComet最高〜",
      },
    ],
  },
  {
    id: 2,
    username: "しゃち123🎣",
    profileImage: "/pfp3.jpeg",
    time: "3時間前",
    content:
      "クロヱちゃんいつかおかゆんとコラボしないのかなー 対談とかゲーム一緒にやってほしい…",
    comments: [
      {
        id: 2,
        username: "おにぎりゃー🍙",
        profileImage: "/pfp4.jpeg",
        time: "41分前",
        content:
          "おかゆんとコラボしたことないね…なかなか楽しいコラボになりそう！",
      },
    ],
  },
  {
    id: 3,
    username: "すこん部リーダー👑🌽",
    profileImage: "/pfp5.jpeg",
    time: "15分前",
    content:
      "フブちゃんのソロライブ当選しました！現地に行く方ぜひエンカしましょう！",
    comments: [
      {
        id: 3,
        username: "白上吹雪🌽",
        profileImage: "/pfp6.jpeg",
        time: "2分前",
        content: "当選おめでとうございます！ぜひエンカしましょう！",
      },
    ],
  },
];

export interface Chat {
  id: number;
  avatar: string;
  name: string;
  message: string;
  time: string;
}

export const chats: Chat[] = [
  {
    id: 1,
    name: "団員さん",
    message: "そろそろさんでーまっする始まるね〜",
    time: "2分前",
    avatar: "/chat_icon.jpeg",
  },
  {
    id: 2,
    name: "0期生ファンの集まり",
    message: "すいちゃんのおすすめ切り抜き動画を誰か共有してくれん？",
    time: "1時間前",
    avatar: "/chat_icon2.jpeg",
  },
  {
    id: 3,
    name: "やかまし娘の待機場",
    message: "船長のソロライブ前夜なのに配信してるのヤバすぎるww",
    time: "47分前",
    avatar: "/chat_icon3.jpeg",
  },
];

export interface Event {
  name: string;
  type: string;
  date: string;
  location: string;
  people: string;
}
