import React from 'react'

var options = [
  {
    "zodiac":"Rat",
    "chinese":"鼠",
    "pinyin":"shǔ",
    "description":"Though people don't consider the rat to be adorable, and it even makes its way into derogatory languages, it ranks first on the Chinese zodiac. It has attributes of an animal with spirit, wit, alertness, delicacy, flexibility and vitality.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/rat-2015.jpg",
    "best_match":"Rat, Dragon, Monkey"
  },
  {
    "zodiac":"Ox",
    "chinese":"牛",
    "pinyin":"niú",
    "description":"Ranked as the second zodiac, the ox is huge. In life, people often used it to indicate something big in size or large in number. It is persistent, simple, honest, and straightforward. Fractious people are said to have an 'oxen temper'.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/ox-year.jpg",
    "best_match":"Ox, Snake, Rooster"
  },
  {
    "zodiac":"Tiger",
    "chinese":"虎",
    "pinyin":"hǔ ",
    "description":"Tigers, considered to be brave, cruel, forceful and terrifying, are the symbol of power and lordliness. In ancient times, people usually compared emperors or grandees with the tiger.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/2015-tiger.jpg",
    "best_match":"Tiger, Dog, Horse"
  },
  {
    "zodiac":"Rabbit",
    "chinese":"兔",
    "pinyin":"tù",
    "description":"The rabbit has represented hope for a long time, by Chinese people. It is tender and lovely. The moon goddess Chang'e in Chinese legend had a rabbit as her pet, which stimulated the thought that only this creature was amiable enough to match her noble beauty.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/rabbit-2015.jpg",
    "best_match":"Rabbit, Pig, Goat"
  },
  {
    "zodiac":"Dragon",
    "chinese":"龙",
    "pinyin":"lóng",
    "description":"The dragon enjoys a very high reputation in Chinese culture. It is the token of authority, dignity, honor, success, luck, and capacity. In ancient China, this creature was thought to speed across the sky with divine power.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/dragon-2015.jpg",
    "best_match":"Dragon, Monkey, Rat"
  },
  {
    "zodiac":"Snake",
    "chinese":"蛇",
    "pinyin":"shé",
    "description":"In the Chinese zodiac, the Snake is listed after the Dragon, but its place and its significance as a symbol of worship is far less than that of the Dragon. it carries the meanings of malevolence, cattiness and mystery, as well as acumen, divination and the ability to distinguish herbs.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/year-snake.jpg",
    "best_match":"Snake, Rooster, Ox"
  },
  {
    "zodiac":"Horse",
    "chinese":"马",
    "pinyin":"mǎ",
    "description":"The spirit of the horse is recognized to be the Chinese people's ethos – making unremitting efforts to improve themselves. It is energetic, bright, warm-hearted, intelligent and able. Ancient people liked to designate an able person as 'Qianli Ma', a horse that covers a thousand li a day.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/horse-2015.jpg",
    "best_match":"Horse, Dog, Tiger"
  },
  {
    "zodiac":"Goat",
    "chinese":"羊",
    "pinyin":"yáng",
    "description":"The goat (or sheep or ram) is among the animals that people like most. It is gentle and calm. Since ancient times, people have learned to use its fleece to make writing brushes and skin to keep warm.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/goat-year.jpg",
    "best_match":"Goat, Pig, Rabbit"
  },
  {
    "zodiac":"Monkey",
    "chinese":"猴",
    "pinyin":"hóu",
    "description":"The monkey is a clever animal. It is usually compare to a smart person. During the Spring and Autumn Period (770 BC – 476 BC), the dignified official title of marquis with the pronunciation 'Hou', was the same as the monkey's.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/year-monkey.jpg",
    "best_match":"Monkey, Dragon, Rat"
  },
  {
    "zodiac":"Rooster",
    "chinese":"鸡",
    "pinyin":"jī",
    "description":"The rooster is almost the epitome of fidelity and punctuality. For ancestors who had no alarm clocks, the rooster's crowing was significant, as it could awaken people to get up and start to work.",
    "image":"https://images.chinahighlights.com/allpicture/2015/04/f9463344d3ed41479d28dcd7.jpg",
    "best_match":"Rooster, Snake, Ox"
  },
  {
    "zodiac":"Dog",
    "chinese":"狗",
    "pinyin":"gǒu",
    "description":"The dog is man's friend who can understand the human's spirit and obey its master, whether he is wealthy or not. The Chinese regard it as an auspicious animal. If a dog happens to come to a house, usually the host will be very glad to adopt it, for it symbolizes the coming of fortune.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/dog-2015.jpg",
    "best_match":"Dog, Tiger, Horse"
  },
  {
    "zodiac":"Pig",
    "chinese":"猪",
    "pinyin":"zhū",
    "description":"Pig is not thought to be smart as dog. It likes sleeping and eating and becomes fat. Thus it usually features laziness and clumsiness. On the positive side, it behaves itself, has no calculation to harm others, and can bring affluence to people. Consequently, pigs were once regarded as wealth.",
    "image":"https://data.chinahighlights.com/image/travelguide/culture/zodiac/pig-2015.jpg",
    "best_match":"Pig, Rabbit, Goat"
  }
]
let checkChineseZodiac = (year) => {
  if(year %12===0) { return options[8];} 
  else if (year %12===1) {return options[9];}
  else if (year %12===2) {return options[10];}
  else if (year %12===3) {return options[11];}
  else if (year %12===4) {return options[0];}
  else if (year %12===5) {return options[1];}
  else if (year %12===6) {return options[2];}
  else if (year %12===7) {return options[3];}
  else if (year %12===8) {return options[4];}
  else if (year %12===9) {return options[5];}
  else if (year %12===10) {return options[6];}
  else { return options[7]; }
};

export default checkChineseZodiac