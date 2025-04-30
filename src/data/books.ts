import book1 from "../assets/covers/ella.png";
import book2 from "../assets/covers/leo.png";


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
    theme?: {
      backgroundColor: string;
      headerColor: string;
      sightWordColor: string;
      buttonColor: string;
    };
  }
  
  export const books: Book[] = [
    {
      id: "adventure-1",
      title: "Ella and the Dragon of Bright Mountain",
      coverImage: book1,
      theme: {
        backgroundColor: "#fff7f0",
        headerColor: "#8B5E83",
        sightWordColor: "#DCE4F2",
        buttonColor: "#AAC8A7"
      },
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
She takes one last look at the garden.  
The wind blows gently through the trees.  
Her heart beats fast with joy.  
She feels like a real explorer now.
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
A leaf floats past her nose.  
She giggles and catches it.  
A deer peeks out from behind a tree.  
Ella whispers, "Hello, friend."
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
A fish jumps high in the water.  
She gasps and claps her hands.  
The wind rustles the tall grass.  
She tucks the map back into her pack.
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
The wind howls past the rocks.  
A pebble rolls near her foot.  
She takes a deep breath.  
Her hand shakes just a little.
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
Bright's scales shine like gold.  
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
They pass over hills and trees.  
Birds fly beside them.  
Ella waves at the world below.  
Her scarf flutters behind her.
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
The wind sings in Ella's ears.  
Bright's wings beat strong and smooth.  
Ella laughs and claps her hands.  
Bright roars a happy roar.  
The sun sets behind the mountains.  
The sky turns pink and orange.  
Bright lands softly by Ella's home.  
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
They played games in the clouds.  
They watched the moon rise high.  
They shared stories and dreams.  
And they always found their way back home.
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
    {
      id: "adventure-2",
      title: "Leo and the Kite That Learned to Fly",
      coverImage: book2, // Add image path later
      theme: {
        backgroundColor: "#e6f7ff",
        headerColor: "#2a7f62",
        sightWordColor: "#c2f0e2",
        buttonColor: "#79b7ff"
      },
      chapters: [
        {
          title: "Chapter 1: The Curious Kite",
          text: `
    Leo finds an old kite in the attic.  
    It is dusty and torn, but bright blue.  
    He asks Mom if he can fix it.  
    She smiles and says yes.  
    Leo gets tape and string.  
    He works with care and glue.  
    The kite looks ready to fly.  
    Leo names it Sky.  
    He takes it outside to test it.  
    The wind is light, but strong.  
    Leo runs fast across the yard.  
    The kite wiggles but stays low.  
    He tries again.  
    The kite lifts a little.  
    Then it dives into the grass.  
    Leo laughs and picks it up.  
    He tries again and again.  
    Each time, the kite flies higher.  
    A bird glides above him.  
    Leo waves at it and smiles.  
    He whispers, "We'll get there, Sky."  
    The clouds drift by slowly.  
    The string feels good in his hands.  
    Leo feels proud of what he fixed.
    `,
          sightWords: [
            "a", "again", "an", "and", "at", "blue", "but", "by", "can", "fly", "good",
            "he", "him", "his", "in", "into", "is", "it", "little", "of", "she", "the",
            "then", "there", "to", "up", "we", "what", "with", "yes"
          ]
        },
        {
          title: "Chapter 2: A New Friend",
          text: `
    Leo goes to the park with his kite.  
    The grass is soft and the trees are tall.  
    Kids run and play in the sun.  
    Leo finds a hill to try again.  
    He runs and lifts the kite high.  
    It flies a little, then falls.  
    A girl nearby watches him.  
    "Need help?" she asks.  
    Her name is May.  
    She has a kite too, red with stars.  
    Leo nods and grins.  
    They work together to untangle the string.  
    May shows Leo how to hold the line.  
    They count to three.  
    The wind picks up.  
    The kites rise into the air.  
    Leo cheers.  
    May laughs.  
    The kites spin and soar.  
    They clap and dance in the breeze.  
    They take turns with each other's kites.  
    Leo says, "This is more fun with you."  
    May nods and smiles.  
    Their kites fly together, like new friends.
    `,
          sightWords: [
            "a", "again", "and", "are", "fly", "has", "he", "help", "him", "his", "how",
            "in", "into", "is", "it", "like", "little", "new", "play", "run", "she", "the",
            "then", "they", "this", "to", "too", "up", "with", "you"
          ]
        },
        {
          title: "Chapter 3: The Windy Hill",
          text: `
    Leo and May return to the park.  
    They bring snacks and their kites.  
    The wind is strong today.  
    They race to the hill.  
    Sky and Star rise fast.  
    The sun shines and clouds drift by.  
    A boy named Max sees them.  
    He asks to join.  
    Leo and May smile.  
    Now three kites dance in the sky.  
    Max has never flown a kite.  
    Leo shows him how.  
    Max laughs as his kite lifts.  
    The friends take turns with each kite.  
    They chase the tails when they fall.  
    They race with the wind.  
    The hill is full of fun and color.  
    Leo teaches Max a trick with the string.  
    May cheers them on.  
    Birds soar nearby.  
    Everyone is laughing.  
    Leo feels happy in the breeze.  
    He looks up and sees Sky shining bright.  
    "This is the best day," he says.
    `,
          sightWords: [
            "a", "and", "as", "boy", "by", "day", "has", "he", "him", "his", "how",
            "in", "is", "now", "of", "on", "the", "them", "they", "this", "to", "up", "with"
          ]
        },
        {
          title: "Chapter 4: Caught in a Storm",
          text: `
    The sky turns dark.  
    A storm is coming.  
    Leo, May, and Max look up.  
    Clouds move fast.  
    Wind howls.  
    "Let's go!" says Max.  
    They run to gather the kites.  
    Sky gets stuck in a tree.  
    Leo climbs to get it.  
    May holds the string.  
    Rain begins to fall.  
    Thunder booms.  
    Leo grabs the kite.  
    His foot slips!  
    May and Max catch him.  
    They laugh in the rain.  
    Wet and muddy, they run home.  
    At May's house, they dry off.  
    Mom brings warm towels.  
    They sip cocoa and smile.  
    Sky is safe.  
    "That was wild," says Max.  
    "We did it!" says May.  
    Leo nods and feels brave.
    `,
          sightWords: [
            "a", "and", "at", "did", "go", "him", "his", "in", "is", "it", "look", "run",
            "that", "the", "they", "to", "up", "was", "we"
          ]
        },
        {
          title: "Chapter 5: Sharing the Sky",
          text: `
    The next day, the sky is clear.  
    The friends meet again.  
    They each bring their kites.  
    Leo brings extra string.  
    May brings paint.  
    Max brings ribbon.  
    "Let's make one big kite!" says May.  
    They all agree.  
    They work together to build it.  
    They call it Hope.  
    Hope is blue, red, and gold.  
    It has stars and a long tail.  
    They take it to the hill.  
    The kite is big and wide.  
    They run together.  
    The kite lifts high!  
    It soars higher than any before.  
    People cheer from the park.  
    Hope shines in the sky.  
    Leo feels happy inside.  
    They take turns flying Hope.  
    The kite pulls strong and steady.  
    Even little kids try it.  
    Everyone shares the sky.
    `,
          sightWords: [
            "a", "again", "all", "and", "big", "blue", "day", "from", "has", "in", "is",
            "it", "little", "make", "one", "run", "the", "they", "to"
          ]
        },
        {
          title: "Chapter 6: Back Home Again",
          text: `
    It is time to go back to school.  
    The kites stay in their homes.  
    Leo misses the hill.  
    He draws Sky in his notebook.  
    May draws Star.  
    Max writes about Hope.  
    They share their stories in class.  
    The teacher smiles.  
    "Great teamwork," she says.  
    Leo feels proud.  
    They hang their kite drawings on the wall.  
    Friends ask to join next time.  
    Leo nods.  
    "Kites bring people together," he says.  
    On the weekend, they go to the park.  
    The wind blows gently.  
    Sky and Star fly again.  
    Max runs with Hope.  
    New friends come too.  
    The sky fills with color.  
    Leo looks up.  
    His heart feels full.  
    The kite string is strong.  
    So is their friendship.
    `,
          sightWords: [
            "about", "again", "and", "come", "fly", "go", "he", "his", "in", "is", "it", "new",
            "on", "she", "so", "the", "they", "to", "too", "up", "with"
          ]
        }
      ]
    }
    
    
  ];
  