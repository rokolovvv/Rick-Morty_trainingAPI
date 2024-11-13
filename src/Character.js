import React, { useState } from 'react';
import Modal from './Modal';

function Character({ character }) {
  const [showModal, setShowModal] = useState(false);

  const characterFacts = {
    "Rick Sanchez": "Rick is a genius scientist who often engages in multiverse adventures. He is known for his sharp intellect and occasional nihilism.",
    "Morty Smith": "Morty is a naive but good-hearted teenager who follows Rick on his dangerous escapades.",
    "Summer Smith": "Summer, Morty's older sister, often feels overshadowed by Rick and Morty's adventures and strives to be part of them.",
    "Beth Smith": "Beth is a talented veterinary surgeon who struggles with the complexities of her relationship with Rick, her father.",
    "Jerry Smith": "Jerry, often ridiculed by Rick, has a strained marriage with Beth and often finds himself questioning his worth.",
    "Abadango Cluster Princess": "The princess of the Abadango Cluster, known for her alien royalty status and political influence.",
    "Abradolf Lincler": "A bizarre fusion of Abraham Lincoln and Adolf Hitler, created by Rick in an attempt to combine good and evil.",
    "Adjudicator Rick": "A member of the Council of Ricks, known for his unwavering commitment to Rick law.",
    "Agency Director": "A director in the Galactic Federation, determined to hunt down and capture Rick Sanchez.",
    "Alan Rails": "A superhero with the power to summon ghost trains, once a part of the Vindicators superhero team.",
    "Albert Einstein": "A genius physicist from Earth C-137, though his real-life counterpart famously discovered the theory of relativity.",
    "Alexander": "An unnamed background character who appears in a scene with Einstein.",
    "Alien Googah": "A strange, incomprehensible alien character of unknown origins.",
    "Alien Morty": "An alien version of Morty from a parallel universe, reflecting the multiverse concept.",
    "Alien Rick": "An alien version of Rick, demonstrating that even non-humans can embody Rick's essence.",
    "Amish Cyborg": "A cyborg with Amish beliefs, combining technology with traditional simplicity.",
    "Annie": "A teenager who Rick and Morty meet inside a human body; she’s passionate and curious.",
    "Antenna Morty": "A Morty with antennas on his head, showing the genetic diversity across Morty variants.",
    "Antenna Rick": "A Rick with antennas, another unique version from the Council of Ricks.",
    "Ants in my Eyes Johnson": "A salesman with ants in his eyes and no feeling in his body, making salesmanship very challenging.",
};


  const showFact = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="character" onClick={showFact}>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Origin: {character.origin.name}</p>
      </div>
      <Modal
        show={showModal}
        onClose={closeModal}
        title={character.name}
        content={characterFacts[character.name] || "No fact available for this character."}
      />
    </>
  );
}

export default Character;
