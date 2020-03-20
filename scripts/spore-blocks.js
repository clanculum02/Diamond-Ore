const slowerregen = 1 / 35;
const slowregen = 1 / 25;
//print("testing 123");

const darkSporeBlock = extendContent(Wall, "dark-spore-block", {
    update(tile){
        //when health is lower than max health
        if ( (tile.entity.health() < tile.entity.maxHealth()) && (Mathf.chance(slowerregen)) ) {

                   tile.entity.health += 10;
				   /* if (tile.entity.health() > tile.entity.maxHealth()){
					   tile.entity.health() = tile.entity.maxHealth();
				   } */
					   
                   
            }
      }
});
const darkSporeBlockLarge = extendContent(Wall, "dark-spore-block-large", {
    update(tile){
        //when health is lower than max health
        if ( (tile.entity.health() < tile.entity.maxHealth()) && (Mathf.chance(slowregen)) ) {

                   tile.entity.health += 20;
				   /* if (tile.entity.health() > tile.entity.maxHealth()){
					   tile.entity.health() = tile.entity.maxHealth();
				   } */
					   
                   
            }
      }
});