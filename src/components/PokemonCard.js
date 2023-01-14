import React,{useState} from "react";
import { Card } from "semantic-ui-react";
import { useEffect } from "react";

function PokemonCard({poke}) {
 const [showFront, setShowFront] = useState(false)
  const handleClick = () =>{
    setShowFront(!showFront)

  }
console.log(poke)
  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img alt="oh no!" src= {showFront ? poke.sprites.back : poke.sprites.front }  />
        </div>
        <div className="content">
          <div className="header">{poke.name}E</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
