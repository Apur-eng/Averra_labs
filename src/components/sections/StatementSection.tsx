import { useLayoutEffect, useRef } from 'react';
import { useReducedMotion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import './approach.css';

const scenes = [
  { rows: [['Build', 'your'], ['online', 'presence.']], copy: 'Reach more customers. Build credibility. Stand out from the competition.' },
  { rows: [['Turn', 'your', 'ideas'], ['into', 'reality.']], copy: 'From concept to launch, we build the technology your business needs.' },
  { rows: [['We', 'build.'], ['You', 'grow.']], copy: 'Focus on growing your business while we take care of the technology.' },
];

function Layout({ scene }: { scene: number }) {
  return <h2 className={'av-layout av-layout-' + scene}>{scenes[scene].rows.map((row, i) =>
    <span className="av-row" key={i}>{row.map(word => <span key={word} data-word={word}>{word}</span>)}</span>
  )}</h2>;
}

function WorkLink() {
  return <Link className="av-link" to="/work">Explore our work ↗</Link>;
}

const phase = (p: number, start: number, end: number) => {
  const t = Math.min(1, Math.max(0, (p - start) / (end - start)));
  return t * t * (3 - 2 * t);
};

// Index in the second composition for each word in the first.
const destinations = [0, 1, 2, 4];

function PinnedStory() {
  const track = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ['start start', 'end end'] });

  useLayoutEffect(() => {
    const root = stage.current!;
    const words = scenes.map((_, i) => Array.from(root.querySelectorAll<HTMLElement>('.av-layout-' + i + ' [data-word]')));
    const descriptions = Array.from(track.current!.querySelectorAll<HTMLElement>('.av-descriptions p'));
    const action = track.current!.querySelector<HTMLElement>('.av-action')!;
    let positions: {x: number; y: number; height: number}[][] = [];
    const paint = (p: number) => {
      if (!positions.length) return;
      const travel = Math.min(124, root.clientWidth * .14);
      destinations.forEach((dest, i) => {
        const first = words[0][i], next = words[1][dest];
        const dx = positions[1][dest].x - positions[0][i].x;
        const dy = positions[1][dest].y - positions[0][i].y;
        const entrance = 1 - phase(p, i * .012, .083 + i * .012);
        const flip = phase(p, .31 + i * .012, .426 + i * .012);
        const axis = i === 2 ? 'Y' : 'X';
        const x = dx * flip + (i === 0 ? -travel : i === 1 ? travel : 0) * entrance;
        const y = dy * flip + (i >= 2 ? positions[0][i].height * entrance : 0);
        const rotation = i === 1 ? 9 * Math.sin(Math.PI * flip) : -90 * Math.min(1, flip * 2);
        first.style.transform = 'translate(' + x + 'px,' + y + 'px) perspective(850px) rotate' + axis + '(' + rotation + 'deg) rotate(' + (i === 3 ? -5 * entrance : 0) + 'deg)';
        first.style.opacity = String(1 - entrance * .85);
        first.style.visibility = (i === 1 ? flip >= 1 : flip >= .5) ? 'hidden' : 'visible';
        first.style.clipPath = 'inset(' + (i >= 2 ? entrance * 100 : 0) + '% -10% -8%)';
        const exit = phase(p, .64 + i * .007, .696 + i * .007);
        next.style.visibility = ((i === 1 ? flip < 1 : flip < .5) || exit >= 1) ? 'hidden' : 'visible';
        next.style.transform = 'translate(' + (-dx * (1-flip)) + 'px,' + (-dy * (1-flip) - 32 * exit) + 'px) perspective(850px) rotate' + axis + '(' + (i === 1 ? 0 : 90 * Math.min(1, (1-flip)*2)) + 'deg)';
        next.style.opacity = String(1-exit);
      });
      const into = words[1][3];
      const reveal = phase(p,.37,.45), exit = phase(p,.65,.70);
      into.style.clipPath = 'inset(0 ' + ((1-reveal)*100) + '% 0 0)';
      into.style.opacity = String(1-exit);
      words[2].forEach((word,i) => {
        const t = phase(p,.70+i*.009,.754+i*.009);
        word.style.transform = 'translateY(' + ((1-t)*58) + '%) scale(' + (.96+.04*t) + ')';
        word.style.clipPath = 'inset(' + ((1-t)*100) + '% -10% -8%)';
        word.style.opacity = String(t);
      });
      const amounts = [phase(p,.085,.13)*(1-phase(p,.31,.35)), phase(p,.435,.47)*(1-phase(p,.64,.68)), phase(p,.775,.80)];
      descriptions.forEach((el,i) => {
        el.style.opacity = String(amounts[i]);
        el.style.transform = 'translateY(' + ((1-amounts[i])*18) + 'px)';
      });
      const cta = phase(p,.80,.82);
      action.style.opacity = String(cta);
      action.style.visibility = cta > 0 ? 'visible' : 'hidden';
    };
    // Offset coordinates ignore the transforms, so font swaps and resizes can
    // safely remeasure both endpoints midway through a flip.
    const measure = () => {
      positions = words.map(row => row.map(el => ({x: el.offsetLeft, y: el.offsetTop, height: el.offsetHeight})));
      paint(scrollYProgress.get());
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    words.flat().forEach(word => observer.observe(word));
    const unsub = scrollYProgress.on('change', paint);
    return () => { observer.disconnect(); unsub(); };
  }, [scrollYProgress]);

  return <section className="av-track" ref={track} id="approach" aria-label="Our approach">
    <div className="av-frame">
      <div className="av-label">02 / OUR APPROACH</div>
      <div className="av-stage" ref={stage} aria-hidden="true">{scenes.map((_,i) => <Layout key={i} scene={i}/>)}</div>
      <div className="av-descriptions" aria-hidden="true">{scenes.map(s => <p key={s.copy}>{s.copy}</p>)}</div>
      <div className="av-action"><WorkLink/></div>
    </div>
    <div className="sr-only">{scenes.map(s => <div key={s.copy}><h2>{s.rows.flat().join(' ')}</h2><p>{s.copy}</p></div>)}</div>
  </section>;
}

export function StatementSection() {
  const reduce = useReducedMotion();
  return reduce ? <section id="approach" className="av-static" aria-label="Our approach">
    <div className="av-label">02 / OUR APPROACH</div>
    {scenes.map((s,i) => <article key={s.copy}><Layout scene={i}/><p>{s.copy}</p></article>)}<WorkLink/>
  </section> : <PinnedStory/>;
}
