import React, {useState}from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {

const [showBack,setShowBack] = useState(false)
const handleSprites = () => {
 setShowBack(!showBack)
}
  return (
    <Card>
      <div onClick={handleSprites}>
        <div className="image">
          <img alt="oh no!" src= {showBack ? poke.sprites.back : poke.sprites.front}/>
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
             {poke.hp}hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
