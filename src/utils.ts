const v = Math.round

let c: any[] = []
let d: any[] = []
let f = 0;
let p = 0;
let s = 0

const k = function (e: any, t: any, n: any) {
  return e * (1 - n) + t * n;
}
const j = function (e: any, t: any, n: any) {
  return e < t ? t : e > n ? n : e;
};

function getWelcomeMessages(): any {
  const defaultMsg: string = " __  __ _    _  _                            \n|  /  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |/| | / _| || / _  || | '_| ' / -_) || |\n|_|  |_|___,_|/ ___/_,_|_| |_||____|_, |\n             |__/                       |__/ ";
  const alternativeMsg: string = " __  __ _    _  _                            \n|  \\/  (_)__| |(_)___ _  _ _ _ _ _  ___ _  _ \n| |\\/| | / _| || / _ \\ || | '_| ' \\/ -_) || |\n|_|  |_|_\\__,_|/ \\___/\\_,_|_| |_||_\\___|\\_, |\n             |__/                       |__/ ";
  const messages: Array<string> = [defaultMsg];  // 设置默认消息
  if (alternativeMsg) {   // 如果有可选消息，添加到数组中
    messages.push(alternativeMsg);
  }

  // 使用 Object.freeze() 来保护返回值的不可变性
  return Object.freeze(Object.defineProperties(messages, {
    raw: { value: Object.freeze([...messages]) }
  }));
}

const l =
  "/imagine close up, modern cowboy on a ranch, his eyes are filled with the cosmos, realistic\n    /imagine city areal perspective. streets glowing, concrete architecture, green roofs, people on the streets\n    /imagine the beginning of the universe by Monet\n    /imagine looking up a never ending staircase by Jean Giraud Moebius\n    /imagine abstract, cycle, organic, powerful, behance\n    /imagine gorgeous bouquet still life painting in the style of Odilon Redon and Henri Fantin-Latour\n    /imagine a warm sunny beach near an ocean full of pikachu's\n    /imagine 3d render of gold rings, geometric, circles, triangles, psychedelic, infinity pool, eccojams, vaporwave, oneohtrix point never, golden hour, glossy reflections and light rays, portals into other worlds\n    /imagine intricate jungle landscape by albrecht durer, henri rousseau, pieter brueghel the elder, mattisse\n    /imagine cyberpunk cat rabbit hacker, googles, anime style\n    /imagine banana with glasses dancing, ghibli style\n    /imagine corgis dancing in vibrant victorian dresses, Rococo style, in a large luxurious ballroom\n    /imagine A wise/meditating/fantasy wizard sitting in complex/intricate meadow with mountains/fields, painted by Japanese artist Koji Miromoto using detailed/hyperfine/lineart/print black paper ink techniques and exotic glowy psychedelic ink, autochrome colors/style. Stylized/detailed/textured, gradients, graduated colors, fine line details.\n    /imagine 1960s illustration of the beginning of life on Earth\n    /imagine commodore 1351 mouse. 80s sythwave style. hyper realistic\n    /imagine map of steampunk desert\n    /imagine francisco goya scene oil painting watercolor sci-fi science fiction cyberpunk time machine\n    /imagine Portrait of a cyber glitch sorceress causing video corruption with her magic\n    /imagine a realistic ancient temple, crumbling stone, vines, extreme detail, statues, octane render, volumetric fog, realistic lighting, reflections\n    /imagine giant red crystals in a desert with two suns\n    /imagine Robin Williams in the style of John Allison\n    /imagine standing in front of a castle\n    /imagine a professional photorealistic Portrait of an Astronaut by Peter Mohrbacher,Shaun Tan and Seb McKinnon,realistic eyes,realistic hair,,Beautiful Hit Tech costume and Helmet details,Beautiful dramatic dark moody lighting,Cinematographic Atmosphere,photorealism glossy magazine painting,Octane Render,Deep Color,8k Resolution,High Details,Flickr,DSLR,CGsociety,Artstation\n    /imagine Matter condensed from energy, life built upon matter, consciousness upon life\n    /imagine hyperreal swirling watercolors trapped in a soap bubble, 4k render\n    /imagine beautiful painting of clouds with sunrise, by john martin, Trending on artstation, pastel aesthetic\n    /imagine modern futuristic lampshade with art nouveau inspiration\n    /imagine photo shot on Leica IIIf with 50mm f/2 Summar; 1/50 sec; f/4\n    /imagine sharp alphabet typography by Walter Gropius\n    /imagine four dogs playing poker in a crowded room, by Malcolm Liepke and Lovis Corinth, oilpainting\n    /imagine invitation made with old paper written with cursive font pyrographic words in the center | red wax seal above in the top-left corner, cinematic light, artstation\n    /imagine aisle view of the festival street market in AlUla, many booths, seating areas, natural materials, cinematic shot\n    /imagine japanese temple, sakura, detailed oil painting, by Mateusz Urbanowicz\n    /imagine a stegosaurus drawn by John Singer Sargent\n    /imagine a mysterious forest with many fireflies, trees with large roots covered in moss, green vegetation, Studio Ghibli animation style, Japanese animation film background,\n    /imagine the universe in our ancestors eyes\n    /imagine The inside of a gothic cathedral that looks like a tropical alien utopian jungle rainforest, dramatic cinematic lighting\n    /imagine A hero stands alone, artstation, highly detailed, cinematic\n    /imagine symmetric texture repetition on a tree on a beautiful mountain landscape\n    /imagine midcentury luchador mask, risograph\n    /imagine ultra detailed line drawing, black and white and red, pen and ink, high tech cyberpunk geisha with headphones and sunglasses and VR goggles in style of Shohei Otomo\n    /imagine interior of master bedroom in victorian mansion, window, dan mindel cinematography, 35mm, movie scene, pitch black, realistic lighting, perspective shots, moody atmosphere, light coming from outside, HDRI\n    /imagine the alien robot queen holding a party at the dome castle in HQ Cloud City during a technicolor sunset\n    /imagine corporate memphis style, mural, pride month, white background, vector, characters waving pride flags, celebration\n    /imagine abstract painting of coral reef\n    /imagine a calico cat taking a nap on a kiwi\n    /imagine Dreamy landscape depiction inspired by the works of Katsushika Hokusai, trending on artstation\n    /imagine garden bridge over swan pond monet garden lillies and hanging trees art\n    /imagine green dragon roosting above its lair in the ruins of a fantasy medieval city\n    /imagine rainwater flowing through a complex system of ancient stone pipes and a gargoyle watching\n    /imagine butterflies flit in a sunlit field. Hiroshige Japanese woodblock print.\n    /imagine an illustration of a wooden magic wand with an aura of void around it, stars glitter subtly around it, closeup, fantasy card game art trending on artstation concept art by Jason Chan"
    .split('\n')
    .map(function (e) {
      return e.replace(/\t/g, '    ');
    })

