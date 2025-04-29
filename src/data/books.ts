export interface Chapter {
    title: string;
    text: string;
    sightWords: string[];
  }
  
  export interface Book {
    id: string;
    title: string;
    coverImage: string;
    chapters: Chapter[];
  }
  
  export const books: Book[] = [
    {
      id: "adventure-1",
      title: "Ella and the Dragon of Bright Mountain",
      coverImage: "",
      chapters: [
        {
          title: "Chapter 1: A Map in the Garden",
          text: `
  Ella can run fast.  
  She likes to play at the big tree.  
  One day, she sees something in the dirt.  
  It is shiny and small.  
  Ella digs and digs.  
  She finds a map!  
  The map has a red X on it.  
  Ella is very happy.  
  She runs home to show Mom and Dad.  
  "Look what I found!" she says.  
  Mom smiles and hugs Ella.  
  Dad looks at the map.  
  "You can go see!" he says.  
  Ella gets a bag.  
  She puts in food and water.  
  She takes her hat and a soft scarf.  
  "Be brave!" says Mom.  
  Ella waves and goes to the trail.  
  The sun is big.  
  The map is safe in her hand.
  `,
          sightWords: [
            "can", "run", "likes", "play", "big", "day", "sees", "in", "it", "small",
            "finds", "has", "red", "on", "is", "happy", "home", "look", "found", "says",
            "smiles", "hugs", "go", "gets", "puts", "takes", "be", "waves", "goes", "sun"
          ],
        },
        {
          title: "Chapter 2: Into the Forest",
          text: `
  Ella walks into the woods.  
  The trees are tall and green.  
  She can hear birds sing.  
  The trail is soft and brown.  
  Ella looks up at the sky.  
  The clouds move slow.  
  She jumps over a big rock.  
  She sees a rabbit run.  
  Ella laughs and claps her hands.  
  A little creek runs across the path.  
  Ella finds a log to cross.  
  The log is wet but strong.  
  She steps carefully.  
  Splash! Her foot gets a little wet.  
  She smiles and keeps going.  
  The woods are quiet now.  
  She sees a small hill ahead.  
  The map says to go up the hill.  
  Ella climbs up with her strong legs.  
  She waves to the sky.
  `,
          sightWords: [
            "walks", "into", "trees", "are", "hear", "birds", "trail", "soft", "brown", "looks",
            "sky", "clouds", "move", "jumps", "sees", "run", "laughs", "claps", "little", "finds",
            "cross", "log", "wet", "strong", "steps", "carefully", "smiles", "keeps", "quiet", "hill",
            "climbs", "up", "waves"
          ],
        },
        {
          title: "Chapter 3: The Rushing River",
          text: `
  The hill leads to a river.  
  The water runs fast and loud.  
  Ella stops to think.  
  She looks for a safe way over.  
  She sees big rocks in the river.  
  They look like a path.  
  Ella steps on the first rock.  
  It wobbles but holds.  
  She steps to the next rock.  
  Splash! Water sprays her shoes.  
  Ella laughs and hops fast.  
  One more jump!  
  She lands safe on the other side.  
  Ella cheers and waves at the river.  
  She sits and eats a snack.  
  The sun feels warm on her face.  
  She looks at the map.  
  Bright Mountain is close now!  
  Ella stands up tall.  
  She feels brave and ready.
  `,
          sightWords: [
            "hill", "leads", "river", "water", "runs", "fast", "loud", "stops", "think", "safe",
            "over", "sees", "rocks", "path", "steps", "first", "wobbles", "holds", "next", "splash",
            "shoes", "laughs", "hops", "safe", "lands", "cheers", "waves", "eats", "snack", "sun",
            "feels", "close", "stands", "ready"
          ],
        },
        {
          title: "Chapter 4: Up the Mountain",
          text: `
  Ella walks up the rocky trail.  
  The ground is rough and steep.  
  Small stones slip under her shoes.  
  She goes slow and steady.  
  The air gets cool.  
  Clouds hang low over the trail.  
  Ella puts on her scarf.  
  The map shows a cave near the top.  
  She feels excited and a little scared.  
  A bird flies by and sings.  
  Ella sings too and smiles.  
  She sees the cave up ahead!  
  It has soft light inside.  
  Ella tiptoes closer.  
  She hears a low rumble.  
  Is it the wind?  
  Is it something else?  
  Ella holds her scarf tight.  
  She peeks inside the glowing cave.  
  Something big is waiting inside!
  `,
          sightWords: [
            "walks", "rocky", "trail", "ground", "rough", "steep", "small", "stones", "under", "shoes",
            "slow", "steady", "air", "cool", "clouds", "hang", "low", "puts", "shows", "cave",
            "top", "excited", "little", "scared", "flies", "sings", "smiles", "sees", "ahead", "soft",
            "inside", "tiptoes", "closer", "hears", "wind", "holds", "peeks", "glowing", "waiting"
          ],
        },
        {
          title: "Chapter 5: Meeting the Dragon",
          text: `
  Ella sees a dragon in the cave!  
  The dragon is big, but its eyes are kind.  
  Ella wants to run, but she stays.  
  The dragon smiles and bows its head.  
  "Hello," says the dragon.  
  Ella blinks and smiles back.  
  "I am Ella," she says.  
  "My name is Bright," says the dragon.  
  Ella feels brave again.  
  Bright’s scales shine like gold.  
  The cave feels warm and safe.  
  Bright laughs a deep laugh.  
  "Are you lost?" Bright asks.  
  "Yes," says Ella.  
  Bright nods and stretches his big wings.  
  "I can help you," he says.  
  Ella feels happy and safe.  
  Bright lifts her onto his back.  
  The dragon and girl fly into the sky!  
  The clouds dance all around them.
  `,
          sightWords: [
            "sees", "dragon", "cave", "big", "eyes", "kind", "wants", "run", "stays", "smiles",
            "bows", "hello", "blinks", "name", "bright", "feels", "again", "scales", "shine",
            "gold", "warm", "laughs", "deep", "lost", "asks", "yes", "help", "happy", "lifts", "fly",
            "sky", "clouds", "dance"
          ],
        },
        {
          title: "Chapter 6: Best Friends Forever",
          text: `
  Ella and Bright fly over the hills.  
  They soar high above the trees.  
  The wind sings in Ella’s ears.  
  Bright’s wings beat strong and smooth.  
  Ella laughs and claps her hands.  
  Bright roars a happy roar.  
  The sun sets behind the mountains.  
  The sky turns pink and orange.  
  Bright lands softly by Ella’s home.  
  Ella hugs Bright tight.  
  "You are my best friend," Ella says.  
  "And you are mine," Bright says.  
  Mom and Dad run out to hug Ella.  
  They smile at the dragon too!  
  Bright bows low and smiles.  
  From that day, Ella and Bright had many adventures.  
  They flew to far places.  
  They sang songs to the stars.  
  They laughed under the bright blue sky.  
  They were friends forever and ever.
  `,
          sightWords: [
            "fly", "hills", "soar", "high", "trees", "wind", "sings", "ears", "wings", "beat",
            "strong", "smooth", "laughs", "claps", "roars", "happy", "sun", "sets", "mountains",
            "sky", "pink", "orange", "lands", "home", "hugs", "best", "friend", "mine",
            "smile", "adventures", "flew", "places", "sang", "stars", "laughed", "bright", "blue", "forever"
          ],
        },
      ],
    },
  ];
  