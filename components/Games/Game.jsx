const Game = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="h-36 md:h-48">
        <img
          className="w-full h-full object-cover"
          src="/assets/game-image-01.png"
          alt=""
        />
      </div>
      <div className="h-full flex flex-col py-6 px-5">
        <h4 className="text-sm font-black">Polychainmonsters</h4>
        <p className="text-xl lg:text-base lg:leading-5 mt-4">
          Discover, Collect & Play to Earn.
        </p>
        <div className="flex items-center mt-5">
          <button
            type="button"
            className="h-11 lg:w-full flex items-center font-black border border-brand-green rounded-full hover:shadow-xl px-4 mt-auto"
          >
            <span className="whitespace-nowrap">Play now</span>
            <span className="pl-10">
              <img src="/assets/alien-arcade.svg" alt="" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
