export const apiConfigVariables = {
    endpoints: { // Added endpoints for odds checker as reference
        getSeasons: 'api/v0/seasons',
        getSimpleGamesBySeasonId: 'api/v0/simple/seasonId', // + :seasonId
        getAllGamesBySeasonId: 'api/v0/all/seasonId', // + :seasonId
        setGameNote: 'api/v0/game/note' // + not:string + game: object
      },
      greeting: 'Welcome to Football Stats'
};