const b = String.raw(getWelcomeMessages())

const u = b.split('\n').map(function (e) {
  return e.replace(/\t/g, '    ');
})

function w(): void {
  const a: any = document.querySelector<SVGElement>('#bannerSVGLogo');
  s = v((a.viewBox.baseVal.width - 10) / 1);

  for (let e = 0; e < d.length; e++) {
    a.removeChild(d[e]);
  }
  for (let t = 0; t < 7; t++) {
    c[t] = '';
  }

  for (let n = 0; n < u.length; n++) {
    const r = document.createElementNS(a.namespaceURI, 'text');
    r.setAttribute('x', '1');
    r.setAttribute('y', String(16 * n));
    r.style.fontSize = '16px';
    r.style.fontFamily = 'monospace';
    r.style.dominantBaseline = 'hanging';
    r.style.whiteSpace = 'pre';
    r.setAttribute('font-weight', 'bold');
    r.setAttribute('fill', 'white');
    a.appendChild(r);
    d[n] = r;
  }
}

w()

export const x = (e: any) => {
  requestAnimationFrame(x);
  const t: number = 0.001 * e;
  const n: number = (function getN(e: number): number {
    if (e < 0.5) {
      return (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2;
    } else {
      return (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
    }
  })(j(0.5 * (t - 1), 0, 1));
  for (let r = 0; r < c.length; r++) {
    for (let o = '', i = 1 - (2 * r) / c.length, a = 0; a < s; a++) {
      const b: number = (2 * a) / s - 1;
      const w: number = Math.sqrt(b * b + i * i);
      const C: number = (0.1 * t) / Math.max(0.1, w);
      const _: number = Math.sin(C);
      const S: number = Math.cos(C);
      const E: number = b * _ - i * S;
      const A: number = Math.round(((b * S + i * _) / 2) * s);
      const O: number = Math.round(((E + 1) / 2) * l.length) % l.length;
      const D: string =
        A < 0 || A >= s || O < 0 || O >= c.length ? ' ' : l[O][A] || ' ';
      if (
        r > p &&
        r < p + u.length + 1 &&
        a > f &&
        a < f + u[0].length + 1
      ) {
        const T: number = a - f - 1;
        const P: number = r - p - 1;
        const N: string = u[P][T] || D;
        const B: boolean = ' ' != u[P][T - 1];
        const M: boolean = ' ' != u[P][T + 1];
        if (' ' != N || B || M) {
          const I: number = D.charCodeAt(0);
          const R: number = N.charCodeAt(0);
          o += String.fromCharCode(Math.round(k(I, R, n)));
          if (1 == n) {
            o = ' ';
          }
        } else {
          o += ' ';
        }
        if (a == f + u[0].length) {
          d[P].textContent = o;
          d[P].setAttribute('fill-opacity', String(n));
        }
      }
    }
  }
}