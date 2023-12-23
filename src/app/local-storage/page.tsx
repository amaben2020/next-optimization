"use client";

import { LocalStorageService } from "./service";

const State = () => {
  const localStorageApi = new LocalStorageService();

  const email = "amaben20202@gmail.com";

  const isUserExists =
    localStorageApi.getUsers().find((user: any) => user.email === email).email
      .length > 0;

  return (
    <div>
      State
      <button
        className="border p-4 disabled:bg-gray-400 bg-white text-black disabled:cursor-not-allowed"
        disabled={isUserExists}
        onClick={() =>
          localStorageApi.addUser({
            name: "Benoski23",
            email,
          })
        }
      >
        Click to add
      </button>
    </div>
  );
};

export default State;
