import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = () => {
  return (
    <div className="punkList">
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 8 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
      />
      <CollectionCard
        id={1}
        name={"Cyber Punk"}
        traits={[{ value: 13 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeiczq5i7rjz5ddp322uz4bfvle5753n56xrnirefosues3lk5getwu"
      />
      <CollectionCard
        id={2}
        name={"Cigar Hat Punk"}
        traits={[{ value: 9 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
      />
      <CollectionCard
        id={3}
        name={"Captain America Punk"}
        traits={[{ value: 17 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeichmigzcebanai4n7jjj2xsc2uwhe5dnluvngpo5legnezdbariru"
      />
      <CollectionCard
        id={4}
        name={"Pirate King Punk"}
        traits={[{ value: 37 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeibt2tj24qikiqiyw5a7lsp26qg4ryi3yyimh2z3d7m52r4ezcrhgi"
      />
      <CollectionCard
        id={5}
        name={"Green Tennis Hulk Punk"}
        traits={[{ value: 18 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeiedqim46toomijrnua3xp45yh7jhas5cwf3k276yf3epyulrrrhey"
      />
    </div>
  );
};

export default PunkList;
