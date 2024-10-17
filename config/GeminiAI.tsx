const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        { text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut\nStyle: Story Of boy and Magic School , give me 5 chapter, With detailed image text prompt for each Of\nchapter and image prompt for story cover book with story name Zall in JSON field format" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"story_name\": \"Zall: The Boy Who Found Magic\",\n  \"cover_image\": {\n    \"description\": \"A paper cut illustration of Zall, a young boy with wide, curious eyes, standing in front of a shimmering, colorful portal. The portal is made of swirling paper cut shapes, and a mischievous, glowing owl peeks out from behind it. In the background, a castle made of paper cut bricks with pointed towers and colorful flags is visible.\",\n    \"style\": \"paper cut, whimsical, bright colors, magical\"\n  },\n  \"chapters\": [\n    {\n      \"chapter_title\": \"Zall and the Dusty Book\",\n      \"description\": \"Zall, a curious boy with a mop of brown hair, is exploring his attic. Paper cut dust motes dance in the sunbeams that stream through a dusty window. Zall stumbles upon a leather-bound book with a tarnished silver lock. The book is surrounded by old toys, a paper cut rocking horse, and a paper cut teddy bear.\",\n      \"image_prompt\": \"Paper cut illustration of a boy named Zall, with brown hair and big eyes, rummaging through a dusty attic. He holds a leather-bound book with a tarnished silver lock. The attic is filled with paper cut objects, like a rocking horse, a teddy bear, and old toys. Sunbeams stream through a dusty window, creating light beams and dust particles.\"\n    },\n    {\n      \"chapter_title\": \"The Whispering Owl\",\n      \"description\": \"Zall opens the book, revealing a paper cut world of swirling colors and shimmering light. An owl with glowing eyes appears on the page. The owl winks at Zall and whispers, \\\"Welcome to the Magic School.\\\" The owl is surrounded by paper cut butterflies and flowers, creating a magical atmosphere.\",\n      \"image_prompt\": \"Paper cut illustration of Zall opening the dusty book. Inside, a swirling vortex of colors and shimmering light emerges, revealing a magical world. A wise, paper cut owl with glowing eyes perches on a branch, smiling and whispering to Zall. Butterflies and flowers made of paper surround the owl, creating a sense of wonder and magic.\"\n    },\n    {\n      \"chapter_title\": \"The Enchanted School Bus\",\n      \"description\": \"Zall steps into the book, shrinking down to the size of a paper cut doll. He finds himself standing on a platform, waiting for the Magic School Bus. The bus is a bright yellow, paper cut vehicle with a twinkling star on the roof and a giant, smiling paper cut sun on the front.  A paper cut cat with a top hat and a paper cut dog with a bow tie wait patiently with Zall.\",\n      \"image_prompt\": \"Paper cut illustration of Zall, shrunk to the size of a paper cut doll, standing on a platform. A bright yellow school bus with a twinkling star on the roof and a giant, smiling sun on the front approaches. Paper cut animals, a cat with a top hat and a dog with a bow tie, are also waiting on the platform. The entire scene is filled with bright, playful colors.\"\n    },\n    {\n      \"chapter_title\": \"Lessons of Magic\",\n      \"description\": \"Inside the Magic School, Zall meets other paper cut students. They learn about spells, potions, and flying on paper cut broomsticks. The classroom is filled with paper cut books, a blackboard with colorful chalk drawings, and bubbling paper cut potions in beakers. Zall is learning to make a paper cut flower bloom with a magic word.\",\n      \"image_prompt\": \"Paper cut illustration of Zall and other paper cut children in a magical classroom. They are learning about spells, potions, and flying on broomsticks. There are paper cut books, a blackboard with colorful chalk drawings, and bubbling potions in beakers. Zall is focusing on making a paper cut flower bloom with a magic word, his eyes wide with excitement.\"\n    },\n    {\n      \"chapter_title\": \"Zall's Magic\",\n      \"description\": \"After a day of learning, Zall discovers he has his own special magic. He can make paper cut clouds change shape and create paper cut rainbows in the sky. The owl smiles proudly at Zall, and Zall realizes that magic is not just about spells, but about using your imagination to create wonders.  The final scene shows Zall flying on a paper cut cloud with the owl, looking out at a paper cut world full of possibilities.\",\n      \"image_prompt\": \"Paper cut illustration of Zall, now a confident young wizard, flying on a paper cut cloud with the wise owl. He is creating paper cut rainbows and changing the shapes of clouds with his own magic. The world below is filled with vibrant colors and paper cut creatures. The owl smiles at Zall, and Zall's eyes shine with wonder and joy.\"\n    }\n  ]\n}\n```\n\nThis JSON format provides a structured way to organize the story elements and image prompts for each chapter and the cover image. You can easily adapt this format for other stories and ideas. Remember to use these prompts to create beautiful and engaging paper cut illustrations for your children's book. \n" },
      ],
    },
  ],
});