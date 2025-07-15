import tikzjax, { load } from 'node-tikzjax';

// This gives a warning because the module exports are messy, but works
const tex2svg = tikzjax.default;

let initialized = false;
let initPromise: Promise<void>;

// Simple async task queue
const queue: (() => void)[] = [];
let running = false;

async function ensureLoaded() {
  if (!initialized) {
    if (!initPromise) {
      initPromise = load().then(() => {
        initialized = true;
      });
    }
    await initPromise;
  }
}

// Queue wrapper to serialize tex2svg calls
function enqueueTask<T>(task: () => Promise<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const runner = async () => {
      try {
        const result = await task();
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        running = false;
        runNext();
      }
    };

    queue.push(runner);
    runNext();
  });
}

function runNext() {
  if (!running && queue.length > 0) {
    running = true;
    const next = queue.shift();
    if (next) next();
  }
}

// Main rendering function
export async function renderTikzToSVG(source: string): Promise<string> {
  await ensureLoaded();

  return enqueueTask(() =>
    tex2svg(source, {
      // showConsole: true,
      embedFontCss: true,
      fontCssUrl: 'https://cdn.jsdelivr.net/npm/node-tikzjax@latest/css/fonts.css',
    })
  );
}
