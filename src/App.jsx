/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./App.css";

const App = () => {
  const emojis = [
    {
      id: "100",
      name: "100",
      emoji: "💯",
    },
    {
      id: "1234",
      name: "1234",
      emoji: "🔢",
    },
    {
      id: "Sırıtma",
      name: "Sırıtma",
      emoji: "😀",
    },
    {
      id: "Ekşitme",
      name: "Ekşitme",
      emoji: "😬",
    },
    {
      id: "Sırıtış",
      name: "Sırıtış",
      emoji: "😄",
    },
    {
      id: "Neşeli",
      name: "Neşeli",
      emoji: "😂",
    },
    {
      id: "Gülen Yüz",
      name: "Gülen Yüz ",
      emoji: "😊",
    },
    {
      id: "Gülümsemek",
      name: "Gülümsemek",
      emoji: "🙂",
    },
    {
      id: "Tatlı Gülüş",
      name: "Tatlı Gülüş",
      emoji: "😅",
    },
    {
      id: "Kahkaha Atma",
      name: "Kahkaha Atma",
      emoji: "😆",
    },
    {
      id: "Sevimli Melek",
      name: "Sevimli Melek",
      emoji: "😇",
    },
    {
      id: "Göz Kırpma",
      name: "Göz Kırpma",
      emoji: "😉",
    },
    {
      id: "Utanma",
      name: "Utanma",
      emoji: "🫣",
    },
    {
      id: "Hafif Gülümseme",
      name: "Hafif Gülümseme",
      emoji: "🙂",
    },
    {
      id: "Baş Aşağı Gülümseme",
      name: "Baş Aşağı Gülümseme",
      emoji: "🙃",
    },
    {
      id: "Relax Gülümseme",
      name: "Relax Gülümseme",
      emoji: "😌",
    },
    {
      id: "Yum Yum Gülümseme",
      name: "Yum Yum Gülümseme",
      emoji: "😋",
    },
    {
      id: "Huzurlu Gülümseme",
      name: "Huzurlu Gülümseme",
      emoji: "😏",
    },
    {
      id: "Sevgi Dolu Gülümseme",
      name: "Sevgi Dolu Gülümseme",
      emoji: "😍",
    },
    {
      id: "Öpücük",
      name: "Öpücük",
      emoji: "😘",
    },
  ];

  const [search, setSearch] = useState("");

  const handleEmojiClick = (emoji) => {
    navigator.clipboard.writeText(emoji.emoji); // Emoji'yi kopyala
    setSearch(emoji.name);
    setSearch("");
  };

  return (
    <div>
      <h3> 😺 Emoji Arama Motoru 🐱</h3>
      <input
        type="text"
        placeholder="Ara..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <br />
      <div className="emojibtn">
        {emojis
          .filter((emoji) =>
            emoji.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((emoji) => (
            <div key={emoji.id} className="emojibtn">
              <div>
                {emoji.emoji} {emoji.name}
                <button
                  onClick={() => handleEmojiClick(emoji)}
                  className="kopyala"
                  data-name={emoji.name}
                >
                  Emoji'yi Kopyala
                </button>
                <hr />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
