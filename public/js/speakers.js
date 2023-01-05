// speakers section

const speakersContainer = document.getElementById('speakers-card-container');
const speakersBtn = document.getElementById('speakers-btn');
let speakerShowMore = false;

const speakersList = [
  {
    id: 0,
    speakerImageUrl: './public/images/speaker-1.png',
    speakerName: 'Yochai Benkler',
    position: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 1,
    speakerImageUrl: './public/images/speaker-2.png',
    speakerName: 'SohYeong Noh',
    position: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    id: 2,
    speakerImageUrl: './public/images/speaker-3.png',
    speakerName: 'Lila tretikov',
    position: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    id: 3,
    speakerImageUrl: './public/images/speaker-4.png',
    speakerName: 'Kilnam Chon',
    position: '',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 4,
    speakerImageUrl: './public/images/speaker-5.png',
    speakerName: 'Julia Leda',
    position: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    id: 5,
    speakerImageUrl: './public/images/speaker-6.png',
    speakerName: 'Ryan Merkley',
    position: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];


const generateSpeakers = (n = 2) => {
  let speakerCardGenerator = '';
  for (let i = 0; i < n; i += 1) {
    speakerCardGenerator += `
  <!-- speakers card ${speakersList[i].id} -->
  <div class="speakers-card relative grid grid-cols-3 items-center gap-6">
    <div class="speakers-card-img-wrapper relative flex max-w-fit items-center justify-end">
      <img
        src="${speakersList[i].speakerImageUrl}"
        alt="speaker-${speakersList[i].id}: ${speakersList[i].speakerName}"
        class="speakers-card-img relative w-full"
      />
    </div>
    <div class="speakers-card-content flex col-span-2  flex-col gap-2">
      <h3 class="speakers-card-title font-bold speakers-head text-metal-grey">
        ${speakersList[i].speakerName}
      </h3>
      <p class="speakers-card-subtitle speakers-sup italic leading-6 tracking-wide text-coral-red">
        ${speakersList[i].position}
      </p>
      <p class="speakers-card-text speakers-p text-metal-grey">
      ${speakersList[i].description}
      </p>
    </div>
  </div>
`;
  }
  speakersContainer.innerHTML = speakerCardGenerator;
};

const speakersBtnToggle = () => {
  const speakersBtnAngle = document.querySelector('#speakers-btn > i');
  const speakersBtnText = document.querySelector('#speakers-btn > span');
  if (!speakerShowMore) {
    generateSpeakers(2);
    speakersBtnAngle.classList.toggle('rotate-180');
    speakerShowMore = true;
    speakersBtnText.innerText = 'SHOW MORE';
  } else {
    speakersBtnAngle.classList.toggle('rotate-180');
    generateSpeakers(6);
    speakerShowMore = false;
    speakersBtnText.innerText = 'SHOW LESS';
  }
  console.log(speakersBtnText.innerText);
};

const showSpeakers = () => {
  const w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 767) {
    speakersBtnToggle();
  } else {
    generateSpeakers(6);
  }
};

window.addEventListener('load', () => {
  showSpeakers();
});

window.addEventListener('resize', () => {
  showSpeakers();
});

speakersBtn.addEventListener('click', speakersBtnToggle);
