const storyContent = {
  "1": {
    "text": "You wake up on a strange island with no memory of how you got there. What do you do?",
    "img": "island.png",
    "choices": [
      {"text": "Explore the forest", "dest": "2"},
      {"text": "Walk along the beach", "dest": "3"},
      
    ]
  },
  "2": {
    "text": "In the forest, you find a mysterious locked chest. Do you try to open it?",
    "img": "chest.png",
    "choices": [
      {"text": "Look for a key", "dest": "4"},
      {"text": "Leave it and continue exploring", "dest": "5"}
    ]
  },
  "3": {
    "text": "On the beach, you spot a small boat. What do you do?",
    "img": "smallboat.png",
    "choices": [
      {"text": "Signal for help", "dest": "6"},
      {"text": "Investigate the boat", "dest": "7"}
    ]
  },
  "4": {
    "text": "You find a key near an old statue. Do you go back to open the chest?",
    "img": "oldstatue.png",
    "choices": [
      {"text": "Open the chest", "dest": "8"},
      {"text": "Ignore it and head to the beach", "dest": "3"}
    ]
  },
  "5": {
    "text": "Deeper in the forest, you find a hidden waterfall. Do you explore behind it?",
    "img": "waterfall.png",
    "choices": [
      {"text": "Explore behind the waterfall", "dest": "9"},
      {"text": "Return to the beach", "dest": "3"}
    ]
  },
  "6": {
    "text": "No one sees your signal. You notice a path leading inland. Do you take it?",
    "img": "path.png",
    "choices": [
      {"text": "Follow the path", "dest": "2"},
      {"text": "Stay at the beach", "dest": "10"}
    ]
  },
  "7": {
    "text": "The boat is damaged but has a map. Do you follow it?",
    "img": "damagedboat.png",
    "choices": [
      {"text": "Follow the map", "dest": "5"},
      {"text": "Explore the opposite direction", "dest": "2"}
    ]
  },
  "8": {
    "text": "The chest contains a map to a hidden part of the island. Do you follow it?",
    "img": "path.png",
    "choices": [
      {"text": "Follow the map", "dest": "11"},
      {"text": "Ignore the map", "dest": "3"}
    ]
  },
  "9": {
    "text": "Behind the waterfall, you find a cave with ancient artifacts. What do you do?",
    "img": "cave.png",
    "choices": [
      {"text": "Study the artifacts", "dest": "12"},
      {"text": "Leave the cave", "dest": "5"}
    ]
  },
  "10": {
    "text": "As you wait, a rescue helicopter appears. Do you signal it?",
    "img": "helicopter",
    "choices": [
      {"text": "Signal the helicopter", "dest": "13"},
      {"text": "Hide from the helicopter", "dest": "6"}
    ]
  },
  "11": {
    "text": "The map leads you to a ruined temple. Inside, you find a treasure. Do you take it?",
    "img": "temple.png",
    "choices": [
      {"text": "Take the treasure", "dest": "14"},
      {"text": "Leave the temple", "dest": "2"}
    ]
  },
  "12": {
    "text": "You uncover the island's secrets and find a way to call for help. You are rescued.",
    "img": "call.png",
    "choices": []
    // Ending
  },
  "13": {
    "text": "The helicopter rescues you. You leave the island with many unanswered questions.",
    "img": "rescue.png",
    "choices": []
    // Ending
  },
  "14": {
    "text": "Taking the treasure triggers a trap, but you escape the island on a hidden boat.",
    "img": "trap.png",
    "choices": []
    // Ending
  }
};

function displayStoryPart(partId) {
  const part = storyContent[partId];

  // Clear previous content
  const storyContainer = document.getElementById('story');
  storyContainer.innerHTML = '';

  // Add story text
  const storyText = document.createElement('p');
  storyText.innerText = part.text;
  storyContainer.appendChild(storyText);

  // Add image if it exists
  if (part.img) {
    const storyImage = document.createElement('img');
    storyImage.src = part.img;
    storyImage.alt = "Story image";
    storyContainer.appendChild(storyImage);
  }

  // Add choices
  const choicesContainer = document.getElementById('choices');
  choicesContainer.innerHTML = '';
  part.choices.forEach(choice => {
    const button = document.createElement('button');
    button.innerText = choice.text;
    button.onclick = () => handleChoice(choice.dest);
    choicesContainer.appendChild(button);
  });
}

function handleChoice(choiceDest) {
  displayStoryPart(choiceDest);
}

// Start the story
displayStoryPart('1');
