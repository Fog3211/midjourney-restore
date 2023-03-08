let bannerTexts: string[] = [];
let bannerTextElements: SVGTextElement[] = [];
let bannerTextIndex = 0;
let bannerTextOffset = 0;
let bannerFontSize = 0;

function interpolate(start: number, end: number, alpha: number): number {
  return start * (1 - alpha) + end * alpha;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function getWelcomeMessages(): any {
  const defaultMsg: string = ` __  __ _    _  _
|  /  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _
| |/| | / _| || / _  || | '_| ' / -_) || |
|_|  |_|___,_|/ ___/_,_|_| |_||____|_, |
             |__/                       |__/`;
  const alternativeMsg: string = ` __  __ _    _  _
|  \\/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _
| |\\/| | / _| || / _ \\ || | '_| ' \\/ -_) || |
|_|  |_|_\\__,_|/ \\___/\\_,_|_| |_||_\\___|\\_, |
             |__/                       |__/`;
  const messages: string[] = [defaultMsg]; // set default message
  if (alternativeMsg) { // if there is an alternative message, add it to the array
    messages.push(alternativeMsg);
  }

  // use Object.freeze() to protect the immutability of the return value
  return Object.freeze(Object.defineProperties(messages, {
    raw: { value: Object.freeze([...messages]) }
  }));
}

const bannerLogoTexts =
  "/imagine close up, modern cowboy on a ranch, his eyes are filled with the cosmos, realistic\n    /imagine city areal perspective. streets glowing, concrete architecture, green roofs, people on the streets\n    /imagine the beginning of the universe by Monet\n    /imagine looking up a never ending staircase by Jean Giraud Moebius\n    /imagine abstract, cycle, organic, powerful, behance\n    /imagine gorgeous bouquet still life painting in the style of Odilon Redon and Henri Fantin-Latour\n    /imagine a warm sunny beach near an ocean full of pikachu's\n    /imagine 3d render of gold rings, geometric, circles, triangles, psychedelic, infinity pool, eccojams, vaporwave, oneohtrix point never, golden hour, glossy reflections and light rays, portals into other worlds\n    /imagine intricate jungle landscape by albrecht durer, henri rousseau, pieter brueghel the elder, mattisse\n    /imagine cyberpunk cat rabbit hacker, googles, anime style\n    /imagine banana with glasses dancing, ghibli style\n    /imagine corgis dancing in vibrant victorian dresses, Rococo style, in a large luxurious ballroom\n    /imagine A wise/meditating/fantasy wizard sitting in complex/intricate meadow with mountains/fields, painted by Japanese artist Koji Miromoto using detailed/hyperfine/lineart/print black paper ink techniques and exotic glowy psychedelic ink, autochrome colors/style. Stylized/detailed/textured, gradients, graduated colors, fine line details.\n    /imagine 1960s illustration of the beginning of life on Earth\n    /imagine commodore 1351 mouse. 80s sythwave style. hyper realistic\n    /imagine map of steampunk desert\n    /imagine francisco goya scene oil painting watercolor sci-fi science fiction cyberpunk time machine\n    /imagine Portrait of a cyber glitch sorceress causing video corruption with her magic\n    /imagine a realistic ancient temple, crumbling stone, vines, extreme detail, statues, octane render, volumetric fog, realistic lighting, reflections\n    /imagine giant red crystals in a desert with two suns\n    /imagine Robin Williams in the style of John Allison\n    /imagine standing in front of a castle\n    /imagine a professional photorealistic Portrait of an Astronaut by Peter Mohrbacher,Shaun Tan and Seb McKinnon,realistic eyes,realistic hair,,Beautiful Hit Tech costume and Helmet details,Beautiful dramatic dark moody lighting,Cinematographic Atmosphere,photorealism glossy magazine painting,Octane Render,Deep Color,8k Resolution,High Details,Flickr,DSLR,CGsociety,Artstation\n    /imagine Matter condensed from energy, life built upon matter, consciousness upon life\n    /imagine hyperreal swirling watercolors trapped in a soap bubble, 4k render\n    /imagine beautiful painting of clouds with sunrise, by john martin, Trending on artstation, pastel aesthetic\n    /imagine modern futuristic lampshade with art nouveau inspiration\n    /imagine photo shot on Leica IIIf with 50mm f/2 Summar; 1/50 sec; f/4\n    /imagine sharp alphabet typography by Walter Gropius\n    /imagine four dogs playing poker in a crowded room, by Malcolm Liepke and Lovis Corinth, oilpainting\n    /imagine invitation made with old paper written with cursive font pyrographic words in the center | red wax seal above in the top-left corner, cinematic light, artstation\n    /imagine aisle view of the festival street market in AlUla, many booths, seating areas, natural materials, cinematic shot\n    /imagine japanese temple, sakura, detailed oil painting, by Mateusz Urbanowicz\n    /imagine a stegosaurus drawn by John Singer Sargent\n    /imagine a mysterious forest with many fireflies, trees with large roots covered in moss, green vegetation, Studio Ghibli animation style, Japanese animation film background,\n    /imagine the universe in our ancestors eyes\n    /imagine The inside of a gothic cathedral that looks like a tropical alien utopian jungle rainforest, dramatic cinematic lighting\n    /imagine A hero stands alone, artstation, highly detailed, cinematic\n    /imagine symmetric texture repetition on a tree on a beautiful mountain landscape\n    /imagine midcentury luchador mask, risograph\n    /imagine ultra detailed line drawing, black and white and red, pen and ink, high tech cyberpunk geisha with headphones and sunglasses and VR goggles in style of Shohei Otomo\n    /imagine interior of master bedroom in victorian mansion, window, dan mindel cinematography, 35mm, movie scene, pitch black, realistic lighting, perspective shots, moody atmosphere, light coming from outside, HDRI\n    /imagine the alien robot queen holding a party at the dome castle in HQ Cloud City during a technicolor sunset\n    /imagine corporate memphis style, mural, pride month, white background, vector, characters waving pride flags, celebration\n    /imagine abstract painting of coral reef\n    /imagine a calico cat taking a nap on a kiwi\n    /imagine Dreamy landscape depiction inspired by the works of Katsushika Hokusai, trending on artstation\n    /imagine garden bridge over swan pond monet garden lillies and hanging trees art\n    /imagine green dragon roosting above its lair in the ruins of a fantasy medieval city\n    /imagine rainwater flowing through a complex system of ancient stone pipes and a gargoyle watching\n    /imagine butterflies flit in a sunlit field. Hiroshige Japanese woodblock print.\n    /imagine an illustration of a wooden magic wand with an aura of void around it, stars glitter subtly around it, closeup, fantasy card game art trending on artstation concept art by Jason Chan"
    .split('\n')
    .map(function (text) {
      return text.replace(/\t/g, '    ');
    });

const overlay =
  String.raw(getWelcomeMessages())
    .split('\n')
    .map(function (text) {
      return text.replace(/\t/g, '    ');
    });

function initializeBannerText(): void {
  const bannerElement: SVGElement | null = document.querySelector('#bannerSVGLogo');
  if (!bannerElement) return
  bannerFontSize = Math.round((bannerElement.viewBox.baseVal.width - 10) / 1);

  for (let i = 0; i < bannerTextElements.length; i++) {
    bannerElement?.removeChild(bannerTextElements[i]);
  }

  for (let i = 0; i < 7; i++) {
    bannerTexts[i] = '';
  }

  for (let i = 0; i < overlay.length; i++) {
    const textElement = document.createElementNS(bannerElement?.namespaceURI!, 'text') as SVGTextElement;
    textElement.setAttribute('x', '1');
    textElement.setAttribute('y', String(16 * i));
    textElement.style.fontSize = '16px';
    textElement.style.fontFamily = 'monospace';
    textElement.style.dominantBaseline = 'hanging';
    textElement.style.whiteSpace = 'pre';
    textElement.setAttribute('font-weight', 'bold');
    textElement.setAttribute('fill', 'white');
    bannerElement?.appendChild(textElement)
    bannerTextElements[i] = textElement
  }
}

initializeBannerText()

export const animate = (timestamp: number): void => {
  requestAnimationFrame(animate);

  const timeInSecond: number = timestamp * 0.001;

  const easeInOutSine = (elapsedTime: number): number => {
    if (elapsedTime < 0.5) {
      return (1 - Math.sqrt(1 - Math.pow(2 * elapsedTime, 2))) / 2;
    } else {
      return (Math.sqrt(1 - Math.pow(-2 * elapsedTime + 2, 2)) + 1) / 2;
    }
  };

  const progress: number = easeInOutSine(
    clamp((timeInSecond - 1) * 0.5, 0, 1)
  );

  for (let row = 0; row < bannerTexts.length; row++) {
    let output = '';
    for (
      let col = 1 - (2 * row) / bannerTexts.length, y = 0;
      y < bannerFontSize;
      y++
    ) {
      const x: number = (2 * y) / bannerFontSize - 1;
      const distance: number = Math.sqrt(x * x + col * col);
      const speed: number = (0.1 * timeInSecond) / Math.max(0.1, distance);
      const offsetX: number = Math.sin(speed);
      const offsetY: number = Math.cos(speed);
      const rotatedX: number = x * offsetX - col * offsetY;
      const charX: number = Math.round(((x * offsetY + col * offsetX) / 2) * bannerFontSize);
      const charY: number = Math.round(((rotatedX + 1) / 2) * bannerLogoTexts.length) % bannerLogoTexts.length;
      const char: string =
        charY < 0 || charY >= bannerFontSize || charX < 0 || charX >= bannerTexts.length ? ' ' : bannerLogoTexts[charY][charX] || ' ';

      // 在此处添加任何动画变换，如颜色或字形

      output += char;
    }

    if (
      row > bannerTextOffset &&
      row < bannerTextOffset + overlay.length + 1
    ) {
      const overlayRow: number = row - bannerTextOffset - 1;

      for (let i = 0; i < overlay[0].length; i++) {
        const text: string = overlay[overlayRow][i] || output[i];
        const hasLeft: boolean = ' ' != overlay[overlayRow][i - 1];
        const hasRight: boolean = ' ' != overlay[overlayRow][i + 1];
        if (' ' != text || hasLeft || hasRight) {
          const prevCharCode: number = output.charCodeAt(i);
          const nextCharCode: number = text.charCodeAt(0);
          output = output.substring(0, i) + String.fromCharCode(Math.round(interpolate(prevCharCode, nextCharCode, progress))) + output.substring(i + 1);
          if (1 == progress) {
            output = ' ';
          }
        } else {
          output = output.substring(0, i) + ' ' + output.substring(i + 1);
        }
        if (i == overlay[0].length - 1) {
          bannerTextElements[overlayRow].textContent = output;
          bannerTextElements[overlayRow].setAttribute('fill-opacity', String(progress));
        }
      }
    }
  }
};
